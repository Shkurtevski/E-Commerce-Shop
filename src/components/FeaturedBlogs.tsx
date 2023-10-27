import React from "react";
import BlogItem from "./BlogItem";
import { BlogType } from "../interfaces";

interface featuredBlogsProps {
  featuredBlogs: BlogType[];
}

const FeaturedBlogs: React.FC<featuredBlogsProps> = ({ featuredBlogs }) => {
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>
        <div className="row">
          {featuredBlogs.map((blog: BlogType) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
