"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var LoggerFactory;
(function (LoggerFactory) {
    LoggerFactory.fromBunyan = (logger) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const bunyan = yield Promise.resolve().then(() => tslib_1.__importStar(require('bunyan')));
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
    });
    LoggerFactory.fromLog4js = (logger) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
    });
})(LoggerFactory = exports.LoggerFactory || (exports.LoggerFactory = {}));
//# sourceMappingURL=loggerFactory.js.map