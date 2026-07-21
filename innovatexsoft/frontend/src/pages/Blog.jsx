import { useState, useEffect } from 'react';
import apiClient from '../api/client';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiClient.get('/blog/')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container section pt-32">
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>InnovateX <span className="text-gradient">Insider</span></h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
        Insights, updates, and deep dives from our engineering network.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {posts.map(post => (
          <div key={post.id} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>{post.topic}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', lineHeight: '1.2' }}>{post.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>{post.summary}</p>
            <p style={{ color: '#e4e4e7', lineHeight: '1.7' }}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
