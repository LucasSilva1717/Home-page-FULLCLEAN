"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckController = void 0;
const health_check_service_1 = require("../service/health-check.service");
class HealthCheckController {
    handle(req, res) {
        try {
            const healthCheckService = new health_check_service_1.HealthCheckService();
            const data = healthCheckService.execute();
            return res.status(200).json(data);
        }
        catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }
}
exports.HealthCheckController = HealthCheckController;
