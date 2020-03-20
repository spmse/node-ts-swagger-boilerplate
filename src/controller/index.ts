import { Controller, Get, Route } from "tsoa";
import { IMessage } from "../models";
interface ITestMessage {
    message: string;
}
@Route("")
export class RootController extends Controller {
    @Get("")
    public getIndex(): ITestMessage {
        return {
            message: "Hello from Node-swagger-boilerplate!"
        }
    }
}