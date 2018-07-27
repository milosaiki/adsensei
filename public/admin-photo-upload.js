webpackJsonp([11],{

/***/ 279:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      post: {},
      fileName: '',
      attachment: {},
      postId: 0,
      photos: []
    };
  },

  methods: {
    getPost: function getPost(id) {
      var _this = this;

      axios.post('/admin/media/upload/post-data', { 'postId': id }).then(function (_ref) {
        var data = _ref.data;

        _this.post = data;
      });
    },
    uploadFile: function uploadFile() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('img', this.attachment);
      formData.append('postId', this.postId);
      axios.post('/admin/media/upload/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success == 1) {
          _this2.addUploadedImage(data);
        }
      });
    },
    addFile: function addFile() {
      this.attachment = this.$refs.file.files[0];
    },
    getPhotos: function getPhotos(id) {
      var _this3 = this;

      axios.post('/admin/media/get-photos-for-post', { 'postId': this.postId }).then(function (_ref3) {
        var data = _ref3.data;

        console.log(data);
        data.forEach(function (photo) {
          _this3.photos.push(photo);
        });
      });
    },
    addUploadedImage: function addUploadedImage(data) {
      var div = document.createElement('div');
      var img = document.createElement('img');
      var imagesList = document.getElementById('imagesList');
      var src = '/images/post/' + this.postId + '/' + data.fileName;
      img.src = src;
      div.appendChild(img);
      imagesList.appendChild(div);
    },
    getImgSrc: function getImgSrc(imgName) {
      return '/images/post/' + this.postId + '/' + imgName;
    }
  },
  created: function created() {
    this.postId = this.$route.params.id;
    this.getPost(this.postId);
    this.getPhotos(this.postId);
  }
});

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("h1", { staticClass: "push-down-50 main-title" }, [
        _vm._v("Upload photos for: " + _vm._s(_vm.post.title))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "col-md-4 offset-md-4" }, [
        _c(
          "form",
          {
            staticClass: "upload-photo-form",
            attrs: {
              action: "",
              id: "uploadImageForm",
              enctype: "multipart/form-data"
            }
          },
          [
            _c("label", { staticClass: "file-label" }, [
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
                staticClass: "btn btn-success mb-2",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.uploadFile($event)
                  }
                }
              },
              [_vm._v("Upload")]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "col-md-12" }),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c(
        "div",
        { staticClass: "image-list-holder row", attrs: { id: "imagesList" } },
        _vm._l(_vm.photos, function(photo) {
          return _c("div", { key: photo.id, staticClass: "img-holder" }, [
            _c("img", { attrs: { src: _vm.getImgSrc(photo.file) } })
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b0a85c3", module.exports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(279)
/* template */
var __vue_template__ = __webpack_require__(280)
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
Component.options.__file = "resources/assets/js/components/admin/media/Upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b0a85c3", Component.options)
  } else {
    hotAPI.reload("data-v-3b0a85c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});