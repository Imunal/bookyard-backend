import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Contact extends BaseModel {
  @column({ isPrimary: true, columnName: 'contact_id' })
  public contact_id: number

  @column({ columnName: 'contact_name' })
  public contact_name: string

  @column({ columnName: 'contact_email' })
  public contact_email: string

  @column.dateTime({ autoCreate: true, columnName: 'contact_created_at' })
  public contact_created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'contact_updated_at' })
  public contact_updated_at: DateTime
}
