import mongoose from 'mongoose';
import  dbConfig from '../db'

mongoose.connect(dbConfig.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then (
    ()=> {
        console.log(`Connected to the database successfully`);
    },
    err => {
        console.log(`Cannot establish a database connection`);
    }
)