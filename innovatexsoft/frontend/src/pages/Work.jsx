import { useState, useEffect } from 'react';
import apiClient from '../api/client';

export default function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiClient.get('/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container section pt-32">
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Our <span className="text-gradient">Work</span></h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
        Strategic Outcomes: 40% performance benchmark exceedance, cloud-native architecture, {'<'}100ms response latency, and enterprise-grade security.
      </p>

      <div className="grid-cols-2">
        {projects.map(project => (
          <div key={project.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '200px', background: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '3rem', opacity: '0.5' }}>🖼️</span>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>{project.description}</p>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(37, 99, 235, 0.2)', color: '#60a5fa', borderRadius: '4px' }}>Node: {project.node}</span>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(147, 51, 234, 0.2)', color: '#c084fc', borderRadius: '4px' }}>Cycle Time: {project.cycle_time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
