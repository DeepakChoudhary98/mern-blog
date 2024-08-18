import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// MONGO_DB_URL = "mongodb+srv://rankk7932:wAJCsAvys9rDvrlN@cluster0.3gost.mongodb.net/"

dotenv.config();
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log('Mongodb is connected successfully...')
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});