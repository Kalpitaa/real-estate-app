const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

async function testAPI() {
  try {
    // Test home route
    const home = await axios.get('http://localhost:5000/');
    console.log('✓ Home route:', home.data);
    
    // Test get properties
    const properties = await axios.get(`${API_URL}/properties`);
    console.log('✓ Properties:', properties.data.length, 'properties found');
    
    // Test register
    const register = await axios.post(`${API_URL}/auth/register`, {
      name: 'Test User',
      email: 'test@example.com',
      password: 'test123',
      phone: '1234567890'
    });
    console.log('✓ Registration:', register.data.message);
    
    // Test login
    const login = await axios.post(`${API_URL}/auth/login`, {
      email: 'test@example.com',
      password: 'test123'
    });
    console.log('✓ Login:', login.data.message);
    console.log('✓ Token:', login.data.token);
    
  } catch (error) {
    console.error('✗ Error:', error.response?.data || error.message);
  }
}

testAPI();