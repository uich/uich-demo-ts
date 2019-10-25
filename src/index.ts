import {Logger, LoggerFactory} from "./loggerFactory";

export * from './loggerFactory';

export const bunyan = (logger: any): Logger => LoggerFactory.fromBunyan(logger);
export const log4js = (logger: any): Logger => LoggerFactory.fromLog4js(logger);
