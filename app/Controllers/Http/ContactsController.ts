// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Mail from '@ioc:Adonis/Addons/Mail'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

// Models
import Contact from 'App/Models/Contact'

export default class ContactsController {
  public async store({ request }) {
    // Validate schema.
    const contactStoreSchema = schema.create({
      contactName: schema.string(),
      contactPhone: schema.number(),
      contactEmail: schema.string({}, [rules.email()]),
    })
    const payload = await request.validate({ schema: contactStoreSchema })

    // Store contact data in a database.
    const contact = new Contact()
    contact.contact_name = payload._data.contactName
    contact.contact_email = payload._data.contactEmail
    await contact.save()

    // Send email.
    await this.sendMail(
      'Zapytanie z Bookyard',
      'info@bookyard.pl',
      'info@bookyard.pl',
      payload._data.contactName,
      payload._data.contactPhone,
      payload._data.contactEmail
    )
  }

  public async sendMail(
    mailTitile: string,
    mailFrom: string,
    mailTo: string,
    contactName: string,
    contactPhone: number,
    contactEmail: string
  ) {
    await Mail.send((message) => {
      message.from(mailFrom).to(mailTo).subject(mailTitile).htmlView('emails/contact', {
        contactName: contactName,
        contactPhone: contactPhone,
        contactEmail: contactEmail,
      })
    })
  }
}
