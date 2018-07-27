webpackJsonp([14],{

/***/ 287:
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
      error: '',
      fieldRequired: false,
      fromMessage: {
        id: null,
        from: '',
        email: '',
        message: ''
      },
      replies: [],
      reply: '',
      options: {
        'height': 300,
        'width': 1200
      },
      replySentSucces: false,
      replySentError: false
    };
  },

  methods: {
    getMessage: function getMessage(id) {
      var _this = this;

      axios.post('/admin/message/get-message', { messageId: id }).then(function (_ref) {
        var data = _ref.data;

        _this.fromMessage.id = data.message.id;
        _this.fromMessage.from = data.message.from;
        _this.fromMessage.email = data.message.email;
        _this.fromMessage.message = data.message.message;
        var replies = data.replies;
        replies.forEach(function (reply) {
          _this.replies.push(reply);
        });
      });
    },
    sendReply: function sendReply() {
      var _this2 = this;

      //let loader = this.$loading.show();
      this.error = '';
      this.replySentError = false;
      this.replySentSucces = false;
      var messageId = this.fromMessage.id;
      this.checkForm();
      if (!this.error.length) {
        var loader = this.$loading.show();
        axios.post('/admin/message/reply', { 'messageId': messageId, 'reply': this.reply }).then(function (_ref2) {
          var data = _ref2.data;

          loader.hide();
          if (data.success == 1) {
            _this2.replySentSucces = true;
            document.getElementById('replyForm').reset();
          } else {
            _this2.replySentError = true;
          }
        });
      }
    },
    checkForm: function checkForm() {
      if (!this.reply) {
        this.error = "Reply filed is required.";
      }
      if (!this.errors) {
        return true;
      }
      return false;
    }
  },
  created: function created() {
    this.getMessage(this.$route.params.id);
  }
});

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "message-section-wrapper" }, [
    _c("div", { staticClass: "message-from-holder" }, [
      _c("div", { staticClass: "message-field" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "message-data" }, [
          _vm._v("\n        " + _vm._s(_vm.fromMessage.from) + "\n      ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "message-field" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "message-data" }, [
          _vm._v("\n        " + _vm._s(_vm.fromMessage.email) + "\n      ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "message-field" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "message-data" }, [
          _vm._v("\n        " + _vm._s(_vm.fromMessage.message) + "\n      ")
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "reply-form-holder push-down-100" },
      [
        _vm._l(_vm.replies, function(reply) {
          return _c("div", { key: reply.id, staticClass: "message-field" }, [
            _vm._m(3, true),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "message-data reply-message",
                domProps: { innerHTML: _vm._s(reply.reply) }
              },
              [_vm._v("\n        " + _vm._s(reply.reply) + "\n      ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "message-response-time reply-time" }, [
              _vm._v(
                "\n        Replied at: " + _vm._s(reply.created_at) + "\n      "
              )
            ])
          ])
        }),
        _vm._v(" "),
        _c("div", { staticClass: "messages-holder" }, [
          _vm.replySentSucces
            ? _c(
                "div",
                {
                  staticClass: "alert alert-success",
                  attrs: { role: "alert" }
                },
                [_vm._v("\n        Reply sent!\n      ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.replySentError
            ? _c(
                "div",
                { staticClass: "alert alert-danger", attrs: { role: "alert" } },
                [_vm._v("\n        Reply not sent!\n      ")]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "reply-form",
            attrs: { id: "replyForm" },
            on: { submit: _vm.checkForm }
          },
          [
            _c(
              "div",
              { staticClass: "form-group row" },
              [
                _c("tinymce", {
                  attrs: { id: "d1", other_options: _vm.options },
                  model: {
                    value: _vm.reply,
                    callback: function($$v) {
                      _vm.reply = $$v
                    },
                    expression: "reply"
                  }
                }),
                _vm._v(" "),
                _vm.error.length
                  ? _c("span", { staticClass: "error" }, [
                      _vm._v("*" + _vm._s(_vm.error))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-primary push-down-50",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.sendReply($event)
                  }
                }
              },
              [_vm._v("Reply")]
            )
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message-heading" }, [
      _c("p", [_vm._v("From: ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message-heading" }, [
      _c("p", [_vm._v("Email: ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message-heading" }, [
      _c("p", [_vm._v("Message: ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message-heading" }, [
      _c("p", [_vm._v("Reply: ")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e53e5b4", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(287)
/* template */
var __vue_template__ = __webpack_require__(288)
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
Component.options.__file = "resources/assets/js/components/admin/mail/Message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e53e5b4", Component.options)
  } else {
    hotAPI.reload("data-v-0e53e5b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});