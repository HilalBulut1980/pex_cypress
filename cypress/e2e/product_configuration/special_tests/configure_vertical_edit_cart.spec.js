describe('Configuration of VS1/VS2 with edit in cart', () => {

    it('edit product in cart - vertical', function () {

        // conifgure product
        cy.visit('/bruneck-1186') //PG1

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        cy.contains('Senkrechte Fenster').click()

        cy.get('.original_price').should('contain', '67,00')
        cy.get('.final_price').should('contain', '43,55') // Regel 6 --> 35%

        // VS2 is preselected
        // direkte Befestigung is preselected

        cy.get('#hoehe').type('1400', { force: true })
        cy.get('#breite').type('1200', { force: true })

        // schienenfarbe weiß is preselected

        // bediensgriff standard is preselected

        cy.get('.original_price').should('contain', '216,00')
        cy.get('.final_price').should('contain', '140,40')

        cy.get('#qty').clear().type(2, { force: true })
        cy.get('.add_to_cart_button').click()

        //************************ CHECK CART PRICES ********************************/

        // check preices in cart and edit product
        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', '216,00')  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', '140,40')  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', '432,00')  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', '280,80')  // red. Preis total


        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", '151,20')

        //check total cart
        cy.get('.cart_value').should("contain", '280,80')


        //************************ EDIT PRODUCT ********************************/
        //******************************************************************* */

        // edit product (go back to configuration)
        cy.contains('Artikel bearbeiten').click()

        cy.get('.dev_tool_body').should('exist')

        // edit befestigung
        cy.get('input[value="gelenkklebeplatten"]').click({ force: true }) //+20,00

        // edit height
        cy.get('#hoehe').clear().type('1500', { force: true }) // --> 216,00 to 226,00

        // edit schienenfarbe
        cy.get('input[value="silber"]').click({ force: true })

        // edit bediengriff
        cy.get('input[value="design"]').click({ force: true }) //+17,00/25,00

        cy.get('.original_price').should('contain', '271,00') // = 226 + 20 + 25 = 271,00
        cy.get('.final_price').should('contain', '183,90')  // = 226-35%=146,90 | +17 | + 20 =  183,90

        cy.get('#qty').clear().type(2, { force: true })
        cy.get('.add_to_cart_button').click()


        //************************ CHECK CART PRICES ********************************/

        // check preices in cart and edit product
        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', '271,00')  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', '183,90')  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', '542,00')  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', '367,80')  // red. Preis total



        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", '174,20')

        //check total cart
        cy.get('.cart_value').should("contain", '367,80')


        // ******************************** PROCEED TO CHECKOUT *********************************

        cy.get('.totals > .checkout-types button').click()

        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test

    })
})