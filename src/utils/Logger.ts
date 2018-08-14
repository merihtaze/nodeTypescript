export class Log {
    public static info(msg: string) {
        console.error(msg);
    }

    public static error(err: Error) {
        console.error(err);
    }
}
