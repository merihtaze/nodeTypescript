import { Next, Request, Response, Server } from '../server';

export async function processRequest(app: Server, req: Request, res: Response, next: Next) {
    res.send('Welcome!');
}
