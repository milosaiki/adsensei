webpackJsonp([6],{

/***/ 263:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      post: [],
      config: {
        height: 600
      },
      postUpdatedSuccess: false,
      postUpdatedError: false
    };
  },

  methods: {
    getPost: function getPost(id) {
      var _this = this;

      axios.post('/admin/post/edit', { 'postId': id }).then(function (_ref) {
        var data = _ref.data;

        _this.post = data;
      });
    },
    updatePost: function updatePost() {
      var _this2 = this;

      this.postUpdatedSuccess = false;
      this.postUpdatedError = false;
      axios.post('/admin/post/update', { 'postId': this.$route.params.id, 'post': this.post }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success == 1) {
          _this2.postUpdatedSuccess = true;
        } else {
          _this2.postUpdatedError = true;
        }
      });
    }
  },
  created: function created() {
    this.getPost(this.$route.params.id);
  }
});

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "new-post-content" }, [
      _c("div", { staticClass: "messages-holder" }, [
        _vm.postUpdatedSuccess
          ? _c(
              "div",
              {
                staticClass: "alert alert-success text-center",
                attrs: { role: "alert" }
              },
              [_vm._v("\n        Post updated!\n      ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.postUpdatedError
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger text-center",
                attrs: { role: "alert" }
              },
              [_vm._v("\n        Post not updated!\n      ")]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "new-post-form form-holder" }, [
        _c("form", { attrs: { action: "#", method: "post" } }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "postTitle" } },
              [_vm._v("Post title")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.post.title,
                  expression: "post.title"
                }
              ],
              staticClass: "form-control-plaintext",
              attrs: {
                type: "text",
                id: "postTitle",
                placeholder: "Enter title"
              },
              domProps: { value: _vm.post.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.post, "title", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("tinymce", {
                attrs: { id: "d1", other_options: _vm.config },
                model: {
                  value: _vm.post.body,
                  callback: function($$v) {
                    _vm.$set(_vm.post, "body", $$v)
                  },
                  expression: "post.body"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-primary",
              attrs: { href: "#", id: "savePostBtn" },
              on: { click: _vm.updatePost }
            },
            [_vm._v("Update")]
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
        _vm._v("Edit Post")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4ce60cbd", module.exports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(263)
/* template */
var __vue_template__ = __webpack_require__(264)
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
Component.options.__file = "resources/assets/js/components/admin/posts/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ce60cbd", Component.options)
  } else {
    hotAPI.reload("data-v-4ce60cbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});