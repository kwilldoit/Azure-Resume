/// <reference types="cypress"/>

describe('Azure Visitor Counter Function Test', () => {
  it('Visits the static webpage and triggers the Azure function', () => {
    // Visit the static webpage
    cy.visit('https://resume.kwilliamsjr.com/'); // Replace with your webpage URL

    // Simulate an HTTP request to trigger the function
    cy.request({
      method: 'POST',
      url: 'https://kwcounter.azurewebsites.net', // Replace with your function's URL
      body: {
        // Include any necessary payload data here
      },
    }).then((response) => {
      // Confirm that the function was invoked successfully
      expect(response.status).to.equal(200); // Adjust the HTTP status code based on your function's response
    });

    // Optionally, add assertions to verify the counter increment
    // cy.get('#counter').should('have.text'); // Adjust based on your webpage's elements
  });
});
