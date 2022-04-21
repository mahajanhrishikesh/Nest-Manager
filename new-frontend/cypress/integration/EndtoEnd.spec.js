Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Test 1", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/#/login");

    });
    it("Successfully visits add apartment page", () => {
        cy.url().should("eq", "http://localhost:3000/#/login");
    });
});

// cy.get('#email')
/*  it("Successfully writes to the form", () => {
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
       
    }); */
describe("Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/login");
    });
    it("Successfully writes to the form", () => {
        cy.get('#email').type(
            "g.newton@nestmanager.com"
        );
        cy.wait(800);
        cy.get('#password').type(
            "test123"
        );
        cy.wait(500);
        cy.get(':nth-child(1) > .btn').click();
        cy.wait(800);
        cy.url().should("eq", "http://localhost:3000/#/dashboard");
        cy.get('.simplebar-content > :nth-child(1) > .nav-link').click();
        cy.wait(800);
        cy.url().should("eq", "http://localhost:3000/#/overview");
        // cy.get('.simplebar-content > :nth-child(1) > .nav-link').click();
        cy.get('.simplebar-content > :nth-child(2) > .nav-link').click();
        cy.wait(800);
        cy.url().should("eq", "http://localhost:3000/#/facilities");
        cy.wait(800)

    });
});
