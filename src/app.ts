import express from 'express'
import { Enviroment } from './config/envs';
import { GithubController } from './presentation/github/controller';

(() => {
    main();
})()

function main() {

    const app = express();
    const controller = new GithubController();

    app.use(express.json() );

    app.post('/api/github', controller.webhookHandler);

app.listen( Enviroment.PORT, () => {
    console.log('App running on port ' + Enviroment.PORT);
});

}