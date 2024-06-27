// This overwrite is required becuase Basic Authentification is not working
// for Electron Browser if the domain is defined by baseUrl Configuration
// see https://github.com/cypress-io/cypress/issues/1639

Cypress.Commands.overwrite('visit', (orig, url, options) => {
    options = options || {};
    if (Cypress.env('AUTH_USER') && Cypress.env('AUTH_PASS')) {
        options.auth = {
            username: Cypress.env('AUTH_USER'),
            password: Cypress.env('AUTH_PASS')
        };
    }
    return orig(url, options)
});

//***************************************************************************************** */
//***************************************************************************************** */
//***************************************************************************************** */
//***************************************************************************************** */
//***************************************************************************************** */
//***************************************************************************************** */
//***************************************************************************************** */

// ************************************************* PAYPAL-EXPRESS ***************************************************
//*********************************************************************************************************************/

Cypress.Commands.add('paypalExpress', (email, password) => {
    // Enable popup capture

    // Click on the PayPal button inside PayPal's iframe
    cy.get('#paypal-button iframe.component-frame').iframe().find('div[data-funding-source="paypal"]').click({ multiple: true })  //--> this provides 2 results --> { multiple: true } needed
    // It will first inject a loader, wait until it changes to the real content

    cy
        .popup()  //the preloader
        .log('PRELOADER')
        .wait(3000) // Not recommended, but the only way I found to wait for the real content

    cy
        .popup()
        .then($body => {
            // Check if we need to sign in
            // console.log("body", $body.innerHTML)
            if ($body.find('input#email').length) {
                cy.log('input email exists')
                cy
                    .popup()
                    .find('input#email')
                    .clear()
                    .type(email)
            }

            if ($body.find('input#password').is(':visible')) { //if it is a 1-STEP-FLOW
                cy.log('1-STEP-FLOW')
                cy.log('input passw is visible')

                cy.popup()
                    .find('input#password')
                    .should('be.visible')
                    .clear()
                    .type(password)
                cy.popup()
                    .find('button#btnLogin')
                    .click()
            }
            else { // Click on the button 'Weiter' in caseit is a 2-STEP-FLOW
                cy.log('2-STEP-FLOW')
                cy.log('input passw NOT visible')
                cy.popup()
                    .find('button:visible')
                    // .first()
                    .contains('Weiter')
                    .click()
                // .wait(3000)

                cy.popup()
                    .find('input#password')
                    .should('be.visible')
                    .clear()
                    .type(password)
                cy.popup()
                    .find('button#btnLogin')
                    .click()
            }
            // }
        })
})

// ************************************************* PAYPAL ***************************************************
//*************************************************************************************************************/


/**
 * Clicks on PayPal button and signs in
 */
Cypress.Commands.add('paypalFlow', (email, password) => {
    // Enable popup capture

    // ****** WORK AROUND ********************
    // without this workaround the iframe-button does not react in cypress runner
    cy.get('input[id="agreement-1"]').uncheck()
    cy.get('input[id="agreement-2"]').uncheck()
    cy.wait(1000)
    cy.get('input[id="agreement-1"]').check()
    cy.get('input[id="agreement-2"]').check()
    // ***************************************


    // Click on the PayPal button inside PayPal's iframe
    cy.get('#paypal-button-container iframe.component-frame').iframe().find('div[data-funding-source="paypal"]').click({ multiple: true })  //--> this provides 2 results --> { multiple: true } needed
    // It will first inject a loader, wait until it changes to the real content

    cy
        .popup()  //the preloader
        .log('PRELOADER')
        .wait(3000) // Not recommended, but the only way I found to wait for the real content

    cy
        .popup()
        .then($body => {
            // Check if we need to sign in
            // console.log("body", $body.innerHTML)
            if ($body.find('input#email').length) {
                cy.log('input email exists')
                cy
                    .popup()
                    .find('input#email')
                    .clear()
                    .type(email)
            }

            if ($body.find('input#password').is(':visible')) { //if it is a 1-STEP-FLOW
                cy.log('1-STEP-FLOW')
                cy.log('input passw is visible')

                cy.popup()
                    .find('input#password')
                    .should('be.visible')
                    .clear()
                    .type(password)
                cy.popup()
                    .find('button#btnLogin')
                    .click()
            }
            else { // Click on the button 'Weiter' in caseit is a 2-STEP-FLOW
                cy.log('2-STEP-FLOW')
                cy.log('input passw NOT visible')
                cy.popup()
                    .find('button:visible')
                    .contains('Weiter')
                    .click()

                cy.popup()
                    .find('input#password')
                    .should('be.visible')
                    .clear()
                    .type(password)
                cy.popup()
                    .find('button#btnLogin')
                    .click()
            }
        }) //end of .then
})

/**
 * Returns the price shown in PayPal's summary
 */
Cypress.Commands.add('paypalPrice', () => {

    cy
        .popup()
        .log('LOADING')
        .wait(3000)

    return cy
        .popup()
        .find('span[data-testid="header-cart-total"]')
})

/**
 * Completes PayPal flow
 */
Cypress.Commands.add('paypalComplete', () => {
    cy.log('PAYPAL COMPLETE')
    cy
        .popup()
        .find('ul.charges')
        .should('not.to.be.empty')

    cy
        .popup()
        .find('button#payment-submit-btn')
        .click()
})

/**
 * Cancel PayPal flow
 */
Cypress.Commands.add('cancelPaypal', () => {
    cy.log('CANCEL PAYPAL')
    cy
        .popup()
        .find('a[data-testid="cancel-link"]')
        .click()
})

/**
 * Complete PayPal Express flow
 */
Cypress.Commands.add('confirmPaypalExpress', () => {
    cy.log('CONFIRM PAYPAL EXPRESS')
    cy.wait(3000) // Not recommended, but the only way I found to wait for the real content

    cy
        .get('#paypalexpress_info_wrapper').find('#agreement-1').check()
        .get('#paypalexpress_info_wrapper').find('#agreement-2').check()
        .get('button#confirm-pp').contains('Jetzt kaufen').click()
})


// ************************************************* RECHNUNG ***********************************************
//*************************************************************************************************************/


Cypress.Commands.add('rechnungFlow', () => {

    cy.get('button[title="Jetzt kaufen und später per Rechnung zahlen"]').click()
})


// ************************************************* SOFORT ***************************************************
//*************************************************************************************************************/


Cypress.Commands.add('sofortFlow', (failed_payment, canceled_payment) => {

    // Click on the PayPal button inside PayPal's iframe
    // cy.get('#checkout-review-submit iframe.component-frame').iframe().find('div[data-funding-source="sofort"]').click()
    // button is not inside an iframe anymore --> simple click on button works fine:
    cy.get('#review-buttons-container > button').click()

    cy
        // .popup()  //the preloader --> new: no new window popups up --> .popup() not needed here any more
        .wait(5000) // Not recommended, but the only way I found to wait for the real content

    // cy
    // .popup() //--> new: no new window popups up --> .popup() not needed here any more
    cy.get('body')
        .then($body => {
            if ($body.find('#pp-simulator').length) {  //if giropay-form exists
                cy.log('new window Sofortüberweisung')

                if (canceled_payment == true) {

                    cy.log('SOFORT TO BE CANCELED')
                    cy.get('button').contains('Test Canceled Payment').click()
                    cy.log('SOFORT CANCELED')

                    // checkt alert text
                    cy.on('window:alert', (text) => {
                        expect(text).to.equal('Die Zahlung hat einen Fehler verursacht. Bitte versuchen Sie es erneut oder wählen eine andere Zahlart.')
                    })

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    //proceed to checkout
                    cy.get('.totals > .checkout-types button').click()
                    cy.url().should('contain', '/checkout/onepage')

                    // klick Fortsetzen @Wie möchten sie zur kasse gehen
                    cy.contains('Als Gast zur Kasse gehen').click()
                    cy.contains('Fortsetzen').click()

                    // billing address --> click button 'Weiter'
                    cy.get('button[title="Weiter"]').click()

                    // shipping information --> click button 'Weiter
                    //Button "Fortsetzen"
                    cy.get('#shipping-method-buttons-container').find('.btn.btn_orange').click()

                    cy.wait('@p2') // --> waiting for request: c.paypal.com/v1/r/d/b/p2

                    //payments: select 'Vorkasse' this time
                    cy.get('.payment_method.ppp.bankpayment input').click({ force: true })
                    cy.get('.payment_method.ppp.bankpayment.ppp-selected').should('exist') //only an additional check of the right selection

                    //click 'Fortsetzen' -Button
                    cy.get('button:visible').contains('Fortsetzen').click()

                    //retry to submit the order @Bestellübersicht
                    cy.wait(2000)
                    cy.get('#agreement-1').check({ force: true })
                    cy.get('#agreement-2').check({ force: true })

                    //if Giro was selected in 2nd round
                    // cy.capturePopupFromIFrame()
                    // cy.giropayFlow2ndRound()

                    // click 'Jetzt kaufen'
                    cy.get('button').contains('Jetzt kaufen').click()

                }
                else if (failed_payment == true) {

                    cy.log('SOFORT TO BE FAILED')
                    cy.get('button').contains('Test Failed Payment').click()
                    cy.log('SOFORT Failed')

                    // checkt alert text
                    cy.on('window:alert', (text) => {
                        expect(text).to.equal('Die Zahlung hat einen Fehler verursacht. Bitte versuchen Sie es erneut oder wählen eine andere Zahlart.')
                    })

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    //proceed to checkout
                    cy.get('.totals > .checkout-types button').click()
                    cy.url().should('contain', '/checkout/onepage')

                    // klick Fortsetzen @Wie möchten sie zur kasse gehen
                    cy.contains('Als Gast zur Kasse gehen').click()
                    cy.contains('Fortsetzen').click()

                    // billing address --> clcik button 'Weiter'
                    cy.get('button[title="Weiter"]').click()

                    // shipping information --> click button 'Weiter
                    //Button "Fortsetzen"
                    cy.get('#shipping-method-buttons-container').find('.btn.btn_orange').click()

                    cy.wait('@p2') // --> waiting for request: c.paypal.com/v1/r/d/b/p2

                    //payments: select 'Vorkasse' this time
                    cy.get('.payment_method.ppp.bankpayment input').click({ force: true })
                    cy.get('.payment_method.ppp.bankpayment.ppp-selected').should('exist') //only an additional check of the right selection

                    //click 'Fortsetzen' -Button
                    cy.get('button:visible').contains('Fortsetzen').click()

                    //retry to submit the order @Bestellübersicht
                    cy.wait(2000)
                    cy.get('#agreement-1').check({ force: true })
                    cy.get('#agreement-2').check({ force: true })

                    //if Giro was selected in 2nd round
                    // cy.capturePopupFromIFrame()
                    // cy.giropayFlow2ndRound()

                    // click 'Jetzt kaufen'
                    cy.get('button').contains('Jetzt kaufen').click()

                }
                else {
                    cy
                        .get('button').contains('Test Successful Payment')
                        .click()
                }
            }
        })
})

// ************************************************* SEPA ***********************************************
//*************************************************************************************************************/


Cypress.Commands.add('sepaFlow', () => {
    // Enable popup capture

    // ****** WORK AROUND ********************
    // without this workaround the iframe-button does not react in cypress runner
    cy.get('input[id="agreement-1"]').uncheck()
    cy.get('input[id="agreement-2"]').uncheck()
    cy.wait(1000)
    cy.get('input[id="agreement-1"]').check()
    cy.get('input[id="agreement-2"]').check()
    // ***************************************


    // Click on the PayPal button inside PayPal's iframe
    cy.get('#checkout-review-submit iframe.component-frame').iframe().find('div[data-funding-source="sepa"] .paypal-button-label-container').wait(2000).click()
    cy.wait(1000)

    cy
        .popup()  //the preloader
        // .find('div')
        // .should('not.exist')
        .wait(5000) // Not recommended, but the only way I found to wait for the real content

    cy
        .popup()
        .then($body => {
            if ($body.find('form').length) {  //if form exists

                cy
                    .popup()
                    .find('input#bankIban')
                    // .type('GB94BARC10201530093459') // non-DE IBANS führen zu Fehlern
                    .type('DE80494501201220230930')  // works fine

                cy
                    .popup()
                    .find('input#dateOfBirth')
                    .type('01012000')

                cy
                    .popup()
                    .find('input#phone')
                    .type('+1724920233')

                cy
                    .popup()
                    .find('input#email')
                    .type('hakandemirhan@livoneo.com')

                // 'Angaben speichern und PayPal-Konto eröffnen' nicht aktivieren, deswegen auskommentiert
                // cy
                //     .popup()
                //     // .find('.ppvx_switch__state___2-9-19-beta-0')
                //     .find('.css-ltr-1ce6bcu-container')
                //     .click()

                cy
                    .popup()
                    .find('button[type="submit"]')
                    .click()
                    .wait(5000)

                // in case of new popup content:

                /*cy
                    .popup()
                    .find('input#ibanNumber')
                    .type('GB94BARC10201530093459')

                cy
                    .get('select[name="dobDay"]').select('01')
                    .get('select[name="dobMonth"]').select('01')
                    .get('select[name="dobYear"]').select('2000')

                cy
                    .popup()
                    .find('select#dobDay').select('01')
                    .find('select#dobMonth').select('01')
                    .find('select#dobYear').select('2000')

                cy
                    .popup()
                    .find('input#telephone')
                    .type('+1724920233')

                cy
                    .popup()
                    .find('input#email')
                    .type('hilal@delphinus-test.de')

                cy
                    .popup()
                    .find('label').contains('Nein danke.')
                    .click()
                    .wait(2000)

                cy
                    .popup()
                    .find('input#sepaGuestAgree')
                    .click()

                cy.popup()
                    .find('button#guestSubmit')
                    .click()
                    .wait(5000)*/

            }
        })
})
// ************************************************* GIROPAY ***********************************************
//*************************************************************************************************************/


Cypress.Commands.add('giropayFlow', (failed_payment, canceled_payment) => {
    // Enable popup capture

    // Click on the PayPal button inside PayPal's iframe
    // cy.get('#checkout-review-submit iframe.component-frame').iframe().find('div[data-funding-source="giropay"]').click()
    // button is not inside an iframe anymore --> simple click on button works fine:
    cy.get('#checkout-review-submit button[type="submit"]').click()

        // cy
        //     .popup()  //the preloader
        //     .find('div')
        //     .should('not.exist')
        .wait(5000) // Not recommended, but the only way I found to wait for the real content

    // cy
    //     .popup()
    cy.get('body')
        .then($body => {
            if ($body.find('#pp-simulator').length) {  //if giropay-form exists

                if (canceled_payment == true) {

                    cy.log('PAYMENT TO BE CANCELED')

                    cy
                        // .popup()
                        // .find('input#cancelSubmit')
                        .get('button').contains('Test Canceled Payment')
                        .click()

                    cy.log('GIROPAY CANCELED')


                    // checkt alert text
                    cy.on('window:alert', (text) => {
                        expect(text).to.equal('Die Zahlung hat einen Fehler verursacht. Bitte versuchen Sie es erneut oder wählen eine andere Zahlart.')
                    })

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    //proceed to checkout
                    cy.get('.totals > .checkout-types button').click()

                    // Click Als Gast zur Kasse gehen and Fortsetzen
                    cy.contains('Als Gast zur Kasse gehen').click()
                    cy.contains('Fortsetzen').click()

                    //click Weiter button in checkout 'rechnungsadresse'
                    cy.get('button').contains('Weiter').click()

                    //Button "Fortsetzen" in Versandinformationen
                    cy.get('#shipping-method-buttons-container').find('.btn.btn_orange').click()

                    //select 'Vorkasse' this time
                    cy.get('div[class="payment_method ppp bankpayment"]').click().wait(1000)
                    cy.get('div[class="payment_method ppp bankpayment ppp-selected"]')  //only an additional check of the right selection


                    //click 'Fortsetzen' -Button
                    cy.get('.btn_orange.payment-submit-button').click()


                    //retry to submit the order @Bestellübersicht
                    cy.wait(2000)
                    cy.get('#agreement-1').check({ force: true })
                    cy.get('#agreement-2').check({ force: true })

                    //if Giro was selected in 2nd round
                    // cy.capturePopupFromIFrame()
                    // cy.giropayFlow2ndRound()

                    // we choosed 'Vorkasse' after the alert-check
                    cy.get('button[title="Jetzt kaufen"]').click()

                }
                else if (failed_payment == true) {

                    cy.log('PAYMENT TO BE FAILED')

                    cy
                        // .popup()
                        // .find('input#cancelSubmit')
                        .get('button').contains('Test Failed Payment')
                        .click()

                    cy.log('GIROPAY FAILED')


                    // checkt alert text
                    cy.on('window:alert', (text) => {
                        expect(text).to.equal('Die Zahlung hat einen Fehler verursacht. Bitte versuchen Sie es erneut oder wählen eine andere Zahlart.')
                    })

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    //proceed to checkout
                    cy.get('.totals > .checkout-types button').click()

                    // Click Als Gast zur Kasse gehen and Fortsetzen
                    cy.contains('Als Gast zur Kasse gehen').click()
                    cy.contains('Fortsetzen').click()

                    //click Weiter button in checkout 'rechnungsadresse'
                    cy.get('button').contains('Weiter').click()

                    //Button "Fortsetzen" in Versandinformationen
                    cy.get('#shipping-method-buttons-container').find('.btn.btn_orange').click()

                    //select 'Vorkasse' this time
                    cy.get('div[class="payment_method ppp bankpayment"]').click().wait(1000)
                    cy.get('div[class="payment_method ppp bankpayment ppp-selected"]')  //only an additional check of the right selection


                    //click 'Fortsetzen' -Button
                    cy.get('.btn_orange.payment-submit-button').click()


                    //retry to submit the order @Bestellübersicht
                    cy.wait(2000)
                    cy.get('#agreement-1').check({ force: true })
                    cy.get('#agreement-2').check({ force: true })

                    //if Giro was selected in 2nd round
                    // cy.capturePopupFromIFrame()
                    // cy.giropayFlow2ndRound()

                    // we choosed 'Vorkasse' after the alert-check
                    cy.get('button[title="Jetzt kaufen"]').click()

                }
                else {
                    cy
                        // .popup()
                        .get('button').contains('Test Successful Payment')
                        .click()
                }
            }
        })
})

// ************************************************* CREDIT CARD ***********************************************
//*************************************************************************************************************/


Cypress.Commands.add('creditcardFlow', () => {

    // ****** WORK AROUND ********************
    // without this workaround the iframe-button does not react in cypress runner
    cy.get('input[id="agreement-1"]').uncheck()
    cy.get('input[id="agreement-2"]').uncheck()
    cy.wait(1000)
    cy.get('input[id="agreement-1"]').check()
    cy.get('input[id="agreement-2"]').check()
    // ***************************************

    cy.get('#checkout-review-submit iframe.component-frame').iframe().find('div[data-funding-source="card"]').click()

    cy.wait(5000) //allow the inputfields to load completely

    cy.get('#checkout-review-submit iframe.component-frame').iframe().find('iframe.zoid-visible').then(($iframe) => {

        cy.wait(5000) //allow the inputfields to load completely
        // cy.wait('@p2') // --> waiting for request: c.paypal.com/v1/r/d/b/p2


        cy.wrap($iframe).iframe().find('input#credit-card-number').type('4020022493974697')
        cy.wrap($iframe).iframe().find('#expiry-date').type('11 / 24')
        cy.wrap($iframe).iframe().find('#credit-card-security').type('079')

        cy.wait(2000)

        //switch currency to EUR
        // cy.wrap($iframe).iframe().find('input#vendor-currency-conversion-option').check({ force: true })

        //check amount --> we have only one case with credit card therefore hardcoded value here
        // cy.wrap($iframe).iframe().find('span').contains('Sie zahlen insgesamt:').next().should('contain', '212,26 EUR')

        //select country
        cy.wrap($iframe).iframe().find('.country').select('AT')

        cy.wrap($iframe).iframe().find('input[name="givenName"]').type('Hilal')
        cy.wrap($iframe).iframe().find('input[name="familyName"]').type('Bulut')
        cy.wrap($iframe).iframe().find('input[name="line1"]').type('Kobelgasse 7')
        cy.wrap($iframe).iframe().find('input[name="line2"]').type('Hochparterre')
        cy.wrap($iframe).iframe().find('input[name="postcode"]').type('1110')
        cy.wrap($iframe).iframe().find('input[name="city"]').type('Wien')
        cy.wrap($iframe).iframe().find('input[id="phone"]').type('17600099955')
        cy.wrap($iframe).iframe().find('input[id="email"]').type('hilal@livoneo.com')

        //submit button
        cy.wrap($iframe).iframe().find('button#submit-button').click()
    })
})


//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */



/**
 * Returns an iframe content
 */
Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
    return new Cypress.Promise(resolve => {
        $iframe.ready(function () {
            resolve($iframe.contents().find('body'));
        });
    });
});

// Used to keep the reference to the popup window
const state = {}

/**
 * Intercepts calls to window.open() to keep a reference to the new window
 */
// https://stackoverflow.com/questions/72835830/stubbing-link-inside-an-iframe
Cypress.Commands.add('capturePopupFromIFrame_express', () => {
    cy.wait(3000)
    cy.get('#paypal-button iframe.component-frame')
        .its('0.contentWindow').then((win) => {
            const open = win.open
            cy
                .stub(win, 'open').as("PopupOpen")
                .callsFake((...params) => {
                    // Capture the reference to the popup
                    state.popup = open(...params)
                    return state.popup
                })
        })
})

Cypress.Commands.add('capturePopupFromIFrame', () => {
    // cy.get('#checkout-review-submit iframe.component-frame')
    cy.wait(3000)
    cy.get('#paypal-button-container iframe.component-frame')
        .its('0.contentWindow').then((win) => {
            const open = win.open
            cy
                .stub(win, 'open').as("PopupOpen")
                .callsFake((...params) => {
                    // Capture the reference to the popup
                    state.popup = open(...params)
                    return state.popup
                })
        })
})

/**
 * Returns a wrapped body of a captured popup
 */
Cypress.Commands.add('popup', () => {
    cy.log('IN PAYPAL POPUP')
    cy.wait(1000)
    // auf das DOM des Popups zugreifen
    const popup = Cypress.$(state.popup.document)
    return cy.wrap(popup.contents().find('body'))
})

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */