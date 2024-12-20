import { DateTime } from 'luxon'
import { BaseModel, column, HasMany,hasMany } from '@ioc:Adonis/Lucid/Orm'
import Message from "App/Models/Message";

export default class Channel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public channel_name: string;

  @column()
  public is_private: boolean;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Message, {
    foreignKey: 'channel_id',
  })
  public messages: HasMany<typeof Message>;
}
