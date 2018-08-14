import * as Express from 'express';
import * as HttpErrors from 'http-errors';
import { ConnectionConfig } from 'mysql';
import { join } from 'path';
import { Database } from './utils/Database';
import { Log } from './utils/Logger';

// Resources here
import { processRequest as processWelcome} from './resources/welcome';

export type Request = Express.Request;
export type Response = Express.Response;
export type Next = Express.NextFunction;

export class Server {
    public database: Database;
    public express: Express.Express;

    constructor(dbConf: ConnectionConfig) {
        this.database = new Database(dbConf);
        this.express = Express();
        this.preRequestMiddleware();
        this.setUpRoutes();
        this.afterRequestMiddleware();
    }

    public async start(port: number = 3000): Promise<void> {
        try {
            // Enable below after setting up database config
            // await this.database.connect();
            this.express.listen(port);
        } catch (e) {
            Log.error(e);
        }
    }

    private afterRequestMiddleware(): void {
        // catch 404 and forward to error handler
        this.express.use((req: Request, res: Response, next: Next) => {
            next(HttpErrors(404));
        });

        // error handler
        this.express.use((err: any, req: Request, res: Response, next: Next) => {
            res.status(err.status || 500);
            res.json(err);
            res.end();
        });
    }

    private preRequestMiddleware(): void {
        // this.express.use(express.json());
        this.express.use(Express.urlencoded({ extended: false }));
        this.express.use(Express.static(join(__dirname, '../public')));
    }

    private serve(func: (s: Server, req: Request, res: Response, next: Next) => Promise<void>) {
        return (req: Request, res: Response, next: Next) => {
            func(this, req, res, next)
            .then(() => { res.end(); })
            .catch((err: any) => { next(err); });
        };
    }

    private setUpRoutes(): void {
        this.express.get('/welcome', this.serve(processWelcome));
    }
}
