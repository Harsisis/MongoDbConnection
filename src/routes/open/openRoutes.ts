import Logger from './../../helpers/logger';
import {Express, Request, Response} from 'express';

function OpenRoutes(app:Express){ 
    // user routes
    app.post('/api/users', (req : Request, res : Response) => {
        Logger.info('route operationnelle');
        res.sendStatus(200);
    });
    app.post('/api/sessions', (req : Request, res : Response) => {
    });

    // product routes
    app.get('/api/products/{{productId}}', (req : Request, res : Response) => {
    });

    // metrics routes
    app.get('http://localhost:9100/metrics', (req : Request, res : Response) => {
    });
    
    
} 

export default OpenRoutes;
