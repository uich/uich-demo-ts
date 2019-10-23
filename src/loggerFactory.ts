import * as bunyan from 'bunyan';
import * as log4js from 'log4js';

export namespace LoggerFactory {

  export const fromBunyan = (logger: bunyan): Logger => {
    return {
      debug: (m, ...args) => logger.debug(m, ...args),
      info: (m, ...args) => logger.info(m, ...args),
      isDebugEnabled(): boolean {
        return logger.level() <= bunyan.DEBUG;
      },
      isInfoEnabled(): boolean {
        return logger.level() <= bunyan.INFO;
      }
    };
  };

  export const fromLog4js = (logger: log4js.Logger): Logger => {
    return {
      debug: (m, ...args) => logger.debug(m, ...args),
      info: (m, ...args) => logger.info(m, ...args),
      isDebugEnabled(): boolean {
        return logger.isDebugEnabled();
      },
      isInfoEnabled(): boolean {
        return logger.isInfoEnabled();
      }
    };
  };

}

export interface Logger {
  debug(m: string, ...args: any[]): void;
  info(m: string, ...args: any[]): void;
  isDebugEnabled(): boolean;
  isInfoEnabled(): boolean;
}
