let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.userProfileName').should('have.value', 'test');
    });
    it('И редактирует его', () => {
        const newName = 'new';
        const newLocation = 'lastname';
        cy.updateProfile(newName, newLocation);
        cy.getByTestId('ProfileCard.userProfileName').should('have.value', newName);
        cy.getByTestId('ProfileCard.location').should(
            'have.value',
            newLocation,
        );
    });
});
