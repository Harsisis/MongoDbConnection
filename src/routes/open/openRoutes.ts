import { Express } from 'express';

export function getSessions(app:Express){ 
    app.get('{{endpoint}}/api/sessions', (req, res) => {
        return res.sendStatus(200).send("session successfully get");
    })
} 

export function createSession(app:Express){ 
    app.get('{{endpoint}}/api/sessions', (req, res) => {
        return res.sendStatus(200).send("session created successfully");
    })
} 
