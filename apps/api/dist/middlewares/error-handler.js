"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const zod_1 = require("zod");
function errorHandler(error, req, res, next) {
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({
            message: 'Validation error.',
            issues: error.format(),
        });
    }
    if (error instanceof Error) {
        return res.status(400).json({
            message: error.message
        });
    }
    return res.status(500).json({
        message: 'Internal server error.'
    });
}
