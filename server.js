import express from 'express';
import mongoose from 'mongoose';


import config from './config/config';
import router from './routes/routes';

mongoose.connect(config.mongoUrl, () => {
    console.log("Database initialized...");
})
const app = express();
app.use(router);

app.listen(config.port, () => {
    console.log(`Started on port ${config.port}`);
});
