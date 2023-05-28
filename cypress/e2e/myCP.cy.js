 /// <reference types="cypress" />
 
 describe('my first',()=>{

    it('login yo Library',()=>{

cy.visit('https://library1.cydeo.com/login.html');
cy.get(':nth-child(3) > label').type('librarian51@library');
cy.get(':nth-child(4) > label').type('libraryUser');
cy.get('.btn').click();

cy.get('#navbarDropdown > span').should('contain','51');
 cy.get(':nth-child(2) > .nav-link > .title').click();

 cy.get('h3').then((label)=>{
    expect(label).to.have.text('User Management');
 })

 cy.get('span > .btn').click();

 cy.get(':nth-child(1) > .col-12 > .form-group > .form-control').type('myname123@yes.com');
 cy.get('.form-body > :nth-child(2) > :nth-child(1) > .form-group > .form-control').type('myname123@yes.com');
 
cy.get('#user_group_id').select('Students');

it('new one',()=>{
    cy.get('.form-body > :nth-child(2) > :nth-child(2) > .form-group > .form-control').type('myname123@yes.com');
    cy.log('write');
})

    })

     
    

 })