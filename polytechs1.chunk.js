(window["webpackJsonpVirtualMachine"] = window["webpackJsonpVirtualMachine"] || []).push([[298],{

/***/ 7658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));
var _createClass2 = _interopRequireDefault(__webpack_require__(2));
var _index = __webpack_require__(23);
var ArgumentType = __webpack_require__(75);
var BlockType = __webpack_require__(100);
var TitleType = __webpack_require__(145);
var formatMessage = __webpack_require__(12);
var buildFieldMenu = __webpack_require__(940);
var Piano = __webpack_require__(947);
var getFilterBlocks = __webpack_require__(247);
var DataType = __webpack_require__(942);
var _dhtSensor = __webpack_require__(268);
var menuIconURI = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDkuNzk5OTkiIGhlaWdodD0iMzA3LjcwMDAxIiBpZD0ic3ZnMzIyNCIgdmVyc2lvbj0iMS4xIj4KICA8ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDk2LjcwNDI3LC01NzkuNTU5NDgpIj4KICAgIDxwYXRoIGNsYXNzPSJzdDciIGQ9Im0gODA5LjkwNDI3LDYzMi4xNTk1IGggLTIxLjIgdiAyNTUuMSBoIDIxLjIgYyAyMC4yLDAgMzYuNiwtMTEuMiAzNi42LC0zMS40IHYgLTE4Ny4xIGMgMCwtMjAuMSAtMTYuNSwtMzYuNiAtMzYuNiwtMzYuNiB6IiBpZD0icGF0aDIyMSIgc3R5bGU9ImZpbGw6IHJnYigzLCAxMTcsIDIyOSk7Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3Q3IiBkPSJtIDQ5Ni43MDQyNyw2NjguNzU5NSB2IDE4Ny4xIGMgMCwyMC4yIDE2LjUsMzEuNCAzNi42LDMxLjQgaCAyMS4yIHYgLTI1NS4xIGggLTIxLjIgYyAtMjAuMSwwIC0zNi42LDE2LjUgLTM2LjYsMzYuNiB6IiBpZD0icGF0aDIyMyIgc3R5bGU9ImZpbGw6IHJnYigzLCAxMTcsIDIyOSk7Ii8+CiAgICA8ZyBpZD0iZzIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzOTcuMjk1NywtOTkzLjQ0MDUyKSI+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDciIGQ9Im0gMzAyNy43LDE3NzcuNSBjIDAsMS42IDEuMywzIDMuNiwzLjcgbCAzNS4yLDExIDAuMSwwIGMgMC45LDAuMyAxLjksMC40IDMsMC40IDEsMCAyLC0wLjEgMywtMC40IGwgMzUuMiwtMTEgYyAyLjMsLTAuNyAzLjcsLTIuMSAzLjcsLTMuNyB2IC0xNy4yIGggLTgzLjYgdiAxNy4yIHogbSAyLjIsLTE1IGggNzkuMSB2IDE1IGMgMCwwLjUgLTAuNywxLjIgLTIuMSwxLjYgbCAtMzUuMiwxMSBjIC0xLjQsMC40IC0zLjIsMC40IC00LjcsMCBsIC0zNS4yLC0xMSBjIC0xLjQsLTAuNCAtMiwtMS4xIC0yLC0xLjYgdiAtMTUgeiIgaWQ9InBhdGgyMjciIHN0eWxlPSJmaWxsOiByZ2IoMywgMTE3LCAyMjkpOyIvPgogICAgICA8cGF0aCBjbGFzcz0ic3Q3IiBkPSJtIDMxNDEuMiwxNjI1LjYgdiAtMjguNSBjIDAsLTEzLjMgLTExLjQsLTI0LjEgLTI1LjUsLTI0LjEgaCAtOTMuNiBjIC0xNC4xLDAgLTI1LjUsMTAuOCAtMjUuNSwyNC4xIHYgMjguNSBoIC0yMC44IHYgMjU1LjEgSCAzMTYyIHYgLTI1NS4xIGggLTIwLjggeiBtIC0xMjUuMSwtMjguNCBjIDAsLTEuOCAxLjUsLTMuMiAzLjQsLTMuMiBoIDk5LjcgYyAxLjksMCAzLjQsMS40IDMuNCwzLjIgdiAyOC40IGggLTEwNi40IHYgLTI4LjQgeiBtIDEyMC4xLDEzNy41IGMgLTIuOCwxLjYgLTYuMSwxLjMgLTguNiwtMC41IGwgLTEwLjMsNS45IGMgMCwwLjMgMC4xLDAuNiAwLjEsMC45IHYgNDYuNSBjIDAsMi44IC0xLjUsNS4zIC0zLjksNi43IGwgLTAuMSwwIC00MC4yLDIzLjIgYyAtMS4xLDAuNiAtMi40LDAuOSAtMy43LDAuOSAtMS4zLDAgLTIuNSwtMC4zIC0zLjYsLTAuOSBsIC0wLjEsLTAuMSAtNDAuMywtMjMuMyBjIC0yLjQsLTEuNCAtMy44LC0zLjkgLTMuOCwtNi42IHYgLTQ2LjUgYyAwLC0wLjIgMCwtMC41IDAsLTAuNyBsIC0xMC4zLC02IGMgLTIuNCwxLjggLTUuOCwyLjEgLTguNSwwLjUgLTMuNywtMi4xIC01LC02LjkgLTIuOCwtMTAuNiAyLjEsLTMuNyA2LjksLTUgMTAuNiwtMi44IDIuOCwxLjYgNC4yLDQuNyAzLjgsNy43IGwgMTAuMiw1LjkgYyAwLjEsLTAuMSAwLjMsLTAuMiAwLjQsLTAuMyBsIDAuMSwtMC4xIDQwLjgsLTIzLjYgYyAwLjIsLTAuMSAwLjQsLTAuMiAwLjYsLTAuMyBWIDE2OTkgYyAtMi44LC0xLjIgLTQuNywtMy45IC00LjcsLTcuMSAwLC00LjMgMy41LC03LjggNy44LC03LjggNC4zLDAgNy44LDMuNSA3LjgsNy44IDAsMy4yIC0xLjksNiAtNC43LDcuMSB2IDExLjkgYyAwLjIsMC4xIDAuNCwwLjIgMC42LDAuMyBsIDAuMSwwLjEgMzkuOCwyMyBjIDAuNCwwLjIgMC44LDAuNCAxLjEsMC42IGwgMCwwIGMgMC4xLDAgMC4xLDAuMSAwLjIsMC4xIGwgMTAuMywtNiBjIC0wLjQsLTMgMSwtNi4xIDMuOCwtNy43IDMuNywtMi4xIDguNSwtMC45IDEwLjYsMi44IDEuOSwzLjcgMC42LDguNSAtMy4xLDEwLjYgeiIgaWQ9InBhdGgyMjkiIHN0eWxlPSJmaWxsOiByZ2IoMywgMTE3LCAyMjkpOyIvPgogICAgICA8cGF0aCBjbGFzcz0ic3Q3IiBkPSJtIDMwMzYuMSwxNzc2LjcgMC4xLDAgMzAuOSw5LjcgMCwwIGMgMC43LDAuMiAxLjUsMC4zIDIuMywwLjMgMC44LDAgMS42LC0wLjEgMi4zLC0wLjMgbCAwLDAgMzAuOSwtOS43IDAuMSwwIGMgMS41LC0wLjUgMi41LC0xLjMgMi41LC0yLjMgdiAtOC40IGggLTcxLjcgdiA4LjQgYyAwLjEsMC45IDEuMSwxLjggMi42LDIuMyB6IiBpZD0icGF0aDIzMSIgc3R5bGU9ImZpbGw6IHJnYigzLCAxMTcsIDIyOSk7Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=';
var blockIconURI = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4wIgogICB3aWR0aD0iNzUuMDAwMDAwcHQiCiAgIGhlaWdodD0iNTAuMDAwMDAwcHQiCiAgIHZpZXdCb3g9IjAgMCA3NS4wMDAwMDAgNTAuMDAwMDAwIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IgogICBpZD0ic3ZnNiIKICAgc29kaXBvZGk6ZG9jbmFtZT0iaWNvbi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4yICgwYTAwY2Y1MzM5LCAyMDIyLTAyLTA0KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTAiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc4IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB0IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIxMC4yMyIKICAgICBpbmtzY2FwZTpjeD0iNTAiCiAgICAgaW5rc2NhcGU6Y3k9IjMzLjMzMzMzMyIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAzMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc2IiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgogICAgIGZpbGw9IiMwMDAwMDAiCiAgICAgc3Ryb2tlPSJub25lIgogICAgIGlkPSJnNCI+CiAgICA8cGF0aAogICAgICAgZD0iTTIxNyA0NjkgYy01MyAtOCAtODkgLTM4IC0xMDYgLTg2IC0yNyAtNzcgOCAtMTI4IDExNCAtMTYzIDU4IC0xOSA4MyAtMzkgNjggLTU0IC0xMSAtMTEgLTcwIC02IC0xMTQgOSAtNDIgMTUgLTQ0IDE1IC02MSAtNyAtMzAgLTM5IC0yMyAtNjcgMTkgLTg1IDkxIC0zOCAyMjEgLTIzIDI1OCAzMCBsMTUgMjEgMCAtMjEgYzAgLTQ0IDIzIC01MyAxMzkgLTUzIDExOSAwIDEzNSA3IDEyOSA1NyAtMiAyMiAtOSAyOSAtMzMgMzMgbC0zMCA1IC03IDEwNSBjLTUgNTggLTEwIDExMSAtMTMgMTE4IC0yIDcgLTIyIDEyIC00NiAxMiAtNjEgMCAtMTM2IC01MCAtMTQ1IC05NSAtNiAtMzQgLTYgLTM0IC0zMSAtMTggLTE0IDkgLTUyIDI2IC04NiAzOCAtNDggMTYgLTYzIDI2IC02NSA0MyAtMyAxOCAxIDIyIDI0IDIyIDE1IDAgNDUgLTUgNjcgLTEyIDM3IC0xMSA0MSAtMTAgNTggMTEgMTEgMTMgMTkgMjkgMTkgMzcgMCAzNCAtMTAyIDY2IC0xNzMgNTN6IG0yODMgLTI1MyBjMCAtNTYgLTggLTY2IC01MCAtNjYgLTIyIDAgLTI2IDUgLTM0IDUwIC02IDMzIC00IDM2IDMyIDUyIDIwIDkgNDAgMTcgNDUgMTcgNCAxIDcgLTIzIDcgLTUzeiIKICAgICAgIGlkPSJwYXRoMiIgLz4KICA8L2c+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDowLjA5Nzc1MTciCiAgICAgZD0ibSA2Ny45MDI1OTgsNTguNTQ2MDcyIGMgLTguMzIzODE4LC0wLjI1Mjk5OSAtMTEuNTE4NjE0LC0xLjIyMTgxIC0xMi42Nzg5MDIsLTMuODQ0ODMzIC0wLjM2MTk5MSwtMC44MTgzNDIgLTAuNDgyNzM4LC0xLjgwMDgwNSAtMC40ODI3MzgsLTMuOTI3ODI1IDAsLTEuMDk3NDIxIC0wLjAzMjk5LC0xLjk5NDQyMSAtMC4wNzMzMSwtMS45OTMzMzQgLTAuMDQwMzIsMC4wMDExIC0wLjU3Njk0NywwLjcxNTg5NyAtMS4xOTI1LDEuNTg4NDY1IC0xLjM0NjQzOCwxLjkwODYyNyAtMi41MDg1NTcsMy4xMTk5NDggLTMuODE3Mjc1LDMuOTc4ODkyIC00LjE3NDEwMiwyLjczOTU2NyAtMTAuMjgxMzUyLDQuMTQ0NDYyIC0xNy4zMDIwNTMsMy45ODAxMTcgLTMuOTc0NzcyLC0wLjA5MzA0IC03LjEzNDAzNywtMC41NjM3ODggLTEwLjY2MzMzOSwtMS41ODg4ODQgLTQuNzI2MTAxLC0xLjM3MjcxMSAtNy4yOTUzNTEsLTMuMDczNDY1IC04LjExODIxMiwtNS4zNzM5NzEgLTAuMjU5ODYyLC0wLjcyNjUwOCAtMC4yNzg5OTMsLTEuOTY3NzU1IC0wLjA0NDM5LC0yLjg3OTg1MSAwLjM3OTYwMywtMS40NzU4MDMgMS45OTQ2MTMsLTQuMTAyNjQ1IDMuNDEyMzY2LC01LjU1MDI3MSAxLjIzNDAyNywtMS4yNjAwMyAyLjAzODY2NywtMS4yNDM1NCA1Ljk2ODk3MSwwLjEyMjMyNiA0LjQxNzQwNiwxLjUzNTE0NCA4LjIzNzc3MywyLjI0MzA1MSAxMi4xMzI3NzEsMi4yNDgxODIgMi44NDgyMzQsMC4wMDM4IDMuNzM0OTQsLTAuMjA2NjI2IDQuMjk4NTA3LC0xLjAxOTg1MyAxLjE1OTAzOCwtMS42NzI0OTIgLTAuNzk3ODU3LC0zLjYyMjY1NiAtNS42NzUzMTcsLTUuNjU1OCBDIDMzLjAyNjU3NCwzOC4zNjI0IDMxLjMzNjc1NSwzNy43MzcwNDkgMjkuOTEyMDIzLDM3LjIzOTc2MyAyNi45ODIwMDIsMzYuMjE3MDc0IDI1LjM2Mzc1NCwzNS41NTc3NjQgMjMuNTM3Njg3LDM0LjY0MjcyMSAxOS4xNzAwOTgsMzIuNDU0MTE5IDE2LjM1Njc5LDI5Ljk0MzYzNCAxNC44OTUzLDI2LjkzMDU5NiAxMy41MzAyNzYsMjQuMTE2NDM3IDEzLjMzNDgyOSwyMS4xODAxNzIgMTQuMjcwODg0LDE3LjU0OTc5IGMgMS40MzMxOTEsLTUuNTU4NDcxIDQuNTQ3NTAxLC05LjUyMjE1MzIgOS4yMTc1NjgsLTExLjczMTQ5NTggMS44MTUwMiwtMC44NTg2NjA2IDMuNTQyMjU1LC0xLjM0NDYzNzkgNi4zMjU4MiwtMS43Nzk4NDIxIDEuNjA3OTczLC0wLjI1MTQwMzEgNi4wNTE3MjIsLTAuMjUwNzA0MiA3LjkxNzg4OCwwLjAwMTI1IDMuOTM2MTUsMC41MzE0MTYzIDcuMDUyNDcsMS40MDM4MzY0IDkuODI0MDQ3LDIuNzUwMjYyMyAyLjIyNzYyOSwxLjA4MjE3NjYgMy41MTQ0NjMsMi4xMjkxNDI4IDQuMTE4NzA3LDMuMzUwOTczNiAwLjQ2MTUwMiwwLjkzMzE5NiAwLjIzOTQ4NiwyLjA1NDYxMSAtMC43NDg3MDksMy43ODE3NTIgLTAuOTQ0NzYzLDEuNjUxMjM0IC0yLjc4MDQ1MiwzLjc3OTQyNCAtMy42NjA5MDgsNC4yNDQyNDQgLTAuNDM0NjkyLDAuMjI5NDg2IC0wLjU5Nzc3NCwwLjI1ODY2MiAtMS40MTk3NDUsMC4yNTM5OTIgLTAuOTcwMjk5LC0wLjAwNTUgLTEuMDcxMTE4LC0wLjAyODIgLTQuOTg1MzM3LC0xLjEyMTU4MiAtMy4wMTA5NzgsLTAuODQxMDc3IC01Ljg3OTkzMywtMS4zMDA5NzMgLTguMTYyMjY4LC0xLjMwODQxOSAtMi45MzA1MjEsLTAuMDA5NiAtMy40ODk2MjgsMC40NTg5MDQgLTMuMTg0MjY1LDIuNjY4MDMzIDAuMzU2OTA3LDIuNTgyMDE2IDEuODQ1Mzc5LDMuNjQ0MzcgOC4yODk3OTgsNS45MTY2MDIgNS4yMzA4MjUsMS44NDQzMzQgOS43MTY1OCwzLjg0OTEyNiAxMi41NTk2MjksNS42MTMyMDQgMi41MzEzOTgsMS41NzA3MDEgMi43NzQ5ODksMS40MjYwNyAzLjQwNTk2NCwtMi4wMjIyNzggMC4yNDY2OTksLTEuMzQ4MjM0IDAuNTAyNTYxLC0yLjEzNDE5NyAwLjk5OTc1OSwtMy4wNzEwNzUgMS45ODk5NDcsLTMuNzQ5Njk1IDcuMDQzMDgzLC03LjUzMDE5OSAxMi40NTU1NTQsLTkuMzE4NjI1IDIuMDk2MzAxLC0wLjY5MjY3MyAzLjM5NzcwOSwtMC45MjU4NiA1LjUxMzQ2NCwtMC45ODc5MDQgMi41Nzk2NzQsLTAuMDc1NjUgNC41Njk0MjgsMC4yMDA1NyA1Ljc0NzE2NCwwLjc5NzgyMiAwLjU2NTYxNCwwLjI4NjgzNCAwLjc0NzA1MSwwLjQ5MDMzOCAwLjg3NTcxMywwLjk4MjIxNiAwLjQ3ODcyOSwxLjgzMDE4OSAxLjQxNDA3NCwxMS43MzA2MTkgMi4xMjQwNzYsMjIuNDgyODkzIDAuMjUyMDYsMy44MTcyMDUgMC40NjgzMzksNi45NTI4NjUgMC40ODA2MTgsNi45NjgxMzIgMC4wMTIyOCwwLjAxNTI3IDEuMTYwODYxLDAuMjIwODQzIDIuNTUyNDAyLDAuNDU2ODMgMS4zOTE1NDIsMC4yMzU5ODggMi43NTAwMTcsMC41MDM1OTYgMy4wMTg4MzQsMC41OTQ2ODYgMS43NDMxNjcsMC41OTA2NzUgMi40NDgxMTEsMS40NzQ5NzUgMi43MzE4MDQsMy40MjY4NDcgMC41NTQ1MTMsMy44MTUxNjYgMC4wNDU2OSw1LjYxMTkxOSAtMS44NzMwMTIsNi42MTM5OTggLTEuNzcxNzMsMC45MjUzMiAtNC4xODQ5MDMsMS4yNzMxNzUgLTkuOTk4NTc3LDEuNDQxMjgyIC0zLjU4MDM1NywwLjEwMzUyOCAtNi45MTk2NjcsMC4xMDExMzggLTEwLjQ5NDI3NCwtMC4wMDc1IHogbSAtNC45MTc3NywtMTIuMDYwNzUgYyAxLjg4NzAyMiwtMC40MDc0NzMgMi44MTYyMDEsLTEuMzI3NjgxIDMuMjkzNTc5LC0zLjI2MTc3OSAwLjI5NjkzOCwtMS4yMDMwNSAwLjM4ODMxNSwtMi40Njg1MDcgMC4zODc0MjQsLTUuMzY1MzQxIC0wLjAwMTEsLTMuNTMzMjM4IC0wLjE4ODcyNiwtNS43NjU5MzMgLTAuNTY0MDgsLTYuNzExOTI1IGwgLTAuMTUwMjQyLC0wLjM3ODY1MSAtMC41MDg0MjMsMC4wNTI0NyBjIC0wLjYwMzM3NywwLjA2MjI3IC0yLjY1MzYzOSwwLjgzNzI3MSAtNS4xOTc2MTksMS45NjQ2OTcgLTMuNzE3OTc1LDEuNjQ3NzA5IC00LjUyMTA2NCwyLjE3MjE4MSAtNC45ODQ4MzIsMy4yNTU0MzMgLTAuMzMwMDU1LDAuNzcwOTMxIC0wLjE2NDYyOSwyLjU1ODM5MyAwLjU1OTE5MSw2LjA0MjE2MiAwLjQxMTM1NCwxLjk3OTg2NSAwLjczNjg2NSwyLjkyMTcxNCAxLjI1NzEzOSwzLjYzNzQ2MyAwLjU5NjY2LDAuODIwODM2IDEuMzYxOTU4LDEuMDIyNzE1IDMuNjI2ODQ3LDAuOTU2NzI3IDAuODg3MDk3LC0wLjAyNTg1IDEuOTEzNTU1LC0wLjExMTkxMyAyLjI4MTAxNiwtMC4xOTEyNiB6IgogICAgIGlkPSJwYXRoNDE5IgogICAgIHRyYW5zZm9ybT0ic2NhbGUoMC43NSkiIC8+Cjwvc3ZnPgo=';
let CURRENT_MELODY_ID = 0;

// Enum definitions for alxS1
var DIGITAL_PORTS = {
  "D5": "5",
  "D6": "6", 
  "D7": "7",
  "D8": "8",
  "D9": "9"
};

var PWM_PORTS = {
  "D5": "5",
  "D6": "6",
  "D9": "9"
};

var IR_RECV_PORTS = {
  "JS": "2",
  "D3/D4": "3"
};

var NEOPIXEL_SUB_LEDS = {
  "Όλα": "4",
  "1o": "0",
  "2o": "1", 
  "3o": "2",
  "4o": "3"
};

var ANALOG_PORTS = {
  "A0": "0",
  "A1": "1",
  "A2": "2",
  "A3": "3"
};

var URM_PORTS = {
  "SPI": "10,11",
  "D3/D4": "3,4"
};

var MOTOR_PORTS = {
  "D3/D4": "3,4",
  "SPI": "10,11"
};

var DIRECTIONS = {
  "Ρολογιού": "HIGH",
  "Αντίστροφη Ρολογιού": "LOW"
};

var LED_STATES = {
  "Άναψε": "HIGH",
  "Σβήσε": "LOW"
};

var BUZZER_TONES_DURATION = {
  "Μισό": "500",
  "Τέταρτο": "250",
  "Όγδοο": "125", 
  "Ολόκληρο": "1000",
  "Διπλό": "2000",
  "Στοπ": "0"
};

var BUZZER_TONES = {
  "Χαμηλό Ντο (C3)": "131",
  "Χαμηλό Ντο# (C#3)": "139",
  "Χαμηλό Ρε (D3)": "147",
  "Χαμηλό Ρε# (D#3)": "156",
  "Χαμηλό Μι (E3)": "165",
  "Χαμηλό Φα (F3)": "175",
  "Χαμηλό Φα# (F#3)": "185",
  "Χαμηλό Σολ (G3)": "196",
  "Χαμηλό Σολ# (G#3)": "208",
  "Χαμηλό Λα (A3)": "220",
  "Χαμηλό Λα# (A#3)": "233",
  "Χαμηλό Σι (B3)": "247",
  "Μεσαίο Ντο (C4)": "262",
  "Μεσαίο Ντο# (C#4)": "277",
  "Μεσαίο Ρε (D4)": "294",
  "Μεσαίο Ρε# (D#4)": "311",
  "Μεσαίο Μι (E4)": "330",
  "Μεσαίο Φα (F4)": "349",
  "Μεσαίο Φα# (F#4)": "370",
  "Μεσαίο Σολ (G4)": "392",
  "Μεσαίο Σολ# (G#4)": "415",
  "Μεσαίο Λα (A4)": "440",
  "Μεσαίο Λα# (A#4)": "466",
  "Μεσαίο Σι (B4)": "494",
  "Υψηλό Ντο (C5)": "523",
  "Υψηλό Ντο# (C#5)": "554",
  "Υψηλό Ρε (D5)": "587",
  "Υψηλό Ρε# (D#5)": "622",
  "Υψηλό Μι (E5)": "659",
  "Υψηλό Φα (F5)": "698",
  "Υψηλό Φα# (F#5)": "740",
  "Υψηλό Σολ (G5)": "784",
  "Υψηλό Σολ# (G#5)": "831",
  "Υψηλό Λα (A5)": "880",
  "Υψηλό Λα# (A#5)": "932",
  "Υψηλό Σι (B5)": "988"
};

var KEY_TO_HEX_MAP = {
  '1': "FF6897",
  '2': "FF9867",
  '3': "FFB04F",
  '4': "FF30CF",
  '5': "FF18E7",
  '6': "FF7A85",
  '7': "FF10EF",
  '8': "FF38C7",
  '9': "FF5AA5",
  '0': "FF4AB5",
  '*': "FF42BD",
  '#': "FF52AD",
  '▲': "FF629D",
  '▼': "FFA857",
  '►': "FFC23D",
  '◄': "FF22DD",
  'OK': "FF02FD"
};

// Τα ονόματα για το Dropdown
var MELODIES = {
  "Happy Birthday": "HAPPY_BIRTHDAY",
  "Star Wars": "STAR_WARS",
  "Super Mario": "MARIO",
  "Ode to Joy": "ODE_TO_JOY",
  "Jingle Bells": "JINGLE_BELLS"
};

// Οι νότες και οι διάρκειες για το Online Mode
// (Freq σε Hz, Duration σε ms)
var MELODY_DATA = {
  "HAPPY_BIRTHDAY": [ // (F Major)
    {f:349, d:250}, {f:349, d:250}, {f:392, d:500}, {f:349, d:500}, {f:466, d:500}, {f:440, d:1000},
    {f:349, d:250}, {f:349, d:250}, {f:392, d:500}, {f:349, d:500}, {f:523, d:500}, {f:466, d:1000}
  ],
  "STAR_WARS": [
    {f:294, d:500}, {f:294, d:500}, {f:294, d:500}, {f:233, d:350}, {f:349, d:150},
    {f:294, d:500}, {f:233, d:350}, {f:349, d:150}, {f:294, d:1000}
  ],
  "MARIO": [ // (Ίδιο - με τις παύσεις 0)
    {f:659, d:150}, {f:659, d:150}, {f:0, d:150}, {f:659, d:150}, {f:0, d:150}, {f:523, d:150}, 
    {f:659, d:150}, {f:0, d:150}, {f:784, d:300}, {f:0, d:300}, {f:392, d:300}, {f:0, d:300}
  ],
  "ODE_TO_JOY": [ // (F Major)
    {f:440, d:500}, {f:440, d:500}, {f:466, d:500}, {f:523, d:500}, {f:523, d:500}, {f:466, d:500}, 
    {f:440, d:500}, {f:392, d:500}, {f:349, d:500}, {f:349, d:500}, {f:392, d:500}, {f:440, d:500},
    {f:440, d:750}, {f:392, d:250}, {f:392, d:1000}
  ],
  "JINGLE_BELLS": [ // (F Major)
    {f:440, d:250}, {f:440, d:250}, {f:440, d:500}, {f:440, d:250}, {f:440, d:250}, {f:440, d:500},
    {f:440, d:250}, {f:523, d:250}, {f:349, d:375}, {f:392, d:125}, {f:440, d:1000}
  ]
};

var DHT_TYPES = {
  "θερμοκρασία": "temperature",
  "υγρασία": "humidity"
};

var Scratch3PolytechS1Blocks = /*#__PURE__*/function () {
  function Scratch3PolytechS1Blocks(runtime) {
    (0, _classCallCheck2.default)(this, Scratch3PolytechS1Blocks);
    this.runtime = runtime;
    this.product = this.runtime.manageProduct.product;
    this.dht = new _dhtSensor.default(this.product.board.connectScratch);
    // IR Buffer για online mode
    this.irBuffer = {
      lastCode: "0x0",      // Τελευταίος κωδικός που λαμβάνεται
      lastPin: null,        // Pin από το οποίο λήφθηκε
      timestamp: 0          // Χρονική σήμανση
    };    
  }

  (0, _createClass2.default)(Scratch3PolytechS1Blocks, [{
    key: "getInfo",
    value: function getInfo() {
      var _this = this;
      var language = (0, _index.getLanguage)(this.runtime);
      return {
        id: 'polytechs1',
        name: 'S1',
        menuIconURI: menuIconURI,
        blockIconURI: blockIconURI,
        blockIconHeight: 34,
        blocks: [{
          opcode: 'polytechS1_functions',
          blockType: BlockType.HAT,
          specials: {
            language: [_index.LanguageJavascript],
            type: 'delete'
          },
          text: formatMessage({
            id: "gui.blocklyText.alxs1.alxs1Starts",
            description: 'Label for the blocklyText of ALX S1 starts',
            default: 'S1 starts'
          })
        }, {
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.ledControl",
            description: 'Label for block title',
            default: 'LED Control'
          }),
          titleType: TitleType.firstLevel
        }, {
          opcode: 'alxs1_set_led_state',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setLedState",
            description: 'Label for the blocklyText of set LED state',
            default: 'Led στο pin [PORT] [STATE]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            },
            STATE: {
              type: ArgumentType.STRING,
              menu: 'ledStatesMenu',
              onlyField: true,
              options: buildFieldMenu(LED_STATES, "HIGH", this._initLedStatesMenu()),
              defaultValue: LED_STATES.HIGH
            }
          }
        }, {
          opcode: 'alxs1_set_led_intensity',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setLedIntensity",
            description: 'Label for the blocklyText of set LED intensity',
            default: 'Led στο pin [PORT] άναψε με φωτεινότητα [INTENSITY]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'pwmPortsMenu',
              onlyField: true,
              options: buildFieldMenu(PWM_PORTS, "D6", this._initPwmPortsMenu()),
              defaultValue: PWM_PORTS.D6
            },
            INTENSITY: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 255,
                rangeMin: 0
              },
              defaultValue: 255,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }, {
          opcode: 'alxs1_set_laser_state',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setLaserState",
            description: 'Label for the blocklyText of set laser state',
            default: 'Laser στο pin [PORT] [STATE]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            },
            STATE: {
              type: ArgumentType.STRING,
              menu: 'ledStatesMenu',
              onlyField: true,
              options: buildFieldMenu(LED_STATES, "HIGH", this._initLedStatesMenu()),
              defaultValue: LED_STATES.HIGH
            }
          }
        }, {
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.soundControl",
            description: 'Label for block title',
            default: 'Έλεγχος Ήχου'
          }),
          titleType: TitleType.firstLevel
        }, {
          opcode: 'alxs1_set_buzzer_state',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setBuzzerState",
            description: 'Label for the blocklyText of set buzzer state',
            default: 'Buzzer στο pin [PORT] παίξε νότα [TONE] για [DURATION]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            },
            TONE: {
              type: ArgumentType.PIANO,
              defaultValue: 131,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            },
            DURATION: {
              type: ArgumentType.STRING,
              menu: 'buzzerTonesDurationMenu',
              onlyField: true,
              options: buildFieldMenu(BUZZER_TONES_DURATION, "500", this._initBuzzerTonesDurationMenu()),
              defaultValue: BUZZER_TONES_DURATION["Μισό"]
            }
          }
        }, {
          opcode: 'alxs1_play_melody',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.playMelody",
            description: 'Play a predefined melody',
            default: 'Buzzer στο pin [PORT] παίξε μελωδία [MELODY]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            },
            MELODY: {
              type: ArgumentType.STRING,
              menu: 'melodiesMenu',
              onlyField: true,
              options: buildFieldMenu(MELODIES, "Happy Birthday", this._initMelodiesMenu()),
              defaultValue: MELODIES["Happy Birthday"]
            }
          }
        }, 
		 //
		 // Νεο Μπλοκ Εντολών
		 //
		{
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.stamotorControl",
            description: 'Label for block title',
            default: 'Πράσινος και Γκρί Κινητήρας'
          }),
          titleType: TitleType.firstLevel
        }, 
		 //
		 // stath1_green_motor : Κώδικάς για Πράσινο Κινητήρα σε Online mode
		 // Δήλωση του Μπλοκ, βασισμένο στο alxs1_set_motor_speed
		 //
		{
		  opcode: 'stath1_green_motor',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.setstath1GreenMotor",
            description: 'Label for the blocklyText of set green motor speed',
            default: 'Κινητήρας Πράσινος στο [PORT] με φορά [DIRECTION] με ταχύτητα [SPEED]'
          }),
          arguments: {
            PORT: {
 			  type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D9", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D9
			  
            },
            DIRECTION: {
              type: ArgumentType.STRING,
              menu: 'directionsMenu',
              onlyField: true,
              options: buildFieldMenu(DIRECTIONS, "HIGH", this._initDirectionsMenu()),
              defaultValue: DIRECTIONS["Ρολογιού"]
            },
            SPEED: {
              type: ArgumentType.RANGE,
              inputParams: { rangeMax: 90, rangeMin: 0 },
              defaultValue: 0,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }, 
		 //
		 // stath1_grey_motor : Κώδικάς για Γκρί Κινητήρα σε Online mode
		 // Δήλωση του Μπλοκ, βασισμένο στο alxs1_set_servo_angle
		 //
		{
		  opcode: 'stath1_grey_motor',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.setstath1_grey_motor",
            description: 'Label for the blocklyText of set green motor speed',
            // Άλλαξα το κείμενο για να περιλαμβάνει το PORT
            default: 'Κινητήρας Γκρί στο [PORT] όρισε γωνία [ANGLE]'
          }),
          arguments: {
            PORT: {
 			  type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D9", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D9
			  
            },ANGLE: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 360,
                rangeMin: 0
              },
              defaultValue: 0,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        },
		
		{
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.motorControl",
            description: 'Label for block title',
            default: 'Motor & Servo Control'
          }),
          titleType: TitleType.firstLevel
        }, 
		
		
		{
		  opcode: 'alxs1_set_motor_speed',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setMotorSpeed",
            description: 'Label for the blocklyText of set motor speed',
            // Άλλαξα το κείμενο για να περιλαμβάνει το PORT
            default: 'Κινητήρας στο [PORT] : φορά [DIRECTION] με ταχύτητα [SPEED]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'motorPortsMenu',
              onlyField: true,
              options: buildFieldMenu(MOTOR_PORTS, "D3/D4", this._initMotorPortsMenu()),
              defaultValue: MOTOR_PORTS["D3/D4"]
            },
            DIRECTION: {
              type: ArgumentType.STRING,
              menu: 'directionsMenu',
              onlyField: true,
              options: buildFieldMenu(DIRECTIONS, "HIGH", this._initDirectionsMenu()),
              defaultValue: DIRECTIONS["Ρολογιού"]
            },
            SPEED: {
              type: ArgumentType.RANGE,
              inputParams: { rangeMax: 255, rangeMin: 0 },
              defaultValue: 120,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }, {
          opcode: 'alxs1_set_servo_angle',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setServoAngle",
            description: 'Label for the blocklyText of set servo angle',
            default: 'Σέρβο στο pin [PORT] όρισε γωνία [ANGLE]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D9", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D9
            },
            ANGLE: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 180,
                rangeMin: 0
              },
              defaultValue: 90,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }, {
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.sensors",
            description: 'Label for block title',
            default: 'Αισθητήρες'
          }),
          titleType: TitleType.firstLevel
        }, {
          opcode: 'alxs1_get_press_button_status',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getPressButtonStatus",
            description: 'Label for the blocklyText of get press button status',
            default: 'Κουμπί πίεσης στο pin [PORT], είναι πατημένο;'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.BOOL)
        }, {
          opcode: 'alxs1_get_tactile_button_status',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getTactileButtonStatus",
            description: 'Label for the blocklyText of get tactile button status',
            default: 'Κουμπί αφής στο pin [PORT], είναι πατημένο;'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.BOOL)
        }, {
          opcode: 'alxs1_is_magnetic_switch_near_magnet',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.isMagneticSwitchNearMagnet",
            description: 'Label for the blocklyText of is magnetic switch near magnet',
            default: 'Αισθητήρας μαγνητικού πεδίου στο pin [PORT], ανίχνευσε μαγνήτη;'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.BOOL)
        }, {
          opcode: 'alxs1_get_pir_sensor_status',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getPirSensorStatus",
            description: 'Label for the blocklyText of get PIR sensor status',
            default: 'Αισθητήρας κίνησης στο pin [PORT], ανίχνευσε κίνηση;'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.BOOL)
        }, {
          opcode: 'alxs1_get_dht_value',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getDhtValue",
            description: 'Label for reading DHT values',
            default: 'Διάβασε [TYPE] από το pin [PORT]'
          }),
          arguments: {
            TYPE: {
              type: ArgumentType.STRING,
              menu: 'dhtTypeMenu',
              onlyField: true,
              options: buildFieldMenu(DHT_TYPES, "temperature", this._initDhtTypeMenu()),
              defaultValue: DHT_TYPES["Θερμοκρασία"]
            },
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D6", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D6
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.UINT32_T)
        }, {
          opcode: 'alxs1_get_light_level',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getLightLevel",
            description: 'Label for the blocklyText of get light level',
            default: 'Διάβασε επίπεδο φωτός από το pin [PORT]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'analogPortsMenu',
              onlyField: true,
              options: buildFieldMenu(ANALOG_PORTS, "A0", this._initAnalogPortsMenu()),
              defaultValue: ANALOG_PORTS.A0
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.UINT32_T)
        }, {
          opcode: 'alxs1_get_potensiometer_level',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getPotensiometerLevel",
            description: 'Label for the blocklyText of get potensiometer level',
            default: 'Διάβασε ποτενσιόμετρο από το pin [PORT]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'analogPortsMenu',
              onlyField: true,
              options: buildFieldMenu(ANALOG_PORTS, "A0", this._initAnalogPortsMenu()),
              defaultValue: ANALOG_PORTS.A0
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.UINT32_T)
        }, {
          opcode: 'alxs1_get_sound_level',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getSoundLevel",
            description: 'Label for the blocklyText of get sound level',
            default: 'Διάβασε ένταση ήχου από το μικρόφωνο στο pin [PORT]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'analogPortsMenu',
              onlyField: true,
              options: buildFieldMenu(ANALOG_PORTS, "A0", this._initAnalogPortsMenu()),
              defaultValue: ANALOG_PORTS.A0
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.UINT32_T)
        }, {
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.wirelessCommunication",
            description: 'Label for block title',
            default: 'Infrared Control'
          }),
          titleType: TitleType.firstLevel
        }, {
          opcode: 'alxs1_emit_ir',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.emitIR",
            description: 'Label for the blocklyText of emit IR',
            default: 'IR πομπός στο pin [PORT] στείλε κουμπί [REMOTE_CODE]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D5", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D5
            },
            REMOTE_CODE: {
              type: ArgumentType.POLYTECHIRTEXT,
              defaultValue: "OK"
            }
          }
        }, {
          opcode: 'alxs1_is_ir_detected',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.isIRDetected",
            description: 'Label for the blocklyText of is IR detected',
            default: 'IR δέκτης στο pin [PORT] ανίχνευσε υπέρυθρες;'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'irRecvPortsMenu',
              onlyField: true,
              options: buildFieldMenu(IR_RECV_PORTS, "JS", this._initIrRecvPortsMenu()),
              defaultValue: IR_RECV_PORTS.JS
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.BOOL)
        }, {
          opcode: 'alxs1_is_ir_code_equal_to',
          blockType: BlockType.BOOLEAN,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.isIRCodeEqualTo",
            description: 'Label for the blocklyText of is IR code equal to',
            default: 'IR δέκτης στο pin [PORT] ανίχνευσε κουμπί [REMOTE_CODE];'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'irRecvPortsMenu',
              onlyField: true,
              options: buildFieldMenu(IR_RECV_PORTS, "JS", this._initIrRecvPortsMenu()),
              defaultValue: IR_RECV_PORTS.JS
            },
            REMOTE_CODE: {
              type: ArgumentType.POLYTECHIRTEXT,
              defaultValue: "1"
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.BOOL)
        }, {
          blockType: BlockType.TEXT,
          isShow: language === _index.LanguageCpp,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.neopixel",
            description: 'Label for block title',
            default: 'Neopixel led'
          }),
          titleType: TitleType.firstLevel
        }, {
          opcode: 'alxs1_set_neopixel',
          blockType: BlockType.COMMAND,
          specials: {
            language: [_index.LanguageJavascript],
            type: 'delete'
          },
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setNeopixel",
            description: 'Label for the blocklyText of set Neopixel',
            default: 'Neopixel Led στο pin [PORT], [SUBLEDS] με χρώμα R: [R], G: [G], B: [B] και φωτεινότητα [BRIGHTNESS]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D5", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D5
            },
            SUBLEDS: {
              type: ArgumentType.STRING,
              menu: 'neopixelSubLedsMenu',
              onlyField: true,
              options: buildFieldMenu(NEOPIXEL_SUB_LEDS, "4", this._initNeopixelSubLedsMenu()),
              defaultValue: NEOPIXEL_SUB_LEDS["Όλα"]
            },
            R: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 255,
                rangeMin: 0
              },
              defaultValue: 255,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            },
            G: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 255,
                rangeMin: 0
              },
              defaultValue: 255,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            },
            B: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 255,
                rangeMin: 0
              },
              defaultValue: 255,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            },
            BRIGHTNESS: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 255,
                rangeMin: 0
              },
              defaultValue: 50,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }, {
          opcode: 'alxs1_set_neopixel_color',
          blockType: BlockType.COMMAND,
          specials: {
            language: [_index.LanguageJavascript],
            type: 'delete'
          },
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setNeopixelColor",
            description: 'Label for the blocklyText of set Neopixel Color',
            default: 'Neopixel Led στο pin [PORT], [SUBLEDS] με χρώμα [COLOR] και φωτεινότητα [BRIGHTNESS]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D5", this._initDigitalPortsMenu()),              
              defaultValue: DIGITAL_PORTS.D5 
            },
            SUBLEDS: {
              type: ArgumentType.STRING,
              menu: 'neopixelSubLedsMenu',
              onlyField: true,
              options: buildFieldMenu(NEOPIXEL_SUB_LEDS, "4", this._initNeopixelSubLedsMenu()),              
              defaultValue: NEOPIXEL_SUB_LEDS["Όλα"]
            },
            COLOR: {
              type: ArgumentType.COLORPALETTE, 
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            },
            BRIGHTNESS: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 255,
                rangeMin: 0
              },
              defaultValue: 50,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }            
          }
        }, {
          opcode: 'alxs1_set_neopixel_rainbow',
          blockType: BlockType.COMMAND,
          specials: {
            language: [_index.LanguageJavascript],
            type: 'delete'
          },
          text: formatMessage({
            id: "gui.blocklyText.alxs1.setNeopixelRainbow",
            description: 'Rainbow effect for Neopixel',
            default: 'Neopixel Led στο pin [PORT], ουράνιο τόξο για [DURATION] δευτ. και φωτεινότητα [BRIGHTNESS]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D5", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D5
            },
            DURATION: {
              type: ArgumentType.NUMBER,
              defaultValue: 3,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            },
            BRIGHTNESS: {
              type: ArgumentType.RANGE,
              inputParams: {
                rangeMax: 255,
                rangeMin: 0
              },
              defaultValue: 50,
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER)
            }
          }
        }, {
          opcode: 'alxs1_neopixel_clear',
          blockType: BlockType.COMMAND,
          specials: {
            language: [_index.LanguageJavascript],
            type: 'delete'
          },
          text: formatMessage({
            id: "gui.blocklyText.alxs1.neopixelClear",
            description: 'Clear all Neopixels',
            default: 'Σβήσε όλα τα Neopixel Led στο pin [PORT]'
          }),
          arguments: {
            PORT: {
              type: ArgumentType.STRING,
              menu: 'digitalPortsMenu',
              onlyField: true,
              options: buildFieldMenu(DIGITAL_PORTS, "D5", this._initDigitalPortsMenu()),
              defaultValue: DIGITAL_PORTS.D5
            }
          }          
        }, {
          blockType: BlockType.TEXT,
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.urm",
            description: 'Label for block title',
            default: 'Ultrasonic'
          }),
          titleType: TitleType.firstLevel
        }, {
          opcode: 'alxs1_get_distance',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: "gui.blocklyText.alxs1.getDistance",
            description: 'Label for the blocklyText of get distance',
            default: 'Διάβασε απόσταση σε εκατοστά [PORTS]'
          }),
          arguments: {
            PORTS: {
              type: ArgumentType.STRING,
              menu: 'urmPortsMenu',
              onlyField: true,
              options: buildFieldMenu(URM_PORTS, "SPI", this._initUrmPortsMenu()),
              defaultValue: URM_PORTS["SPI"]
            }
          },
          dfOutput: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.UINT32_T)          
        }, {
          blockType: BlockType.TEXT,
          specials: {
            language: [_index.LanguageJavascript],
            type: 'delete'
          },
          text: formatMessage({
            id: "gui.blocklyText.blockTitle.serialportOperation",
            description: 'Label for block title',
            default: 'Communication'
          }),
          titleType: TitleType.firstLevel
        }, {
          opcode: 'alxs1_send_to_monitor',
          blockType: BlockType.COMMAND,
          specials: {
            language: [_index.LanguageJavascript],
            type: 'delete'
          },
          text: formatMessage({
            id: "gui.blocklyText.alxs1.sendToMonitor",
            description: 'Label for the blocklyText of send to monitor',
            default: 'Στείλε στο monitor app το [MESSAGE]'
          }),
          arguments: {
            MESSAGE: {
              type: ArgumentType.STRING,
              defaultValue: "Hello",
              inputParams: {
                isQuote: (0, _defineProperty2.default)({}, _index.LanguageCpp, false)
              },
              dfCheck: (0, _defineProperty2.default)({}, _index.LanguageCpp, DataType.NUMBER.concat([DataType.STRING]))
            }
          }
        }].filter(function (item) {
          return getFilterBlocks(item, _this.runtime);
        }),
        menus: {
          digitalPortsMenu: this._initDigitalPortsMenu(),
          pwmPortsMenu: this._initPwmPortsMenu(),
          irRecvPortsMenu: this._initIrRecvPortsMenu(),
          neopixelSubLedsMenu: this._initNeopixelSubLedsMenu(),
          analogPortsMenu: this._initAnalogPortsMenu(),
          motorPortsMenu: this._initMotorPortsMenu(),          
          directionsMenu: this._initDirectionsMenu(),
          ledStatesMenu: this._initLedStatesMenu(),
          buzzerTonesDurationMenu: this._initBuzzerTonesDurationMenu(),
          remoteCodesMenu: this._initRemoteCodesMenu(),
          buzzerTonesMenu: this._initBuzzerTonesMenu(),
          urmPortsMenu: this._initUrmPortsMenu(),
          melodiesMenu: this._initMelodiesMenu(),
          dhtTypeMenu: this._initDhtTypeMenu()
        }
      };
    }

    // Menu initialization methods
  }, {
    key: "_initDigitalPortsMenu",
    value: function _initDigitalPortsMenu() {
      return [{
        text: "D5",
        value: "5"
      }, {
        text: "D6",
        value: "6"
      }, {
        text: "D7",
        value: "7"
      }, {
        text: "D8",
        value: "8"
      }, {
        text: "D9",
        value: "9"
      }];
    }
  }, {
    key: "_initPwmPortsMenu",
    value: function _initPwmPortsMenu() {
      return [{
        text: "D5",
        value: "5"
      }, {
        text: "D6",
        value: "6"
      }, {
        text: "D9",
        value: "9"
      }];
    }
  }, {
    key: "_initIrRecvPortsMenu",
    value: function _initIrRecvPortsMenu() {
      return [{
        text: "JS",
        value: "2"
      }, {
        text: "D3/D4",
        value: "3"
      }];
    }
  }, {
    key: "_initNeopixelSubLedsMenu",
    value: function _initNeopixelSubLedsMenu() {
      return [{
        text: "Όλα",
        value: "4"
      }, {
        text: "1o",
        value: "0"
      }, {
        text: "2o",
        value: "1"
      }, {
        text: "3o",
        value: "2"
      }, {
        text: "4o",
        value: "3"
      }];
    }
  }, {
    key: "_initAnalogPortsMenu",
    value: function _initAnalogPortsMenu() {
      return [{
        text: "A0",
        value: "0"
      }, {
        text: "A1",
        value: "1"
      }, {
        text: "A2",
        value: "2"
      }, {
        text: "A3",
        value: "3"
      }];
    }
  }, {
    key: "_initMotorPortsMenu",
    value: function _initMotorPortsMenu() {
      return [{
        text: "D3/D4",
        value: MOTOR_PORTS["D3/D4"]
      }, {
        text: "SPI",
        value: MOTOR_PORTS["SPI"]
      }];
    }    
  }, {
    key: "_initDirectionsMenu",
    value: function _initDirectionsMenu() {
      return [{
        text: "Ρολογιού",
        value: "HIGH"
      }, {
        text: "Αντίστροφη Ρολογιού",
        value: "LOW"
      }];
    }
  }, {
    key: "_initLedStatesMenu",
    value: function _initLedStatesMenu() {
      return [{
        text: "Άναψε",
        value: "HIGH"
      }, {
        text: "Σβήσε",
        value: "LOW"
      }];
    }
  }, {
    key: "_initBuzzerTonesDurationMenu",
    value: function _initBuzzerTonesDurationMenu() {
      return [{
        text: "Μισό",
        value: "500"
      }, {
        text: "Τέταρτο",
        value: "250"
      }, {
        text: "Όγδοο",
        value: "125"
      }, {
        text: "Ολόκληρο",
        value: "1000"
      }, {
        text: "Διπλό",
        value: "2000"
      }, {
        text: "Στοπ",
        value: "0"
      }];
    }
  }, {
    key: "_initRemoteCodesMenu",
    value: function _initRemoteCodesMenu() {
      return [{
        text: "1",
        value: "FF6897"
      }, {
        text: "2",
        value: "FF9867"
      }, {
        text: "3",
        value: "FFB04F"
      }, {
        text: "4",
        value: "FF30CF"
      }, {
        text: "5",
        value: "FF18E7"
      }, {
        text: "6",
        value: "FF7A85"
      }, {
        text: "7",
        value: "FF10EF"
      }, {
        text: "8",
        value: "FF38C7"
      }, {
        text: "9",
        value: "FF5AA5"
      }, {
        text: "0",
        value: "FF4AB5"
      }, {
        text: "*",
        value: "FF42BD"
      }, {
        text: "#",
        value: "FF52AD"
      }, {
        text: "▲",
        value: "FF629D"
      }, {
        text: "▼",
        value: "FFA857"
      }, {
        text: "►",
        value: "FFC23D"
      }, {
        text: "◄",
        value: "FF22DD"
      }, {
        text: "OK",
        value: "FF02FD"
      }];
    }
  }, {
    key: "_initBuzzerTonesMenu",
    value: function _initBuzzerTonesMenu() {
      return [{
        text: "Χαμηλό Ντο (C3)",
        value: "131"
      }, {
        text: "Χαμηλό Ντο# (C#3)",
        value: "139"
      }, {
        text: "Χαμηλό Ρε (D3)",
        value: "147"
      }, {
        text: "Χαμηλό Ρε# (D#3)",
        value: "156"
      }, {
        text: "Χαμηλό Μι (E3)",
        value: "165"
      }, {
        text: "Χαμηλό Φα (F3)",
        value: "175"
      }, {
        text: "Χαμηλό Φα# (F#3)",
        value: "185"
      }, {
        text: "Χαμηλό Σολ (G3)",
        value: "196"
      }, {
        text: "Χαμηλό Σολ# (G#3)",
        value: "208"
      }, {
        text: "Χαμηλό Λα (A3)",
        value: "220"
      }, {
        text: "Χαμηλό Λα# (A#3)",
        value: "233"
      }, {
        text: "Χαμηλό Σι (B3)",
        value: "247"
      }, {
        text: "Μεσαίο Ντο (C4)",
        value: "262"
      }, {
        text: "Μεσαίο Ντο# (C#4)",
        value: "277"
      }, {
        text: "Μεσαίο Ρε (D4)",
        value: "294"
      }, {
        text: "Μεσαίο Ρε# (D#4)",
        value: "311"
      }, {
        text: "Μεσαίο Μι (E4)",
        value: "330"
      }, {
        text: "Μεσαίο Φα (F4)",
        value: "349"
      }, {
        text: "Μεσαίο Φα# (F#4)",
        value: "370"
      }, {
        text: "Μεσαίο Σολ (G4)",
        value: "392"
      }, {
        text: "Μεσαίο Σολ# (G#4)",
        value: "415"
      }, {
        text: "Μεσαίο Λα (A4)",
        value: "440"
      }, {
        text: "Μεσαίο Λα# (A#4)",
        value: "466"
      }, {
        text: "Μεσαίο Σι (B4)",
        value: "494"
      }, {
        text: "Υψηλό Ντο (C5)",
        value: "523"
      }, {
        text: "Υψηλό Ντο# (C#5)",
        value: "554"
      }, {
        text: "Υψηλό Ρε (D5)",
        value: "587"
      }, {
        text: "Υψηλό Ρε# (D#5)",
        value: "622"
      }, {
        text: "Υψηλό Μι (E5)",
        value: "659"
      }, {
        text: "Υψηλό Φα (F5)",
        value: "698"
      }, {
        text: "Υψηλό Φα# (F#5)",
        value: "740"
      }, {
        text: "Υψηλό Σολ (G5)",
        value: "784"
      }, {
        text: "Υψηλό Σολ# (G#5)",
        value: "831"
      }, {
        text: "Υψηλό Λα (A5)",
        value: "880"
      }, {
        text: "Υψηλό Λα# (A#5)",
        value: "932"
      }, {
        text: "Υψηλό Σι (B5)",
        value: "988"
      }];
    }
  }, {
    key: "_initUrmPortsMenu",
    value: function _initUrmPortsMenu() {
      return [{
        text: "SPI",
        value: URM_PORTS["SPI"]
      }, {
        text: "D3/D4",
        value: URM_PORTS["D3/D4"]
      }];
    }
  }, {
    key: "_initMelodiesMenu",
    value: function _initMelodiesMenu() {
      var menu = [];
      for (var item in MELODIES) {
        menu.push({ text: item, value: MELODIES[item] });
      }
      return menu;
    }
  }, {
    key: "_initDhtTypeMenu",
    value: function _initDhtTypeMenu() {
      return [{
        text: "θερμοκρασία",
        value: DHT_TYPES["θερμοκρασία"]
      }, {
        text: "υγρασία",
        value: DHT_TYPES["υγρασία"]
      }];
    }

    // Block implementation methods
  }, {
    key: "polytechS1_functions",
    value: function polytechS1_functions(args, util) {}
  }, {
    key: "alxs1_set_led_state",
    value: function alxs1_set_led_state(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var state = args.STATE === 'HIGH' ? 1 : 0;
      return this.product.board.writeDigital(pin, state, util);
    }
  }, {
    key: "alxs1_set_led_intensity",
    value: function alxs1_set_led_intensity(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var intensity = parseInt(args.INTENSITY);
      return this.product.board.writeAnalog(pin, intensity, util);
    }
  }, {
    key: "alxs1_set_neopixel",
    value: function alxs1_set_neopixel(args, util) {
      if (!this.product.isReady()) return;
      // This would require special handling for Neopixel library
      // Implementation depends on the specific board capabilities
      return;
    }
  }, {
    key: "alxs1_set_neopixel_color",
    value: function alxs1_set_neopixel_color(args, util) {
      if (!this.product.isReady()) return;
      // This would require special handling for Neopixel library
      // Implementation depends on the specific board capabilities
      return;
    }
  }, {
    key: "alxs1_set_neopixel_rainbow",
    value: async function alxs1_set_neopixel_rainbow(args, util) {
      // Placeholder for Online Mode
      return;
    }
  }, {
    key: "alxs1_neopixel_clear",
    value: function alxs1_neopixel_clear(args, util) {
      // Placeholder for Online Mode
      return;
    }
  }, {
    key: "alxs1_set_buzzer_state",
    value: function alxs1_set_buzzer_state(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var tone = Piano.transToValue(args.TONE);
      var duration = parseInt(args.DURATION);
      return this.product.board.reportTone(pin, tone, duration, util);
    }
  }, {
    key: "alxs1_play_melody",
    value: async function alxs1_play_melody(args, util) {
      if (!this.product.isReady()) return;
      
      var pin = parseInt(args.PORT);
      var melodyKey = args.MELODY;
      var notes = MELODY_DATA[melodyKey];
      
      if (!notes) return;

      var myId = Date.now() + Math.random();
      CURRENT_MELODY_ID = myId;

      var firmata = this.product.board.connectScratch.firmata;
      const sleep = (ms) => new Promise(r => setTimeout(r, ms));

      for (let i = 0; i < notes.length; i++) {
        if (CURRENT_MELODY_ID !== myId) return;

        var note = notes[i];

        if (note.f > 0) {
            // Αν είναι νότα, περιμένουμε τη σειρά και τη στέλνουμε
            while (firmata && !firmata.serialWriteIsAvailable()) {
                if (CURRENT_MELODY_ID !== myId) return;
                await sleep(10);
            }
            this.product.board.reportTone(pin, note.f, note.d, util);
        } 
        // Αν note.f == 0 (παύση), ΔΕΝ στέλνουμε τίποτα στο board.
        // Απλώς περιμένουμε (το προηγούμενο reportTone είχε διάρκεια, οπότε θα σταματήσει μόνο του)
        
        await sleep(note.d);
        
        if (CURRENT_MELODY_ID !== myId) return;
        
        // Μικρή παύση μόνο αν δεν είναι σκέτη παύση (για να μην καθυστερεί πολύ το Mario)
        if (note.f > 0) {
             await sleep(30); 
        }
      }

      if (CURRENT_MELODY_ID === myId) {
          while (firmata && !firmata.serialWriteIsAvailable()) {
                await sleep(10);
          }
          this.product.board.reportTone(pin, 0, 0, util);
      }
    }
  }, {
    key: "alxs1_set_laser_state",
    value: function alxs1_set_laser_state(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var state = args.STATE === 'HIGH' ? 1 : 0;
      return this.product.board.writeDigital(pin, state, util);
    }
  }, {
    key: "alxs1_set_servo_angle",
    value: function alxs1_set_servo_angle(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var angle = parseInt(args.ANGLE);
      // Servo control implementation depends on board capabilities
      return;
    }
  }, 
  		 //
		 // stath1_green_motor : Κώδικάς για Πράσινο Κινητήρα σε Online mode
		 // Υλοποιηση της συναρτησης
		 //
  {
	key: "stath1_green_motor",
	value: function stath1_green_motor(args, util) {
      if (!this.product.isReady()) return;
	  	var pin = parseInt(args.PORT);
		var speed = parseInt(args.SPEED);
		var direction = args.DIRECTION === 'HIGH' ? 1 : 0;
		var firmata = this.product.board.connectScratch.firmata;

		if (direction === 1) {
			speed = 90 - speed;
		} else {
			speed = 90 + speed;
		}
      if (!firmata) return;
      if (firmata.serialWriteIsAvailable()) {
       // firmata.servoConfig(pin, 0, 0);
		firmata.servoConfig(pin,500,2500);
        firmata.servoWrite(pin, speed);
      } else {
        util.yield();
        this.runtime.requestBreakThreads();
      }
    }
   }, 
     	 //
		 // stath1_grey_motor : Κώδικάς για Γκρί Κινητήρα σε Online mode
		 // Υλοποιηση της συναρτησης
		 //
   
   { 
	key: "stath1_grey_motor",
    value: function stath1_grey_motor(args, util) {
      if (!this.product.isReady()) return;
	  	var pin = parseInt(args.PORT);
		var angle = parseInt(args.ANGLE);
		var firmata = this.product.board.connectScratch.firmata;

      if (!firmata) return;

      if (firmata.serialWriteIsAvailable()) {
        //firmata.servoConfig(pin, 0, 0);
		firmata.servoConfig(pin,500,2505);
        firmata.servoWrite(pin, (angle / 2));
      } else {
        util.yield();
        this.runtime.requestBreakThreads();
      }
    }

  },
  
  
  {
	key: "alxs1_set_motor_speed",
    value: async function alxs1_set_motor_speed(args, util) {
      if (!this.product.isReady()) return;
      var pins = args.PORT.split(',');
      var pwmPin = parseInt(pins[0]);
      var dirPin = parseInt(pins[1]);

      var direction = args.DIRECTION === 'HIGH' ? 1 : 0; 
      var speed = parseInt(args.SPEED);
      
      var pwm_speed = (direction === 1) ? (255 - speed) : speed;
      
      await this.product.board.writeDigital(dirPin, direction, util); 
      return this.product.board.writeAnalog(pwmPin, pwm_speed, util);
    }
  }, {
    key: "alxs1_set_servo_angle",
    value: function alxs1_set_servo_angle(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var angle = parseInt(args.ANGLE);

      var firmata = this.product.board.connectScratch.firmata;

      if (!firmata) return;

      if (firmata.serialWriteIsAvailable()) {
        //firmata.servoConfig(pin, 0, 0);
		firmata.servoConfig(pin,500,2500);
        firmata.servoWrite(pin, angle);
      } else {
        util.yield();
        this.runtime.requestBreakThreads();
      }
    }
  }, {
    key: "alxs1_emit_ir",
    value: async function alxs1_emit_ir(args, util) {
      if (!this.product.isReady()) return;

      var selectedKeyText = args.REMOTE_CODE;
      var remoteCodeToSend = KEY_TO_HEX_MAP[selectedKeyText];
      
      var type = 0; // NEC
      var pin = parseInt(args.PORT);
      var value = parseInt(remoteCodeToSend, 16); // Μετατροπή από hex string σε number
      var bit = 32;

      if (this.product.board.connectScratch.firmata.serialWriteIsAvailable()) {
        this.product.board.connectScratch.firmata.sendIR(type, pin, value, bit);
        await new Promise(resolve => setTimeout(resolve, 100));
        return;
      } else {
        util.yield();
        this.runtime.requestBreakThreads();
      }
    }
  }, {
    key: "alxs1_is_ir_detected",
    value: async function alxs1_is_ir_detected(args, util) {
      if (!this.product.isReady()) return 0;
      var pin = parseInt(args.PORT);
      
      var receivedCode = await this.product.board.isPressedInfrared(pin, 30, util);
      // receivedCode είναι "0xff6897" (string) ή "0x0" αν δεν υπάρχει σήμα
      
      // Έλεγχος αν ο κωδικός είναι διαφορετικός από "0x0"
      var hasSignal = (receivedCode !== "0x0");
      
      return hasSignal ? 1 : 0;
    }
  }, {
    key: "alxs1_is_ir_code_equal_to",
    value: async function alxs1_is_ir_code_equal_to(args, util) {
      if (!this.product.isReady()) return false;
      var pin = parseInt(args.PORT);

      var selectedKeyText = args.REMOTE_CODE;
      var remoteCodeToFind = KEY_TO_HEX_MAP[selectedKeyText];

      // Ανάγνωση νέου κωδικού από το IR receiver
      var receivedCode = await this.product.board.isPressedInfrared(pin, 30, util);
      var receivedHex = String(receivedCode).replace(/^0x/, '').toUpperCase();

      // Ενημέρωση buffer αν λήφθηκε νέος κωδικός (όχι "0x0")
      if (receivedCode !== "0x0" && receivedHex !== "0") {
        this.irBuffer.lastCode = receivedCode;
        this.irBuffer.lastPin = pin;
        this.irBuffer.timestamp = Date.now();
      }

      // Χρήση του buffer για σύγκριση
      var bufferHex = String(this.irBuffer.lastCode).replace(/^0x/, '').toUpperCase();
      var isMatch = (bufferHex === remoteCodeToFind);

      // Μηδενισμός buffer μόνο αν ταιριάζει (όπως στο offline)
      if (isMatch) {
        this.irBuffer.lastCode = "0x0";
        this.irBuffer.lastPin = null;
      }

      return isMatch ? 1 : 0;
    }
  }, {
    key: "alxs1_get_dht_value",
    value: function alxs1_get_dht_value(args, util) {
      if (!this.product.isReady()) return;
      
      var pin = parseInt(args.PORT);
      var dht_type = args.TYPE; // "temperature" ή "humidity"
      
      // 0: temperature, 1: humidity
      var type_id = (dht_type === "temperature") ? 0 : 1;
      var dht_model = 0; // 0: DHT11

      if (this.product.board.connectScratch.firmata.serialWriteIsAvailable()) {
        return this.dht.read(pin, type_id, dht_model);
      } else {
        util.yield();
        this.runtime.requestBreakThreads();
      }
    }    
  }, {
    key: "alxs1_get_light_level",
    value: function alxs1_get_light_level(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      return this.product.board.readAnalog(pin, util);
    }
  }, {
    key: "alxs1_get_potensiometer_level",
    value: function alxs1_get_potensiometer_level(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      return this.product.board.readAnalog(pin, util);
    }
  }, {
    key: "alxs1_get_sound_level",
    value: function alxs1_get_sound_level(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      return this.product.board.readAnalog(pin, util);
    }
  }, {
    key: "alxs1_is_magnetic_switch_near_magnet",
    value: async function alxs1_is_magnetic_switch_near_magnet(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var pinValue = await this.product.board.readDigital(pin, util);
      return pinValue?0:1;
    }
  }, {
    key: "alxs1_get_press_button_status",
    value: async function alxs1_get_press_button_status(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      var pinValue = await this.product.board.readDigital(pin, util);
      return pinValue?0:1;
    }
  }, {
    key: "alxs1_get_tactile_button_status",
    value: function alxs1_get_tactile_button_status(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      return this.product.board.readDigital(pin, util);
    }
  }, {
    key: "alxs1_get_pir_sensor_status",
    value: function alxs1_get_pir_sensor_status(args, util) {
      if (!this.product.isReady()) return;
      var pin = parseInt(args.PORT);
      return this.product.board.readDigital(pin, util);
    }
  }, {
    key: "alxs1_get_distance",
    value: function alxs1_get_distance(args, util) {
      if (!this.product.isReady()) return 0;
      
      var pins = args.PORTS.split(','); 
      var trigPin = parseInt(pins[0]);
      var echoPin = parseInt(pins[1]);

      return this.product.board.readSonar(trigPin, echoPin, util);
    }
  }, {
    key: "alxs1_send_to_monitor",
    value: function alxs1_send_to_monitor(args, util) {
      if (!this.product.isReady()) return;
      var message = args.MESSAGE;
      // Serial communication implementation
      return;
    }
  }], [{
    key: "EXTENSION_ID",
    get: function get() {
      return 'polytechs1';
    }
  }, {
    key: "STATE_KEY",
    get: function get() {
      return 'Scratch.polytechs1';
    }
  }]);
  return Scratch3PolytechS1Blocks;
}();

var _default = exports.default = Scratch3PolytechS1Blocks;

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * build options
 * @param {*object} obj {A: "A", B: "B",....}
 * @param {*String} defaultValue "A" for defaultValue
 * @param {*array} locale [{text: , value},{text: , value}....], for build local msg
 */
var buildFieldMenu = function buildFieldMenu(obj, defaultValue, locale, isKey) {
  var options = [];
  var count = 0;
  var flag = 0;
  var localeLen = 0;
  if (locale) {
    localeLen = locale.length;
  }
  for (var name in obj) {
    if (name === defaultValue) {
      flag = count;
    }
    if (localeLen > 0) {
      if (count <= localeLen - 1) {
        var _temp = [];
        _temp[0] = isKey ? name : obj[name];
        _temp[1] = isKey ? name : obj[name];
        options.push(_temp);
      }
    } else {
      var _temp2 = [];
      _temp2[0] = isKey ? name : obj[name];
      _temp2[1] = isKey ? name : obj[name];
      options.push(_temp2);
    }
    count++;
  }
  if (locale) {
    options.map(function (item, index) {
      item[0] = locale[index]["text"];
    });
  }
  if (flag !== 0) {
    var temp = options[flag];
    options.splice(flag, 1);
    options.unshift(temp);
  }
  return options;
};
module.exports = buildFieldMenu;

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * data type for input or boolean/reporter block
 * @enum {string}
 */
var DataType = {
  /**
   * 数字类型
   */
  INT32_T: 'int32_t',
  /**
   * 数字类型
   */
  UINT32_T: 'uint32_t',
  /**
   * 字符类型
   */
  STRING: 'string',
  /**
   * 浮点类型
   */
  FLOAT: 'float',
  /**
   * 布尔类型
   */
  BOOL: 'bool',
  /**
   * 空类型
   */
  VOID: 'void',
  /**
   * void*
   */
  VOIDX: 'void*',
  /**
   * 颜色
   */
  COLOR: 'color',
  /**
   * 表情
   */
  EXPRESSION: 'expression',
  /**
   * 掌控的屏幕显示文字预览
   */
  PREVIEW: 'preview',
  /**
   * 所有的设置下拉框
   */
  SETTING: 'setting',
  /**
   * 数字集合类型
   */
  NUMBER: ['int32_t', 'uint32_t', 'float', 'bool']
};
module.exports = DataType;

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));
var _createClass2 = _interopRequireDefault(__webpack_require__(2));
/**
 * trans text to note number
 */
var Piano = /*#__PURE__*/function () {
  function Piano() {
    (0, _classCallCheck2.default)(this, Piano);
  }
  (0, _createClass2.default)(Piano, null, [{
    key: "transToValue",
    value:
    /**
     * trans piano note text to value by messages
     * @param {*} text  show text
     */
    function transToValue(note) {
      if (isNaN(Number(note))) {
        return Piano.getValueByText(note);
      } else {
        return parseInt(note);
      }
    }
  }, {
    key: "getValueByText",
    value: function getValueByText(note) {
      var value = 131;
      note = note.replace(Piano.getLowRegx(), 'low');
      note = note.replace(Piano.getMiddleRegx(), 'middle');
      note = note.replace(Piano.getHighRegx(), 'high');
      note = note.toLowerCase().replace(/\s/g, '');
      if (note.indexOf('/') !== -1) {
        note = note.slice(0, note.indexOf('/'));
      }
      switch (note) {
        case '1lowc':
          value = 131;
          break;
        case '1#lowc#':
          value = 139;
          break;
        case '2lowd':
          value = 147;
          break;
        case '2#lowd#':
          value = 156;
          break;
        case '3lowe':
          value = 165;
          break;
        case '4lowf':
          value = 175;
          break;
        case '4#lowf#':
          value = 185;
          break;
        case '5lowg':
          value = 196;
          break;
        case '5#lowg#':
          value = 208;
          break;
        case '6lowa':
          value = 220;
          break;
        case '6#lowa#':
          value = 233;
          break;
        case '7lowb':
          value = 247;
          break;
        case '1middlec':
          value = 262;
          break;
        case '1#middlec#':
          value = 277;
          break;
        case '2middled':
          value = 294;
          break;
        case '2#middled#':
          value = 311;
          break;
        case '3middlee':
          value = 330;
          break;
        case '4middlef':
          value = 349;
          break;
        case '4#middlef#':
          value = 370;
          break;
        case '5middleg':
          value = 392;
          break;
        case '5#middleg#':
          value = 415;
          break;
        case '6middlea':
          value = 440;
          break;
        case '6#middlea#':
          value = 466;
          break;
        case '7middleb':
          value = 494;
          break;
        case '1highc':
          value = 523;
          break;
        case '1#highc#':
          value = 554;
          break;
        case '2highd':
          value = 587;
          break;
        case '2#highd#':
          value = 622;
          break;
        case '3highe':
          value = 659;
          break;
        case '4highf':
          value = 698;
          break;
        case '4#highf#':
          value = 740;
          break;
        case '5highg':
          value = 784;
          break;
        case '5#highg#':
          value = 831;
          break;
        case '6higha':
          value = 880;
          break;
        case '6#higha#':
          value = 932;
          break;
        case '7highb':
          value = 988;
          break;
        default:
          value = 131;
          break;
      }
      return value;
    }
    /**
     * get low note regx
     */
  }, {
    key: "getLowRegx",
    value: function getLowRegx() {
      return /(低|Low)/g;
    }
    /**
     * get Middle note regx
     */
  }, {
    key: "getMiddleRegx",
    value: function getMiddleRegx() {
      return /(中|Middle)/g;
    }
    /**
     * get High note regx
     */
  }, {
    key: "getHighRegx",
    value: function getHighRegx() {
      return /(高|High)/g;
    }
  }]);
  return Piano;
}();
module.exports = Piano;

/***/ })

}]);