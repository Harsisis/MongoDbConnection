import mongoose from 'mongoose';
import config from 'config';
import Logger from '../logger';

async function connect(){
    await mongoose.connect(config.get('dbUri'));
    Logger.info("connected to mongoDb database");
}

export default connect;