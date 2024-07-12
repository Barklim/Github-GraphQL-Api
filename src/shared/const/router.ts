export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    REPOS = 'repos',
    REPO_DETAILS = 'repo_details',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteRepos = () => '/repos';
export const getRouteRepoDetails = (id: string) => `/repos/${id}`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteRepos()]: AppRoutes.REPOS,
    [getRouteRepoDetails(':id')]: AppRoutes.REPO_DETAILS,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
