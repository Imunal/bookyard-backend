import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends BaseModel {
  @column({ isPrimary: true, columnName: 'category_id' })
  public category_id: number

  @column({ columnName: 'category_name' })
  public category_name: string

  @column.dateTime({ autoCreate: true, columnName: 'category_created_at' })
  public category_created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'category_updated_at' })
  public category_updated_at: DateTime
}
