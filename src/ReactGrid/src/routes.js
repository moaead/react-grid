"use strict";
var React = require("react");
var react_router_1 = require("react-router");
var App_1 = require("./app/App");
var Grid_1 = require("./app/Components/Grid");
var Routes = (function () {
    function Routes() {
    }
    Routes.getRoutes = function () {
        return (React.createElement(react_router_1.Route, {path: "/", component: App_1.default}, React.createElement(react_router_1.IndexRoute, {component: Grid_1.default})));
    };
    ;
    return Routes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
//# sourceMappingURL=routes.js.map