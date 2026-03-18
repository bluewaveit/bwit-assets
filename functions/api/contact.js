export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const data = await request.json();
    const token = data.turnstileToken;

    if (!token) {
      return new Response(JSON.stringify({ ok: false, error: "Missing captcha token" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET,
          response: token
        })
      }
    );

    const result = await verify.json();

    if (!result.success) {
      return new Response(JSON.stringify({ ok: false, error: "Captcha failed" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const {
      name = "",
      company = "",
      email = "",
      phone = "",
      service = "",
      message = ""
    } = data;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `New BlueWave IT enquiry: ${service || "General enquiry"}`,
        text: [
          `Name: ${name}`,
          `Company: ${company}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Service: ${service}`,
          "",
          "Message:",
          message
        ].join("\n")
      })
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return new Response(JSON.stringify({ ok: false, error: resendError }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}