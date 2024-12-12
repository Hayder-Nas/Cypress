describe("Login functionality", () => {
  it("Login existing user", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login");
    cy.get("input[id='username']").type("student");
    cy.get("input[id='password']").type("Password123");
    cy.get("button[id='submit']").click();
    cy.get(".post-title").should("have.text", "Logged In Successfully")
  });
});
