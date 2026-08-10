// Gitalk OAuth token 交换代理（Vercel Serverless Function）
// Gitalk 默认的公共代理 (cors-anywhere.azm.workers.dev) 已失效(404)，
// 且浏览器无法直接跨域调用 GitHub 的 token 端点，故自建此函数。
// 前端 POST { code, client_id, client_secret } → 转发 GitHub → 返回 access_token
export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { code, client_id, client_secret } = body as {
    code?: string
    client_id?: string
    client_secret?: string
  }

  if (!code || !client_id) {
    return new Response(JSON.stringify({ error: 'missing_params' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const params = new URLSearchParams({
    code: String(code),
    client_id: String(client_id),
    client_secret: client_secret ? String(client_secret) : '',
    redirect_uri: req.headers.get('origin') || '',
  })

  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: params.toString(),
    })
    const data = await r.json()
    return new Response(JSON.stringify(data), {
      status: r.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
