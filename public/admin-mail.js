webpackJsonp([13],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      messages: []
    };
  },
  created: function created() {
    this.getMessages();
  },

  methods: {
    getMessages: function getMessages() {
      var _this = this;

      axios.get('/admin/messages/get-messages').then(function (_ref) {
        var data = _ref.data;

        data.forEach(function (message) {
          _this.messages.push(message);
        });
      });
    },
    deleteMessage: function deleteMessage(id) {
      axios.post('/admin/message/delete', { 'messageId': id }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success == 1) {
          var el = document.querySelector('[data-id="' + id + '"]');
          el.parentNode.removeChild(el);
        }
      });
    }
  }
});

/***/ }),

/***/ 286:
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
          _vm._l(_vm.messages, function(message) {
            return _c(
              "tr",
              { key: message.id, attrs: { "data-id": message.id } },
              [
                _c("td", [_vm._v(_vm._s(message.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(message.from))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(message.email))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(message.ip))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: { name: "message", params: { id: message.id } },
                          tag: "a"
                        }
                      },
                      [
                        _vm._v(
                          "  " + _vm._s(_vm._f("truncate")(message.message))
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(message.created_at))]),
                _vm._v(" "),
                _c("td", [
                  message.read
                    ? _c("span", [_c("i", { staticClass: "fas fa-check" })])
                    : _c("span", [_c("i", { staticClass: "fas fa-times" })])
                ]),
                _vm._v(" "),
                _c("td", [
                  message.answered
                    ? _c("span", [_c("i", { staticClass: "fas fa-check" })])
                    : _c("span", [_c("i", { staticClass: "fas fa-times" })])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.deleteMessage(message.id)
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
        _vm._v("All Messages")
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
        _c("th", [_vm._v("From")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ip address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Message")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", [_vm._v("Read")]),
        _vm._v(" "),
        _c("th", [_vm._v("Answered")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-259738bd", module.exports)
  }
}

/***/ }),

/***/ 67:
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
Component.options.__file = "resources/assets/js/components/admin/mail/Messages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-259738bd", Component.options)
  } else {
    hotAPI.reload("data-v-259738bd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});