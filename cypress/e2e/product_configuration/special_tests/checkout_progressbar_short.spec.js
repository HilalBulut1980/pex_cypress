// ******* BESCHREIBUNG *******
// es wird ein Stoffmuster von Bologna-2028 bestellt
// Die Rechungsinformationen werden eingegeben und anschließend in der Progressbar geprüft
// in der Progressbar wird geprüft, ob nur 'Lieferadresse' sichtbar ist - alle anderen Punkte sollten nicht sichtbar sein
// Anschließend wird Punkt (2) 'Lieferanschrift' geklickt und eine unterschiedliche Adresse eingegeben. 
// In der Progressbar wird geprüft, ob bei Punkt Lieferadresse die neuen Daten übernommen wurden.


var customer = {
    //customer data
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "company": "Tester AG",
    "vatid": "ATU33803701",
    "email": "test@delphinus-test.de",
    // "street": "Kobelgasse 7",
    "street": "Kobelgasse 7",
    "postal_code": "1110",
    "city": "Wien",
    "state": "Österreich",
    "phone": "123456",
    "shipping": "new",
    "prefix_2": "Frau",
    "first_name_2": "Melanie",
    "last_name_2": "Schulze",
    "company_2": "Tester DE AG",
    "vatid_2": "DE136627286",
    "street_2": "Zentralweg 3",
    "postal_code_2": "20099",
    "city_2": "Hamburg",
    "state_2": "Deutschland",
    "phone_2": "225588",
    "payment": "Vorkasse"
}

describe('Configuration of muster with progressbar check', () => {

    it('check progressbar - short order', function () {

        // conifgure product
        cy.visit('/bologna-2028')

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        //select Muster
        // cy.get('.add_stoffmuster_button.action_button:visible').click()
        cy.contains('Gratis Stoffmuster bestellen').click()

        // cart
        cy.contains('Kostenfrei bestellen').click()

        // checkout

        //check if heading of progess bar exists
        cy.get('.op_checkout_progress_heading').should('exist').should('contain', 'Ihr Bestellfortschritt')

        // check if progressbar is visible/exists
        cy.get('.col-right.sidebar').should('exist').and('be.visible')
        // check if 'Lieferadresse' is visible and all other steps are not visible
        cy.get('#billing-progress-opcheckout').should('exist').and('be.visible').and('contain', 'Lieferadresse')
        cy.get('#shipping-progress-opcheckout').should('exist').and('not.be.visible')
        cy.get('#shipping_method-progress-opcheckout').should('exist').and('not.be.visible')
        cy.get('#payment-progress-opcheckout').should('exist').and('not.visible')

        // als Gast bestellen
        cy.contains(new RegExp("^" + "Als Gast bestellen" + "\\s*$")).click({ force: true })
        cy.contains('Fortsetzen').click()

        // set billing information
        cy.get('[id="billing:prefix"]').select(customer.prefix)
        cy.get('[id="billing:firstname"]').clear().type(customer.first_name)
        cy.get('[id="billing:lastname"]').clear().type(customer.last_name)
        cy.get('[id="billing:company"]').clear().type(customer.company)
        cy.get('[id="billing:email"]').clear().type(customer.email)
        cy.get('[id="billing:vat_id"]').clear().type(customer.vatid)
        cy.get('[id="billing:street1"]').clear().type(customer.street)
        cy.get('[id="billing:postcode"]').clear().type(customer.postal_code)
        cy.get('[id="billing:city"]').clear().type(customer.city)
        cy.get('[id="billing:country_id"]').select(customer.state)
        cy.get('[id="billing:telephone"]').clear().type(customer.phone)

        // Weiter Button
        cy.get('button[title="Weiter"]').click()

        // chek progress bar - billing address
        cy.get('#billing-progress-opcheckout > address')
            .should('contain', customer.prefix + ' ' + customer.first_name + ' ' + customer.last_name)
            .and('contain', customer.company)
            // .and('contain', customer.street)
            .and('contain', customer.postal_code + ' ' + customer.city)
            .and('contain', customer.state)
            .and('contain', 'Tel: ' + customer.phone)
            .and('contain', 'USt-ID: ' + customer.vatid)
            .and('contain', customer.email)

        cy.get('h2').contains('Lieferanschrift').click()

        // change billing information
        cy.get('[id="billing:prefix"]').select(customer.prefix_2)
        cy.get('[id="billing:firstname"]').clear().type(customer.first_name_2)
        cy.get('[id="billing:lastname"]').clear().type(customer.last_name_2)
        cy.get('[id="billing:company"]').clear().type(customer.company_2)
        cy.get('[id="billing:vat_id"]').clear().type(customer.vatid_2)
        cy.get('[id="billing:street1"]').clear().type(customer.street_2)
        cy.get('[id="billing:postcode"]').clear().type(customer.postal_code_2)
        cy.get('[id="billing:city"]').clear().type(customer.city_2)
        cy.get('[id="billing:country_id"]').select(customer.state_2)
        cy.get('[id="billing:telephone"]').clear().type(customer.phone_2)

        // Weiter Button (orange button)
        cy.get('.btn.btn_orange:visible').click()

        // chek progress bar
        cy.get('#billing-progress-opcheckout > address')
            .should('contain', customer.prefix_2 + ' ' + customer.first_name_2 + ' ' + customer.last_name_2)
            .and('contain', customer.company_2)
            // .and('contain', customer.street_2)
            .and('contain', customer.postal_code_2 + ' ' + customer.city_2)
            .and('contain', customer.state_2)
            .and('contain', 'Tel: ' + customer.phone_2)
            .and('contain', 'USt-ID: ' + customer.vatid_2)
    })
})