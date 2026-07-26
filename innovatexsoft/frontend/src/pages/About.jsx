import { useState, useEffect } from 'react';
import apiClient from '../api/client';

export default function About() {
  const [team, setTeam] = useState([]);
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    apiClient.get('/team/')
      .then(res => setTeam(res.data))
      .catch(err => console.error(err));
    apiClient.get('/careers/')
      .then(res => setCareers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container section pt-32">
      <section style={{ marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>About <span className="text-gradient">InnovateX Soft</span></h1>
        <div className="glass-card">
          <h2 style={{ marginBottom: '1rem' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Transform businesses through intelligent engineering by integrating Generative AI and cutting-edge architecture into products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>AI-First Approach</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Core integration of AI rather than as an add-on.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Boutique Precision</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Senior-level expertise delivered via a lean team.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Scalable Architecture</h3>
              <p style={{ color: 'var(--text-secondary)' }}>High-traffic web systems and complex neural networks.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>The <span className="text-gradient">Nodes</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(member => (
            <div key={member.id} className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-secondary)', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                👤
              </div>
              <h3 style={{ marginBottom: '0.25rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold' }}>{member.role}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{member.description}</p>
              <div style={{ marginTop: '1rem', display: 'inline-block', padding: '0.2rem 0.8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', fontSize: '0.8rem' }}>
                Node: {member.node}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Join <span className="text-gradient">The Network</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {careers.map(job => (
            <div key={job.id} className="glass-card">
              <h3 style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--purple-accent)' }}>{job.category}</span>
                <span style={{ color: 'var(--text-secondary)' }}>📍 {job.location}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{job.description}</p>
              <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
