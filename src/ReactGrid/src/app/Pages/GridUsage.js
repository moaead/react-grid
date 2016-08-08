"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Grid_1 = require("../Components/Grid");
var GridUsage = (function (_super) {
    __extends(GridUsage, _super);
    function GridUsage() {
        _super.apply(this, arguments);
    }
    GridUsage.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(Grid_1.Grid, {selectable: true})));
    };
    return GridUsage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridUsage;
//# sourceMappingURL=GridUsage.js.map