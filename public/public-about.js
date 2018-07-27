webpackJsonp([7],{

/***/ 298:
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
      about: {
        aboutUs: '',
        mondayFrom: '',
        mondayTo: '',
        tuesdayFrom: '',
        tuesdayTo: '',
        wednesdayFrom: '',
        wednesdayTo: '',
        thursdayFrom: '',
        thursdayTo: '',
        fridayFrom: '',
        fridayTo: '',
        saturdayFrom: '',
        saturdayTo: '',
        sundayFrom: '',
        sundayTo: ''
      }
    };
  },

  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/about/get').then(function (_ref) {
        var data = _ref.data;

        _this.about.aboutUs = data.aboutUs;
        _this.about.mondayFrom = data.mondayFrom;
        _this.about.mondayTo = data.mondayTo;
        _this.about.tuesdayFrom = data.tuesdayFrom;
        _this.about.tuesdayTo = data.tuesdayTo;
        _this.about.wednesdayFrom = data.wednesdayFrom;
        _this.about.wednesdayTo = data.wednesdayTo;
        _this.about.thursdayFrom = data.thursdayFrom;
        _this.about.thursdayTo = data.thursdayTo;
        _this.about.fridayFrom = data.fridayFrom;
        _this.about.fridayTo = data.fridayTo;
        _this.about.saturdayFrom = data.saturdayFrom;
        _this.about.saturdayTo = data.saturdayTo;
        _this.about.sundayFrom = data.sundayFrom;
        _this.about.sundayTo = data.sundayTo;
      });
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "main-section", attrs: { id: "main" } }),
    _vm._v(" "),
    _c("div", { staticClass: "container push-up", attrs: { id: "about-us" } }, [
      _c("h2", { staticClass: "section-title" }, [_vm._v("O nama")]),
      _vm._v(" "),
      _c("div", [
        _c("p", { domProps: { innerHTML: _vm._s(_vm.about.aboutUs) } }, [
          _vm._v(_vm._s(_vm.about.aboutUs))
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mid-section", attrs: { id: "about-middle" } }),
    _vm._v(" "),
    _c("div", { staticClass: "main-section-time-table text-center" }, [
      _c("h3", [_vm._v("Termini Treninga")]),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table wow fadeIn",
          attrs: {
            id: "table",
            "wow-data-delay": "2s",
            "data-wow-offset": "150",
            cellspacing: "0",
            cellpadding: "0"
          }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [
                _vm.about.mondayFrom
                  ? _c("span", [
                      _vm._v(
                        _vm._s(_vm.about.mondayFrom) +
                          " - " +
                          _vm._s(_vm.about.mondayTo)
                      )
                    ])
                  : _c("span", [_c("i", { staticClass: "fas fa-times" })])
              ]),
              _vm._v(" "),
              _c("td", [
                _vm.about.tuesdayFrom
                  ? _c("span", [
                      _vm._v(
                        _vm._s(_vm.about.tuesdayFrom) +
                          " - " +
                          _vm._s(_vm.about.tuesdayto)
                      )
                    ])
                  : _c("span", [_c("i", { staticClass: "fas fa-times" })])
              ]),
              _vm._v(" "),
              _c("td", [
                _vm.about.wednesdayFrom
                  ? _c("span", [
                      _vm._v(
                        _vm._s(_vm.about.wednesdayFrom) +
                          " - " +
                          _vm._s(_vm.about.wednesdayTo)
                      )
                    ])
                  : _c("span", [_c("i", { staticClass: "fas fa-times" })])
              ]),
              _vm._v(" "),
              _c("td", [
                _vm.about.thursdayFrom
                  ? _c("span", [
                      _vm._v(
                        _vm._s(_vm.about.thursdayFrom) +
                          " - " +
                          _vm._s(_vm.about.thursdayTo)
                      )
                    ])
                  : _c("span", [_c("i", { staticClass: "fas fa-times" })])
              ]),
              _vm._v(" "),
              _c("td", [
                _vm.about.fridayFrom
                  ? _c("span", [
                      _vm._v(
                        _vm._s(_vm.about.fridayFrom) +
                          " - " +
                          _vm._s(_vm.about.fridayTo)
                      )
                    ])
                  : _c("span", [_c("i", { staticClass: "fas fa-times" })])
              ]),
              _vm._v(" "),
              _c("td", [
                _vm.about.saturdayFrom
                  ? _c("span", [
                      _vm._v(
                        _vm._s(_vm.about.saturdayFrom) +
                          " - " +
                          _vm._s(_vm.about.saturdayTo)
                      )
                    ])
                  : _c("span", [_c("i", { staticClass: "fas fa-times" })])
              ]),
              _vm._v(" "),
              _c("td", [
                _vm.about.sundayFrom
                  ? _c("span", [
                      _vm._v(
                        _vm._s(_vm.about.sundayFrom) +
                          " - " +
                          _vm._s(_vm.about.sundayTo)
                      )
                    ])
                  : _c("span", [_c("i", { staticClass: "fas fa-times" })])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "mobile-table",
          attrs: { cellspacing: "0", cellpadding: "0" }
        },
        [
          _c("tr", [
            _c("td", [_vm._v("Pon")]),
            _vm._v(" "),
            _c("td", [
              _vm.about.mondayFrom
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.about.mondayFrom) +
                        " - " +
                        _vm._s(_vm.about.mondayTo)
                    )
                  ])
                : _c("span", [_c("i", { staticClass: "fas fa-times" })])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Ut")]),
            _vm._v(" "),
            _c("td", [
              _vm.about.tuesdayFrom
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.about.tuesdayFrom) +
                        " - " +
                        _vm._s(_vm.about.tuesdayto)
                    )
                  ])
                : _c("span", [_c("i", { staticClass: "fas fa-times" })])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Sr")]),
            _vm._v(" "),
            _c("td", [
              _vm.about.wednesdayFrom
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.about.wednesdayFrom) +
                        " - " +
                        _vm._s(_vm.about.wednesdayTo)
                    )
                  ])
                : _c("span", [_c("i", { staticClass: "fas fa-times" })])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Čet")]),
            _vm._v(" "),
            _c("td", [
              _vm.about.thursdayFrom
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.about.thursdayFrom) +
                        " - " +
                        _vm._s(_vm.about.thursdayTo)
                    )
                  ])
                : _c("span", [_c("i", { staticClass: "fas fa-times" })])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Pet")]),
            _vm._v(" "),
            _c("td", [
              _vm.about.fridayFrom
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.about.fridayFrom) +
                        " - " +
                        _vm._s(_vm.about.fridayTo)
                    )
                  ])
                : _c("span", [_c("i", { staticClass: "fas fa-times" })])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Sub")]),
            _vm._v(" "),
            _c("td", [
              _vm.about.saturdayFrom
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.about.saturdayFrom) +
                        " - " +
                        _vm._s(_vm.about.saturdayTo)
                    )
                  ])
                : _c("span", [_c("i", { staticClass: "fas fa-times" })])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Ned")]),
            _vm._v(" "),
            _c("td", [
              _vm.about.sundayFrom
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.about.sundayFrom) +
                        " - " +
                        _vm._s(_vm.about.sundayTo)
                    )
                  ])
                : _c("span", [_c("i", { staticClass: "fas fa-times" })])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Pon")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ut")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sr")]),
        _vm._v(" "),
        _c("th", [_vm._v("Čet")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pet")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sub")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ned")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12951f9c", module.exports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(298)
/* template */
var __vue_template__ = __webpack_require__(299)
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
Component.options.__file = "resources/assets/js/components/public/about/About.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12951f9c", Component.options)
  } else {
    hotAPI.reload("data-v-12951f9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});