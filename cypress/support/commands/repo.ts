import { Repo } from '../../../src/entities/Repo';

const defaultRepo = {
    nameWithOwner: 'TESTING repo',
    title: 'TESTING repo',
    shortDescriptionHTML: 'helloWorld',
    stars: 1022,
    updatedAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createRepo = (repo?: Repo) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/repos',
            headers: { Authorization: 'asasf' },
            body: repo ?? defaultRepo,
        })
        .then((resp) => resp.body);
};

export const removeRepo = (repoId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/repos/${repoId}`,
        headers: { Authorization: 'asasf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createRepo(repo?: Repo): Chainable<Repo>;
            removeRepo(repoId: string): Chainable<void>;
        }
    }
}
