import { test } from '@japa/runner'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('User users', () => {
  test('it should create an user', ({ assert }) => {
    const userPayload = { email: 'test@test.com', username: 'test', password: 'test' }
    supertest(BASE_URL).post()
  })
})
