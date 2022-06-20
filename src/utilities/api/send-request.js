export async function sendRequest(url, method = 'GET', payload = null) {

    const options = { method }

    if (payload) {
      options.headers = { 'Content-Type': 'application/json' }
      options.body = JSON.stringify(payload);
    }
    // console.log(options)
    const res = await fetch(url, options)
    if (res.ok) return res.json()
    throw new Error('Bad Request')
}