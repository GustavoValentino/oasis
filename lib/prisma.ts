// lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg"; // Importação necessária
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL não está definida no ambiente.");
}

// 1. Criar o Pool de conexão do node-postgres
const pool = new Pool({ connectionString });

// 2. Inicializar o Adapter passando o POOL (não a string pura)
const adapter = new PrismaPg(pool);

// 3. Solução Global para Hot Reload (Next.js)
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// 4. Instanciar o PrismaClient com o adapter
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
