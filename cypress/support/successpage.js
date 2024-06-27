module.exports = {

    checkSuccessMessage: function proceedToCheckout() {

        cy.get('.bottom_success_part > :nth-child(1)').should("contain", "Ihre Bestellnummer lautet:")
        cy.get('.bottom_success_part > :nth-child(2)').should("contain", "In wenigen Augenblicken erhalten Sie eine Bestätigungsmail.")
    },

    getOrdernumber: function getOrdernumber() {
        //Cypress does it's own promise chaining --> works fine!
        return cy.get('.bottom_success_part > :nth-child(1)').invoke('text')
            .then(($orderMessage) => $orderMessage.slice(27, 36))
    }
}