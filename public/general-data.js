webpackJsonp([4],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(66)
/* template */
var __vue_template__ = __webpack_require__(67)
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
Component.options.__file = "resources/assets/js/components/admin/GeneralData.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-144ca7cb", Component.options)
  } else {
    hotAPI.reload("data-v-144ca7cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      generalData: [],
      gmapData: []
    };
  },

  methods: {
    saveGeneralData: function saveGeneralData() {},
    saveGmapData: function saveGmapData() {}
  }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "general-data-holder" }, [
      _c("div", { staticClass: "col-md-6 col-sm-12 col xs-12" }, [
        _c(
          "form",
          { staticClass: "general-data-form", attrs: { action: "" } },
          [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "name" } },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.generalData.name,
                    expression: "generalData.name"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "name",
                  placeholder: "Enter name (eg. Aikido Dojo Sensei)"
                },
                domProps: { value: _vm.generalData.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.generalData, "name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "address" } },
                [_vm._v("Address")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.generalData.address,
                    expression: "generalData.address"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "address",
                  placeholder: "Enter address"
                },
                domProps: { value: _vm.generalData.address },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.generalData, "address", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "phone" } },
                [_vm._v("Phone")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.generalData.phone,
                    expression: "generalData.phone"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "phone",
                  placeholder: "Enter phone"
                },
                domProps: { value: _vm.generalData.phone },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.generalData, "phone", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "mobile" } },
                [_vm._v("Mobile")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.generalData.mobile,
                    expression: "generalData.mobile"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "mobile",
                  placeholder: "Enter mobile"
                },
                domProps: { value: _vm.generalData.mobile },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.generalData, "mobile", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-primary",
                attrs: { href: "#", id: "saveGeneralDataBtn" },
                on: { click: _vm.saveGeneralData }
              },
              [_vm._v("Save")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 col-sm-12 col xs-12" }, [
        _c("form", { staticClass: "gmap-data-form", attrs: { action: "" } }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "lat" } }, [
              _vm._v("Latitude")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.gmapData.mobile,
                  expression: "gmapData.mobile"
                }
              ],
              staticClass: "form-control-plaintext",
              attrs: { type: "text", id: "lat", placeholder: "Enter latitude" },
              domProps: { value: _vm.gmapData.mobile },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.gmapData, "mobile", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "lng" } }, [
              _vm._v("Longitude")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.gmapData.lng,
                  expression: "gmapData.lng"
                }
              ],
              staticClass: "form-control-plaintext",
              attrs: {
                type: "text",
                id: "lng",
                placeholder: "Enter longitude"
              },
              domProps: { value: _vm.gmapData.lng },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.gmapData, "lng", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-primary",
              attrs: { href: "#", id: "saveGmapDataBtn" },
              on: { click: _vm.saveGmapData }
            },
            [_vm._v("Save")]
          )
        ])
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
        _vm._v("General Data")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-144ca7cb", module.exports)
  }
}

/***/ })

});