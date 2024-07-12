describe('Пользователь заходит на страницу со списком репозиториев', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('repos');
        });
    });
    it('и репозитории успешно подгружаются', () => {
        cy.getByTestId('RepoList').should('exist');
        cy.getByTestId('RepoListItem').should('have.length.greaterThan', 3);
    });

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/repos?*', { fixture: 'repos.json' });
        cy.getByTestId('RepoList').should('exist');
        cy.getByTestId('RepoListItem').should('have.length.greaterThan', 3);
    });

    it.skip('Пример заскипанного теста', () => {
        cy.getByTestId('RepoList').should('exist');
        cy.getByTestId('RepoListItem').should('have.length.greaterThan', 3);
        cy.get('asfasf').should('exist');
    });
});
