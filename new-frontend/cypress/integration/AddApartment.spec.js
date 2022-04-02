describe("Add Apartment Test 1", () => {
    beforeEach(() => {
        cy.visit("http://http://localhost:3000/#/apartments/add-apartment");
    });
    it("Successfully visits add apartment page", () => {
        cy.url().should("eq", "http://http://localhost:3000/#/apartments/add-apartment");
    });
});