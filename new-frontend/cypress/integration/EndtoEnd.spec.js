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


    /*
describe("Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/login");
    });
    it("Tests login, facilities and maintenance", () => {
        cy.viewport(1440, 800);
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
        cy.get('.simplebar-content > :nth-child(2) > .nav-link').click();
        cy.wait(800);
        cy.url().should("eq", "http://localhost:3000/#/facilities");
        cy.wait(400)
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .btn').click({force: true});
        cy.wait(500);
        cy.get('.modal-footer > .btn').click();
        cy.wait(400);
        cy.get('.simplebar-content > :nth-child(3) > .nav-link').click()
        cy.wait(500);
        cy.url().should("eq", "http://localhost:3000/#/maintenance-requests")
        cy.get(':nth-child(1) > :nth-child(8) > div > .form-select').select("Nemo Hall",{force: true});
        cy.wait(400)
        cy.get(':nth-child(1) > :nth-child(9) > .btn').click()
        cy.wait(400)
        cy.visit("http://localhost:3000/#/maintenance-requests")
        cy.get(':nth-child(1) > :nth-child(6) > div').contains(/n.hall@nestmanager.com/i).should('be.visible');
        // cy.get('#thisEvent').contains(/Events/i).should('be.visible');
        
    });
});



describe("Test 3", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/login");
    });
    it("Tests login, facilities and maintenance", () => {
        cy.viewport(1440, 800);
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
        cy.get('[items="[object Object]"] > .nav-group-toggle').click()
        cy.wait(400)
        cy.get('.show > .nav-group-items > .nav-item > .nav-link').click()
        cy.wait(400)
        cy.get(':nth-child(2) > .form-control').type(
            "Test MP"
        );
        cy.wait(400)
        cy.get(':nth-child(3) > .form-control').type(
            "t2.mp@nestmanager.com"
        );
        cy.wait(400)
        cy.get(':nth-child(4) > .form-control').type(
            "test"
        );
        cy.wait(400)
        cy.get('.btn').click()
        cy.wait(400)
        cy.get('.ms-3 > .nav-item > .nav-link').click();
        cy.wait(400)
        cy.get(':nth-child(12) > .dropdown-item').click();
        cy.wait(600)
        cy.url().should("eq","http://localhost:3000/#/login")
        cy.get('#email').type(
            "t2.mp@nestmanager.com"
        );
        cy.wait(800);
        cy.get('#password').type(
            "test"
        );
        cy.wait(500);
        cy.get(':nth-child(1) > .btn').click();
        cy.wait(800);
        cy.url().should("eq","http://localhost:3000/#/assignedMR")
        
    });
});

*/



describe("Test 3", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/login");
    });
    it("Tests login, facilities and maintenance", () => {
        cy.viewport(1440, 800);
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
       
       
        
    });

});


