'use strict'

/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Book = use('App/Models/Book')

class BookSeeder {
  async run() {
    const books = [
      {
        name: "Eloquent JavaScript, Third Edition",
        author: "Marijn Haverbeke",
      },
      {
        name: "Practical Modern JavaScript",
        author: "Nicolás Bevacqua",
      },
      {
        name: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
      },
      {
        name: "Speaking JavaScript",
        author: "Axel Rauschmayer",
      },
      {
        name: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
      },
      {
        name: "You Don't Know JS Yet",
        author: "Kyle Simpson",
      }
    ]

    await Book.createMany(books)
  }
}

module.exports = BookSeeder
