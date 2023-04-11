import {NextFunction, Request, Response} from "express";

export class NotFoundError extends Error {
}

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    if (err instanceof NotFoundError) {
        return res
            .status(404)
            .json(err.message)
    }
    res.status(500);
    res.json("Sorry, we've encountered a temporary problem with our internal server. Our technical team has been informed and is working on a quick resolution to this issue. Please be patient and try again in a few minutes.")
}