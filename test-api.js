const axios = require('axios');

const API_URL = 'http://localhost:3000/bfhl';

async function testAPI() {
  console.log('Testing BFHL API...\n');

  // Test case 1: Example from requirements
  console.log('Test Case 1: Example A');
  try {
    const response1 = await axios.post(API_URL, {
      data: ["a", "1", "334", "4", "R", "$"]
    });
    console.log('Response:', JSON.stringify(response1.data, null, 2));
  } catch (error) {
    console.log('Error:', error.response?.data || error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Test case 2: Second example from requirements
  console.log('Test Case 2: Example B');
  try {
    const response2 = await axios.post(API_URL, {
      data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
    });
    console.log('Response:', JSON.stringify(response2.data, null, 2));
  } catch (error) {
    console.log('Error:', error.response?.data || error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Test case 3: Invalid request
  console.log('Test Case 3: Invalid request (missing data field)');
  try {
    const response3 = await axios.post(API_URL, {
      invalid_field: ["test"]
    });
    console.log('Response:', JSON.stringify(response3.data, null, 2));
  } catch (error) {
    console.log('Error:', error.response?.data || error.message);
  }
}

// Check if server is running and test
testAPI().catch(console.error);
