import React from "react";
import { BlogType } from "../interfaces";
import Link from "next/link";

interface RelatedBlogsProps {
  relatedBlogs: BlogType[];
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ relatedBlogs }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} passHref key={blog.id}>
            <li className="mb-4" style={{ cursor: "pointer" }}>
              <a className="wrao-pic-w">
                {/* eslint-disable-next-line */}
                <img src={blog.img} alt="PRODUCT" className="img-fluid" />
                <div className="p-t-8 mt-1">
                  <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                    {blog.title}
                  </div>
                </div>
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
