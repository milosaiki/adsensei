webpackJsonp([6],{

/***/ 302:
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
      showLoader: false,
      infoWinOpen: false,
      infoWindowPos: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      msg: {
        name: '',
        email: '',
        message: ''
      },
      gmap: {
        lat: 0,
        lng: 0
      },
      marker: {
        position: {
          lat: 0,
          lng: 0
        },
        name: '',
        address: ''
      }
    };
  },

  methods: {
    sendMsg: function sendMsg() {
      var _this = this;

      var loader = this.$loading.show();
      axios.post('/contact/send-message', { 'message': this.msg }).then(function (_ref) {
        var data = _ref.data;

        loader.hide();
        if (data.success == 1) {
          _this.$modal.show('message-sent-success');
          document.getElementById('contactForm').reset();
        } else {
          _this.$modal.show('message-sent-error');
        }
      });
    },
    getGmapData: function getGmapData() {
      var _this2 = this;

      axios.get('/contact/gmap-data').then(function (_ref2) {
        var data = _ref2.data;

        _this2.gmap.lat = parseFloat(data.lat);
        _this2.marker.position.lat = parseFloat(data.lat);
        _this2.gmap.lng = parseFloat(data.lng);
        _this2.marker.position.lng = parseFloat(data.lng);
        _this2.marker.name = data.name;
        _this2.marker.address = data.address;
      });
    },
    toggleInfoWindow: function toggleInfoWindow() {
      this.infoWindowPos = this.marker.position;
      this.infoWinOpen = !this.infoWinOpen;
    },
    closeModal: function closeModal(name) {
      this.$modal.hide(name);
    }
  },
  created: function created() {
    this.getGmapData();
  }
});

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "main-section", attrs: { id: "main" } }),
      _vm._v(" "),
      _c("div", { staticClass: "push-up container contact text-center" }, [
        _c("h2", { staticClass: "section-title" }, [_vm._v("Kontakt")]),
        _vm._v(" "),
        _c("div", [
          _c(
            "div",
            { staticClass: "contact-map", attrs: { id: "map" } },
            [
              _c(
                "GmapMap",
                {
                  staticStyle: { width: "100%", height: "485px" },
                  attrs: {
                    center: { lat: _vm.gmap.lat, lng: _vm.gmap.lng },
                    zoom: 16,
                    "map-type-id": "terrain"
                  }
                },
                [
                  _c(
                    "gmap-info-window",
                    {
                      attrs: {
                        options: _vm.infoOptions,
                        position: _vm.infoWindowPos,
                        opened: _vm.infoWinOpen
                      },
                      on: {
                        closeclick: function($event) {
                          _vm.infoWinOpen = false
                        }
                      }
                    },
                    [
                      _vm._v("\n            " + _vm._s(_vm.marker.name) + " "),
                      _c("br"),
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.marker.address) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("GmapMarker", {
                    attrs: {
                      position: _vm.marker.position,
                      clickable: true,
                      draggable: true,
                      opened: _vm.infoWinOpen
                    },
                    on: { click: _vm.toggleInfoWindow }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "contact-info" }, [
            _c(
              "form",
              {
                staticClass: "contact-form",
                attrs: { action: "#", id: "contactForm" }
              },
              [
                _c("label", { attrs: { for: "name" } }, [
                  _vm._v("Ime i prezime")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.msg.name,
                      expression: "msg.name"
                    }
                  ],
                  attrs: {
                    type: "text",
                    id: "name",
                    placeholder: "Unesite vase ime i prezime"
                  },
                  domProps: { value: _vm.msg.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.msg, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "email" } }, [
                  _vm._v("Vasa email adresa")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.msg.email,
                      expression: "msg.email"
                    }
                  ],
                  attrs: {
                    type: "email",
                    id: "email",
                    placeholder: "Unesite vasu email adresu"
                  },
                  domProps: { value: _vm.msg.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.msg, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "message" } }, [
                  _vm._v("Vasa poruka")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.msg.message,
                      expression: "msg.message"
                    }
                  ],
                  attrs: {
                    name: "message",
                    id: "message",
                    cols: "30",
                    rows: "5"
                  },
                  domProps: { value: _vm.msg.message },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.msg, "message", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "#", id: "send-msg-btn" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.sendMsg($event)
                      }
                    }
                  },
                  [_vm._v("Posalji poruku")]
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "message-sent-success" } }, [
        _c("div", { staticClass: "modal-window" }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.closeModal("message-sent-success")
                }
              }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-window-content" }, [
            _c("p", { staticClass: "success" }, [
              _vm._v("Vasa poruka je poslata")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "message-sent-error" } }, [
        _c("div", { staticClass: "modal-window" }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.closeModal("message-sent-error")
                }
              }
            },
            [_c("i", { staticClass: "fas fa-times" })]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-window-content" }, [
            _c("p", { staticClass: "error" }, [
              _vm._v(
                "Doslo je do greske prilikom slanja poruke, molimo Vas pokusajte ponovo"
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3bc026c2", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(302)
/* template */
var __vue_template__ = __webpack_require__(303)
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
Component.options.__file = "resources/assets/js/components/public/contact/Contact.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bc026c2", Component.options)
  } else {
    hotAPI.reload("data-v-3bc026c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});