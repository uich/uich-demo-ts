export declare namespace LoggerFactory {
    const fromBunyan: (logger: any) => Logger;
    const fromLog4js: (logger: any) => Logger;
}
export interface Logger {
    debug(m: string, ...args: any[]): void;
    info(m: string, ...args: any[]): void;
    isDebugEnabled(): boolean;
    isInfoEnabled(): boolean;
}
