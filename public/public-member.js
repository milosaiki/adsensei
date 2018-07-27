webpackJsonp([3],{

/***/ 300:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      members: []
    };
  },

  methods: {
    getMembers: function getMembers() {
      var _this = this;

      axios.get('/member/get-members').then(function (_ref) {
        var data = _ref.data;

        console.log(data);
        data.forEach(function (member) {
          _this.members.push(member);
        });
      });
    },
    getImgSrc: function getImgSrc(id, imgName) {
      return imgName ? '/images/member/' + id + '/' + imgName : 'images/default-user.png';
    }
  },
  created: function created() {
    this.getMembers();
  }
});

/***/ }),

/***/ 301:
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
      {
        staticClass: "container text-center push-up",
        attrs: { id: "instructors" }
      },
      [
        _c("h2", { staticClass: "section-title" }, [_vm._v("Instruktori")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "members" },
          _vm._l(_vm.members, function(member, index) {
            return _c("div", { key: member.id, staticClass: "member" }, [
              member.is_trainer
                ? _c("div", { staticClass: "trainer" }, [
                    _c("div", { staticClass: "instructor-img" }, [
                      _c("img", {
                        attrs: {
                          src: _vm.getImgSrc(member.id, member.photo),
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "instructor-data" }, [
                      _c("div", { staticClass: "instructor-name" }, [
                        _c(
                          "p",
                          { staticClass: "instructor-firstname-lastname" },
                          [
                            _vm._v(
                              _vm._s(member.firstname) +
                                " " +
                                _vm._s(member.lastname)
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "instructor-degree" }, [
                          _vm._v(_vm._s(member.kyu))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "instructor-social-links" }, [
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: member.facebook,
                                expression: "member.facebook"
                              }
                            ],
                            attrs: { href: member.facebook, target: "_blank" }
                          },
                          [_c("i", { staticClass: "fab fa-facebook-square" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: member.instagram,
                                expression: "member.instagram"
                              }
                            ],
                            attrs: { href: member.instagram, target: "_blank" }
                          },
                          [_c("i", { staticClass: "fab fa-instagram" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: member.twitter,
                                expression: "member.twitter"
                              }
                            ],
                            attrs: { href: member.twitter, target: "_blank" }
                          },
                          [_c("i", { staticClass: "fab fa-twitter-square" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: member.googlePlus,
                                expression: "member.googlePlus"
                              }
                            ],
                            attrs: { href: member.googlePlus, target: "_blank" }
                          },
                          [
                            _c("i", {
                              staticClass: "fab fa-google-plus-square"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: member.linkedIn,
                                expression: "member.linkedIn"
                              }
                            ],
                            attrs: { href: member.linkedIn, target: "_blank" }
                          },
                          [
                            _c("i", {
                              staticClass: "fab fa-google-plus-square"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: member.blog,
                                expression: "member.blog"
                              }
                            ],
                            attrs: { href: member.blog, target: "_blank" }
                          },
                          [_c("i", { staticClass: "fas fa-rss" })]
                        )
                      ])
                    ])
                  ])
                : _c("div", { staticClass: "student" }, [
                    _c("div", { staticClass: "student-count" }, [
                      _c("p", [_vm._v(_vm._s(index) + ".")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "student-img" }, [
                      _c("img", {
                        attrs: {
                          src: _vm.getImgSrc(member.id, member.photo),
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "student-name" }, [
                      _c("p", { staticClass: "student-firstname-lastname" }, [
                        _vm._v(
                          _vm._s(member.firstname) +
                            " " +
                            _vm._s(member.lastname)
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "student-degree" }, [
                        _vm._v(_vm._s(member.kyu))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "student-social-links" }, [
                      _c(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: member.facebook,
                              expression: "member.facebook"
                            }
                          ],
                          attrs: { href: member.facebook, target: "_blank" }
                        },
                        [_c("i", { staticClass: "fab fa-facebook-square" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: member.instagram,
                              expression: "member.instagram"
                            }
                          ],
                          attrs: { href: member.instagram, target: "_blank" }
                        },
                        [_c("i", { staticClass: "fab fa-instagram" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: member.twitter,
                              expression: "member.twitter"
                            }
                          ],
                          attrs: { href: member.twitter, target: "_blank" }
                        },
                        [_c("i", { staticClass: "fab fa-twitter-square" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: member.googlePlus,
                              expression: "member.googlePlus"
                            }
                          ],
                          attrs: { href: member.googlePlus, target: "_blank" }
                        },
                        [_c("i", { staticClass: "fab fa-google-plus-square" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: member.linkedIn,
                              expression: "member.linkedIn"
                            }
                          ],
                          attrs: { href: member.linkedIn, target: "_blank" }
                        },
                        [_c("i", { staticClass: "fab fa-google-plus-square" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: member.blog,
                              expression: "member.blog"
                            }
                          ],
                          attrs: { href: member.blog, target: "_blank" }
                        },
                        [_c("i", { staticClass: "fas fa-rss" })]
                      )
                    ])
                  ])
            ])
          })
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4dcf8c4f", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(300)
/* template */
var __vue_template__ = __webpack_require__(301)
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
Component.options.__file = "resources/assets/js/components/public/members/Member.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dcf8c4f", Component.options)
  } else {
    hotAPI.reload("data-v-4dcf8c4f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});