import mongoose from 'mongoose';
import User from '../Models'
import  dbConfig from '../db'
import assert from 'assert'

mongoose.connect(dbConfig.DB,{
    useNewUrlParser: true
}).then (
    ()=> {
        console.log(`Connected to the database successfully`);
    },
    err => {
        console.log(`Cannot establish a database connection`);
    }
)

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