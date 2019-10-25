export namespace LoggerFactory {

    export const fromBunyan = (logger: any): Logger => {
        return {
            debug: (m, ...args) => logger.debug(m, ...args),
            info: (m, ...args) => logger.info(m, ...args),
            isDebugEnabled(): boolean {
                return logger.level() <= 20;
            },
            isInfoEnabled(): boolean {
                return logger.level() <= 30;
            }
        };
    };

    export const fromLog4js = (logger: any): Logger => {
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
