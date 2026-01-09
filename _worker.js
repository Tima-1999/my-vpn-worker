export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const targetAddress = '83.217.9.70'; 
    const targetPort = '1002';

    // Cloudflare bloklaryny aşmak üçin Header-leri goraýarys
    const newHeaders = new Headers(request.headers);
    newHeaders.set('Host', 'cf-vpn.tmsanly.workers.dev');

    if (request.headers.get('Upgrade') === 'websocket') {
      return fetch(`http://${targetAddress}:${targetPort}${url.pathname}${url.search}`, {
        headers: newHeaders,
      });
    }
    return new Response("Sistem taze CDN bilen tayyar!", { status: 200 });
  }
};
