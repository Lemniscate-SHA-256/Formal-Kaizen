"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactRouterDom = require("react-router-dom");
var _HabitTracker = _interopRequireDefault(require("./HabitTracker"));
require("./Documents/Formal_Kaizen/src/index.css");
var _HabitList = _interopRequireDefault(require("./HabitList"));
var _AddHabitForm = _interopRequireDefault(require("./AddHabitForm"));
var _HabitDetail = _interopRequireDefault(require("./HabitDetail"));
var _Statistics = _interopRequireDefault(require("./Statistics"));
var _recharts = require("recharts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/index.js

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_HabitTracker.default, null)), document.getElementById('root'));

// src/components/HabitTracker.js

_HabitTracker.default = (() => {
  const [habits, setHabits] = useState([]);
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
}, function () {
  throw new Error('"' + "HabitTracker" + '" is read-only.');
}());

// src/components/HabitList.js

_HabitList.default = (({
  habits
}) => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Habits"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: "/add"
}, "Add Habit"), /*#__PURE__*/_react.default.createElement("ul", null, habits.map(habit => /*#__PURE__*/_react.default.createElement("li", {
  key: habit.id
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: `/habit/${habit.id}`
}, habit.name))))), function () {
  throw new Error('"' + "HabitList" + '" is read-only.');
}());

// src/components/AddHabitForm.js

_AddHabitForm.default = (({
  addHabit
}) => {
  const [name, setName] = useState('');
  const history = (0, _reactRouterDom.useHistory)();
  const handleSubmit = e => {
    e.preventDefault();
    addHabit({
      id: Date.now(),
      name,
      progress: []
    });
    history.push('/');
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Add Habit"), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Habit name",
    required: true
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Add Habit")));
}, function () {
  throw new Error('"' + "AddHabitForm" + '" is read-only.');
}());

// src/components/HabitDetail.js

_HabitDetail.default = (({
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
}, function () {
  throw new Error('"' + "HabitDetail" + '" is read-only.');
}());
var _default = exports.default = _HabitDetail.default; // src/components/Statistics.js
_Statistics.default = (({
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
}, function () {
  throw new Error('"' + "Statistics" + '" is read-only.');
}());