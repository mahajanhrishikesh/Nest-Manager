describe("Running tests", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#/events')
    })
//  another sanity check
    it("should display elements correctly", () => {
        cy.get('#thisEvent').contains(/Events/i).should('be.visible');
    })
})