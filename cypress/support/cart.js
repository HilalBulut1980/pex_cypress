module.exports = {

    checkCartMuster: function checkCartMuster() {

        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', "kostenlos")  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', "kostenlos")  // red. Preis einzeln

        //proceed to checkout
        cy.get('.totals > .checkout-types button').click()
    },

    // products without Streichpreis ==> Gutscheine, Service, 
    checkCartSimple: function checkCartSimple(price, total_price, totalCart, rabattCode, rabattBetrag, sieSparen_new, totalCart_new) {

        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', price)  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', total_price)  // red. Preis einzeln


        //check total cart
        cy.get('.cart_value').should("contain", totalCart)



        // ***************************** IN CASE OF A RABATTCODE *****************************

        if (typeof rabattCode !== "undefined") { //if Code exists
            cy.get('div').contains('Gutschein einlösen').click()
            cy.get('#coupon_code').type(rabattCode)
            cy.get('button').contains('Gutschein einlösen').click()
            //check Rabattbetrag + Code
            cy.contains('Rabatt (' + rabattCode + ')').next().should("contain", rabattBetrag)

            //check 'Sie sparen new'
            cy.contains('Sie sparen').next().should("contain", sieSparen_new)

            //check total cart new
        cy.get('.cart_value').should("contain", totalCart_new)

        }

        //proceed to checkout
        cy.get('.totals > .checkout-types button').click()
    },

    checkCart: function checkCart(original_cart, reduced_cart, original_total, reduced_total, kosten_stab, sieSparen, totalCart, rabattCode, rabattBetrag, sieSparen_new, totalCart_new) {

        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', original_cart)  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', reduced_cart)  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', original_total)  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', reduced_total)  // red. Preis total


        //check Preis Bedienstab
        if (typeof kosten_stab !== "undefined" && kosten_stab != "0,00") {
            cy.get('.cart-table > :nth-child(2)').find('.einzelpreis').find('.cart-price').should('contain', kosten_stab)  // Bedienstab einzeln
            cy.get('.cart-table > :nth-child(2)').find('.zwischensumme').find('.cart-price').should('contain', kosten_stab)  // Bedienstab total

        }

        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", sieSparen)

        //check total cart
        cy.get('.cart_value').should("contain", totalCart)


        // ***************************** IN CASE OF A RABATTCODE *****************************

        if (typeof rabattCode !== "undefined") { //if Code exists
            cy.get('div').contains('Gutschein einlösen').click()
            cy.get('#coupon_code').type(rabattCode)
            cy.get('button').contains('Gutschein einlösen').click()

            //check Rabattbetrag + Code
            cy.contains('Rabatt (' + rabattCode + ')').next().should("contain", rabattBetrag)

            //check 'Sie sparen new'
        cy.get('.cart_saved_total.cart_value').should("contain", sieSparen_new)

            //check total cart new
        cy.get('.cart_value').should("contain", totalCart_new)

        }


        // ******************************** PROCEED TO CHECKOUT *********************************

        cy.get('.totals > .checkout-types button').click()
    },

    checkCart_withRMG: function checkCart_withRMG(original_cart, reduced_cart, original_total, reduced_total, sieSparen, totalCart) {

        //check prices
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', original_cart)  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', reduced_cart)  // red. Preis einzeln
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', original_total)  // Originalpreis total
        cy.get('.cart-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', reduced_total)  // red. Preis total


        //check RMG
        cy.get('.cart-table > :nth-child(2)').find('.cart_item_name').should('contain', 'Richtig Messen Garantie für diese Bestellung')
        cy.get('.cart-table > :nth-child(2)').find('.einzelpreis').find('.cart-price').should('contain', "kostenlos")  // Originalpreis einzeln
        cy.get('.cart-table > :nth-child(2)').find('.zwischensumme').find('.cart-price').should('contain', "kostenlos")  // red. Preis einzeln

        //check 'Sie sparen'
        cy.get('.cart_saved_total.cart_value').should("contain", sieSparen)

        //check total cart
        cy.get('.cart_value').should("contain", totalCart)


        // ******************************** PROCEED TO CHECKOUT *********************************

        cy.get('.totals > .checkout-types button').click()
    }
}

