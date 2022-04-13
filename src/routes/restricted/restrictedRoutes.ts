import {Express} from 'express';

function RestrictedRoutes(app:Express){ 
    // user routes
    app.get('/api/sessions', (req, res) => {
    });
    app.delete('/api/sessions', (req, res) => {
    });

    // product routes
    app.post('/api/products', (req, res) => {
    });
    app.put('/api/products/{{productId}}', (req, res) => {
    });
    app.delete('/api/products/{{productId}}', (req, res) => {
    });

    // metrics routes
} 

export default RestrictedRoutes;