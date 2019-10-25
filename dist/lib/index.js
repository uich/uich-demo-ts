"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const loggerFactory_1 = require("./loggerFactory");
tslib_1.__exportStar(require("./loggerFactory"), exports);
exports.bunyan = (logger) => loggerFactory_1.LoggerFactory.fromBunyan(logger);
exports.log4js = (logger) => loggerFactory_1.LoggerFactory.fromLog4js(logger);
//# sourceMappingURL=index.js.map