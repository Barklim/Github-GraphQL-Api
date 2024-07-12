let currentRepoId = '';
describe('Пользователь заходит на страницу репозитория', () => {
    beforeEach(() => {
        cy.login();
        cy.createRepo().then((repo) => {
            currentRepoId = repo.id;
            cy.visit(`repos/${repo.id}`);
        });
    });
    afterEach(() => {
        cy.removeRepo(currentRepoId);
    });
    it('И видит содержимое репозитория', () => {
        cy.getByTestId('RepoDetails.Info').should('exist');
    });
    it('И видит список рекоммендаций', () => {
        cy.getByTestId('RepoRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('RepoDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку', () => {
        cy.getByTestId('RepoDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
    it('И ставит оценку (пример с стабом на фикстурах)', () => {
        cy.intercept('GET', '**/repos/*', {
            fixture: 'repo-details.json',
        });
        cy.getByTestId('RepoDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
