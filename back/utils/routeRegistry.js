const routes = [];

function addRoute(method, path) {
    routes.push({
        method: method.toUpperCase(),
        path
    });
}

function printRoutes() {
    console.table(routes);
}

module.exports = {
    addRoute,
    printRoutes
};
