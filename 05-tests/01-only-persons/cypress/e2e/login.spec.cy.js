describe('template spec', () => {
  
  it('Valida a funcionalidade de autenticao do usuario', () => {
    cy.visit('http://localhost:8081/src/pages/login.html');
    validateUser();
  });

  const validateUser = () => {
    cy.get('input[id="user"]').type('chucrute');
    cy.get('input[id="password"]').type('chucrutao');
    cy.contains('button', 'Acessar').click();
  }
})