# Book API

This is a simple REST API to manage a list of books using **Node.js** and **Express.js**. It allows you to **create**, **read**, **update**, and **delete** book entries stored in memory.

---

## Features

- **GET /books** – Fetch all books
- **POST /books** – Add a new book
- **PUT /books/:id** – Update a book by ID
- **DELETE /books/:id** – Delete a book by ID

---

## Tech Stack

- Node.js
- Express.js
- JSON (In-Memory Data)

---

##  How to Run the Project

### 1. Install Dependencies


npm install
2. Start the Server


node index.js
Server will run at:
 http://localhost:3000

 How to Test the API (Using Postman)
 GET /books
Method: GET

URL: http://localhost:3000/books

Response: List of books

🔹 POST /books
Method: POST

URL: http://localhost:3000/books

Body (raw JSON):


{
  "id": 1,
  "title": "Atomic Habits",
  "author": "James Clear"
}
🔹 PUT /books/:id
Method: PUT

URL: http://localhost:3000/books/1

Body (raw JSON):


{
  "title": "Atomic Habits - Updated",
  "author": "James Clear"
}
🔹 DELETE /books/:id
Method: DELETE

URL: http://localhost:3000/books/1

Folder Structure



book-api/
├── node_modules/
├── package.json
├── package-lock.json
├── index.js
└── README.md
