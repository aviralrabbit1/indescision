"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Indecision = _interopRequireDefault(require("./components/Indecision"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const Layout = () => {
//     return (
//         <>
//             <h2>Header</h2>
//             <hr/>
//             <Indecision/>
//             <hr/>
//             <h2>Footer</h2>
//         </>
//     )
// }
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Indecision["default"], null), document.getElementById('app'));
