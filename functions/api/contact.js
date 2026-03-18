
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();

    const {
      name = "",
      company = "",
      email = "",
      phone = "",
      service = "",
      message = "",
      turnstileToken = ""
    } = body;

    if (!name || !email || !message || !turnstileToken) {
      return json({ ok: false, error: "Missing required fields." }, 400);
    }

    const verifyForm = new FormData();
    verifyForm.append("secret", env.TURNSTILE_SECRET);
    verifyForm.append("response", turnstileToken);

    const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: verifyForm
    });

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return json({ ok: false, error: "Security validation failed." }, 403);
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
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
          ``,
          `Message:`,
          message
        ].join("\n")
      })
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      return json({ ok: false, error: `Email send failed: ${errText}` }, 502);
    }

    return json({ ok: true }, 200);
  } catch {
    return json({ ok: false, error: "Server error." }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
