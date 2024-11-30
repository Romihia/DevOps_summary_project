describe('Home Page', () => {
    before(() => {
      // כאן תוכל להגדיר את כתובת האתר (URL) שאתה רוצה לבדוק
      cy.visit('http://localhost:3000');  // שנה ל-URL שלך
    });
  
    it('should display the correct page title', () => {
      cy.title().should('include', 'Flight Booking');
    });
  
    it('should display the flights list', () => {
      cy.get('h2').contains('Available Flights');  // מחפש את כותרת הטיסה
      cy.get('ul').find('li').should('have.length', 2); // בודק אם יש לפחות 2 פריטים
    });
  
    it('should select a flight', () => {
      // פועל על פי הטקסט בטיסה
      cy.contains('Tel Aviv → New York').click();
      // יכול להיות שאתה רוצה לבדוק אם כפתור מסוים או טקסט חדש מוצג לאחר הלחיצה
      cy.url().should('include', '/flight-details'); // זה לדוגמה אם יש דף פרטי טיסה
    });
  });
  