import { Controller, Get, Route } from "tsoa";
import { IMessage } from "../models";
@Route("")
export class RootController extends Controller {
    @Get("")
    public getIndex(): IMessage {
        return {
            message: "Hello from Node-swagger-boilerplate!"
        }
    }
}