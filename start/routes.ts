/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'pakuj walize'
})

Route.group(() => {
  //Book
  Route.get('/book', 'BooksController.get')
  Route.get('/book/:bookID', 'BooksController.show')
  //Category
  Route.get('/category', 'CategoriesController.get')
  Route.get('/category/:categoryID', 'CategoriesController.show')
  //Search
  Route.get('/search/live/:bookName', 'SearchesController.searchLive')
  Route.get('/search/static', 'SearchesController.searchStatic')
  //Contact
  Route.post('/contact', 'ContactsController.store')

  //API
  Route.get('/fetchAPI', 'APisController.fetchAPI')
}).prefix('/api/v1')
