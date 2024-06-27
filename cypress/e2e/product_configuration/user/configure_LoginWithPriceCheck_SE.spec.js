var test = {

    "name": "priceCheck_customer_account_SE",

    "email": "testkonto_SE@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/plissee-rot",
    "productname_1": "Meran-1177",
    "catPrice_special_1": "53,57",  // R5 + R18 = 73 -5,00 -25% = 51 --> /119*125 = 53,57
    "catPrice_old_1": "76,68", // 73,00 /119 * 125

    "categoryPage_2": "/plissee-beige",
    "productname_2": "Peschiera-2035",
    "catPrice_special_2": "30,99",  // R5 + R8 = 64,00 -5,00 -50% = 29,50  --> /119*125 = 30,99
    "catPrice_old_2": "67,23",  //64,00 /119 * 125

    "categoryPage_3": "/plissee-gelb",
    "productname_3": "Luna-4180",
    "catPrice_special_3": "47,27",  // R5 + R12 + R7 = 82 -5,00 -2,00 -40% = 45 --> /119*125 = 47,27
    "catPrice_old_3": "86,13",  //82,00 /119 * 125

    "productPage_1": "/riva-2083",
    "price_special_1": "51,68",  // R7 = 82 -40% = 49,20 --> /119*125 = 51,68
    "price_old_1": "86,13", //82,00 /119 * 125

    "productPage_2": "/liviano-4313",
    "price_special_2": "39,29", // R5 + R11 = 73 -5,00 -45% = 37,40 --> /119*125 = 39,29
    "price_old_2": "76,68", //73,00 /119 * 125

    "servicePage_1": "/aenderungsauftrag-breite",
    "price_service_1": "52,52",  // 50,00 /119 * 125 = 52,52

    "servicePage_2": "/aenderungsauftrag-schnurlaenge",
    "price_service_2": "31,51"  // 30,00 /119 * 125 = 31,51
}


describe('Login of existing customer (SE) with price check of different product types', () => {

    it(test.name, function () {

        //check/create testaccount --- testkonto_SE@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_SE@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Schweden&password=Abcde_12345&billing_street=Teststrasse%205&billing_postcode=8521&billing_city=Stockholm&billing_country=SE&shipping_street=Testingstreet%2010&shipping_postcode=1234&shipping_city=Testcity&shipping_country=SE')


        cy.visit('/customer/account/login')
        userLogin(test.email, test.password)

        cy.visit(test.categoryPage_1)
        checkItemPrices(test.productname_1, test.catPrice_old_1, test.catPrice_special_1)

        cy.visit(test.categoryPage_2)
        checkItemPrices(test.productname_2, test.catPrice_old_2, test.catPrice_special_2)

        cy.visit(test.categoryPage_3)
        checkItemPrices(test.productname_3, test.catPrice_old_3, test.catPrice_special_3)

        cy.visit(test.productPage_1)
        checkPricesPDP(test.price_special_1, test.price_old_1)

        cy.visit(test.productPage_2)
        checkPricesPDP(test.price_special_2, test.price_old_2)

        cy.visit(test.servicePage_1)
        checkServicePrice(test.price_service_1)

        cy.visit(test.servicePage_2)
        checkServicePrice(test.price_service_2)
    })
})

function userLogin(email, password) {

    cy.get('#login-email').should('be.visible').wait(500).type(email).should('have.value', email)
    cy.get('#login-password').should('be.visible').wait(500).type(password).should('have.value', password)
    cy.get('button').contains('Anmelden').click()
}

function checkItemPrices(productname, old_price, special_price) {
    cy.contains(productname).find('.original_price').should('contain', old_price)
    cy.contains(productname).find('.final_price').should('contain', special_price)
}

function checkPricesPDP(special_price, old_price) {
    cy.get('.original_price').should('contain', old_price)
    cy.get('.final_price').should('contain', special_price)
}

function checkServicePrice(price) {
    cy.get('.price').should("contain", price)
}

function userLogout() {

    cy.get('.account_block').should('be.visible').click()
    cy.contains('Abmelden').should('be.visible').click()
    cy.url().should('contain', '/customer/account/login')
}
