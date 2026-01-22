import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar itens da lista', () => {

    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Goiaba", "Melancia"]

         todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
         })

    })

    it('Deleção de um item da lista', () => {
       telaInicial.deletarItem()
    });

});