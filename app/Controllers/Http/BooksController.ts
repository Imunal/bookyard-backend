// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Book from 'App/Models/Book'

export default class BooksController {
  public async get({ request }) {
    const page = request.input('page', 1)

    // Is searched by category.
    if (request.input('categoryID')) {
      return await Book.query()
        .where({ book_category: request.input('categoryID') })
        .paginate(page, 12)
    }
    return await Book.query().paginate(page, 12)
  }

  public async show({ params }) {
    return await Book.findOrFail(params.bookID)
  }
}
