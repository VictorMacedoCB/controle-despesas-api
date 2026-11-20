import type { NextFunction, Request, Response } from "express";

export const errorMiddleware = (error : unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    if(res.headersSent) {
        return next(error)
    }
    res.status(500).json({ message: "Erro interno do servidor" })
}