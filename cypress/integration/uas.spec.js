

describe('Login => Oleh Muhammad Auful Kirom (1941720031)', () => {

    beforeEach(() => {
        cy.visit('http://kompen.jti.polinema.ac.id/')
    })


    it('Empty User', () => {
        cy.get('#btn_mahasiswa').click()


        cy.get('[type="submit"]').click()
    });

    it('username only', () => {
        cy.get('#btn_mahasiswa').click()

        cy.get('[name="username"]').type('auful')
        cy.get('[type="submit"]').click()
    });

    it('password only', () => {
        cy.get('#btn_mahasiswa').click()

        cy.get('[name="password"]').type('auful123')
        cy.get('[type="submit"]').click()
    });

    it('Wrong Account', () => {
        cy.get('#btn_mahasiswa').click()

        cy.get('[name="username"]').type('auful')
        cy.get('[name="password"]').type('auful1234')
        cy.get('[type="submit"]').click()
    });

    it('Standart User', () => {
        cy.get('#btn_mahasiswa').click()

        cy.get('[name="username"]').type('auful')
        cy.get('[name="password"]').type('auful123')
        cy.get('[type="submit"]').click()
    });
})