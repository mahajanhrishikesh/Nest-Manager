describe("Load these each time", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#/facilities')
    })

    it("Check for all functionalities", () => {
        cy.get('#thisFac').contains(/Facilities/i).should('be.visible');
    })

    it("Check for all functionalities", () => {
        cy.get('#thisMac').should('not.exist');
    })
})