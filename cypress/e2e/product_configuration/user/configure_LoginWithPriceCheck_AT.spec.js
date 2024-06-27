var test = {

    "name": "priceCheck_customer_account_AT",

    "email": "testkonto_AT@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/plissee-rot",
    "productname_1": "Meran-1177",
    "catPrice_special_1": "51,43",  // R5 + R18 = 73 -5,00 -25% = 51 --> /119*120 = 51,43
    "catPrice_old_1": "73,61", // 73,00 /119 * 120

    "categoryPage_2": "/plissee-beige",
    "productname_2": "Peschiera-2035",
    "catPrice_special_2": "29,75",  // R5 + R8 = 64,00 -5,00 -50% = 29,50  --> /119*120 = 29,75
    "catPrice_old_2": "64,54",  //64,00 /119 * 120

    "categoryPage_3": "/plissee-gelb",
    "productname_3": "Luna-4180",
    "catPrice_special_3": "45,38",  // R5 + R12 + R7 = 82 -5,00 -2,00 -40% = 45 --> /119*120 = 45,38
    "catPrice_old_3": "82,69",  //82,00 /119 * 120

    "productPage_1": "/riva-2083",
    "price_special_1": "49,61",  // R7 = 82 -40% = 49,20 --> /119*120 = 49,61
    "price_old_1": "82,69", //82,00 /119 * 120

    "productPage_2": "/liviano-4313",
    "price_special_2": "37,71", // R5 + R11 = 73 -5,00 -45% = 37,40 --> /119*120 = 37,71
    "price_old_2": "73,61", //73,00 /119 * 120

    "servicePage_1": "/aenderungsauftrag-breite",
    "price_service_1": "50,42",  // 50,00 /119 * 120 = 50,42

    "servicePage_2": "/aenderungsauftrag-schnurlaenge",
    "price_service_2": "30,25"  // 30,00 /119 * 120 = 30,25
}


describe('Login of existing customer (AT) with price check of different product types', () => {

    it(test.name, function () {

        //check/create testaccount --- testkonto_AT@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_AT@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Oesterreich&password=Abcde_12345&billing_street=Teststrasse%203&billing_postcode=1110&billing_city=Graz&billing_country=AT&shipping_street=Kobelgasse%203&shipping_postcode=1110&shipping_city=Wien&shipping_country=AT')

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

        userLogout()
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