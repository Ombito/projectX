import React, { useEffect, useState } from 'react';
import './blog.css';


const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const BLOG_API_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=12c980041394435e97d1b0c17450f7ab';

  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(BLOG_API_URL);
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
      <section className="section-container">
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
      </section>
    </div>
  );
};

export default Blog;
