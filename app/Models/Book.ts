import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true, columnName: 'book_id' })
  public book_id: number

  @column({ columnName: 'book_uuid' })
  public book_uuid: number

  @column({ columnName: 'book_name' })
  public book_name: string

  @column({ columnName: 'book_category' })
  public book_category: number

  @column({ columnName: 'book_genre' })
  public book_genre: string | null

  @column.dateTime({ autoCreate: true, columnName: 'book_created_at' })
  public book_created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'book_updated_at' })
  public book_updated_at: DateTime
}
