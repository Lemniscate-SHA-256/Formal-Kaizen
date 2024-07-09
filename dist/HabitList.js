"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/components/HabitList.js

const HabitList = ({
  habits
}) => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Habits"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: "/add"
}, "Add Habit"), /*#__PURE__*/_react.default.createElement("ul", null, habits.map(habit => /*#__PURE__*/_react.default.createElement("li", {
  key: habit.id
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: `/habit/${habit.id}`
}, habit.name)))));
var _default = exports.default = HabitList;