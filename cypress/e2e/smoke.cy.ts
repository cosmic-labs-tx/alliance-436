it("titles are correct", () => {
  const page = cy.visit("/");

  page.get("h1").should("have.text", "Welcome to the Friendly Bear Labs Starter");
});
