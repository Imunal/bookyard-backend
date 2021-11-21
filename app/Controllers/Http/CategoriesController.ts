// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
export default class CategoriesController {
  public async get() {
    return await Category.all()
  }
}
