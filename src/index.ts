import {Logger, LoggerFactory} from "./loggerFactory";

export * from './loggerFactory';

export const bunyan = async (logger: any): Promise<Logger> => await LoggerFactory.fromBunyan(logger);
export const log4js = async (logger: any): Promise<Logger> => await LoggerFactory.fromLog4js(logger);
