// cypress/e2e/flightBooking.cy.js

describe('Flight Booking Application', () => {
  // לפני כל בדיקה, נוודא שהדף נטען כראוי
  before(() => {
    cy.visit('http://localhost:3001');  // כתובת ה-URL של האפליקציה שלך
  });

  // טסט 1: ווידוא שהדף הראשי נטען והכותרת נכונה
  it('should load the home page correctly', () => {
    cy.title().should('include', 'Flight Booking');  // וודא שהכותרת כוללת את "Flight Booking"
  });

  // טסט 2: ווידוא שהטיסות מוצגות בעמוד
  it('should display available flights', () => {
    cy.get('h2').contains('Available Flights');  // מחפש את הכותרת "Available Flights"
    cy.get('ul').find('li').should('have.length.greaterThan', 0);  // מוודא שיש טיסות ברשימה
  });

  // טסט 3: פתיחה של דף פרטי טיסה לאחר לחיצה
  it('should show flight details when a flight is selected', () => {
    cy.contains('Tel Aviv → New York').click();  // בחר טיסה מתוך רשימת הטיסות
    cy.url().should('include', '/flight-details');  // ווידוא שה-URL השתנה לדף פרטי הטיסה
    cy.get('h1').should('contain', 'Flight Details');  // ווידוא שהכותרת בעמוד היא "Flight Details"
  });

  // טסט 4: טופס הזמנה - שליחה עם נתונים תקינים
  it('should submit the booking form successfully', () => {
    cy.visit('http://localhost:3000/booking');  // דף הזמנת טיסה
    cy.get('input[name="name"]').type('John Doe');  // הזן שם
    cy.get('input[name="email"]').type('johndoe@example.com');  // הזן כתובת אימייל
    cy.get('select[name="flight"]').select('Tel Aviv → New York');  // בחר טיסה
    cy.get('button[type="submit"]').click();  // שלח את הטופס
    cy.get('.confirmation-message').should('contain', 'Booking Successful');  // וודא שההזמנה הצליחה
  });

  // טסט 5: טופס הזמנה - הצגת הודעת שגיאה במילוי לא תקין
  it('should show validation errors when the form is not filled out correctly', () => {
    cy.visit('http://localhost:3000/booking');  // דף טופס הזמנה
    cy.get('button[type="submit"]').click();  // שלח את הטופס ללא נתונים
    cy.get('.error').should('be.visible');  // וודא שיש הודעות שגיאה
  });

  // טסט 6: בדיקת עמוד פרטי טיסה
  it('should display flight information correctly on the flight details page', () => {
    cy.visit('http://localhost:3000/flight-details/1');  // טען דף פרטי טיסה עם ID 1
    cy.get('h1').should('contain', 'Flight Details');  // וודא שהכותרת היא "Flight Details"
    cy.get('p').should('contain', 'Departure:');  // וודא שיש את המידע על היציאה
    cy.get('p').should('contain', 'Price:');  // וודא שיש את המידע על המחיר
  });

  // טסט 7: בדיקת אפשרות ביצוע הזמנה
  it('should allow booking the flight', () => {
    cy.visit('http://localhost:3000/flight-details/1');  // טען דף פרטי טיסה
    cy.get('button').contains('Book Now').click();  // לחץ על כפתור "Book Now"
    cy.url().should('include', '/booking');  // וודא שהגעת לדף הזמנה
  });
});
