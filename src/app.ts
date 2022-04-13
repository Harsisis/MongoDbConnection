import express from 'express';
import config from 'config';
import connect from './helpers/db_mongo/connect'
import { logger } from './helpers/logger';

import OpenRoutes from './routes/open/openRoutes'
import RestrictedRoutes from './routes/restricted/restrictedRoutes'

logger.info("starting database connection ...");

const app = express();
const dbUri = config.get('dbUri');
const port = config.get('port') || 8080;

app.listen(port, async ()=>{
    logger.info("server launched using port : " + port);
    await connect();
    OpenRoutes(app);
});





