webpackJsonp([8],{

/***/ 291:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      member: {
        firstname: '',
        lastname: '',
        kyu: '',
        role: '',
        resume: '',
        facebook: '',
        twitter: '',
        instagram: '',
        googlePlus: '',
        blog: '',
        linkedIn: ''
      },
      attachment: {},
      config: {
        height: 200
      },
      memberAddedSuccess: false,
      memberAddedError: false
    };
  },

  methods: {
    createMember: function createMember() {
      var _this = this;

      this.memberAddedSuccess = false;
      this.memberAddedError = false;
      var formData = new FormData();
      formData.append('member', JSON.stringify(this.member));
      formData.append('img', this.attachment);
      console.log(formData);
      axios.post('/admin/member/save', formData, {
        headers: { 'Content-Type': 'multipart/form-data',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      }).then(function (_ref) {
        var data = _ref.data;

        console.log(data);
        if (data.success == 1) {
          _this.memberAddedSuccess = true;
          _this.memberAddedError = false;
        } else {
          _this.memberAddedSuccess = false;
          _this.memberAddedError = true;
        }
      });
    },
    addFile: function addFile() {
      this.attachment = this.$refs.file.files[0];
    }
  }
});

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "new-post-content" }, [
      _c("div", { staticClass: "new-member-form form-holder" }, [
        _c("div", { staticClass: "messages-holder" }, [
          _vm.memberAddedSuccess
            ? _c(
                "div",
                {
                  staticClass: "alert alert-success",
                  attrs: { role: "alert" }
                },
                [_vm._v("\n          Member saved!\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.memberAddedError
            ? _c(
                "div",
                { staticClass: "alert alert-danger", attrs: { role: "alert" } },
                [_vm._v("\n          Member not saved!\n        ")]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("form", { attrs: { action: "#", method: "post" } }, [
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "firstname" }
              },
              [_vm._v("Firstname")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.firstname,
                    expression: "member.firstname"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "firstname",
                  placeholder: "Enter Firstname"
                },
                domProps: { value: _vm.member.firstname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "firstname", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "lastname" }
              },
              [_vm._v("Lastname")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.lastname,
                    expression: "member.lastname"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "lastname",
                  placeholder: "Enter Lastname"
                },
                domProps: { value: _vm.member.lastname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "lastname", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-sm-2 col-form-label", attrs: { for: "kyu" } },
              [_vm._v("Dan/Kyu")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.kyu,
                    expression: "member.kyu"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: { type: "text", id: "kyu", placeholder: "Enter kyu" },
                domProps: { value: _vm.member.kyu },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "kyu", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "role" }
              },
              [_vm._v("Role")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("div", { staticClass: "form-check-inline" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.member.role,
                        expression: "member.role"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "radio", name: "role", value: "1" },
                    domProps: { checked: _vm._q(_vm.member.role, "1") },
                    on: {
                      change: function($event) {
                        _vm.$set(_vm.member, "role", "1")
                      }
                    }
                  }),
                  _vm._v("Sensei\n              ")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-check-inline" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.member.role,
                        expression: "member.role"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "radio", name: "role", value: "2" },
                    domProps: { checked: _vm._q(_vm.member.role, "2") },
                    on: {
                      change: function($event) {
                        _vm.$set(_vm.member, "role", "2")
                      }
                    }
                  }),
                  _vm._v("Assistant\n              ")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-check-inline disabled" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.member.role,
                        expression: "member.role"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "radio", name: "role", value: "3" },
                    domProps: { checked: _vm._q(_vm.member.role, "3") },
                    on: {
                      change: function($event) {
                        _vm.$set(_vm.member, "role", "3")
                      }
                    }
                  }),
                  _vm._v("Student\n              ")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "file-label" }, [
              _vm._v("Photo: \n            "),
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
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h4", [_vm._v("Social links")]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "facebook" }
              },
              [_vm._v("Facebook")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.facebook,
                    expression: "member.facebook"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "facebook",
                  placeholder: "Enter facebook link"
                },
                domProps: { value: _vm.member.facebook },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "facebook", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "twitter" }
              },
              [_vm._v("Twitter")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.twitter,
                    expression: "member.twitter"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "twitter",
                  placeholder: "Enter twitter link"
                },
                domProps: { value: _vm.member.twitter },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "twitter", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "instagram" }
              },
              [_vm._v("Instagram")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.instagram,
                    expression: "member.instagram"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "instagram",
                  placeholder: "Enter instagram link"
                },
                domProps: { value: _vm.member.instagram },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "instagram", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "googlePlus" }
              },
              [_vm._v("Google+")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.googlePlus,
                    expression: "member.googlePlus"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "googlePlus",
                  placeholder: "Enter Google+ link"
                },
                domProps: { value: _vm.member.googlePlus },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "googlePlus", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "blog" }
              },
              [_vm._v("Blog")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.blog,
                    expression: "member.blog"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "blog",
                  placeholder: "Enter blog link"
                },
                domProps: { value: _vm.member.blog },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "blog", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "linkedIn" }
              },
              [_vm._v("LinkedIn")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.member.linkedIn,
                    expression: "member.linkedIn"
                  }
                ],
                staticClass: "form-control-plaintext",
                attrs: {
                  type: "text",
                  id: "linkedIn",
                  placeholder: "Enter LinkedIn link"
                },
                domProps: { value: _vm.member.linkedIn },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.member, "linkedIn", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "role" } },
                [_vm._v("Resume")]
              ),
              _vm._v(" "),
              _c("tinymce", {
                attrs: { id: "d1", other_options: _vm.config },
                model: {
                  value: _vm.member.resume,
                  callback: function($$v) {
                    _vm.$set(_vm.member, "resume", $$v)
                  },
                  expression: "member.resume"
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
              on: { click: _vm.createMember }
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
        _vm._v("New Member")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dd11a27a", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(291)
/* template */
var __vue_template__ = __webpack_require__(292)
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
Component.options.__file = "resources/assets/js/components/admin/members/New.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd11a27a", Component.options)
  } else {
    hotAPI.reload("data-v-dd11a27a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});