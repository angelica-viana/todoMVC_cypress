import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de toDo', () => {

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Adicionar mais de um item na lista', () => {
       
        var todoItens = ["Maça", "Banana", "Goiaba", "Melancia"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })
})