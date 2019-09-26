import User from '../Models'
import assert from 'assert'
import './test_helper'

describe('Create a new user', () => {
    it('Creates and saves a new user ', (done) => {
        const user =  new User({
            name: 'Maurice',
            email: 'a@b.com',
            password: 1234
        })
        user.save()
        .then(() => {
            assert(!user.isNew)
            done();
        })
    })
})

describe('The created user exists in the database', () => {
    it('Finds an existing user', (done) => {
        User.findOne({ name: 'Maurice'})
        .then((user) => {
            assert(user.email === 'a@b.com')
            done()
        })
    })
})