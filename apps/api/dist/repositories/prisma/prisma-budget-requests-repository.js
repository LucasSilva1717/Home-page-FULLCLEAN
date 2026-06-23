"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBudgetRequestsRepository = void 0;
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
const pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
class PrismaBudgetRequestsRepository {
    async create(data) {
        const budgetRequest = await prisma.budgetRequest.create({
            data,
        });
        return budgetRequest;
    }
    async findMany() {
        // Retorna direto os registros do banco, pois os tipos já batem perfeitamente
        const budgetRequests = await prisma.budgetRequest.findMany();
        return budgetRequests;
    }
}
exports.PrismaBudgetRequestsRepository = PrismaBudgetRequestsRepository;
