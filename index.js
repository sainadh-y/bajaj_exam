const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// User information (from provided details)
const USER_INFO = {
  fullName: 'yerramsetti sainadh',
  dob: '03052005',
  email: 'sainadhy2005@gmail.com',
  rollNumber: '22BRS1001',
  userId: 'yerramsetti_sainadh_03052005'
};

// Helper functions
function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function isAlphabet(char) {
  return /^[a-zA-Z]$/.test(char);
}

function isSpecialCharacter(char) {
  return /^[^a-zA-Z0-9]$/.test(char);
}

function processArray(data) {
  const numbers = [];
  const alphabets = [];
  const specialChars = [];
  const evenNumbers = [];
  const oddNumbers = [];
  let sum = 0;
  let alphaChars = [];

  data.forEach(item => {
    const str = String(item).trim();
    
    if (isNumber(str)) {
      const num = parseFloat(str);
      numbers.push(str);
      sum += num;
      
      if (num % 2 === 0) {
        evenNumbers.push(str);
      } else {
        oddNumbers.push(str);
      }
    } else if (isAlphabet(str)) {
      alphabets.push(str.toUpperCase());
      alphaChars.push(str);
    } else if (isSpecialCharacter(str)) {
      specialChars.push(str);
    }
  });

  // Create concatenated string with alternating caps in reverse order
  let concatString = '';
  alphaChars.reverse().forEach((char, index) => {
    if (index % 2 === 0) {
      concatString += char.toUpperCase();
    } else {
      concatString += char.toLowerCase();
    }
  });

  return {
    numbers,
    alphabets,
    specialChars,
    evenNumbers,
    oddNumbers,
    sum: sum.toString(),
    concatString
  };
}

// POST endpoint /bfhl
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    // Validate request
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: 'Invalid request format. Expected { "data": array }'
      });
    }

    // Process the array
    const result = processArray(data);

    // Prepare response
    const response = {
      is_success: true,
      user_id: USER_INFO.userId,
      email: USER_INFO.email,
      roll_number: USER_INFO.rollNumber,
      odd_numbers: result.oddNumbers,
      even_numbers: result.evenNumbers,
      alphabets: result.alphabets,
      special_characters: result.specialChars,
      sum: result.sum,
      concat_string: result.concatString
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({
      is_success: false,
      error: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'BFHL API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
