module.exports = {

    configure_NEG_roof: function configure_NEG_roof(test) {

        it(test.name, function () {

            cy.visit(test.stoff_url)

            cy.wait('@configurator-js-files')
            cy.get('.dev_tool_body').should('exist')

            //-------------------PRODUCT CONFIGURATION--------------------\\
            setProduktTyp(test.produkttyp)
            setPlisseeTyp(test.plisseetyp)
            setSwitcher(test.df_switcher)

            setGlasBreite(test.df_glasbreite)
            setGlasHoehe(test.df_glashoehe)
            setFalztiefe(test.df_falztiefe)
            setFluegelBreite(test.df_fluegelbreite)
            setFluegelHoehe(test.df_fluegelhoehe)

            clickOutDF()
            cy.get('.df_nonstandard').scrollIntoView()
            cy.get('.error_message').should('be.visible').and('contain', test.message)


            setGlasBreite(test.df_glasbreite_new)
            setGlasHoehe(test.df_glashoehe_new)
            setFalztiefe(test.df_falztiefe_new)
            setFluegelBreite(test.df_fluegelbreite_new)
            setFluegelHoehe(test.df_fluegelhoehe_new)

            clickOutDF()
            cy.get('.error_message').should('not.to.exist')
        })
    }
}

function setProduktTyp() {
    cy.contains('Dachfenster').click()
}

function setPlisseeTyp(value) {
    cy.contains(value).click({ force: true })  //DF10 - DF30 Comfort
}

function setSwitcher(value) {
    cy.contains(value).click({ force: true }) //whe have to force:true here because in some cases an infobox covers the yielded element
}

function setGlasBreite(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#glasbreite').clear({ force: true }).type(value, { force: true })
    }
}

function setGlasHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#glashoehe').clear({ force: true }).type(value, { force: true })
    }
}

function setFalztiefe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#glasleistentiefe').clear().type(value, { force: true })
    }
}

function setFluegelBreite(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#fluegelinnenmass').clear().type(value, { force: true })
    }
}

function setFluegelHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#fluegelhoehe').clear().type(value, { force: true })
    }
}

function clickOutDF() {
    //following step is needed for visibility of message 
    cy.get(".final_price").click({ multiple: true })
}
