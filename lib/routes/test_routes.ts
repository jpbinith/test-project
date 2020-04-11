import { Application, Request, Response } from 'express';

export class TestRoutes {

    public route(app: Application) {

        app.get('/api/test', (req: Request, res: Response) => {
            res.status(200).json({ message: "Get request successfull" });
        });

        app.post('/api/test', (req: Request, res: Response) => {
            res.status(200).json({ message: "Post request successfull" });
        });

    }
}