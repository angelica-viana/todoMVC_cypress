import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na lista de toDo', () => {

    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Goiaba", "Melancia"]

         todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
         })
    })

    it('Concluir um item da lista de toDo', () => {
       telaInicial.concluirItem()
       
    });
});