const AppConstants = require('../enum/AppConstants');
class HttpController {
    // fazer metodo constructor
    constructor(instanciaExpress){
        //recebe instancia do express
        if (!instanciaExpress) {
            throw new Error('A instancia do express é obrigatória');
        }
        // persiste na propriedade express do controller a instancia do express criada no App.js
        this.express = instanciaExpress; // passa instancia para atributo da classe para usar nas classes filhas
        this.configurarRotas(AppConstants.BASE_API_URL);
    }

    configurarRotas(baseurl) {
         throw new Error('Método configurarRotas precisa ser implementado')
    }
}

module.exports = HttpController;