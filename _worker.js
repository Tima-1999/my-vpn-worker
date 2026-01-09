export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const targetAddress = '83.217.9.70'; // Seniň IP-ň
    const targetPort = '1002';           // Seniň portuň

    if (request.headers.get('Upgrade') === 'websocket') {
      return fetch(`http://${targetAddress}:${targetPort}${url.pathname}${url.search}`, {
        headers: request.headers,
        redirect: 'follow',
      });
    }
    return new Response("VPN Server is active!", { status: 200 });
  }
};
