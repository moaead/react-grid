"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        _super.apply(this, arguments);
    }
    Grid.prototype.componentDidMount = function () {
        $(this.refs["dropdown"]).dropdown();
    };
    Grid.prototype.componentDidUpdate = function () {
        $(this.refs["dropdown"]).dropdown('refresh');
    };
    Grid.prototype.render = function () {
        return (React.createElement("p", null, React.createElement("select", {className: "ui dropdown", ref: "dropdown"}, React.createElement("option", {value: ""}, "Gender"), React.createElement("option", {value: "1"}, "Male"), React.createElement("option", {value: "0"}, "Female"))));
    };
    return Grid;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Grid;
//# sourceMappingURL=Grid.js.map