webpackJsonp([1],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      comments: []
    };
  },

  methods: {
    getComments: function getComments() {
      var _this = this;

      axios.get('/admin/comment/get-all').then(function (_ref) {
        var data = _ref.data;

        data.forEach(function (comment) {
          _this.comments.push(comment);
        });
      });
    },
    changeStatus: function changeStatus(id) {
      axios.post('/admin/comment/change-status', { 'commentId': id }).then(function (_ref2) {
        var data = _ref2.data;

        console.log(data);
        if (data.success == 1) {
          var commentStatus = document.querySelector('[data-comment-id="' + id + '"]');
          commentStatus.innerText = data.status == 1 ? 'Disable' : 'Enable';
        }
      });
    },
    deleteComment: function deleteComment(id) {
      axios.post('/admin/comment/delete', { 'commentId': id }).then(function (_ref3) {
        var data = _ref3.data;

        if (data.success == 1) {
          var el = document.querySelector('[data-id="' + id + '"]');
          el.parentNode.removeChild(el);
        }
      });
    }
  },
  created: function created() {
    this.getComments();
  }
});

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.comments, function(comment) {
            return _c(
              "tr",
              { key: comment.id, attrs: { "data-id": comment.id } },
              [
                _c("td", [_vm._v(_vm._s(comment.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(comment.postId))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(comment.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(comment.email))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(comment.body))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(comment.created_at))]),
                _vm._v(" "),
                _c("td", [
                  comment.active == 0
                    ? _c(
                        "a",
                        {
                          attrs: { href: "#", "data-comment-id": comment.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.changeStatus(comment.id)
                            }
                          }
                        },
                        [_vm._v("Enable")]
                      )
                    : _c(
                        "a",
                        {
                          attrs: { href: "#", "data-comment-id": comment.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.changeStatus(comment.id)
                            }
                          }
                        },
                        [_vm._v("Disable")]
                      )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.deleteComment(comment.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "far fa-trash-alt" })]
                  )
                ])
              ]
            )
          })
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c("h1", { staticClass: "push-down-50 main-title" }, [
        _vm._v("All Comments")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Post")]),
        _vm._v(" "),
        _c("th", [_vm._v("From")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Comment")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", [_vm._v("Enable")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f428772", module.exports)
  }
}

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e8aaede", module.exports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(281)
/* template */
var __vue_template__ = __webpack_require__(282)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/comments/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f428772", Component.options)
  } else {
    hotAPI.reload("data-v-3f428772", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(283)
/* template */
var __vue_template__ = __webpack_require__(284)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/comments/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e8aaede", Component.options)
  } else {
    hotAPI.reload("data-v-4e8aaede", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});