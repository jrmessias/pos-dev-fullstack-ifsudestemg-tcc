const express = require("express");
const { addRoute } = require("./routeRegistry");

function createRouter(prefix = "") {
    const router = express.Router();

    ["get", "post", "put", "patch", "delete"].forEach(method => {
        const original = router[method].bind(router);

        router[method] = (path, ...handlers) => {
            addRoute(method, `${prefix}${path}`);
            return original(path, ...handlers);
        };
    });

    return router;
}

module.exports = createRouter;
