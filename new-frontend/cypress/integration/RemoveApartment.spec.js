Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Remove Apartment Test 1", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/apartments/remove-apartment");
    });
    it("Successfully visits add apartment page", () => {
        cy.url().should("eq", "http://localhost:3000/#/apartments/remove-apartment");
    });
});


describe("Remove Apartment Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/apartments/remove-apartment");
    });
    it("Successfully writes to the form", () => {
        cy.get('#aptNo').type(
            "909"
        );
        cy.wait(500);
        cy.get('#blockNo').type(
            "9"
        );
        cy.get(".btn").click();
        cy.wait(2000);
    });
});
