var test = {

    "name": "priceCheck_customer_account_CH",

    "email": "testkonto_CH@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/zubehoer",
    "productname_1": "Wandwinkel", //5,00
    "cat_price_1": "4,20",  //  --> 5,00 / 119 * 100

    "categoryPage_2": "/zubehoer",
    "productname_2": "Halteclip klein", //4,00
    "cat_price_2": "3,36",  // --> 4,00 / 119 * 100

    "categoryPage_3": "/zubehoer",
    "productname_3": "FalzFix System '21",  //6,50
    "cat_price_3": "5,46",   //  --> 6,50 / 119 * 100

    "categoryPage_4": "/zubehoer",
    "productname_4": "Glasleistenwinkel - Set mit 2 Stück",  //12
    "cat_price_4": "10,08",   //  --> 12 / 119 * 100

    "productPage_1": "/spannschuh", //4,15
    "price_1": "3,49", // --> 4,15 / 119 * 100

    "productPage_2": "/klemmtraeger-21", //7,50
    "price_2": "6,30",  //  --> 7,50 / 119 * 100

    "productPage_3": "/bedienstab", // 44
    "price_3": "36,97",// --> 44 / 119 * 100

    "productPage_4": "/klemmtraeger-slim-einzeln", // 7,00
    "price_4": "5,88" // --> 7,00 / 119 * 100
}


describe('Login of existing customer (CH) with price check of different product types', () => {

    it(test.name, function () {

        //check/create testaccount --- testkonto_SE@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_CH@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Schweiz&password=Abcde_12345&billing_street=Teststrasse%205&billing_postcode=1234&billing_city=Zürich&billing_country=CH&shipping_street=Cypressstrasse%2010&shipping_postcode=1234&shipping_city=Basel&shipping_country=CH')


        cy.visit('/customer/account/login')
        userLogin(test.email, test.password)

        cy.visit(test.categoryPage_1)
        checkItemPrices(test.productname_1, test.cat_price_1)

        cy.visit(test.categoryPage_2)
        checkItemPrices(test.productname_2, test.cat_price_2)

        cy.visit(test.categoryPage_3)
        checkItemPrices(test.productname_3, test.cat_price_3)

        cy.visit(test.categoryPage_4)
        checkItemPrices(test.productname_4, test.cat_price_4)

        cy.visit(test.productPage_1)
        checkPricesPDP(test.price_1)

        cy.visit(test.productPage_2)
        checkPricesPDP(test.price_2)

        cy.visit(test.productPage_3)
        checkPricesPDP(test.price_3)

        cy.visit(test.productPage_4)
        checkPricesPDP(test.price_4)
    })
})

function userLogin(email, password) {

    cy.get('#login-email').should('be.visible').wait(500).type(email).should('have.value', email)
    cy.get('#login-password').should('be.visible').wait(500).type(password).should('have.value', password)
    cy.get('button').contains('Anmelden').click()
}

function checkItemPrices(productname, price) { // used only products without streichpreis
    cy.contains(productname).find('.price').should('contain', price)
}

function checkPricesPDP(price) {
    cy.get('.price').should('contain', price)
}

function userLogout() {

    cy.get('.account_block').should('be.visible').click()
    cy.contains('Abmelden').should('be.visible').click()
    cy.url().should('contain', '/customer/account/login')
}
