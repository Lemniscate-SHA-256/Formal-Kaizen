"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/components/HabitDetail.js

const HabitDetail = ({
  habits,
  updateHabit
}) => {
  const {
    id
  } = (0, _reactRouterDom.useParams)();
  const habit = habits.find(h => h.id === parseInt(id));
  const history = (0, _reactRouterDom.useHistory)();
  const markProgress = () => {
    const updatedHabit = {
      ...habit,
      progress: [...habit.progress, new Date()]
    };
    updateHabit(updatedHabit);
    history.push('/');
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, habit.name), /*#__PURE__*/_react.default.createElement("button", {
    onClick: markProgress
  }, "Mark Progress"), /*#__PURE__*/_react.default.createElement("ul", null, habit.progress.map((date, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index
  }, date.toString()))));
};
var _default = exports.default = HabitDetail;