import { BookCardComponent } from './book-card.component';

describe('book-card', () => {
  beforeEach(() => {
    cy.mount(BookCardComponent, {
      autoSpyOutputs: true,
      componentProperties: {
        content: {
          title: 'Design Patterns',
          subtitle: 'Elements of Reusable Object-Oriented Software',
          isbn: '978-0-20163-361-0',
          abstract:
            'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
          numPages: 395,
          author:
            'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
          publisher: 'Bernd',
          cover: '',
          price: '',
        },
      },
    });
  });
  it('should show Title', () => {
    cy.get('h3').should('have.text', 'Title:');
  });
  it('should send output', () => {
    cy.get('a').click();
    cy.get('@detailClickSpy').should('have.been.called');
  });
});
