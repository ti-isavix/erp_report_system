import 'dotenv/config';
import express from 'express';

function bootstrap(){
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Api de Relatório está operacional' });
    });

    app.listen(port,()=>{

        console.log(` Servidor rodando em http://localhost:${port}`);
    })


}

bootstrap();