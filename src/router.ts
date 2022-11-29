export type Route = 'main';

const routes: Record<Route,((arg?: string) => string)> = {
    main: () => '/main'
};

export default routes;