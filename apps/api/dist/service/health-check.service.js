"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckService = void 0;
class HealthCheckService {
    execute() {
        return {
            status: 'ok',
            message: 'FullClean API está ativa, operante e seguindo a Clean Architecture!',
            uptime: Math.floor(process.uptime()) + ' segundos',
            timestamp: new Date().toISOString()
        };
    }
}
exports.HealthCheckService = HealthCheckService;
