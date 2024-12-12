describe("Register functionality", () => {
  it("Register new user", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#loginPanel > :nth-child(3) > a").click();
    cy.get("input[id='customer.firstName']").type("hnn");
    cy.get("input[id='customer.lastName']").type("hnn");
    cy.get("input[id='customer.address.street']").type("hnn");
    cy.get("input[id='customer.address.city']").type("hnn");
    cy.get("input[id='customer.address.state']").type("hnn");
    cy.get("input[id='customer.address.zipCode']").type("hnn");
    cy.get("input[id='customer.phoneNumber']").type("hnn");
    cy.get("input[id='customer.ssn']").type("hnn");
    cy.get("input[id='customer.username']").type("hnn");
    cy.get("input[id='customer.password']").type("hnn");
    cy.get("#repeatedPassword").type("hnn");
    cy.get("input[value='Register']").click();
    // It should contains ' This username already exists.' and we use the method contains()
    // cy.get("span[id='customer.username.errors']").contains("This username already exists.");
    // we can also use should() ( check doc )
    cy.get("span[id='customer.username.errors']").should(
      "have.text",
      "This username already exists."
    );
  });
});
