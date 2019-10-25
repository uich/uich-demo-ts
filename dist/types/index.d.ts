import { Logger } from "./loggerFactory";
export * from './loggerFactory';
export declare const bunyan: (logger: any) => Promise<Logger>;
export declare const log4js: (logger: any) => Promise<Logger>;
