module.exports = {

    checkEmptyInputs_DF: function checkEmptyInputs_DF(url, tab, type, stoffgruppe, stoffnummer, glasbreite, glashoehe, falz, finnenbreite, finnenhoehe, glasbreite_new, glashoehe_new, falz_new, finnenbreite_new, finnenhoehe_new, message) {

        //load page, tab, shape etc.
        cy.visit(url)

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        cy.contains(tab).click({ force: true })

        cy.get('input[value=' + type + ']').click({ force: true })

        cy.get('input[value="df_nonstandard"]').click({ force: true })

        //only needed for DF30C
        if (typeof stoffgruppe != 'undefined') {
            cy.get('select[id="unterer_stoff_gruppe_select"]').select(stoffgruppe, { force: true })
            cy.get('select[id="unterer_stoff_nummer_select"]').select(stoffnummer, { force: true })
        }

        //*********************************************************/

        //type in given inputs

        if (typeof glasbreite != 'undefined') {
            cy.get('#glasbreite').type(glasbreite, { force: true })
        }

        if (typeof glashoehe != 'undefined') {
            cy.get('#glashoehe').type(glashoehe, { force: true })
        }

        if (typeof falz != 'undefined') {
            cy.get('#glasleistentiefe').type(falz, { force: true })
        }

        if (typeof finnenbreite != 'undefined') {
            cy.get('#fluegelinnenmass').type(finnenbreite, { force: true })
        }

        if (typeof finnenhoehe != 'undefined') {
            cy.get('#fluegelhoehe').type(finnenhoehe, { force: true })
        }

        //*********************************************************/
        clickOut()
        //*********************************************************/

        //try to add to cart
        cy.get('#qty').clear().type('1')
        cy.get('.add_to_cart_button').click()

        //make sure that cart is NOT loaded
        cy.url().should('not.include', '/checkout/cart')

        cy.get('.df_nonstandard').scrollIntoView()

        //check error message visibility
        cy.get('.error_message').should('be.visible').and('contain', message)


        //*********************************************************/

        //type in new inputs

        if (typeof glasbreite_new != 'undefined') {
            cy.get('#glasbreite').type(glasbreite_new, { force: true })
        }

        if (typeof glashoehe_new != 'undefined') {
            cy.get('#glashoehe').type(glashoehe_new, { force: true })
        }

        if (typeof falz_new != 'undefined') {
            cy.get('#glasleistentiefe').type(falz_new, { force: true })
        }

        if (typeof finnenbreite_new != 'undefined') {
            cy.get('#fluegelinnenmass').type(finnenbreite_new, { force: true })
        }

        if (typeof finnenhoehe_new != 'undefined') {
            cy.get('#fluegelhoehe').type(finnenhoehe_new, { force: true })
        }

        //*********************************************************/

        //check error message disappearance
        cy.get('.error_message').should('not.exist')


        //add to cart
        cy.get('.add_to_cart_button').click()

        //make sure that cart is loaded
        cy.url().should('include', '/checkout/cart')


    },
    checkEmptyInputs_SF: function checkEmptyInputs_SF(url, tab, shape, type, hoehe, hoehe_new, breite, breite_new, message, message2) {

        //load page, tab, shape etc.
        cy.visit(url)

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')
        
        cy.contains(tab).click({ force: true })

        if (typeof shape != 'undefined') {
            cy.get('input[value=' + shape + ']').click({ force: true })
        }

        cy.get('input[value=' + type + ']').click({ force: true })

        //*********************************************************/

        //type in given inputs

        if (typeof hoehe != 'undefined') {
            cy.get('#hoehe').type(hoehe)
        }

        if (typeof breite != 'undefined') {
            cy.get('#breite').type(breite)
        }

        //*********************************************************/
        clickOut()
        //*********************************************************/

        //try to add to cart
        cy.get('#qty').clear().type('1')
        cy.get('.add_to_cart_button').click()

        //make sure that cart is NOT loaded
        cy.url().should('not.include', '/checkout/cart')

        cy.contains('Höhe').scrollIntoView()

        //check error message(s) visibility
        cy.get('.error_message').should('be.visible').and('contain', message)

        if (typeof message2 != 'undefined') {
            cy.get('.error_message').should('be.visible').and('contain', message2)
        }

        //*********************************************************/

        //type in given new inputs
        if (typeof hoehe_new != 'undefined') {
            cy.get('#hoehe').type(hoehe_new)
        }

        if (typeof breite_new != 'undefined') {
            cy.get('#breite').type(breite_new)
        }

        //*********************************************************/

        //check error message disappearance
        cy.get('.error_message').should('not.exist')

        //add to cart
        cy.get('.add_to_cart_button').click()

        //make sure that cart is loaded
        cy.url().should('include', '/checkout/cart')
    },
    checkEmptyInputs_SD: function checkEmptyInputs_SD(url, tab, shape, type, stoffgruppe, stoffnummer, hoehe, hoehe_new, hoehe_links, hoehe_links_new, hoehe_rechts, hoehe_rechts_new, hoehe_gesamt, hoehe_gesamt_new, hoehe_teil, hoehe_teil_new, breite, breite_new, breite_unten, breite_unten_new, breite_oben, breite_oben_new, message, message2) {

        //load page, tab, shape etc.
        cy.visit(url)

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        cy.contains(tab).click({ force: true })

        if (typeof shape != 'undefined') {
            cy.get('input[value=' + shape + ']').click({ force: true })
        }

        cy.get('input[value=' + type + ']').click({ force: true })

        //only needed for VSSD
        if (typeof stoffgruppe != 'undefined') {
            cy.get('select[id="unterer_stoff_gruppe_select"]').select(stoffgruppe, { force: true })
            cy.get('select[id="unterer_stoff_nummer_select"]').select(stoffnummer, { force: true })
        }

        //*********************************************************/

        //type in given inputs

        if (typeof hoehe != 'undefined') {
            cy.get('#hoehe').type(hoehe)
        }

        if (typeof hoehe_links != 'undefined') {
            cy.get('#hoehe_links').type(hoehe_links)
        }

        if (typeof hoehe_rechts != 'undefined') {
            cy.get('#hoehe_rechts').type(hoehe_rechts)
        }

        if (typeof hoehe_teil != 'undefined') {
            cy.get('#teilhoehe').type(hoehe_teil)
        }

        if (typeof hoehe_gesamt != 'undefined') {
            cy.get('#gesamthoehe').type(hoehe_gesamt)
        }

        if (typeof breite != 'undefined') {
            cy.get('#breite').type(breite)
        }

        if (typeof breite_oben != 'undefined') {
            cy.get('#breite_oben').type(breite_oben)
        }

        if (typeof breite_unten != 'undefined') {
            cy.get('#breite_unten').type(breite_unten)
        }

        //*********************************************************/
        clickOut()
        //*********************************************************/

        //try to add to cart
        cy.get('#qty').clear().type('1')
        cy.get('.add_to_cart_button').click()

        //make sure that cart is NOT loaded
        cy.url().should('not.include', '/checkout/cart')

        cy.contains('Messanleitung').scrollIntoView()

        //check error message(s) visibility
        cy.get('.error_message').should('be.visible').and('contain', message)

        if (typeof message2 != 'undefined') {
            cy.get('.error_message').should('be.visible').and('contain', message2)
        }

        //*********************************************************/

        //type in given new inputs
        if (typeof hoehe_new != 'undefined') {
            cy.get('#hoehe').type(hoehe_new)
        }

        if (typeof hoehe_links_new != 'undefined') {
            cy.get('#hoehe_links').type(hoehe_links_new)
        }

        if (typeof hoehe_rechts_new != 'undefined') {
            cy.get('#hoehe_rechts').type(hoehe_rechts_new)
        }

        if (typeof hoehe_teil_new != 'undefined') {
            cy.get('#teilhoehe').type(hoehe_teil_new)
        }

        if (typeof hoehe_gesamt_new != 'undefined') {
            cy.get('#gesamthoehe').type(hoehe_gesamt_new)
        }

        if (typeof breite_new != 'undefined') {
            cy.get('#breite').type(breite_new)
        }

        if (typeof breite_oben_new != 'undefined') {
            cy.get('#breite_oben').type(breite_oben_new)
        }

        if (typeof breite_unten_new != 'undefined') {
            cy.get('#breite_unten').type(breite_unten_new)
        }

        //*********************************************************/

        //check error message disappearance
        cy.get('.error_message').should('not.exist')

        //add to cart
        cy.get('.add_to_cart_button').click()

        //make sure that cart is loaded
        cy.url().should('include', '/checkout/cart')
    }

}

function clickOut() {
    //following step is needed for visibility of error messages - cypress has no tab-function
    //cy.get('#placeholder_schienenfarbe_sf_title').click()

    // --> CHECK IF THIS IS STILL NECESSARY --> yes! it is

    cy.get('.final_price').click({ multiple: true })
}