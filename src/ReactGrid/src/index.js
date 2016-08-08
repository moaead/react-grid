"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var routes_1 = require("./routes");
ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, routes_1.default.getRoutes()), document.getElementById('app'));
//# sourceMappingURL=index.js.map