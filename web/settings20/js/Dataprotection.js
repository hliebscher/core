(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Dataprotection"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Dataprotection.vue?vue&type=template&id=c5b3d586":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Dataprotection.vue?vue&type=template&id=c5b3d586 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"dataprotection\"\n};\nvar _hoisted_2 = {\n  name: \"dataprotectionForm\"\n};\nvar _hoisted_3 = {\n  key: 0\n};\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Diese openWB befindet sich im Modus \\\"Nur Ladepunkt\\\". Bitte senden Sie den Fehlerbericht von der regelnden openWB. \");\n\nvar _hoisted_5 = {\n  key: 1\n};\nvar _hoisted_6 = [\"src\"];\n\nvar _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"hr\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Wenn sie nicht einwilligen wird eine ggf. konfigurierte Cloud Anbindung gelöscht. Die openWB arbeitet autark wie gewohnt weiter. Fernzugriff und Remote Support sind dann nicht mehr möglich! \");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_openwb_base_alert = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-alert\");\n\n  var _component_openwb_base_button_group_input = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-button-group-input\");\n\n  var _component_openwb_base_submit_buttons = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-submit-buttons\");\n\n  var _component_openwb_base_card = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"openwb-base-card\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"form\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_card, {\n    title: \"Fehlerbericht\"\n  }, {\n    footer: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_submit_buttons, {\n        formName: \"dataprotectionForm\",\n        hideReset: true,\n        hideDefaults: true,\n        onSave: _cache[1] || (_cache[1] = function ($event) {\n          return _ctx.$emit('save');\n        })\n      })];\n    }),\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_ctx.$store.state.mqtt['openWB/general/extern'] === true ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_alert, {\n        subtype: \"info\"\n      }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_4];\n        }),\n        _: 1\n        /* STABLE */\n\n      })])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"iframe\", {\n        src: $options.publicPath + 'dataprotection.html',\n        width: \"100%\",\n        height: \"400px\",\n        class: \"bg-light\"\n      }, null, 8\n      /* PROPS */\n      , _hoisted_6), _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_button_group_input, {\n        title: \"Akzeptieren\",\n        buttons: [{\n          buttonValue: false,\n          text: 'Nein',\n          class: 'btn-outline-danger'\n        }, {\n          buttonValue: true,\n          text: 'Ja',\n          class: 'btn-outline-success'\n        }],\n        \"model-value\": _ctx.$store.state.mqtt['openWB/system/dataprotection_acknowledged'],\n        \"onUpdate:modelValue\": _cache[0] || (_cache[0] = function ($event) {\n          return _ctx.updateState('openWB/system/dataprotection_acknowledged', $event);\n        })\n      }, null, 8\n      /* PROPS */\n      , [\"model-value\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_openwb_base_alert, {\n        subtype: \"warning\"\n      }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_8];\n        }),\n        _: 1\n        /* STABLE */\n\n      })]))];\n    }),\n    _: 1\n    /* STABLE */\n\n  })])]);\n}\n\n//# sourceURL=webpack:///./src/views/Dataprotection.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Dataprotection.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Dataprotection.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mixins_ComponentState_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/mixins/ComponentState.vue */ \"./src/components/mixins/ComponentState.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Dataprotection\",\n  mixins: [_components_mixins_ComponentState_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n  data: function data() {\n    return {\n      mqttTopicsToSubscribe: [\"openWB/general/extern\", \"openWB/system/dataprotection_acknowledged\"]\n    };\n  },\n  computed: {\n    publicPath: function publicPath() {\n      return this.$root.publicPath;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Dataprotection.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/views/Dataprotection.vue":
/*!**************************************!*\
  !*** ./src/views/Dataprotection.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dataprotection_vue_vue_type_template_id_c5b3d586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dataprotection.vue?vue&type=template&id=c5b3d586 */ \"./src/views/Dataprotection.vue?vue&type=template&id=c5b3d586\");\n/* harmony import */ var _Dataprotection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dataprotection.vue?vue&type=script&lang=js */ \"./src/views/Dataprotection.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Dataprotection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Dataprotection_vue_vue_type_template_id_c5b3d586__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/Dataprotection.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Dataprotection.vue?");

/***/ }),

/***/ "./src/views/Dataprotection.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/views/Dataprotection.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dataprotection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./Dataprotection.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Dataprotection.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dataprotection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Dataprotection.vue?");

/***/ }),

/***/ "./src/views/Dataprotection.vue?vue&type=template&id=c5b3d586":
/*!********************************************************************!*\
  !*** ./src/views/Dataprotection.vue?vue&type=template&id=c5b3d586 ***!
  \********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dataprotection_vue_vue_type_template_id_c5b3d586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./Dataprotection.vue?vue&type=template&id=c5b3d586 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/views/Dataprotection.vue?vue&type=template&id=c5b3d586\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dataprotection_vue_vue_type_template_id_c5b3d586__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Dataprotection.vue?");

/***/ })

}]);