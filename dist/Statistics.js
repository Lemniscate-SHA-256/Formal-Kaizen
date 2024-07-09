"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/components/Statistics.js

const Statistics = ({
  habits
}) => {
  const data = habits.map(habit => ({
    name: habit.name,
    progress: habit.progress.length
  }));
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Statistics"), /*#__PURE__*/_react.default.createElement(_recharts.BarChart, {
    width: 600,
    height: 300,
    data: data
  }, /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, null), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.CartesianGrid, {
    stroke: "#f5f5f5"
  }), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "progress",
    barSize: 20,
    fill: "#413ea0"
  })));
};
var _default = exports.default = Statistics;