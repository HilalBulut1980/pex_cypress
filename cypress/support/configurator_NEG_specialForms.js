module.exports = {

    configure_NEG_specialForms: function configure_NEG_specialForms(test) {

        it(test.name, function () {

            cy.visit(test.stoff_url)

            cy.wait('@configurator-js-files')
            cy.get('.dev_tool_body').should('exist')


            //-------------------PRODUCT CONFIGURATION--------------------\\
            setProduktTyp()
            setWindowShape(test.form)
            setPlisseeTyp(test.plisseetyp)
            setAusrichtung(test.ausrichtung)

            setHoehe(test.hoehe)
            setHoeheLinks(test.hoehe_links)
            setHoeheRechts(test.hoehe_rechts)
            setGesamtHoehe(test.gesamthoehe)
            setTeilHoehe(test.teilhoehe)
            setBreite(test.breite)
            setBreiteUnten(test.breite_unten)
            setBreiteOben(test.breite_oben)

            clickOutSF()
            cy.contains('Messanleitung').scrollIntoView()
            cy.get('.error_message').should('be.visible').and('contain', test.message)

            

            setAusrichtung(test.ausrichtung_new)
            setHoehe(test.hoehe_new)
            setHoeheLinks(test.hoehe_links_new)
            setHoeheRechts(test.hoehe_rechts_new)
            setGesamtHoehe(test.gesamthoehe_new)
            setTeilHoehe(test.teilhoehe_new)
            setBreite(test.breite_new)
            setBreiteUnten(test.breite_unten_new)
            setBreiteOben(test.breite_oben_new)

            clickOutSF()

            cy.get('.error_message').should('not.exist')
        })
    }
}

function setProduktTyp() {
    cy.contains('Sonderformen').click()
}

function setWindowShape(value) {
    cy.get('input[value=' + value + ']').click({ force: true })
}

function setPlisseeTyp(value) {
    cy.get('input[value=' + value + ']').click({ force: true })
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

function setBreiteUnten(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#breite_unten').clear().type(value, { force: true })
    }
}

function setBreiteOben(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#breite_oben').clear().type(value, { force: true })
    }
}

function setHoeheLinks(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#hoehe_links').clear().type(value, { force: true })
    }
}

function setHoeheRechts(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#hoehe_rechts').clear().type(value, { force: true })
    }
}

function setGesamtHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#gesamthoehe').clear().type(value, { force: true })
    }
}

function setTeilHoehe(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('#teilhoehe').clear().type(value, { force: true })
    }
}

function setAusrichtung(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('input[value=' + value + ']').click({ force: true })
    }
}

function clickOutSF() {
    //following step is needed for visibility of error messages - cypress has no tab-function
    //cy.get('#placeholder_schienenfarbe_sf_title').click()

    // --> CHECK IF THIS IS STILL NECESSARY --> yes! it is

    cy.get(".final_price").click({ multiple: true })
}