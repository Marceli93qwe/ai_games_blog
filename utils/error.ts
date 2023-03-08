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
    res.json("error occurred")
}