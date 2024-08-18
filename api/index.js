import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
// MONGO_DB_URL = "mongodb+srv://rankk7932:wAJCsAvys9rDvrlN@cluster0.3gost.mongodb.net/"

dotenv.config();
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log('Mongodb is connected successfully...')
})
.catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => 
    {
        
            const statusCode = err.statusCode || 500;
            const message = err.message || 'Internal server error';
            res.status(statusCode).json({
                success: false,
                statusCode,
                message,
            });
        
    });
