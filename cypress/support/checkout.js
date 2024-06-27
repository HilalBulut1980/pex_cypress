var successPage = require("./successpage.js");
var backEndPage = require("./backend.js");

//------------------------- EXPORTED MODULES------------------------------------


module.exports = {

    checkOut: function checkOut(type, missing_name, customer, prefix, firstName, lastName, company, vatID1, email, street, postalCode, city, state, phone, shipping, password, prefix2, firstName2, lastName2, company2, vatID2, street2, postalCode2, city2, state2, phone2, versandkosten, payment) {

        cy.log('checkout.js')
        login(type, customer, email, password)
        setCustomerInfo(customer, prefix, firstName, lastName, company, vatID1, email, street, postalCode, city, state, phone, shipping, password, prefix2, firstName2, lastName2, company2, vatID2, street2, postalCode2, city2, state2, phone2)
        checkShippingCosts(type, versandkosten)
        setPayment(type, payment, missing_name, firstName, lastName)

    },

    checkOut_negVATID: function checkOut_negVATID(type, customer, prefix, firstName, lastName, company, vatID1_false, vatID1_correct, email, street, postalCode, city, state, phone, shipping, password, prefix2, firstName2, lastName2, company2, vatID2_false, vatID2_correct, street2, postalCode2, city2, state2, phone2, versandkosten, payment) {

        login(type, customer, email, password)

        //SET BILLING INFO
        if (customer == "guest") {
            setPrefix(prefix)
            setFirstName(firstName)
            setLastName(lastName)
            setCompanyName(company)
            setEmail(email)
            setVatID(vatID1_false)
            setAddress(street)
            setPostalCode(postalCode)
            setCity(city)
            setState(state)
            setPhone(phone)
        }

        //An gleiche Adresse versenden
        if (shipping == "same") {
            cy.log('GLEICHE ADRESSE')
            //click Weiter button
            cy.get('button').contains('Weiter').click()

            // check js-alert and set correct vat id
            check_js_alert()
            setVatID(vatID1_correct)

            //click again Weiter button
            cy.get('button').contains('Weiter').click()

        }

        //An abw. Anschrift versenden
        else if (shipping == "new") {
            cy.log('NEUE ADRESSE')
            //select 'different shipping address'
            // cy.get('input[title="An andere Adresse verschicken"]').click()
            cy.contains('An andere Adresse verschicken').click()

            //click Weiter button
            cy.get('button').contains('Weiter').click()

            // check js-alert and set correct vat id -->  IN RECHNUNGS-ADRESSE
            check_js_alert()
            setVatID(vatID1_correct)

            //click again Weiter button
            cy.get('button').contains('Weiter').click()


            setPrefix2(prefix2)
            setFirstName2(firstName2)
            setLastName2(lastName2)
            setCompanyName2(company2)
            setVatID2(vatID2_false)
            setAddress2(street2)
            setPostalCode2(postalCode2)
            setCity2(city2)
            setState2(state2)
            setPhone2(phone2)

            //click Fortsetzen button
            cy.get('button:visible').contains('Fortsetzen').click()

            // check js-alert and set correct vat id -->  IN VERSAND-ADRESSE
            check_js_alert()
            setVatID2(vatID2_correct)

            //click again Weiter button
            cy.get('#co-shipping-form > .buttons-set button').click()
        }



        checkShippingCosts(type, versandkosten)
        setPayment(type, payment)
    },

    checkFinalPrices: function checkFinalPrices(type, payment, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, kostenBedienstab, rabattCode, rabattBetrag, shippingCosts, sieSparen, total_checkout) {


        if (type == "Muster") {
            cy.get('.checkout-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', "kostenlos")  // Originalpreis einzeln
            cy.get('.checkout-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', "kostenlos")  // red. Preis einzeln
            //Versandkosten
            check_versandkosten_muster(shippingCosts)
        }

        // products without Streichpreis ==> Gutscheine, Service, 
        else if (type == "Serviceprodukt" || type == "Zubehoer" || type == "Gutschein") {

            cy.get('.checkout-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', final_checkout)  // Originalpreis einzeln
            cy.get('.checkout-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', final_checkout_total)  // red. Preis einzeln
        }
        else { //if it is a regular product

            //check prices
            cy.get('.checkout-table > :nth-child(1)').find('.einzelpreis').find('.old-price').should('contain', strike_checkout)  // Originalpreis einzeln
            cy.get('.checkout-table > :nth-child(1)').find('.einzelpreis').find('.cart-price').should('contain', final_checkout)  // red. Preis einzeln
            cy.get('.checkout-table > :nth-child(1)').find('.zwischensumme').find('.old-price').should('contain', strike_checkout_total)  // Originalpreis total
            cy.get('.checkout-table > :nth-child(1)').find('.zwischensumme').find('.cart-price').should('contain', final_checkout_total)  // red. Preis total

            //check Preis Bedienstab
            if (typeof kostenBedienstab != "undefined" && kostenBedienstab != "0,00") {
                // if payment is Vorkasse
                if (payment == 'Vorkasse') {
                    cy.get('.checkout-table > :nth-child(2)').find('.einzelpreis').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab einzeln
                    cy.get('.checkout-table > :nth-child(2)').find('.zwischensumme').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab total
                }
                //all other payment methods --> different layout of Bestellübersicht
                else {
                    cy.get('.checkout-table > :nth-child(4)').find('.einzelpreis').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab einzeln
                    cy.get('.checkout-table > :nth-child(4)').find('.zwischensumme').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab total
                }
            }
        }


        //check Rabatt
        if (typeof rabattCode != "undefined") {
            cy.contains('Rabatt (' + rabattCode + ')').next().should("contain", rabattBetrag)
        }

        //Versandkosten
        if (type != "Gutschein") {
            //check Versandkosten
            cy.get('.cart_versand_totals').should('contain', shippingCosts)
        }

        //check 'Sie sparen'
        if (typeof sieSparen != "undefined") {
            cy.get('.cart_saved_total.cart_value').should("contain", sieSparen)
        }

        //check Gesamtsumme
        if (type == "Muster") {
            cy.get('.cart_value').should('contain', "0,00")
        }
        else {
            cy.contains('Gesamtsumme').next('.cart_value').should("contain", total_checkout)
        }

    },

    check_RMG: function check_RMG() {

        cy.get('.checkout-table > :nth-child(2)').find('.checkout_item_name').should('contain', 'Richtig Messen Garantie')
        cy.get('.checkout-table > :nth-child(2)').find('.einzelpreis').find('.cart-price').should('contain', "kostenlos")  // Originalpreis einzeln
        cy.get('.checkout-table > :nth-child(2)').find('.zwischensumme').find('.cart-price').should('contain', "kostenlos")  // red. Preis einzeln
    },

    placeOrder: function placeOrder(type, rmg, payment, canceledPayment, failedPayment, reducedUnit, reducedLineTotal, befestigungUnit, befestigungTotal, kostenStab, kostenStabTotal, versandkosten, totalBackend, vatRate, vatProduct, vatRate2, vatBedienstab, vatRate3, vatBefestigung, vatTotal, rabattbetrag, rabattbetrag_1, rabattbetrag_2, rabattcode) {

        //if placeOrder=true and the baseUrl is unequal to production
        if (Cypress.env('placeOrder') && Cypress.config().baseUrl != "https://www.plissee-experte.de/") {
            cy.log('Die Base-URL lautet :' + Cypress.config().baseUrl)

            cy.log(type)
            cy.log(payment)

            confirmOrder(type, payment, canceledPayment, failedPayment)

            // check if successPage is loaded
            successPage.checkSuccessMessage()

            successPage.getOrdernumber().then((orderNumber) => {

                cy.log('Die Bestellung hat die Nummer: ' + orderNumber)

                //Go to backend
                cy.visit(Cypress.env('backend_url'))


                // BACKEND
                backEndPage.login()
                backEndPage.getOrder(orderNumber)
                backEndPage.checkOrder(type, reducedUnit, reducedLineTotal, befestigungUnit, befestigungTotal, kostenStab, kostenStabTotal, versandkosten, totalBackend, vatRate, vatProduct, vatRate2, vatBedienstab, vatRate3, vatBefestigung, vatTotal, rabattbetrag, rabattbetrag_1, rabattbetrag_2, rabattcode)
                backEndPage.check_RMG(rmg)
                backEndPage.logout()
            })

        } else {
            emptyCart(kostenStab, rmg)
        }


    }
}

//-------------------------END OF EXPORTED MODULES------------------------------------

function login(type, customer, email, password) {
    cy.log('login')
    cy.log(customer)
    if (customer == "guest") {
        if (type != "Muster") {
            cy.contains('Als Gast zur Kasse gehen').click()
        }
        else { //if (type == "Muster") {
            cy.contains(new RegExp("^" + "Als Gast bestellen" + "\\s*$")).click({ force: true })
        }
        cy.contains('Fortsetzen').click()
    }

    else if (customer == "register") {
        cy.contains('Registrieren').click()
        cy.contains('Fortsetzen').click()
    }

    else if (customer == "customer") {
        cy.get('input[id="login-email"]').type(email)
        cy.get('input[id="login-password"]').type(password)
        cy.get('button').contains('Anmelden').click()
    }
}

function check_js_alert() {
    // first checkt alert text
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Die USt-IdNr. ist ungültig.')
    })
}

function setCustomerInfo(login, prefix, first_name, last_name, company, vatID, email, street, postal_code, city, state, phone, shipping, password, prefix2, first_name2, last_name2, company2, vatID2, street2, postal_code2, city2, state2, phone2) {

    setBillingAddress(shipping, login, password, prefix, first_name, last_name, company, vatID, email, street, postal_code, city, state, phone)

    setShippingAddress(shipping, login, prefix2, first_name2, last_name2, company2, vatID2, street2, postal_code2, city2, state2, phone2)

}

function setBillingAddress(shipping, login, password, prefix, first_name, last_name, company, vatID, email, street, postal_code, city, state, phone) {

    if (login == "guest" || login == "register") {

        setPrefix(prefix)
        setFirstName(first_name)
        setLastName(last_name)
        setCompanyName(company)
        setEmail(email)
        setVatID(vatID)
        setAddress(street)
        setPostalCode(postal_code)
        setCity(city)
        setState(state)
        setPhone(phone)
        setPassword(login, password)
    }
    else if (login == "customer") {

        if (shipping == "new" || shipping == "") { // "" is for using shipping address from account
            cy.contains('An andere Adresse verschicken').click()
        }
        else if (shipping == "same") {
            cy.contains('An diese Adresse verschicken').click()
        }
        cy.get('button[title="Weiter"]').click()
        // cy.wait('@saveBilling') //--> führt zum Fehler, wird deaktiviert (11.05.2023)
    }
}

function setShippingAddress(shipping, login, prefix2, first_name2, last_name2, company2, vatID2, street2, postal_code2, city2, state2, phone2) {

    //An Lieferadresse aus Kundenkonto sersenden
    if (shipping == "" && login == "customer") { // take shipping address from account
        cy.contains('Fortsetzen').click()
    }

    //An gleiche Adresse versenden
    else if (shipping == "same" && login != "customer") {
        cy.get('button').contains('Weiter').click()
    }

    //An abw. Anschrift versenden
    else if (shipping == "new") {

        if (login == "customer") {
            //select: Neue Adresse
            cy.get('select[id="shipping-address-select"]').select("Neue Adresse")
        }
        else {
            cy.contains('An andere Adresse verschicken').click()
            cy.get('button').contains('Weiter').click()
        }

        setPrefix2(prefix2)
        setFirstName2(first_name2)
        setLastName2(last_name2)
        setCompanyName2(company2)
        setVatID2(vatID2)
        setAddress2(street2)
        setPostalCode2(postal_code2)
        setCity2(city2)
        setState2(state2)
        setPhone2(phone2)

        //Fortsetzen Button
        cy.get('#shipping-buttons-container').find('.btn.btn_orange').click()

    }
}

function checkShippingCosts(type, versandkosten) {  //  (3)/(4) "Versandart"

    if (type != "Muster") {
        cy.get('span.price').should(($txt) => {
            expect($txt).to.contain(versandkosten)
        })
        //Button "Fortsetzen"
        cy.get('#shipping-method-buttons-container').find('.btn.btn_orange').click()
    }
}

function setPayment(type, payment, missing_name, firstName, lastName) {

    if (type == "Muster") {
        //  DO NOTHING - NO PAYMENT SELECTION FOR MUSTER
    }
    else {

        cy.wait('@p2') // --> waiting for request: c.paypal.com/v1/r/d/b/p2


        if (payment == "Vorkasse") {
            cy.get('.payment_method.ppp.bankpayment input').click({ force: true })
            cy.get('.payment_method.ppp.bankpayment.ppp-selected').should('exist') //only an additional check of the right selection
        }

        else if (payment == "Paypal") {
            cy.get('.payment_method.ppp.paypal input').click({ force: true })
            cy.get('.payment_method.ppp.paypal.ppp-selected').should('exist') //only an additional check of the right selection
        }

        else if (payment == "Kreditkarte") {
            cy.get('.payment_method.ppp.card input').click({ force: true })
            cy.get('.payment_method.ppp.card.ppp-selected').should('exist') //only an additional check of the right selection
        }

        else if (payment == "Giropay") {
            cy.get('.payment_method.ppp.giropay input').click({ force: true })
            cy.get('.payment_method.ppp.giropay.ppp-selected').should('exist') //only an additional check of the right selection

            //**********************************************NEGATIVE TESTING***************************************************** */

        }

        else if (payment == "Sepa") {
            cy.get('.payment_method.ppp.sepa input').click({ force: true })
            cy.get('.payment_method.ppp.sepa.ppp-selected').should('exist') //only an additional check of the right selection
        }

        else if (payment == "Sofort") {
            cy.get('.payment_method.ppp.sofort input').click({ force: true })
            cy.get('.payment_method.ppp.sofort.ppp-selected').should('exist') //only an additional check of the right selection

            // cy.get('iframe.component-frame').iframe().find('select[data-testid="countries-mobile-dropdown"]').select('Deutschland')
        }
        else if (payment == "Rechnungskauf") {
            cy.get('.payment_method.ppp.ratepay input').click({ force: true })
            cy.get('.payment_method.ppp.ratepay.ppp-selected').should('exist') //only an additional check of the right selection

            cy.get('select[name="payment[birthdate_day]"]').select('01')
            cy.get('select[name="payment[birthdate_month]"]').select('01')
            cy.get('select[name="payment[birthdate_year]"]').select('2000')
        }

        cy.get('button:visible').contains('Fortsetzen').click()

    }
}

function confirmOrder(type, payment, canceledPayment, failedPayment) {


    if (type != "Muster") {
        cy.get('input[id="agreement-1"]').check()
        cy.get('input[id="agreement-2"]').check()

        //bei VORKASSE
        if (payment == "Vorkasse") {
            cy.get('button').contains('Jetzt kaufen').click()
        }

        //bei PAYPAL
        else if (payment == "Paypal") {

            cy.capturePopupFromIFrame()
            cy.paypalFlow('sb-zsomv8592744@personal.example.com', 'c)79sJ!.')
            cy.paypalPrice().should('to.contain', '440,05 EUR') // --> amount of the only paypal testcase we have, can be replaced with variable
            cy.paypalComplete()
        }

        //bei Kreditkarte
        else if (payment == "Kreditkarte") {

            cy.creditcardFlow()
        }

        else if (payment == "Giropay") {

            // cy.capturePopupFromIFrame()
            cy.giropayFlow(failedPayment, canceledPayment)
        }

        else if (payment == "Sepa") {

            cy.capturePopupFromIFrame()
            cy.sepaFlow()
        }

        else if (payment == "Sofort") {

            cy.sofortFlow(failedPayment, canceledPayment)
        }
        else if (payment == "Rechnungskauf") {

            cy.rechnungFlow()
        }
    }

    else if (type == "Muster") {
        cy.get('button').contains('Kostenfrei bestellen').click()
    }
}

function emptyCart(kostenStab, rmg) {

    // cy.get('.smallcartdiv').click()
    cy.get('.cart_block').click()

    cy.log(kostenStab)
    cy.log(rmg)

    if ((typeof kostenStab !== "undefined" && kostenStab !== "0,00") || typeof rmg !== "undefined") {  //if bedienstab OR RMG exists...
        cy.get('.cart-table > :nth-child(2)').find('.delete_item_btn').click()
    }
    cy.get('.cart-table > :nth-child(1)').find('.delete_item_btn').click()
}

function setPrefix(value) {
    cy.get('[id="billing:prefix"]').select(value)
}

function setPrefix2(value) {
    cy.get('[id="shipping:prefix"]').select(value)
}

function setFirstName(value) {
    cy.get('[id="billing:firstname"]').clear().type(value)
}

function setFirstName2(value) {
    cy.get('[id="shipping:firstname"]').clear().type(value)
}

function setLastName(value) {
    cy.get('[id="billing:lastname"]').clear().type(value)
}

function setLastName2(value) {
    cy.get('[id="shipping:lastname"]').clear().type(value)
}

function setCompanyName(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('[id="billing:company"]').clear().type(value)
    }
}

function setCompanyName2(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('[id="shipping:company"]').clear().type(value)
    }
}

function setVatID(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('[id="billing:vat_id"]').clear().type(value)
    }
}

function setVatID2(value) {
    if (typeof value !== "undefined" && value != "") {
        cy.get('[id="shipping:vat_id"]').clear().type(value)
    }
}

function setEmail(value) {
    cy.get('[id="billing:email"]').clear().type(value)
}

function setAddress(value) {
    cy.get('[id="billing:street1"]').clear().type(value)
}

function setAddress2(value) {
    cy.get('[id="shipping:street1"]').clear().type(value)
}

function setPostalCode(value) {
    cy.get('[id="billing:postcode"]').clear().type(value)
}

function setPostalCode2(value) {
    cy.get('[id="shipping:postcode"]').clear().type(value)
}

function setCity(value) {
    cy.get('[id="billing:city"]').clear().type(value)
}

function setCity2(value) {
    cy.get('[id="shipping:city"]').clear().type(value)
}

function setState(value) {
    cy.get('[id="billing:country_id"]').select(value)
}

function setState2(value) {
    cy.get('[id="shipping:country_id"]').select(value)
}

function setPhone(value) {
    cy.get('[id="billing:telephone"]').clear().type(value)
}

function setPhone2(value) {
    cy.get('[id="shipping:telephone"]').clear().type(value)
}


function setPassword(value, passw) {
    if (value == "register") {
        cy.get('input[id="billing:customer_password"]').type(passw)
        cy.get('input[id="billing:confirm_password"]').type(passw)
    }
}


function check_versandkosten_muster(shippingCosts) {
    cy.get('.cart_versand_totals').should('contain', shippingCosts)
}