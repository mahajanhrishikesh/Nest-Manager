Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Add Apartment Test 1", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/apartments/add-apartment");
    });
    it("Successfully visits add apartment page", () => {
        cy.url().should("eq", "http://localhost:3000/#/apartments/add-apartment");
    });
});



describe("Add Apartment Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/apartments/add-apartment");
    });
    it("Successfully writes to the form", () => {
        cy.get('#aptNo').type(
            "909"
        );
        cy.wait(800);
        cy.get('#blockNo').type(
            "9"
        );
        cy.wait(800);
        cy.get('#roomCount').type(
            "3"
        );
        cy.wait(500);
        cy.get('#furniture').select("Un-Furnished");
        cy.wait(500);
        cy.get(".btn").click();
        cy.wait(2000);
    });
});
