const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let books = []

app.get('/books', (req, res) => {
  res.json(books)
})

app.post('/books', (req, res) => {
  const { id, title, author } = req.body
  if (!id || !title || !author) {
    res.status(400).json({ message: 'Missing fields' })
    return
  }
  books.push({ id, title, author })
  res.status(201).json({ message: 'Book added' })
})

app.put('/books/:id', (req, res) => {
  const { id } = req.params
  const { title, author } = req.body
  const book = books.find(b => b.id == id)
  if (!book) {
    res.status(404).json({ message: 'Book not found' })
    return
  }
  if (title) book.title = title
  if (author) book.author = author
  res.json({ message: 'Book updated' })
})

app.delete('/books/:id', (req, res) => {
  const { id } = req.params
  const index = books.findIndex(b => b.id == id)
  if (index === -1) {
    res.status(404).json({ message: 'Book not found' })
    return
  }
  books.splice(index, 1)
  res.json({ message: 'Book deleted' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
