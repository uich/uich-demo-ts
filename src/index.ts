import {Logger, LoggerFactory} from "./loggerFactory";

export * from './loggerFactory';

import * as bunyanLogger from 'bunyan';

export const bunyan = (logger: bunyanLogger): Logger => LoggerFactory.fromBunyan(logger);
export const log4js = (logger: import('log4js').Logger): Logger => LoggerFactory.fromLog4js(logger);