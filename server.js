import http from "node:http";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Sandstone Wisp Server Online");
});

server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

server.listen(8080, () => {
  console.log("Wisp server running");
});
