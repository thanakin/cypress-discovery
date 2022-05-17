import signup from '../pages/SignupPage'
import SingupFactory from '../factories/SingupFactory'

describe('Signup', ()=>{

    /*beforeEach(function() {
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    })

    before(function() { // ganchos: executados antes/depois dos testes
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes.')
    })

    beforeEach(function() {
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste.')
    })

    afterEach(function() {
        cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste.')
    })

    after(function() {
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes.')
    })*/

    it('User should be deliver', function() {

        var deliver = SingupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
        
    })

    it('Incorrect document', function() {

        var deliver = SingupFactory.deliver()

        deliver.cpf = '000000141aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
        
    })

    it('Incorrect email', function() {

        var deliver = SingupFactory.deliver()

        deliver.email = 'teste.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
        
    })
})