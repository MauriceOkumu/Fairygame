import User from '../Models'
import assert from 'assert'
import './test_helper'

describe('Testing CRUD operations using model', () => {
    let user;
    beforeEach((done) => {
         user =  new User({
            name: 'Maurice',
            email: 'a@b.com',
            password: 1234
        })
        user.save()
        .then(() => done())
        .catch(err => {
            console.log(err)
        })
    })

    afterEach((done) => {
        user.remove()
        done()
    })

    it('Creates and saves a new user ', (done) => {
      assert(!user.isNew)
      done()
    })

    it('Finds an existing user', (done) => {
        User.findOne({ name: 'Maurice'})
        .then((user) => {
            assert(user.email === 'a@b.com')
        })
       done()
    })
})