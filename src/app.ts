import express from 'express';
import config from 'config';
import connect from './helpers/db_mongo/connect'
import Logger from './helpers/logger';

import OpenRoutes from './routes/open/openRoutes'
import RestrictedRoutes from './routes/restricted/restrictedRoutes'

const app = express();
const port = config.get('port');

Logger.info("starting database connection ...");

app.listen(port, async ()=>{
    Logger.info("server launched using port : " + port);
    await connect();
    OpenRoutes(app);
    RestrictedRoutes(app);
});





