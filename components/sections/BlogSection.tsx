import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Tipagem do Blog Post
interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string | StaticImageData;
  description: string;
}

interface BlogProps {
  blogs: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <div className="blog py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
      <div className="blog-content w-full lg:w-[60%] mb-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
            notícias e blog
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
          Insights, Reflexões, Tendências de Mercado e Dicas de Marketing.
        </h2>
      </div>

      <div className="blog-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item group flex flex-col text-white"
          >
            <div className="blog-image overflow-hidden rounded-lg h-[300px] relative">
              <Image
                src={blog.image}
                alt={blog.title}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="group-hover:scale-110 transition-all duration-300 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="blog-content pt-5">
              <p className="text-lg font-semibold pb-2">
                <span className="bg-primary text-white px-3 py-1 rounded-full me-3">
                  {blog.date}
                </span>
                {blog.category}
              </p>
              <Link
                href={`/blog/${blog.id}`}
                className="text-2xl font-semibold hover:text-primary transition-colors duration-200 block mt-1 leading-snug"
              >
                {blog.title}
              </Link>
              <p className="text-md text-gray-300 mt-3">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
