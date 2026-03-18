export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const data = await request.json();
    const token = data.turnstileToken;

    if (!token) {
      return new Response(JSON.stringify({ ok: false, error: "Missing captcha token" }), {
        status: 400
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
        status: 400
      });
    }

    console.log("New contact form:", data);

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
