// ******* BESCHREIBUNG *******
// es wird Bologna-2028 konfiguriert
// Die Rechungsinformationen werden eingegeben und anschließend in der Progressbar geprüft, 
// ob bei Rechnungsadresse und Lieferadresse die gleichen Informationen stehen.
// Anschließend wird Punkt (3) 'Lieferadresse' geklickt und eine unterschiedliche Versandadresse eingegeben. 
// In der Progressbar wird geprüft, ob bei Punkt Lieferadresse die neuen Daten übernommen wurden.
// Als Zahlungsmethode wird zunächst Kreditkarte gewählt
// in der Progessbar wird geprüft, ob 'Kreditkarte' angegeben ist
// mit 'Ändern' wird zu Punkt (5) 'Zahlungsinformation' navigiert und dort 'Vorkasse selektiert'
// in der Progessbar werden die Zahlungsart 'Vorkasse' + die Kontodaten von Deplhinus geprüft
// zuletzt wird geprüft, ob in der Progressbar bei 'Versandart' der korrekte Betrag enthalten ist (hier 0,00 €)


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

describe('Configuration of regular product with progressbar check', () => {

    it('check progressbar - long order', function () {

        // conifgure product
        cy.visit('/bologna-2028')

        cy.wait('@configurator-js-files')
        cy.get('.dev_tool_body').should('exist')

        cy.contains('Senkrechte Fenster').click()

        cy.get('#hoehe').type('1400', { force: true })
        cy.get('#breite').type('1200', { force: true })

        cy.get('#qty').clear().type(2, { force: true })
        cy.get('.add_to_cart_button').click()

        // cart
        cy.contains('zur Kasse gehen').click()

        // checkout

        //check if heading of progess bar exists
        cy.get('.op_checkout_progress_heading').should('exist').should('contain', 'Ihr Bestellfortschritt')

        // check if progressbar is visible/exists
        cy.get('.col-right.sidebar').should('exist').and('be.visible')
        // check if 4 steps are existing/visible
        cy.get('#billing-progress-opcheckout').should('exist').and('be.visible').and('contain', 'Rechnungsadresse')
        cy.get('#shipping-progress-opcheckout').should('exist').and('be.visible').and('contain', 'Lieferadresse')
        cy.get('#shipping_method-progress-opcheckout').should('exist').and('be.visible').and('contain', 'Versandart')
        cy.get('#payment-progress-opcheckout').should('exist').and('be.visible').and('contain', 'Zahlungsart')

        // als Gast zur Kasse gehen
        cy.contains(new RegExp("^" + "Als Gast zur Kasse gehen" + "\\s*$")).click({ force: true })
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

        // chek progress bar - shipping address
        cy.get('#shipping-progress-opcheckout > address')
            .should('contain', customer.prefix + ' ' + customer.first_name + ' ' + customer.last_name)
            .and('contain', customer.company)
            // .and('contain', customer.street)
            .and('contain', customer.postal_code + ' ' + customer.city)
            .and('contain', customer.state)
            .and('contain', 'Tel: ' + customer.phone)
            .and('contain', 'USt-ID: ' + customer.vatid)
        // .and('contain', customer.email)

        cy.get('h2').contains('Lieferadresse').click()

        // change shipping information
        cy.get('[id="shipping:prefix"]').select(customer.prefix_2)
        cy.get('[id="shipping:firstname"]').clear().type(customer.first_name_2)
        cy.get('[id="shipping:lastname"]').clear().type(customer.last_name_2)
        cy.get('[id="shipping:company"]').clear().type(customer.company_2)
        cy.get('[id="shipping:vat_id"]').clear().type(customer.vatid_2)
        cy.get('[id="shipping:street1"]').clear().type(customer.street_2)
        cy.get('[id="shipping:postcode"]').clear().type(customer.postal_code_2)
        cy.get('[id="shipping:city"]').clear().type(customer.city_2)
        cy.get('[id="shipping:country_id"]').select(customer.state_2)
        cy.get('[id="shipping:telephone"]').clear().type(customer.phone_2)

        // Fortsetzen Button
        cy.get('button[title="Fortsetzen"]').click()

        // chek progress bar
        cy.get('#shipping-progress-opcheckout > address')
            .should('contain', customer.prefix_2 + ' ' + customer.first_name_2 + ' ' + customer.last_name_2)
            .and('contain', customer.company_2)
            // .and('contain', customer.street_2)
            .and('contain', customer.postal_code_2 + ' ' + customer.city_2)
            .and('contain', customer.state_2)
            .and('contain', 'Tel: ' + customer.phone_2)
            .and('contain', 'USt-ID: ' + customer.vatid_2)

        // Fortsetzen Button
        cy.get('.btn.btn_orange:visible').click()

        cy.wait('@p2') // --> waiting for request: c.paypal.com/v1/r/d/b/p2

        // set credit card as payment method
        cy.get('.payment_method.ppp.card input').click({ force: true })
        cy.get('.payment_method.ppp.card.ppp-selected').should('exist') //only an additional check of the right selection

        // Fortsetzen Button
        cy.get('.btn.btn_orange:visible').click()

        cy.wait('@savePayment')
        cy.wait('@bestelluebersicht')
        // cy.wait(2000)


        // check progress bar - payment method
        cy.get('#payment-progress-opcheckout > .content')
            .should('contain', 'Kreditkarte')

        cy.get('#payment-progress-opcheckout').find('a').click()

        // set Vorkasse as payment method
        cy.get('.payment_method.ppp.bankpayment input').click({ force: true })
        cy.get('.payment_method.ppp.bankpayment.ppp-selected').should('exist') //only an additional check of the right selection

        // cy.wait(2000)
        // Fortsetzen Button
        cy.get('.btn.btn_orange:visible').click()

        cy.wait('@savePayment')
        cy.wait('@bestelluebersicht')
        // cy.wait(2000)


        // chek progress bar - Kontodaten bei Vorkasse
        cy.get('#payment-progress-opcheckout > .content')
            .should('contain', 'Vorkasse')
            .should('contain', 'Kontodaten')
            .and('contain', 'Kontoinhaber')
            .and('contain', 'Delphinus GmbH')
            .and('contain', 'Kontonummer')
            .and('contain', '44779101')
            .and('contain', 'BLZ')
            .and('contain', '10010010')
            .and('contain', 'Bankname')
            .and('contain', 'Postbank')
            .and('contain', 'IBAN')
            .and('contain', 'DE78 1001 0010 0044 7791 01')
            .and('contain', 'BIC')
            .and('contain', 'PBNKDEFF')

        // check progress bar - Versandkosten
        cy.get('#shipping_method-progress-opcheckout > .content > .price')
            .should('contain', '0,00 €')
    })
})