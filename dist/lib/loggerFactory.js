"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory;
(function (LoggerFactory) {
    LoggerFactory.fromBunyan = (logger) => {
        return {
            debug: (m, ...args) => logger.debug(m, ...args),
            info: (m, ...args) => logger.info(m, ...args),
            isDebugEnabled() {
                return logger.level() <= 20;
            },
            isInfoEnabled() {
                return logger.level() <= 30;
            }
        };
    };
    LoggerFactory.fromLog4js = (logger) => {
        return {
            debug: (m, ...args) => logger.debug(m, ...args),
            info: (m, ...args) => logger.info(m, ...args),
            isDebugEnabled() {
                return logger.isDebugEnabled();
            },
            isInfoEnabled() {
                return logger.isInfoEnabled();
            }
        };
    };
})(LoggerFactory = exports.LoggerFactory || (exports.LoggerFactory = {}));
//# sourceMappingURL=loggerFactory.js.map