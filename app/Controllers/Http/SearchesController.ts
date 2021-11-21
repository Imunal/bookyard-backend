// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Book from 'App/Models/Book'

export default class SearchesController {
  public async searchLive({ params }) {
    return await Book.query().where('book_name', 'like', `%${params.bookName}%`).limit(5)
  }

  public async searchStatic({ request }) {
    const page = request.input('page', 1)
    return await Book.query()
      .where('book_name', 'like', `%${request.input('bookName')}%`)
      .paginate(page, 12)
  }
}
