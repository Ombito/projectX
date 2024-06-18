import React, { useState, useEffect } from 'react';
import './blog.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  
    // Fetch news articles from the API
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setNewsArticles(data.articles))
      .catch(error => console.error('Error fetching news articles:', error));
  }, []);

  return (
    <div className="blog-page">
      <header className="header">
        <h1>Our Blog</h1>
      </header>

      <main>
        <section className="blog-section">
          <h2>Latest Blog Posts</h2>
          <div className="blog-posts">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-post">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="news-section">
          <h2>Latest News</h2>
          <div className="news-articles">
            {newsArticles.map((article, index) => (
              <div key={index} className="news-article">
                <img src={article.urlToImage} alt={article.title} />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;