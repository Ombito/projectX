import React, { useEffect, useState } from 'react';
import './blog.css';

const Blog = ({ blogsData }) => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(blogsData);
        const data = await response.json();
        setBlogs(data.articles); 
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="content-container">
      <div className="section-container">
        <h1>Blogs</h1>
        <div className="blog-container">
          {blogs.map((blog, index) => (
            <div className="card" key={index}>
              <img src={blog.urlToImage} alt={blog.title} className="card-image" />
              <div className="card-content">
                <h3>{blog.title}</h3>
                <p className="card-author">By {blog.author} | {new Date(blog.publishedAt).toLocaleDateString()}</p>
                <p>{blog.description}</p>
                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
