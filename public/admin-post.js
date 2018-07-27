webpackJsonp([0],{

/***/ 271:
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

/***/ 272:
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

/***/ 273:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: []
    };
  },

  methods: {
    getPosts: function getPosts() {
      var _this = this;

      axios.get('/admin/post/list').then(function (_ref) {
        var data = _ref.data;

        data.forEach(function (post) {
          _this.posts.push(post);
        });
      });
    },
    deletePost: function deletePost(id) {
      axios.post('/admin/post/delete', { 'postId': id }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success == 1) {
          var el = document.querySelector('[data-id="' + id + '"]');
          el.parentNode.removeChild(el);
        }
      });
    }
  },
  created: function created() {
    this.getPosts();
  }
});

/***/ }),

/***/ 274:
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
          _vm._l(_vm.posts, function(post) {
            return _c("tr", { key: post.id, attrs: { "data-id": post.id } }, [
              _c("td", [_vm._v(_vm._s(post.id))]),
              _vm._v(" "),
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "postEdit", params: { id: post.id } },
                        tag: "a"
                      }
                    },
                    [_vm._v(_vm._s(post.title))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("td", { domProps: { innerHTML: _vm._s(post.shortDesc) } }, [
                _vm._v(_vm._s(post.shortDesc))
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(post.created_at))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        _vm.deletePost(post.id)
                      }
                    }
                  },
                  [_c("i", { staticClass: "far fa-trash-alt" })]
                )
              ])
            ])
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
        _vm._v("All Posts")
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
        _c("th", [_vm._v("Post Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Post body")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-3d9de551", module.exports)
  }
}

/***/ }),

/***/ 275:
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
      post: [],
      config: {
        height: 600
      },
      postUpdatedSuccess: false,
      postUpdatedError: false,
      attachment: {}
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
      var formData = new FormData();
      formData.append('postId', this.$route.params.id);
      formData.append('title', this.post.title);
      formData.append('body', this.post.body);
      formData.append('img', this.attachment);
      axios.post('/admin/post/update', formData, {
        headers: { 'Content-Type': 'multipart/form-data',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success == 1) {
          _this2.postUpdatedSuccess = true;
        } else {
          _this2.postUpdatedError = true;
        }
      });
    },
    addFile: function addFile() {
      this.attachment = this.$refs.file.files[0];
    }
  },
  created: function created() {
    this.getPost(this.$route.params.id);
  }
});

/***/ }),

/***/ 276:
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
var __vue_script__ = __webpack_require__(271)
/* template */
var __vue_template__ = __webpack_require__(272)
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


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(273)
/* template */
var __vue_template__ = __webpack_require__(274)
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
Component.options.__file = "resources/assets/js/components/admin/posts/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d9de551", Component.options)
  } else {
    hotAPI.reload("data-v-3d9de551", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(275)
/* template */
var __vue_template__ = __webpack_require__(276)
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