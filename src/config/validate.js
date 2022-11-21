import * as yup from 'yup'
import ru from 'yup-locale-ru'
import { setLocale } from 'yup'

setLocale(ru)

export function createSchema(schema, config) {
  const { name, type = 'string', rules = [] } = config
  if (!yup[type]) {
    return schema
  }
  let validator = yup[type]()
  rules.forEach((validation) => {
    const { params = [], type } = validation
    if (!validator[type]) {
      return
    }
    validator = validator[type](...params)
  })
  schema[name] = validator.nullable()
  return schema
}
