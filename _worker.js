export default {
  async fetch(request, env) {
    const targetAddress = '83.217.9.70'; // VpnJantit Server IP
    const targetPort = '1002';           // VpnJantit Port

    const url = new URL(request.url);
    
    // Hemme zady (WebSocket) gönüden-göni VpnJantit-e ugratmak
    if (request.headers.get('Upgrade') === 'websocket') {
      return fetch(`http://${targetAddress}:${targetPort}${url.pathname}${url.search}`, {
        headers: request.headers,
      });
    }

    return new Response("Worker is running!", { status: 200 });
  }
};
