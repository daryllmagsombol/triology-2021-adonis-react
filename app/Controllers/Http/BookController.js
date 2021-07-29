'use strict'

const Book = use('App/Models/Book')

class BookController {
    async fetchBooks({ response }) {
        try {
            const books = await Book.all()
            response.send(books)
        }
        catch (error) {
            console.log(error)
        }
    }

    async addBook({ request, response }) {
        try {
            const { name, author } = request.all()
            const books = await Book.create({
                name, author
            })

            response.send(books)
        }
        catch (error) {
            console.log(error)
        }
    }

    async editBook({ request, response }) {
        try {
            const { id, name, author } = request.all()
            const book = await Book.findOrFail(id)

            book.name = name
            book.author = author

            await book.save()
            response.send(book)
        }
        catch (error) {
            console.log(error)
        }
    }

    async deleteBook({ request, response }) {
        try {
            const { id } = request.all()
            const book = await Book.findOrFail(id)

            await book.delete()
            response.send(books)
        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = BookController
