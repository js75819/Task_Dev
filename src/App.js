const express = require('express');
const LoginController = require('./controllers/LoginController');

//criar uma classe
class App {
    #controllers;
    //criar metodo publico iniciar
    iniciar(){
        // configurar o express
        this.#configurarExpress();
        // carregar controllers
        this.#carregarControllers();
        // iniciar servidor
        this.#iniciarServidor();
    }

    //criar metodo privado de configurar express
    #configurarExpress = () => {
        //criar instancia do express para gerenciar servidor
        this.express = express();
        //configurar middleware para fazer a conversão das requisições da API
        this.express.use(express.urlencoded({extended: true}));
        this.express.use(express.json())
        //middleware de log das requisições
        this.express.use((req, res, next) =>{
    console.log(`requisição recebira, url=${req.url}, método http=${req.method}`)
            next();
        });
    }
    #carregarControllers = () => {
        //atribui para propriedade controllers a lista de controllers disponiveis da aplicação
        this.#controllers = [
            new LoginController(this.express)
        ];
    }

    #iniciarServidor = () =>{
        //Configurar porta
       const port =  process.env.EXPRESS_PORT || 3001;
        this.express.listen(port, () => {
            console.log(`Aplicação executando na porta ${port}`);
        }); 
    }
}

module.exports = App;
//exporta o modulo App
