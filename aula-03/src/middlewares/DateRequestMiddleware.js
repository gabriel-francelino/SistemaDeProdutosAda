class DateRequestMiddleware {
    execute(req, res, next) {
        const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        };

        const date = Date.now();
        console.log(new Intl.DateTimeFormat("pt-BR", options).format(date));
        next();
        // "12/19/2012, 19:00:00"
    }
}

const dateRequestMiddleware = new DateRequestMiddleware();

export { dateRequestMiddleware }