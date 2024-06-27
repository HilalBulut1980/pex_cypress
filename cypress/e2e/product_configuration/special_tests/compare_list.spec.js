describe('Vergleichsliste', () => {

    it('test', function () {

        //******************************************************* FIRST PRODUCT ************************************************************ */

        cy.visit('/blackout-4017')
        cy.get('#compare-link-add').should('be.visible').and('have.text', 'Auf die Vergleichsliste') //--> have.text works like regexp
        cy.get('#compare-link-add').click()
        cy.get('#compare-link-view').should('be.visible').and('have.text', 'Vergleichsliste ansehen') //--> have.text works like regexp
        cy.get('#compare-link-view').click()
        cy.get('.product-shop-row').should('contain', 'Blackout-4017') 


        //******************************************************* SECOND PRODUCT ************************************************************ */

        cy.visit('/crepp-color-5114')
        cy.get('#compare-link-add').should('be.visible').and('have.text', 'Auf die Vergleichsliste') //--> have.text works like regexp
        cy.get('#compare-link-add').click()
        cy.get('#compare-link-view').should('be.visible').and('have.text', 'Vergleichsliste ansehen') //--> have.text works like regexp
        cy.get('#compare-link-view').click()
        cy.get('.product-shop-row').should('contain', 'Blackout-4017').and('contain', 'Crepp-Color-5114') 


        //******************************************************* THIRD PRODUCT ************************************************************ */

        cy.visit('/rapallo-1216')
        cy.get('#compare-link-add').should('be.visible').and('have.text', 'Auf die Vergleichsliste') //--> have.text works like regexp
        cy.get('#compare-link-add').click()
        cy.get('#compare-link-view').should('be.visible').and('have.text', 'Vergleichsliste ansehen') //--> have.text works like regexp
        cy.get('#compare-link-view').click()
        cy.get('.product-shop-row').should('contain', 'Blackout-4017').and('contain', 'Crepp-Color-5114').and('contain', 'Rapallo-1216') 


        //******************************************************* DELETE PRODUCTs FROM COMPARELIST ************************************************************ */

        cy.get('.delete-row > td').eq(0).click()
        cy.get('.delete-row > td').eq(0).click()
        cy.get('.delete-row > td').eq(0).click()


        //******************************************************* CHECK NEW LOADED PAGES ************************************************************ */

        cy.get('.main h1').should('have.text', 'Plissees vergleichen') //--> have.text works like regexp
        cy.get('.main a').click()
        cy.url().should('eq', 'https://www.plissee-experte.de/')
    })
})