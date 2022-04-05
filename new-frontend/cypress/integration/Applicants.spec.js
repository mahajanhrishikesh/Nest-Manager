Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Remove Apartment Test 1", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/applicants");
    });
    it("Successfully visits add apartment page", () => {
        cy.url().should("eq", "http://localhost:3000/#/applicants");
    });
});


describe("Remove Apartment Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/applicants");
    });
    it("Successfully writes to the form", () => {
       
        cy.get(':nth-child(1) > :nth-child(5) > div > .btn-success').click();
        cy.wait(2000);
    });
});
