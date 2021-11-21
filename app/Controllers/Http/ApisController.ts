// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import axios from 'axios'

// Models
import Book from 'App/Models/Book'
import Category from 'App/Models/Category'

export default class ApisController {
  public async fetchAPI() {
    try {
      const url = encodeURI('https://data.bn.org.pl/api/institutions/bibs.json?limit=100')
      const response = await axios(url)
      await Promise.all(
        response.data.bibs.map(async (apiBook) => {
          const isExisting = await Book.findBy('book_uuid', apiBook.id)
          if (!isExisting) {
            const category: any = await Category.query()
              .where('category_name', 'like', apiBook.kind)
              .select('category_id')
              .first()
            const book = new Book()
            book.book_uuid = apiBook.id
            book.book_name = apiBook.title
            book.book_genre = apiBook.genre
            book.book_category = category.category_id
            await book.save()
          }
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
}
