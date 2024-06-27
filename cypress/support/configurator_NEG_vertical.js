

module.exports = {

    configure_NEG_vertical: function configure_NEG_vertical(test) {

        it(test.name, function () {

            cy.visit(test.stoff_url)

            cy.wait('@configurator-js-files')
            cy.get('.dev_tool_body').should('exist')

            
            //-------------------PRODUCT CONFIGURATION--------------------\\
            setProduktTyp(test.produkttyp)
            setPlisseeTyp(test.plisseetyp)
            setBefestigung(test.befestigung)

            setHoehe(test.hoehe)
            setBreite(test.breite)

            clickOutVS()
            cy.contains('Höhe').scrollIntoView()
            cy.get('.error_message').should('be.visible').and('contain', test.message)


            setHoehe(test.hoehe_new)
            setBreite(test.breite_new)
            clickOutVS()
            cy.get('.error_message').should('not.exist')
        })
    }
}

function setProduktTyp() {
    cy.contains('Senkrechte Fenster').click()

}

function setPlisseeTyp(value) {
    cy.get('input[value=' + value + ']').click({ force: true })
}

function setBefestigung(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('input[value=' + value + ']').click({ force: true })
    }
}

function setHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#hoehe').clear().type(value, { force: true })
    }
}

function setBreite(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#breite').clear().type(value, { force: true })
    }
}

function clickOutVS() {
    //following step is needed for visibility of error messages - cypress has no tab-function
    //cy.get('#schienenfarbe_title').click()

    // --> CHECK IF THIS IS STILL NECESSARY  --> it is!
    cy.get(".final_price").click({ multiple: true })

}