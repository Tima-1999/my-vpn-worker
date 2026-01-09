export default {
  async fetch(request, env) {
    const targetAddress = '83.217.9.70'; 
    const targetPort = '10002'; // Porty 10002 etdik (Seniň kodyňdaky ýaly)

    if (request.headers.get('Upgrade') === 'websocket') {
      // VpnJantit TLS ulanýar, şonuň üçin 'https' we '443' porty gerek bolup biler
      // Emma köplenç 'http' we '10002' işleýär. Gel, ilki şu iň dogrusyny barlalyň:
      return fetch(`http://${targetAddress}:${targetPort}${new URL(request.url).pathname}${new URL(request.url).search}`, {
        headers: request.headers,
      });
    }

    return new Response("Worker is active for Port 10002", { status: 200 });
  }
};
