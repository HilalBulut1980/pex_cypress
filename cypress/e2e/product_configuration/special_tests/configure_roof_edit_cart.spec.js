describe('Configuration of DF20/DF20C with edit in cart', () => {

    it('edit product in cart - vertical', function () {

        // conifgure product
        cy.visit('/syrakus-4218') //PG2

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        cy.contains('Dachfenster').click()


        cy.get('.original_price').should('contain', '112,00') //107 + 5 (Preis für ungenormte DF mit PG2 = 107 )
        cy.get('.final_price').should('contain', '57,50') // Regel 5, 12, 8 --> -5,00, -2,00, -35%, --> 112-5-2-50= 50,00 |+ 5,00

        // DF20 is preselected

        cy.get('select[name="df_hersteller"]').select('Fakro')
        cy.get('select[name="df_product"]').select('FTP 9')
        cy.get('select[name="df_product_type"]').select('09 94 / 140 (Holz)')  // --> 1233x780 --> 208,00 + 5,00

        // schienenfarbe weiß is preselected

        // bediensgriff standard is preselected

        cy.get('.original_price').should('contain', '213,00')
        cy.get('.final_price').should('contain', '108,00') //213,00 -5,00 -2,00 -50% |+5,00

        cy.get('#qty').clear().type(2, { force: true })
        cy.get('.add_to_cart_button').click()

        //************************ CHECK CART PRICES ********************************/

        // check preices in cart and edit product
        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', '213,00')  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', '108,00')  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', '426,00')  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', '216,00')  // red. Preis total

        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", '210,00')

        //check total cart
        cy.get('.cart_value').should("contain", '216,00')


        //************************ EDIT PRODUCT ********************************/
        //******************************************************************* */

        // edit product (go back to configuration)
        cy.contains('Artikel bearbeiten').click()

        // edit plissee type
        cy.get('input[value="df20c"]').click({ force: true })

        cy.get('select[name="df_product"]').select('PTL-V')
        cy.get('select[name="df_product_type"]').select('55 / 118 (Kunststoff)')  // --> 1013 x 391 --> 196,00 + 5,00       

        cy.get('.original_price').should('contain', '201,00')
        cy.get('.final_price').should('contain', '102,00')  // = 201,00 -5,00 -2,00 -50% |+5,00 = 102,00

        cy.get('#qty').clear().type(2, { force: true })
        cy.get('.add_to_cart_button').click()


        //************************ CHECK CART PRICES ********************************/

        // check preices in cart and edit product
        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', '201,00')  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', '102,00')  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', '402,00')  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', '204,00')  // red. Preis total


        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", '198,00')

        //check total cart
        cy.get('.cart_value').should("contain", '204,00')


        // ******************************** PROCEED TO CHECKOUT *********************************

        cy.get('.totals > .checkout-types button').click()

        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test

    })
})