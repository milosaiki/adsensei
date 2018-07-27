webpackJsonp([6],{

/***/ 285:
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
      members: []
    };
  },

  methods: {
    getMembers: function getMembers() {
      var _this = this;

      axios.get('/admin/members/all').then(function (_ref) {
        var data = _ref.data;

        data.forEach(function (member) {
          _this.members.push(member);
        });
      });
    },
    deleteMember: function deleteMember(id) {
      axios.post('/admin/member/delete', { 'memberId': id }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success == 1) {
          var el = document.querySelector('[data-id="' + id + '"]');
          el.parentNode.removeChild(el);
        }
      });
    }
  },
  created: function created() {
    this.getMembers();
  }
});

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.members, function(member) {
            return _c(
              "tr",
              { key: member.id, attrs: { "data-id": member.id } },
              [
                _c("td", [_vm._v(_vm._s(member.id))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: { name: "memberEdit", params: { id: member.id } },
                          tag: "a"
                        }
                      },
                      [_vm._v(_vm._s(member.firstname))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: { name: "memberEdit", params: { id: member.id } },
                          tag: "a"
                        }
                      },
                      [_vm._v(_vm._s(member.lastname))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(member.kyu))]),
                _vm._v(" "),
                _c("td", [
                  member.is_trainer
                    ? _c("span", [_c("i", { staticClass: "fas fa-check" })])
                    : _c("span", [_c("i", { staticClass: "fas fa-times" })])
                ]),
                _vm._v(" "),
                _c("td", [
                  member.is_assistant
                    ? _c("span", [_c("i", { staticClass: "fas fa-check" })])
                    : _c("span", [_c("i", { staticClass: "fas fa-times" })])
                ]),
                _vm._v(" "),
                _c("td", [
                  !member.is_assistant && !member.is_trainer
                    ? _c("span", [_c("i", { staticClass: "fas fa-check" })])
                    : _c("span", [_c("i", { staticClass: "fas fa-times" })])
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(member.created_at))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.deleteMember(member.id)
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
        _vm._v("All members")
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
        _c("th", [_vm._v("First Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Kyu")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trainer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Assistant")]),
        _vm._v(" "),
        _c("th", [_vm._v("Student")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c3a8d9ea", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(285)
/* template */
var __vue_template__ = __webpack_require__(286)
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
Component.options.__file = "resources/assets/js/components/admin/members/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3a8d9ea", Component.options)
  } else {
    hotAPI.reload("data-v-c3a8d9ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});