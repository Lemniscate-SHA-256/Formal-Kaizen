"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _HabitList = _interopRequireDefault(require("./HabitList"));
var _AddHabitForm = _interopRequireDefault(require("./AddHabitForm"));
var _HabitDetail = _interopRequireDefault(require("./HabitDetail"));
var _Statistics = _interopRequireDefault(require("./Statistics"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// src/components/HabitTracker.js

const HabitTracker = () => {
  const [habits, setHabits] = (0, _react.useState)([]);
  const addHabit = habit => {
    setHabits([...habits, habit]);
  };
  const updateHabit = updatedHabit => {
    setHabits(habits.map(habit => habit.id === updatedHabit.id ? updatedHabit : habit));
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true
  }, /*#__PURE__*/_react.default.createElement(_HabitList.default, {
    habits: habits
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/add"
  }, /*#__PURE__*/_react.default.createElement(_AddHabitForm.default, {
    addHabit: addHabit
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/habit/:id"
  }, /*#__PURE__*/_react.default.createElement(_HabitDetail.default, {
    habits: habits,
    updateHabit: updateHabit
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/statistics"
  }, /*#__PURE__*/_react.default.createElement(_Statistics.default, {
    habits: habits
  }))));
};
var _default = exports.default = HabitTracker; // Remove this line