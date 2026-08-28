describe('Flujo de usuario: Añadir producto al carrito', () => {
  it('Debería inicializar el carrito en 0 e incrementar a 1 al hacer clic en el botón', () => {
    cy.visit('/');

    cy.get('#cart-count').should('have.text', '0');

    cy.get('#add-to-cart-btn').click();

    cy.get('#cart-count').should('have.text', '1');
  });
});