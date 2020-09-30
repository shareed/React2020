describe("This test is for the form", function () {
    it('Test visits the application URL', function () {
        cy.visit('./')

//Input
        cy.get('[for=name] > input')//selects a element on the page
            .type("Shannon Reed")//types in the input
            .should('have.value',"Shannon Reed")//value of input should have the value Shannon Reed
//Button
        cy.get('button#submit')
          .should('be.disabled')
       // .click({force:true})

//Email
        const email = "shannon@gmail.com";
        cy.get('[for="email"] > input')            
            .type(email)
            .should('have.value', email)
        
//Textarea
        cy.get('textarea#motivation')//textarea with the id motivation
            .type("I Love Coding")
            .should('have.value',"I Love Coding")
        
//SELECT
        cy.get('select#positions')
            .select("Newsletter")
            .should('have.value',"Newsletter")
        cy.get('select#positions')
            .select("Yard Work")
            .should('have.value',"Yard Work")
        cy.get('select#positions')
            .select("Administrative Work")
            .should('have.value',"Administrative Work")
        cy.get('select#positions')
            .select("Tabling")
            .should('have.value',"Tabling")
//Terms
        cy.get('input#termsCheckbox')
            .click()
            .should('have.checked', true)


    
        })
        it('check for email error', function() {
            cy.get('[for="email"] > input')
              .clear()   
            
            cy.get('[data-cy="email-error-msg"]')
              .contains('Must include email address')
        })
})