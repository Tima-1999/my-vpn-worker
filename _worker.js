export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const target = '185.148.105.78'; 
    if (request.headers.get('Upgrade') === 'websocket') {
      return fetch(`http://${target}:80${url.pathname}${url.search}`, {
        headers: request.headers,
      });
    }
    return new Response("VPN is active", { status: 200 });
  }
};
