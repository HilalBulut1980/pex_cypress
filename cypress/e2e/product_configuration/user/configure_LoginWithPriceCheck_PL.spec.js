var test = {

    "name": "priceCheck_customer_account_PL",

    "email": "testkonto_PL@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/plissee-violett",
    "productname_1": "Lecce-4914",
    "catPrice_special_1": "41,65",  // R5 + R6 = 67 -5,00 -35% = 40,30 --> /119*123 = 41,65
    "catPrice_old_1": "69,25", // 67,00 /119 * 123

    "categoryPage_2": "/plissee-weiss",
    "productname_2": "Monza-1113",
    "catPrice_special_2": "59,12",  // R5 + R6 = 93,00 -5,00 -35% = 57,20  --> /119*123 = 59,12
    "catPrice_old_2": "96,13",  //93,00 /119 * 123

    "categoryPage_3": "/plissee-blau",
    "productname_3": "Finura-4440",
    "catPrice_special_3": "45,69",  // R5 + R6 = 73 -5,00 -35% = 44,20 --> /119*123 = 45,69
    "catPrice_old_3": "75,45",  //73,00 /119 * 123

    "productPage_1": "/rom-1064",
    "price_special_1": "41,65",  // R5 + R6 = 67 -5,00 -35% = 40,30 --> /119*123 = 41,65
    "price_old_1": "69,25", //67,00 /119 * 123

    "productPage_2": "/structura-4032",
    "price_special_2": "42,64", // R5 + R12 + R11 = 82 -5,00 -2,00 -45% = 41,25 --> /119*123 = 42,64
    "price_old_2": "84,76", //82,00 /119 * 123

    "servicePage_1": "/zusatzauftrag-laengere-fuehrungsschnuere",
    "price_service_1": "20,67",  // 20,00 /119 * 123 = 20,67

    "servicePage_2": "/reparaturauftrag-schnur-ersetzen",
    "price_service_2": "31,01"  // 30,00 /119 * 123 = 31,01
}


describe('Login of existing customer (PL) with price check of different product types', () => {

    it(test.name, function () {

        //check/create testaccount --- testkonto_PL@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_PL@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Polen&password=Abcde_12345&billing_street=Teststrasse%2010&billing_postcode=1235&billing_city=Warschau&billing_country=PL&shipping_street=Testingstreet%203&shipping_postcode=4321&shipping_city=Warschau&shipping_country=PL')


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
