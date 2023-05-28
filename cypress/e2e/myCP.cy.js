 /// <reference types="cypress" />
 
 describe('my first',()=>{

    it('login yo Library',()=>{

cy.visit('https://library1.cydeo.com/login.html');
cy.get(':nth-child(3) > label').type('librarian51@library');
cy.get(':nth-child(4) > label').type('libraryUser');
cy.get('.btn').click();

cy.get('#navbarDropdown > span').should('contain','51');
 cy.get(':nth-child(2) > .nav-link > .title').click();
 cy.get('h3').should('contain','User Management');

 cy.get('#user_groups').click();
    })

     
    

 })