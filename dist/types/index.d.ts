import { Logger } from "./loggerFactory";
export * from './loggerFactory';
import * as bunyanLogger from 'bunyan';
export declare const bunyan: (logger: bunyanLogger) => Logger;
export declare const log4js: (logger: import("log4js").Logger) => Logger;
