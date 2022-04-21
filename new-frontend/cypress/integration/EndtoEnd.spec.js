Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Add New Personnel Test 1", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/#/manage-maintenance/manage-personnel");

    });
    it("Successfully visits add apartment page", () => {
        cy.url().should("eq", "http://localhost:3000/#/manage-maintenance/manage-personnel");
    });
});



describe("Add New Personnel Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/manage-maintenance/manage-personnel");
    });
    it("Successfully writes to the form", () => {
        cy.get(':nth-child(2) > .form-control').type(
            "Jeffrey Dahmar"
        );
        cy.wait(800);
        cy.get(':nth-child(3) > .form-control').type(
            "jeffd@nestmanager.com"
        );
        cy.wait(800);
        cy.get(':nth-child(4) > .form-control').type(
            "test123"
        );
        cy.wait(500);
        cy.get(".btn").click();
        cy.wait(500);
        cy.get('.avatar-img').click();
        cy.wait(500);
        cy.get(':nth-child(12) > .dropdown-item').click();
        cy.wait(500);
        cy.url().should("eq", "http://localhost:3000/#/login");
    });
});
