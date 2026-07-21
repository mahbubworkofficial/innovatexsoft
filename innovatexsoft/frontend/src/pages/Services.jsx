import { useState, useEffect } from 'react';
import apiClient from '../api/client';
import { Globe, Gamepad2, Smartphone, Bot, Palette, TrendingUp } from 'lucide-react';

const iconMap = {
  'Globe': <Globe size={40} className="text-gradient" />,
  'Gamepad2': <Gamepad2 size={40} className="text-gradient" />,
  'Smartphone': <Smartphone size={40} className="text-gradient" />,
  'Bot': <Bot size={40} className="text-gradient" />,
  'Palette': <Palette size={40} className="text-gradient" />,
  'TrendingUp': <TrendingUp size={40} className="text-gradient" />,
};

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    apiClient.get('/services/')
      .then(response => setServices(response.data))
      .catch(error => console.error("Error fetching services", error));
  }, []);

  return (
    <div className="container section pt-32">
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Our <span className="text-gradient">Services</span></h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        We are a boutique creative technology house specializing in high-end design, immersive experiences, and strategic AI integration.
      </p>

      <div className="grid-cols-3">
        {services.map(service => (
          <div key={service.id} className="glass-card">
            <div style={{ marginBottom: '1.5rem' }}>
              {iconMap[service.icon] || <Globe size={40} className="text-gradient" />}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
