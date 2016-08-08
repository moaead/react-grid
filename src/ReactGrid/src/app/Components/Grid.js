"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        _super.apply(this, arguments);
    }
    Grid.prototype.render = function () {
        return (React.createElement("p", null, "Hello World"));
    };
    return Grid;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Grid;
//# sourceMappingURL=Grid.js.map