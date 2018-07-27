webpackJsonp([4],{

/***/ 304:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      images: []
    };
  },

  methods: {
    getPhotos: function getPhotos() {
      var _this = this;

      axios.get('/photos/get-all').then(function (_ref) {
        var data = _ref.data;

        data.forEach(function (image) {
          _this.images.push({ src: _this.getSrc(image.postId, image.file) });
        });
      });
    },
    getSrc: function getSrc(id, photo) {
      return '/images/post/' + id + '/' + photo;
    }
  },
  created: function created() {
    this.getPhotos();
  }
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "main-section", attrs: { id: "main" } }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "gallery-holder container" },
      [
        _c("h2", { staticClass: "section-title text-center" }, [
          _vm._v("Galerija")
        ]),
        _vm._v(" "),
        _c("lightbox", { attrs: { images: _vm.images } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6406adb4", module.exports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(304)
/* template */
var __vue_template__ = __webpack_require__(305)
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
Component.options.__file = "resources/assets/js/components/public/gallery/Gallery.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6406adb4", Component.options)
  } else {
    hotAPI.reload("data-v-6406adb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});