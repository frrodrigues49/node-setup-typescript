import { User } from '@models/user'

test('it should be ok', () => {
  const user = new User()

  user.name = 'John'

  expect(user.name).toEqual('John')
})
