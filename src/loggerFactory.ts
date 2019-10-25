export namespace LoggerFactory {

    export const fromBunyan = async (logger: any): Promise<Logger> => {
        const bunyan = await import('bunyan');

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

    export const fromLog4js = async (logger: any): Promise<Logger> => {
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
