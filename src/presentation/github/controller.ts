import { Request, Response } from "express";

export class GithubController{

    constructor() {
        // Initialization code can go here if needed
    }

    webhookHandler = (req: Request, res: Response) => {
        const githubEvent = req.header('x-github-event') ?? 'unknown';
        const payload = req.body;



        res.status(202).send('accepted')

    }

}