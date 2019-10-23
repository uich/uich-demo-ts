import * as bunyan from 'bunyan';
import * as log4js from 'log4js';
export declare namespace LoggerFactory {
    const fromBunyan: (logger: bunyan) => Logger;
    const fromLog4js: (logger: log4js.Logger) => Logger;
}
export interface Logger {
    debug(m: string, ...args: any[]): void;
    info(m: string, ...args: any[]): void;
    isDebugEnabled(): boolean;
    isInfoEnabled(): boolean;
}
