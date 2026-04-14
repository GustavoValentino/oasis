import { BlogPost } from "@/types";
import blog1 from "@/public/images/blog_01.jpg";
import blog2 from "@/public/images/blog_02.jpg";
import blog3 from "@/public/images/blog_03.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "o-futuro-do-design-minimalismo-ia",
    date: "10 de Dezembro, 2025",
    category: "Tendências",
    title: "O Futuro do Design: Minimalismo e IA na Criação de Marcas",
    description:
      "Exploramos as últimas tendências que estão moldando o design moderno...",
    image: blog1,
  },
  {
    id: 2,
    slug: "5-estrategias-marketing-digital",
    date: "25 de Novembro, 2025",
    category: "Dicas de Marketing",
    title: "5 Estratégias de Marketing Digital para Pequenos Negócios",
    description:
      "Dicas práticas e eficazes para impulsionar a visibilidade da sua marca...",
    image: blog2,
  },
  {
    id: 3,
    slug: "como-conexao-emocional-transforma-clientes",
    date: "01 de Novembro, 2025",
    category: "Insights",
    title: "Como a Conexão Emocional Transforma Clientes em Fãs",
    description: "Uma reflexão sobre a importância de 'Conquistar Corações'...",
    image: blog3,
  },
];
