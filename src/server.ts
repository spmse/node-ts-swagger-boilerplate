import * as controllers from "./controller";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes/routes";
const swaggerDocument = require("../swagger/swagger.json");
/**
 * The server.
 *
 * @class Server
 */
export class Server {
	private app: express.Application;
	private port: number;
	/**
	 * Constructor.
	 *
	 * @class Server
	 * @param port
	 * @constructor
	 */
	constructor(port: number) {
		// Create expressjs application
		this.app = express();
		this.port = port;
		// Configure application
		this.config ();
		// Add api
		this.api ();
	}
	/**
	 * Listen for incoming requests
	 */
	public listen() {
		this.app.listen (this.port, () => {
			console.log (`Node-ts-swagger-api-app listening on port: ${this.port}!`);
		});
	}
	/**
	 * Create REST API routes
	 *
	 * @class Server
	 * @method api
	 */
	public api() {
		this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument as any));
		this.app.get("/swagger.json", (req, res) => res.json(swaggerDocument));
		this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
			const status = err.status || 500;
			console.error(err);
			const body: any = {
				fields: err.fields || undefined,
				message: err.message || "An error occurred during the request.",
				name: err.name,
				status
			};
			res.status(status).json(body);
		});
		RegisterRoutes(this.app as express.Express);
	}
	/**
	 * Configure application
	 *
	 * @class Server
	 * @method config
	 */
	public config() {
		// Mount json form parser
		this.app.use (cors ()); // TODO! wieso brauch man das, damit post übertragen wird?
		// Set max limit
		this.app.use (bodyParser.urlencoded ({
			limit: "50mb",
			extended: true
		}));
		this.app.use (bodyParser.json ({
			limit: "50mb"
		}));
		// this.app.use(methodOverride());
		this.app.use ((req, res, next) => {
			res.header ("Access-Control-Allow-Origin", "*");
			res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next ();
		});
	}
}
