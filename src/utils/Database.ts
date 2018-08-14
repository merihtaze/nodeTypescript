import * as Mysql from 'mysql';

export class Database {
    public connectionParam: Mysql.ConnectionConfig;
    public client: Mysql.Connection;
    public connected: boolean;

    constructor(dbConf: Mysql.ConnectionConfig) {
        this.connected = false;
        this.connectionParam = dbConf;
    }

    public connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client = Mysql.createConnection(this.connectionParam);
            this.client.connect((err) => {
                if (err) {
                    reject(err);
                }

                this.connected = true;
                resolve();
            });
        });
    }

    public query(sql: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.client.query(sql, (err, result, fields) => {
                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }
}
