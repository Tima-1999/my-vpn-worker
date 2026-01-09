export default {
  async fetch(request, env) {
    const targetAddress = '83.217.9.70'; // Seniň gizlemeli IP-ň
    const url = new URL(request.url);

    if (request.headers.get('Upgrade') === 'websocket') {
      // Ähli trafigi VpnJantit-e ugradýarys
      return fetch(`https://${targetAddress}${url.pathname}${url.search}`, {
        headers: request.headers,
      });
    }

    return new Response("Bridge is active!", { status: 200 });
  }
};
