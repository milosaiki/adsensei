webpackJsonp([4],{

/***/ 259:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '',
      content: '',
      attachment: {},
      options: {
        height: 600
      },
      postAddedSuccess: false,
      postAddedError: false
    };
  },

  methods: {
    createPost: function createPost() {
      var _this = this;

      var title = this.title;
      var body = this.content;
      this.postAddedSuccess = false;
      this.postAddedError = false;
      var formData = new FormData();
      formData.append('title', title);
      formData.append('body', body);
      formData.append('img', this.attachment);
      axios.post('/admin/post/save', formData, {
        headers: { 'Content-Type': 'multipart/form-data',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      }).then(function (_ref) {
        var data = _ref.data;

        console.log(data);
        if (data.success == 1) {
          _this.postAddedSuccess = true;
        } else {
          _this.postAddedError = true;
        }
      });
    },
    addFile: function addFile() {
      this.attachment = this.$refs.file.files[0];
    }
  }
});

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "new-post-content" }, [
      _c("div", { staticClass: "new-post-form form-holder" }, [
        _c("div", { staticClass: "messages-holder" }, [
          _vm.postAddedSuccess
            ? _c(
                "div",
                {
                  staticClass: "alert alert-success",
                  attrs: { role: "alert" }
                },
                [_vm._v("\n          Post saved!\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.postAddedError
            ? _c(
                "div",
                { staticClass: "alert alert-danger", attrs: { role: "alert" } },
                [_vm._v("\n          Post not saved!\n        ")]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "new-post-form",
            attrs: { action: "#", method: "post" }
          },
          [
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
                    value: _vm.title,
                    expression: "title"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "postTitle",
                  placeholder: "Enter title"
                },
                domProps: { value: _vm.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.title = $event.target.value
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
                  attrs: { id: "d1", other_options: _vm.options },
                  model: {
                    value: _vm.content,
                    callback: function($$v) {
                      _vm.content = $$v
                    },
                    expression: "content"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "file-label" }, [
                _vm._v("Cover photo: ")
              ]),
              _vm._v(" "),
              _c("input", {
                ref: "file",
                staticClass: "upload-file-input",
                attrs: { type: "file", name: "file" },
                on: {
                  change: function($event) {
                    _vm.addFile()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-primary",
                attrs: { href: "#", id: "savePostBtn" },
                on: { click: _vm.createPost }
              },
              [_vm._v("Save")]
            )
          ]
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
      _c("h1", { staticClass: "push-down-50 main-title" }, [_vm._v("New Post")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e230886", module.exports)
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(259)
/* template */
var __vue_template__ = __webpack_require__(260)
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
Component.options.__file = "resources/assets/js/components/admin/posts/New.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e230886", Component.options)
  } else {
    hotAPI.reload("data-v-3e230886", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});