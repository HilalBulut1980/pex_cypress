var backEnd = require("./backend.js");

describe('Reading a file in cypress', () => {

    it('download PDF-invoice from the magento-backend and read the file', function () {


        //cy.task('readFileMaybe', 'https://media.plissee-experte.de/cms/montageanleitungen/VS1_VS3_VS_SD_web.pdf').then((textOrNull) => {
        /*cy.task('readFileMaybe', 'https://mail.google.com/mail/u/0?ui=2&ik=31ef39b3c6&attid=0.1&permmsgid=msg-f:1646721066718539068&th=16da5415e1e92d3c&view=att&disp=inline').then((textOrNull) => { //100582150
        //cy.task('readFileMaybe', 'https://www.plissee-experte.de/index.php/uber110blick/sales_order_invoice/print/invoice_id/495830/key/fe5f46f15297e847fdebe95b7e0a2f9f/').then((textOrNull) => { //100582156

            cy.log(textOrNull)
        })*/
        /*cy.visit('https://mail.google.com/mail/u/0?ui=2&ik=31ef39b3c6&attid=0.1&permmsgid=msg-f:1646721066718539068&th=16da5415e1e92d3c&view=att&disp=inline')
        cy.get('#gaia_firstform #Email').type('pex.kserv@gmail.com')
        cy.get('#gaia_firstform #next').click()
        cy.get('.form-panel.second #Passwd').type('tvsrd7h=Qsz$')
        cy.get('.form-panel.second #signIn').click()*/

        /* cy.visit('https://webmail.strato.com/')
         cy.get('.row.username .form-control').type('test@livoneo.com')
         cy.get('.row.password .form-control').type('2IDkTUgDfS')
         cy.get('.row.buttons .btn').click()
         cy.get('.search-box .form-control').type('100000001{enter}', { force: true })   */
        //cy.get('.search-box .form-control').type('100000001')
        //cy.get('.search-box .form-control').type('TEST')



        //Rechnung in Gmail ausfindig machen - funktioniert nicht, da Gmail beim auutom. Testen abblockt

        /*cy.visit('https://accounts.google.com/signin/v2/identifier?hl=de&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        cy.get('#identifier-shown #Email').type('pex.kserv@googlemail.com')
        cy.get('.slide-out #next').click()
        cy.get('#password-shown #Passwd').type('tvsrd7h=Qsz$')
        cy.get('.slide-in #signIn').click()*/



        //Rechnung vom Backend downloaden

        //cy.visit('https://staging:staging_pwd@stage.plissee-experte.de/index.php/uber110blick')

        //Go to backend
        cy.visit(Cypress.env('backend_url'))

        // login
        backEnd.login()

        // get order
        backEnd.getOrder(orderNumber)


        //cy.get('#nav > :nth-child(2)')
        //cy.get('#nav > :nth-child(2) > ul > :nth-child(2) a > span').click({ force: true })
        //cy.get('#sales_invoice_grid_table > tbody > tr').children().contains('100000001').click()

        //cy.get('.content-header .scalable.save').click()
        cy.get('button[title="Drucken"]').click({ multiple: true })

    })
})
