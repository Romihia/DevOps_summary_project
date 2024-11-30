// cypress/e2e/flightBooking.cy.js

describe('Flight Booking Application', () => {
  // לפני כל בדיקה, נוודא שהדף נטען כראוי
  before(() => {
    cy.visit('http://localhost:3001');  // כתובת ה-URL של האפליקציה שלך
  });


  it('should display available flights', () => {
    cy.visit('http://localhost:3001'); // URL של האפליקציה שלך
    cy.wait(1000); // המתן שהטיסות ייטענו
    cy.get('ul').find('li').should('have.length.greaterThan', 0); // מוודא שיש לפחות טיסה אחת ברשימה
  });
  
  
});
