export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const data = await request.json();

    const token = data.turnstileToken;

    // Verify Turnstile
    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${env.TURNSTILE_SECRET}&response=${token}`
      }
    );

    const result = await verify.json();

    if (!result.success) {
      return new Response(JSON.stringify({ ok: false, error: "Captcha failed" }), {
        status: 400
      });
    }

    // 🚀 TEMP: Log instead of email
    console.log("New contact form:", data);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200
    });

  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500
    });
  }
}
