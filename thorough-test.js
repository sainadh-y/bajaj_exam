const axios = require('axios');

const API_URL = 'http://localhost:3000/bfhl';

async function runThoroughTests() {
  console.log('Running thorough API tests...\n');

  const testCases = [
    {
      name: 'Empty array',
      data: []
    },
    {
      name: 'Only numbers',
      data: ["1", "2", "3", "4", "5"]
    },
    {
      name: 'Only alphabets',
      data: ["a", "b", "c", "D", "E"]
    },
    {
      name: 'Only special characters',
      data: ["@", "#", "$", "%", "&"]
    },
    {
      name: 'Mixed content',
      data: ["123", "abc", "!", "456", "XYZ", "@", "7", "8", "9", "test"]
    },
    {
      name: 'Large numbers',
      data: ["999999", "1000000", "123456789"]
    },
    {
      name: 'Floating point numbers',
      data: ["1.5", "2.7", "3.14"]
    },
    {
      name: 'Numbers as strings with spaces',
      data: [" 123 ", " 456 ", " 789 "]
    },
    {
      name: 'Alphabets with spaces',
      data: [" a ", " B ", " c "]
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Test: ${testCase.name}`);
    console.log(`Input: ${JSON.stringify(testCase.data)}`);
    console.log(`${'='.repeat(60)}`);

    try {
      const response = await axios.post(API_URL, {
        data: testCase.data
      });
      
      console.log('✅ SUCCESS');
      console.log('Response:', JSON.stringify(response.data, null, 2));
      
      // Validate response structure
      const requiredFields = [
        'is_success', 'user_id', 'email', 'roll_number',
        'odd_numbers', 'even_numbers', 'alphabets', 
        'special_characters', 'sum', 'concat_string'
      ];
      
      const missingFields = requiredFields.filter(field => !(field in response.data));
      if (missingFields.length === 0) {
        console.log('✅ All required fields present');
      } else {
        console.log('❌ Missing fields:', missingFields);
      }
      
    } catch (error) {
      console.log('❌ ERROR:', error.response?.data || error.message);
    }
    
    // Add a small delay between tests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n' + '='.repeat(60));
  console.log('THOROUGH TESTING COMPLETE');
  console.log('='.repeat(60));
}

runThoroughTests().catch(console.error);
