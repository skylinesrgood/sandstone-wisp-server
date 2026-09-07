import http from "http";
import { WebSocketServer } from "ws";
import { WispServer } from "@mercuryworkshop/wisp-server-node";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Sandstone Wisp Server Online");
});

const wss = new WebSocketServer({ noServer: true });

const wisp = new WispServer();

server.on("upgrade", (request, socket, head) => {
  if (request.url === "/") {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wisp.handleConnection(ws);
    });
  }
});

server.listen(process.env.PORT || 8080, () => {
  console.log("Wisp server running");
});
