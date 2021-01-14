webpackHotUpdate_N_E("pages/[community]",{

/***/ "./components/CommunityQuestions.tsx":
/*!*******************************************!*\
  !*** ./components/CommunityQuestions.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/host */ \"./utils/host.ts\");\n/* harmony import */ var _CommunityQuestion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommunityQuestion */ \"./components/CommunityQuestion.tsx\");\n/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Aside */ \"./components/Aside.tsx\");\n/* harmony import */ var _utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/cssVariables */ \"./utils/cssVariables.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/CommunityQuestions.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CommunityQuestions = function CommunityQuestions(_ref) {\n  _s();\n\n  var community = _ref.community;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var fetchPosts = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_6__[\"default\"], \"/communities/\").concat(community, \"/posts?page=\").concat(page, \"&limit=10\"));\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchPosts(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])([\"community-posts\", page], function () {\n    return fetchPosts(page);\n  }, {\n    keepPreviousData: true,\n    cacheTime: 0\n  }),\n      isLoading = _useQuery.isLoading,\n      isError = _useQuery.isError,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      isPreviousData = _useQuery.isPreviousData;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"community-post-header-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"header-title\",\n        children: data === null || data === void 0 ? void 0 : data.community.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"header-description\",\n        children: data === null || data === void 0 ? void 0 : data.community.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"community-post-page-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"posts-container\",\n        children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]),\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this) : isError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]),\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"community-posts-container\",\n            children: data.posts.sort(function (a, b) {\n              var dateA = Date.parse(a.createdAt);\n              var dateB = Date.parse(b.createdAt);\n              return dateB > dateA ? 1 : -1;\n            }).map(function (post) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_CommunityQuestion__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                post: post,\n                community: community\n              }, post.uuid, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 21\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"page-handlers\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]) + \" \" + \"current-page\",\n              children: [\"Current Page: \", page]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                setPage(function (old) {\n                  return Math.max(old - 1, 0);\n                });\n                window.scrollTo(0, -500);\n              },\n              disabled: page === 1,\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]),\n              children: \"Previous Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                if (!isPreviousData && data.hasMore) {\n                  setPage(function (old) {\n                    return old + 1;\n                  });\n                }\n              },\n              disabled: isPreviousData || !data.hasMore,\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"3461175424\", [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]]]]),\n              children: \"Next Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Aside__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        borderSide: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"3461175424\",\n      dynamic: [_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"]],\n      children: \".community-post-header-container.__jsx-style-dynamic-selector{height:140px;width:100%;background:\".concat(_utils_cssVariables__WEBPACK_IMPORTED_MODULE_9__[\"headerBackground\"], \";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-title.__jsx-style-dynamic-selector,.header-description.__jsx-style-dynamic-selector{width:90%;margin:10px 0;}.community-post-page-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.posts-container.__jsx-style-dynamic-selector{width:80%;}.community-posts-container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.page-handlers.__jsx-style-dynamic-selector{width:90%;margin:30px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;}button.__jsx-style-dynamic-selector{height:70%;width:90px;margin:0 5px;font-size:0.6rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Db21tdW5pdHlRdWVzdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGa0IsQUFHd0IsQUFXSCxBQUtHLEFBS0gsQUFJQyxBQU9ELEFBU0MsVUE3QkcsQUFVaEIsQUFXbUIsQ0FQSixBQWdCRixFQXpDQSxTQTBDRSxFQXpDMkIsQUFXMUMsR0FxQmUsUUFVSSxpQkFDbkIsWUExQ2UsVUFjRixXQUNiLEFBU3dCLGdCQVFHLHFDQS9CSCx5QkF3QkgsbUNBUUEsa0JBL0JJLHdDQXdCekIsbUNBUWMsWUFDZCxZQWhDcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3N0YWNrb3ZlcmZsb3ctY2xvbmUvZnJvbnRlbmQvY29tcG9uZW50cy9Db21tdW5pdHlRdWVzdGlvbnMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vdXRpbHMvaG9zdFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9zdHNUeXBlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzL3F1ZXN0aW9uVHlwZVwiO1xuaW1wb3J0IENvbW11bml0eVF1ZXN0aW9uIGZyb20gXCIuL0NvbW11bml0eVF1ZXN0aW9uXCI7XG5pbXBvcnQgQXNpZGUgZnJvbSBcIi4vQXNpZGVcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi4vdXRpbHMvY3NzVmFyaWFibGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbW11bml0eTogc3RyaW5nO1xufVxuXG5jb25zdCBDb21tdW5pdHlRdWVzdGlvbnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbW11bml0eSB9KSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2hvc3R9L2NvbW11bml0aWVzLyR7Y29tbXVuaXR5fS9wb3N0cz9wYWdlPSR7cGFnZX0mbGltaXQ9MTBgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhOiBDb21tdW5pdHlQb3N0c1R5cGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvciwgZGF0YSwgaXNQcmV2aW91c0RhdGEgfSA9IHVzZVF1ZXJ5PFxuICAgIENvbW11bml0eVBvc3RzVHlwZSxcbiAgICBFcnJvclxuICA+KFtcImNvbW11bml0eS1wb3N0c1wiLCBwYWdlXSwgKCkgPT4gZmV0Y2hQb3N0cyhwYWdlKSwge1xuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgY2FjaGVUaW1lOiAwLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbXVuaXR5LXBvc3QtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+e2RhdGE/LmNvbW11bml0eS5uYW1lfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlci1kZXNjcmlwdGlvblwiPntkYXRhPy5jb21tdW5pdHkuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiBpc0Vycm9yID8gKFxuICAgICAgICAgICAgPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5wb3N0c1xuICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUEgPSBEYXRlLnBhcnNlKGEuY3JlYXRlZEF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUIgPSBEYXRlLnBhcnNlKGIuY3JlYXRlZEF0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVCID4gZGF0ZUEgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29tbXVuaXR5UXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbW11bml0eT17Y29tbXVuaXR5fVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC51dWlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGFuZGxlcnNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJyZW50LXBhZ2VcIj5DdXJyZW50IFBhZ2U6IHtwYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoKG9sZCkgPT4gTWF0aC5tYXgob2xkIC0gMSwgMCkpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgLTUwMCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJldmlvdXMgUGFnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ByZXZpb3VzRGF0YSAmJiBkYXRhLmhhc01vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IG9sZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlvdXNEYXRhIHx8ICFkYXRhLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFzaWRlIGJvcmRlclNpZGU9e1wibGVmdFwifSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbW11bml0eS1wb3N0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MuaGVhZGVyQmFja2dyb3VuZH07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLFxuICAgICAgICAuaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW11bml0eS1wb3N0LXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tdW5pdHktcG9zdHMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdlLWhhbmRsZXJzIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdHlRdWVzdGlvbnM7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/stackoverflow-clone/frontend/components/CommunityQuestions.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommunityQuestions, \"B8AHcuIhDtcfT64L9EclU84Jm5E=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = CommunityQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityQuestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommunityQuestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tdW5pdHlRdWVzdGlvbnMudHN4PzdhMGIiXSwibmFtZXMiOlsiQ29tbXVuaXR5UXVlc3Rpb25zIiwiY29tbXVuaXR5IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoUG9zdHMiLCJmZXRjaCIsImhvc3QiLCJyZXMiLCJqc29uIiwiZGF0YSIsInVzZVF1ZXJ5Iiwia2VlcFByZXZpb3VzRGF0YSIsImNhY2hlVGltZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImlzUHJldmlvdXNEYXRhIiwiY3NzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsInBvc3RzIiwic29ydCIsImEiLCJiIiwiZGF0ZUEiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkQXQiLCJkYXRlQiIsIm1hcCIsInBvc3QiLCJ1dWlkIiwib2xkIiwiTWF0aCIsIm1heCIsIndpbmRvdyIsInNjcm9sbFRvIiwiaGFzTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLGtCQUFtQyxHQUFHLFNBQXRDQSxrQkFBc0MsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNyQ0Msc0RBQVEsQ0FBUyxDQUFULENBRDZCO0FBQUEsTUFDdERDLElBRHNEO0FBQUEsTUFDaERDLE9BRGdEOztBQUc3RCxNQUFNQyxVQUFVO0FBQUEsaU1BQUcsaUJBQU9GLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0csS0FBSyxXQUNsQkMsbURBRGtCLDBCQUNFTixTQURGLHlCQUMwQkUsSUFEMUIsZUFETjs7QUFBQTtBQUNYSyxpQkFEVztBQUFBO0FBQUEscUJBSXNCQSxHQUFHLENBQUNDLElBQUosRUFKdEI7O0FBQUE7QUFJWEMsa0JBSlc7QUFBQSwrQ0FL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QWYsRUFBa0IsQ0FBbEIsQ0FBVDtBQUFBLGlCQUFELENBQVA7QUFDQUcsc0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFDLEdBQXBCO0FBQ0QsZUFKSDtBQUtFLHNCQUFRLEVBQUVuQyxJQUFJLEtBQUssQ0FMckI7QUFBQSwwR0E4QlFlLG9FQTlCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVdFO0FBQ0UscUJBQU8sRUFBRSxtQkFBTTtBQUNiLG9CQUFJLENBQUNELGNBQUQsSUFBbUJQLElBQUksQ0FBQzZCLE9BQTVCLEVBQXFDO0FBQ25DbkMseUJBQU8sQ0FBQyxVQUFDOEIsR0FBRDtBQUFBLDJCQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLG1CQUFELENBQVA7QUFDRDtBQUNGLGVBTEg7QUFNRSxzQkFBUSxFQUFFakIsY0FBYyxJQUFJLENBQUNQLElBQUksQ0FBQzZCLE9BTnBDO0FBQUEsMEdBcUJRckIsb0VBckJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZ0RFLHFFQUFDLDhDQUFEO0FBQU8sa0JBQVUsRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQSxnQkE0RG9CQSxvRUE1RHBCO0FBQUEsMkhBNERvQkEsb0VBNURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEdELENBL0hEOztHQUFNbEIsa0I7VUFXd0RXLG9EOzs7S0FYeERYLGtCO0FBaUlTQSxpRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbXVuaXR5UXVlc3Rpb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IGhvc3QgZnJvbSBcIi4uL3V0aWxzL2hvc3RcIjtcbmltcG9ydCB7IENvbW11bml0eVBvc3RzVHlwZSB9IGZyb20gXCIuLi91dGlscy90eXBlcy9xdWVzdGlvblR5cGVcIjtcbmltcG9ydCBDb21tdW5pdHlRdWVzdGlvbiBmcm9tIFwiLi9Db21tdW5pdHlRdWVzdGlvblwiO1xuaW1wb3J0IEFzaWRlIGZyb20gXCIuL0FzaWRlXCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4uL3V0aWxzL2Nzc1ZhcmlhYmxlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb21tdW5pdHk6IHN0cmluZztcbn1cblxuY29uc3QgQ29tbXVuaXR5UXVlc3Rpb25zOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjb21tdW5pdHkgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtob3N0fS9jb21tdW5pdGllcy8ke2NvbW11bml0eX0vcG9zdHM/cGFnZT0ke3BhZ2V9JmxpbWl0PTEwYFxuICAgICk7XG4gICAgY29uc3QgZGF0YTogQ29tbXVuaXR5UG9zdHNUeXBlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IsIGRhdGEsIGlzUHJldmlvdXNEYXRhIH0gPSB1c2VRdWVyeTxcbiAgICBDb21tdW5pdHlQb3N0c1R5cGUsXG4gICAgRXJyb3JcbiAgPihbXCJjb21tdW5pdHktcG9zdHNcIiwgcGFnZV0sICgpID0+IGZldGNoUG9zdHMocGFnZSksIHtcbiAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgIGNhY2hlVGltZTogMCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW11bml0eS1wb3N0LWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPntkYXRhPy5jb21tdW5pdHkubmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXItZGVzY3JpcHRpb25cIj57ZGF0YT8uY29tbXVuaXR5LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdC1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApIDogaXNFcnJvciA/IChcbiAgICAgICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tdW5pdHktcG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2RhdGEucG9zdHNcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVBID0gRGF0ZS5wYXJzZShhLmNyZWF0ZWRBdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVCID0gRGF0ZS5wYXJzZShiLmNyZWF0ZWRBdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlQiA+IGRhdGVBID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbW11bml0eVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdD17cG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICBjb21tdW5pdHk9e2NvbW11bml0eX1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Bvc3QudXVpZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhhbmRsZXJzXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3VycmVudC1wYWdlXCI+Q3VycmVudCBQYWdlOiB7cGFnZX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKChvbGQpID0+IE1hdGgubWF4KG9sZCAtIDEsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIC01MDApO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQcmV2aW91c0RhdGEgJiYgZGF0YS5oYXNNb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZSgob2xkKSA9PiBvbGQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpb3VzRGF0YSB8fCAhZGF0YS5oYXNNb3JlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBc2lkZSBib3JkZXJTaWRlPXtcImxlZnRcIn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb21tdW5pdHktcG9zdC1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmhlYWRlckJhY2tncm91bmR9O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlci10aXRsZSxcbiAgICAgICAgLmhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tdW5pdHktcG9zdC1wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0cy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbXVuaXR5LXBvc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZS1oYW5kbGVycyB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UXVlc3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommunityQuestions.tsx\n");

/***/ })

})