(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Support"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Support.vue?vue&type=template&id=1fa75705":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Support.vue?vue&type=template&id=1fa75705 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"support\"\n};\nvar _hoisted_2 = {\n  key: 0\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Diese openWB befindet sich im Modus \\\"Nur Ladepunkt\\\". Bitte senden Sie den Fehlerbericht von der regelnden openWB. \");\n\nvar _hoisted_4 = {\n  key: 1\n};\nvar _hoisted_5 = {\n  key: 0\n};\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Sie müssen der Datenschutzerklärung zustimmen, um einen Fehlerbericht senden zu können. \");\n\nvar _hoisted_7 = {\n  key: 1\n};\n\nvar _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Sie haben der Datenschutzerklärung zugestimmt und können Fehlerberichte senden. \");\n\nvar _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Das Sammeln der Systemparameter für die Fehlermeldung kann einige Zeit in Anspruch nehmen. Es werden keine Benutzernamen oder Passwörter aus der Konfigurationsdatei übertragen! Der Debug Modus muss nicht verstellt werden. \");\n\nvar _hoisted_10 = {\n  class: \"row justify-content-center\"\n};\n\nvar _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Absenden \");\n\nvar _hoisted_12 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Die Daten für den Fehlerbericht werden im Hintergrund zusammengestellt. Sie können diese Seite jetzt verlassen. \");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_openwb_base_alert = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-alert\");\n\n  var _component_openwb_base_text_input = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-text-input\");\n\n  var _component_openwb_base_textarea = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-textarea\");\n\n  var _component_openwb_base_click_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-click-button\");\n\n  var _component_openwb_base_card = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-card\");\n\n  var _component_font_awesome_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"font-awesome-icon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_card, {\n    title: \"Fehlerbericht\"\n  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createSlots\"])({\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_ctx.$store.state.mqtt['openWB/general/extern'] === true ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_alert, {\n        subtype: \"info\"\n      }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_3];\n        }),\n        _: 1\n        /* STABLE */\n\n      })])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_4, [_ctx.$store.state.mqtt['openWB/system/dataprotection_acknowledged'] !== true ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_alert, {\n        subtype: \"danger\"\n      }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_6];\n        }),\n        _: 1\n        /* STABLE */\n\n      })])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_alert, {\n        subtype: \"success\"\n      }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_8];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_alert, {\n        subtype: \"info\"\n      }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_9];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_text_input, {\n        title: \"E-Mail\",\n        required: \"\",\n        subtype: \"email\",\n        modelValue: $data.sendDebugData.email,\n        \"onUpdate:modelValue\": _cache[0] || (_cache[0] = function ($event) {\n          return $data.sendDebugData.email = $event;\n        })\n      }, null, 8\n      /* PROPS */\n      , [\"modelValue\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_textarea, {\n        title: \"Fehlerbeschreibung\",\n        required: \"\",\n        minlength: \"20\",\n        maxlength: \"500\",\n        modelValue: $data.sendDebugData.message,\n        \"onUpdate:modelValue\": _cache[1] || (_cache[1] = function ($event) {\n          return $data.sendDebugData.message = $event;\n        })\n      }, null, 8\n      /* PROPS */\n      , [\"modelValue\"])]))]))];\n    }),\n    _: 2\n    /* DYNAMIC */\n\n  }, [_ctx.$store.state.mqtt['openWB/general/extern'] === false && _ctx.$store.state.mqtt['openWB/system/dataprotection_acknowledged'] === true ? {\n    name: \"footer\",\n    fn: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_click_button, {\n        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"col-4\", $data.enableSendDebugButton ? 'btn-success' : 'btn-outline-success']),\n        disabled: !$data.enableSendDebugButton,\n        onClick: $options.sendDebugMessage\n      }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_11];\n        }),\n        _: 1\n        /* STABLE */\n\n      }, 8\n      /* PROPS */\n      , [\"class\", \"disabled\", \"onClick\"])])];\n    })\n  } : undefined]), 1024\n  /* DYNAMIC_SLOTS */\n  ), !$data.enableSendDebugButton ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_openwb_base_alert, {\n    key: 0,\n    subtype: \"success\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n        \"fixed-width\": \"\",\n        icon: ['fas', 'check']\n      })];\n    }),\n    _: 1\n    /* STABLE */\n\n  })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)]);\n}\n\n//# sourceURL=webpack:///./src/views/Support.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Support.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Support.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ \"./node_modules/@fortawesome/vue-fontawesome/index.es.js\");\n/* harmony import */ var _components_mixins_ComponentState_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/mixins/ComponentState.vue */ \"./src/components/mixins/ComponentState.vue\");\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faCheck\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Support\",\n  mixins: [_components_mixins_ComponentState_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]],\n  emits: [\"sendCommand\"],\n  components: {\n    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"]\n  },\n  data: function data() {\n    return {\n      mqttTopicsToSubscribe: [\"openWB/general/extern\", \"openWB/system/dataprotection_acknowledged\"],\n      sendDebugData: {\n        email: \"\",\n        message: \"\"\n      },\n      enableSendDebugButton: true\n    };\n  },\n  methods: {\n    sendDebugMessage: function sendDebugMessage() {\n      if (this.$root.$refs.myForm.reportValidity()) {\n        this.$emit(\"sendCommand\", {\n          command: \"sendDebug\",\n          data: this.sendDebugData\n        });\n        this.enableSendDebugButton = false;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Support.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/views/Support.vue":
/*!*******************************!*\
  !*** ./src/views/Support.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Support_vue_vue_type_template_id_1fa75705__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Support.vue?vue&type=template&id=1fa75705 */ \"./src/views/Support.vue?vue&type=template&id=1fa75705\");\n/* harmony import */ var _Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Support.vue?vue&type=script&lang=js */ \"./src/views/Support.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Support_vue_vue_type_template_id_1fa75705__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/Support.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Support.vue?");

/***/ }),

/***/ "./src/views/Support.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/views/Support.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./Support.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Support.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Support.vue?");

/***/ }),

/***/ "./src/views/Support.vue?vue&type=template&id=1fa75705":
/*!*************************************************************!*\
  !*** ./src/views/Support.vue?vue&type=template&id=1fa75705 ***!
  \*************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Support_vue_vue_type_template_id_1fa75705__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./Support.vue?vue&type=template&id=1fa75705 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Support.vue?vue&type=template&id=1fa75705\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Support_vue_vue_type_template_id_1fa75705__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Support.vue?");

/***/ })

}]);