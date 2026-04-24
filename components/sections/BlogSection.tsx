"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "@/types";

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
          <div className="h-[1px] w-12 bg-blue-600" />
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-blue-500 italic">
            Informativo Oásis
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sm:max-w-5xl mt-5 leading-tight text-white tracking-tighter">
          Tendências, Sustentabilidade e{" "}
          <span className="text-blue-600">Gestão Hídrica.</span>
        </h2>
      </div>

      <div className="blog-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item group flex flex-col text-white"
          >
            <div className="blog-image overflow-hidden rounded-2xl h-[300px] relative border border-white/10">
              <Image
                src={blog.image}
                alt={blog.title}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="group-hover:scale-110 transition-all duration-500 object-cover grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            </div>

            <div className="blog-content pt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-widest font-bold bg-blue-600 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {blog.date}
                </span>
              </div>

              {/* Usamos o slug se existir, senão o id */}
              <Link
                href={`/blog/${blog.slug || blog.id}`}
                className="text-2xl font-bold hover:text-blue-400 transition-colors duration-200 block leading-tight tracking-tight"
              >
                {blog.title}
              </Link>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed line-clamp-3">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
