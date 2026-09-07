import http from "http";
import { createWispServer } from "@mercuryworkshop/wisp-server-node";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Sandstone Wisp Server Online");
});

createWispServer(server);

server.listen(process.env.PORT || 8080, () => {
  console.log("Wisp server running");
});
