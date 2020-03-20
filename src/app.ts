import { Server } from "./server";
import config from "./config.json";
const server = new Server(config.port);
server.listen();