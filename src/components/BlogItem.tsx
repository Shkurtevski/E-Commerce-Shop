import React from "react";
import { BlogType } from "../interfaces";
import Link from "next/link";

interface BlogItemProps {
  blog: BlogType;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  if (!blog || !blog.img) {
    return null;
  }
  return (
    <div className="col-sm-6 col-md-4 p-b-40">
      <a className="p-b-63 d-block">
        <span className="hov-img0 how-pos5-parent">
          {/* eslint-disable-next-line */}
          <img src={blog.img} alt="IMG-BLOG" />
        </span>

        <div className="p-t-32">
          <Link href={`/blog/${blog.id}`} passHref>
            <h4 className="p-b-15" style={{ cursor: "pointer" }}>
              <span className="ltext-108 cl2 hov-cl1 trans-04">
                {blog.title}
              </span>
            </h4>
          </Link>

          <p className="stext-117 cl6">{blog.excerpt}</p>

          <div className="flex-w flex-sb-m p-t-18">
            <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
              <span>
                <span className="cl4">By</span> {blog.author}
                <span className="cl12 m-l-4 m-r-6">|</span>
              </span>

              <span>{blog.category}</span>
            </span>
            <Link href={`/blog/${blog.id}`} passHref>
              <span
                className="stext-101 cl2 trans-04 m-tb-10"
                style={{ cursor: "pointer" }}
              >
                Continue Reading
                <i className="fa fa-long-arrow-right m-l-9"></i>
              </span>
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogItem;
