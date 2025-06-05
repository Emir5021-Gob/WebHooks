import { Request, Response } from "express";

export class GithubController{

    constructor() {
        // Initialization code can go here if needed
    }

    webhookHandler = (req: Request, res: Response) => {

        console.log('end point llamado')
        res.json('Hecho')

    }

}