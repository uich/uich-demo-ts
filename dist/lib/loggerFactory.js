"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bunyan = tslib_1.__importStar(require("bunyan"));
var LoggerFactory;
(function (LoggerFactory) {
    LoggerFactory.fromBunyan = (logger) => {
        return {
            debug: (m, ...args) => logger.debug(m, ...args),
            info: (m, ...args) => logger.info(m, ...args),
            isDebugEnabled() {
                return logger.level() <= bunyan.DEBUG;
            },
            isInfoEnabled() {
                return logger.level() <= bunyan.INFO;
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