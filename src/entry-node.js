import { createServer } from "@hattip/adapter-node";
import handler from "./entry-hattip.js";

const HOST = "localhost"
const PORT = 3000

createServer(handler).listen(PORT, HOST, () => {
  console.log(`Node.js server is listening on http://${HOST}:${PORT}`);
});
