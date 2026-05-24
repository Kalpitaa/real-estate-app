import React, { useState, useEffect } from 'react';
import api from '../services/api';

const BackendTest = () => {
  const [status, setStatus] = useState('testing');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    testBackend();
  }, []);

  const testBackend = async () => {
    try {
      // Test home route
      const response = await api.get('/');
      setStatus('connected');
      setData(response.data);
      console.log('✅ Backend connected:', response.data);
    } catch (err) {
      setStatus('error');
      setError(err.message);
      console.error('❌ Backend connection failed:', err);
    }
  };

  if (status === 'testing') {
    return (
      <div className="fixed bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg">
        Testing backend connection...
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
        ⚠️ Backend not connected: {error}
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
      ✅ Backend Connected!
    </div>
  );
};

export default BackendTest;