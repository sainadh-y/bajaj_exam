# BFHL REST API

A Node.js REST API that processes arrays and categorizes elements into numbers (odd/even), alphabets, and special characters.

## Features

- POST endpoint `/bfhl` for array processing
- Categorizes elements into odd numbers, even numbers, alphabets, and special characters
- Calculates sum of all numbers
- Creates concatenated string of alphabets in reverse order with alternating caps
- Returns all numbers as strings as required
- Error handling and input validation

## API Endpoint

**Method:** POST  
**URL:** `/bfhl`  
**Content-Type:** `application/json`

### Request Body
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Response Format
```json
{
  "is_success": true,
  "user_id": "yerramsetti_sainadh_03052005",
  "email": "sainadhy2005@gmail.com",
  "roll_number": "22BRS1001",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Testing with Postman

1. **Open Postman** and create a new request
2. **Set Method:** POST
3. **URL:** `http://localhost:3000/bfhl` (for local testing) or your deployed URL
4. **Headers:**
   - `Content-Type: application/json`
5. **Body:** Select "raw" and "JSON", then paste:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```
6. Click "Send" to test the API

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. The server will run on `http://localhost:3000`

## Deployment

This API can be deployed to various platforms:

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Railway
1. Connect your GitHub repository
2. Railway will automatically detect and deploy the Node.js app

### Render
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`

## Environment Variables

- `PORT`: Server port (default: 3000)

## Project Structure

```
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

## Example Requests

### Example 1:
**Request:**
```json
{"data": ["a","1","334","4","R","$"]}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "yerramsetti_sainadh_03052005",
  "email": "sainadhy2005@gmail.com",
  "roll_number": "22BRS1001",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Example 2:
**Request:**
```json
{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "yerramsetti_sainadh_03052005",
  "email": "sainadhy2005@gmail.com",
  "roll_number": "22BRS1001",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A","Y","B"],
  "special_characters": ["&","-","*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

## Error Handling

The API returns appropriate error responses:
- 400 for invalid request format
- 500 for internal server errors

All error responses include `is_success: false` and an error message.
