import mongoose from 'mongoose';
import config from 'config';
import { logger } from '../logger';

async function connect(){
    await mongoose.connect(config.get('dbUri'));
    logger.info("connected to mongoDb database");
}

export default connect;