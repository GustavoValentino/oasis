// prisma/seed.ts
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Tipando os dados para evitar o erro de 'create: service'
const servicesData: Prisma.AgencyServiceCreateInput[] = [
  {
    name: "Branding & Identidade Visual",
    description: "Criação de logotipos e estratégia de marca.",
    price: "A partir de R$ 3.500",
    category: "Branding",
  },
  {
    name: "Gestão de Tráfego Pago",
    description: "Anúncios no Google e Meta Ads.",
    price: "Mensalidade + Investimento",
    category: "Marketing",
  },
  {
    name: "Desenvolvimento Web UX/UI",
    description: "Landing pages de alta conversão.",
    price: "A partir de R$ 5.000",
    category: "Web",
  },
];

async function main() {
  console.log("Limpando dados antigos...");
  // Opcional: deleta tudo antes de começar para não duplicar
  // await prisma.agencyService.deleteMany()

  console.log("Iniciando alimentação do banco...");

  for (const service of servicesData) {
    await prisma.agencyService.upsert({
      where: { name: service.name },
      update: {
        description: service.description,
        price: service.price,
        category: service.category,
      },
      create: service,
    });
  }

  console.log("Banco de dados alimentado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
