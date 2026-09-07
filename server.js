import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Sandstone Wisp Server Online");
});

server.listen(process.env.PORT || 8080, () => {
  console.log("Wisp server running");
});
