describe('Configuration of VS1/VS2 with edit in cart', () => {

    it('edit product in cart - vertical', function () {

        // conifgure product
        cy.visit('/perlissimo-5125') //PG1

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        cy.contains('Sonderformen').click()  // F1 is preselected

        cy.get('.original_price').should('contain', '88,00')
        cy.get('.final_price').should('contain', '53,95') // Regel 5, 6 --> -5,00 -35%

        // Vierecke is preselected
        // F1 is preselected
        // direkte Befestigung is preselected

        cy.get('#hoehe').type('1400', { force: true })
        cy.get('#breite').type('1200', { force: true })

        // schienenfarbe weiß is preselected

        cy.get('.original_price').should('contain', '234,00') //-5,00 -35%
        cy.get('.final_price').should('contain', '148,85')

        cy.get('#qty').clear().type(2, { force: true })
        cy.get('.add_to_cart_button').click()

        //************************ CHECK CART PRICES ********************************/

        // check preices in cart and edit product
        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', '234,00')  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', '148,85')  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', '468,00')  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', '297,70')  // red. Preis total

        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", '170,30')

        //check total cart
        cy.get('.cart_value').should("contain", '297,70')

        //************************ EDIT PRODUCT ********************************/
        //******************************************************************* */

        // edit product (go back to configuration)
        cy.contains('Artikel bearbeiten').click()

        // edit window shape
        cy.get('input[value="triangle"]').check({ force: true })

        // edit plissee type
        cy.get('input[value="vs9"]').click({ force: true })

        // edit height & width
        cy.get('#hoehe').type('1500', { force: true }) // --> 1500 x 1200 --> 563,00
        cy.get('#breite').type('1200', { force: true })

        // edit schienenfarbe
        cy.get('input[value="bronze"]').click({ force: true })

        // edit bediengriff
        cy.get('input[value="design"]').click({ force: true }) //+12,50/8,50

        cy.get('.original_price').should('contain', '575,50') // = 563 + 12,50 = 575,50
        cy.get('.final_price').should('contain', '371,20')  // =563 -5,00 -35% = 362,70 + 8,50

        cy.get('#qty').clear().type(2, { force: true })
        cy.get('.add_to_cart_button').click()


        //************************ CHECK CART PRICES ********************************/

        // check preices in cart and edit product
        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', '575,50')  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', '371,20')  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', '1.151,00')  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', '742,40')  // red. Preis total


        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", '408,60')

        //check total cart
        cy.get('.cart_value').should("contain", '742,40')


        // ******************************** PROCEED TO CHECKOUT *********************************

        cy.get('.totals > .checkout-types button').click()

        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test

    })
})