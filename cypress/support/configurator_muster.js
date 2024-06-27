var cartPage = require("./cart.js");
var checkoutPage = require("./checkout.js");


module.exports = {

    configureMuster: function configureMuster(test) {
        const emailSuffix = Date.now();

        it(test.name, function () {

            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.stoff_url)
            checkFromPrices(test.abPreis, test.abPreis_red)
            addToCart()

            //-------------------CHECKING PRICES IN CART--------------------\\
            cartPage.checkCartMuster()

            //-------------------CHECKOUT------------------------------------\\
            checkoutPage.checkOut(test.produkttyp, test.missing_name, test.login, test.prefix, test.first_name, test.last_name, test.company_name, test.vatID, test.email, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, test.password, test.prefix_2, test.first_name_2, test.last_name_2, test.company_name_2, test.vatID_2, test.street_2, test.postal_code_2, test.city_2, test.state_2, test.phone_2, test.versandkosten, test.payment)
            checkoutPage.checkFinalPrices(test.produkttyp, test.payment, test.strike_checkout, test.strike_checkout_total, test.final_checkout, test.final_checkout_total, test.kosten_stab_checkout, test.rabatt_code, test.rabatt_betrag_checkout, test.versandkosten, test.sieSparen_checkout, test.total_checkout)
            checkoutPage.placeOrder(test.produkttyp, test.rmg, test.payment, test.canceled_payment, test.failed_payment, test.final_backend, test.final_backend_total, test.kosten_befestigung, test.kosten_befestigung_total, test.kosten_stab_backend, test.kosten_stab_checkout, test.versandkosten, test.total_backend, test.vat_rate, test.vat_product, test.vat_rate_2, test.vat_bedienstab, test.vat_rate_3, test.vat_befestigung, test.vat_total, test.rabattbetrag_backend, test.rabattbetrag_backend_1, test.rabattbetrag_backend_2, test.rabatt_code)
        })
    }
}

function checkFromPrices(oldPrice, newPrice) {
    cy.get('.original_price').should('contain', oldPrice)
    cy.get('.final_price').should('contain', newPrice)
}

function addToCart() {
    cy.get('button[title="Gratis Stoffmuster bestellen"]').click()
}
