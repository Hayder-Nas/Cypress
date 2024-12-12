describe("Register functionality", () => {
  it("Register new user", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#loginPanel > :nth-child(3) > a").click();
    cy.get("input[id='customer.firstName']").type("Hay");
    cy.get("input[id='customer.lastName']").type("Nay");
    cy.get("input[id='customer.address.street']").type("oxford");
    cy.get("input[id='customer.address.city']").type("london");
    cy.get("input[id='customer.address.state']").type("uk");
    cy.get("input[id='customer.address.zipCode']").type("EC1A 7AB");
    cy.get("input[id='customer.phoneNumber']").type("1234567891");
    cy.get("input[id='customer.ssn']").type("hnn");
    cy.get("input[id='customer.username']").type("Hay");
    cy.get("input[id='customer.password']").type("azerty123");
    cy.get("#repeatedPassword").type("azerty123");
    cy.get("input[value='Register']").click();
  });
});
