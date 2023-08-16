(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    27874:
    /*!***************************************************!*\
      !*** ./src/app/Interceptors/error.interceptor.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorInterceptor": function ErrorInterceptor() {
          return (
            /* binding */
            _ErrorInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      49344);

      var _ErrorInterceptor = /*#__PURE__*/function () {
        function _ErrorInterceptor(router, toastr) {
          _classCallCheck(this, _ErrorInterceptor);

          this.router = router;
          this.toastr = toastr;
        }

        _createClass(_ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            return next.handle(req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              if (error) {
                switch (error.status) {
                  case 400:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      icon: "error",
                      title: " ",
                      text: error.error.message
                    });
                    break;

                  case 401:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      icon: "error",
                      title: "خطاء في تعديل البيانات ",
                      text: error.error.message
                    });
                    break;

                  case 500:
                    var navigationExtras = {
                      state: {
                        error: error.error
                      }
                    };
                    break;

                  default:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      icon: "error",
                      title: "خطاء ",
                      text: 'something unexpected happened'
                    });
                    break;
                }
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }));
          }
        }]);

        return _ErrorInterceptor;
      }();

      _ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || _ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
      };

      _ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ErrorInterceptor,
        factory: _ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/components/layout/content/content.component */
      14649);
      /* harmony import */


      var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/routes/routes */
      46382);
      /* harmony import */


      var _shared_guard_is_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/guard/is-login.guard */
      12406);
      /* harmony import */


      var _shared_guard_is_not_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/guard/is-not-login.guard */
      31762);
      /* harmony import */


      var _shared_Models_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/Models/login/login.component */
      86022);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716); // Guard
      // login


      var routes = [{
        path: "",
        component: _shared_Models_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        canActivate: [_shared_guard_is_not_login_guard__WEBPACK_IMPORTED_MODULE_3__.IsNotLoginGuard],
        children: _shared_routes_routes__WEBPACK_IMPORTED_MODULE_1__.content
      }, {
        path: "content",
        component: _shared_components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent,
        canActivate: [_shared_guard_is_login_guard__WEBPACK_IMPORTED_MODULE_2__.IsLoginGuard],
        children: _shared_routes_routes__WEBPACK_IMPORTED_MODULE_1__.content
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          anchorScrolling: "enabled",
          scrollPositionRestoration: "enabled",
          relativeLinkResolution: "legacy"
        })]], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      65792);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      57057);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      12252);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/components/tap-to-top/tap-to-top.component */
      61916);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent(platformId, loader, translate) {
        _classCallCheck(this, _AppComponent);

        this.platformId = platformId;
        this.loader = loader; // For Progressbar

        this.loaders = this.loader.progress$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.loader.progress$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (v) {
          return v[1];
        }));

        if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
          translate.setDefaultLang("en");
          translate.addLangs(["en", "de", "es", "fr", "pt", "cn", "ae"]);
        }
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 3,
        consts: [[3, "color", "includeSpinner", "height"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-loading-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-tap-to-top");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", "#7366ff")("includeSpinner", false)("height", "4px");
          }
        },
        directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__.LoadingBarComponent, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _Interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Interceptors/error.interceptor */
      27874);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-toastr */
      49344);
      /* harmony import */


      var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-loading-bar/http-client */
      45406);
      /* harmony import */


      var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-loading-bar/router */
      47525);
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      12252);
      /* harmony import */


      var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./token-interceptor.service */
      68077);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/admin/admin.module */
      81100);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-spinner */
      53945);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-pagination */
      82798);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716); // for HttpClient import:
      // for Router import:
      // for Core import:


      function _HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
      }

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
          useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.TokenInterceptorService,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
          useClass: _Interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptor,
          multi: true
        }, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
          }
        }), // for HttpClient use:
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__.LoadingBarHttpClientModule, // for Router use:
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_17__.LoadingBarRouterModule, // for Core use:
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_18__.LoadingBarModule, _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_5__.AdminModule, // AgentModuleModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.NgxPaginationModule // LoginGuardService
        ]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, // for HttpClient use:
          _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_16__.LoadingBarHttpClientModule, // for Router use:
          _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_17__.LoadingBarRouterModule, // for Core use:
          _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_18__.LoadingBarModule, _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_5__.AdminModule, // AgentModuleModule,
          ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.NgxPaginationModule]
        });
      })();
      /***/

    },

    /***/
    48172:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/admin/Country/insert-country/insert-country.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertCountryComponent": function InsertCountryComponent() {
          return (
            /* binding */
            _InsertCountryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/country.service */
      57930);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InsertCountryComponent_ng_template_10_Template(rf, ctx) {}

      function InsertCountryComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u062D\u0641\u0638 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.button);
        }
      }

      function InsertCountryComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u062A\u0639\u062F\u064A\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _InsertCountryComponent = /*#__PURE__*/function () {
        function _InsertCountryComponent(_CountryService, _Router, _FormBuilder) {
          _classCallCheck(this, _InsertCountryComponent);

          this._CountryService = _CountryService;
          this._Router = _Router;
          this._FormBuilder = _FormBuilder;
          this.update = false;
          this.button = false;
        }

        _createClass(_InsertCountryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._CountryService.Data.subscribe(function (res) {
              if (res == null) {
                _this.initiate();
              } else {
                _this.update = true;
                _this.recordtoupdate = res;

                _this.initiate(_this.recordtoupdate);
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(data) {
            this.CountryForm = this._FormBuilder.group({
              CountryName: [(data === null || data === void 0 ? void 0 : data.countryName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              CountryCode: [(data === null || data === void 0 ? void 0 : data.countryCode) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.CountryForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.button = true;

            if (this.CountryForm.status == "VALID" && this.update == false) {
              this._CountryService.Create(this.CountryForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تسجيل الدولة بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this2.CountryForm.reset();

                _this2._Router.navigate(['content/admin/ViewCountry']);
              }, function (err) {
                _this2.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'تأكد من ملئ جميع الخانات'
                });
                _this2.button = false;
              });
            } else if (this.CountryForm.status == "VALID" && this.update == true) {
              this.CountryForm.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.recordtoupdate.id));

              this._CountryService.Update(this.CountryForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تعديل الدولة بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this2.CountryForm.reset();

                _this2._Router.navigate(['content/admin/ViewCountry']);
              }, function (err) {
                _this2.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'لم تقم بتغيير اي شئ'
                });
                _this2.button = false;
              });
            } else {
              this.button = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'خطأ',
                text: 'تأكد من ملئ جميع الخانات'
              });
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._CountryService.Data.next(null);
          }
        }]);

        return _InsertCountryComponent;
      }();

      _InsertCountryComponent.ɵfac = function InsertCountryComponent_Factory(t) {
        return new (t || _InsertCountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_1__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _InsertCountryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _InsertCountryComponent,
        selectors: [["app-insert-country"]],
        decls: 30,
        vars: 13,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "CountryName", "required", "", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "CountryCode", "required", "", "placeholder", "\u0643\u0648\u062F \u0627\u0644\u062F\u0648\u0644\u0629", 1, "form-control", 3, "tooltip"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], ["type", "submit", 1, "btn", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "pull-right"]],
        template: function InsertCountryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u062F\u0648\u0644\u0629 \u062C\u062F\u064A\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u064A\u0631\u062C\u0649 \u0645\u0644\u0626 \u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u0627\u0646\u0627\u062A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, InsertCountryComponent_ng_template_10_Template, 0, 0, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function InsertCountryComponent_Template_form_ngSubmit_12_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " \u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u0643\u0648\u062F \u0627\u0644\u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, InsertCountryComponent_ng_template_27_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, InsertCountryComponent_div_29_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.CountryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.fc.CountryName.valid && ctx.fc.CountryName.touched)("is-invalid", ctx.fc.CountryName.invalid && ctx.fc.CountryName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltip", (ctx.fc.CountryName.errors == null ? null : ctx.fc.CountryName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.fc.CountryCode.valid && ctx.fc.CountryCode.touched)("is-invalid", ctx.fc.CountryCode.invalid && ctx.fc.CountryCode.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltip", (ctx.fc.CountryCode.errors == null ? null : ctx.fc.CountryCode.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtY291bnRyeS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    90830:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/admin/Country/view-country/view-country.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewCountryComponent": function ViewCountryComponent() {
          return (
            /* binding */
            _ViewCountryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/API-Service/services/country.service */
      57930);
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../shared/components/pagination/pagination.component */
      23556);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      25367);

      function ViewCountryComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewCountryComponent_tr_31_Template_button_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var view_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.Update(view_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var view_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.countryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.countryCode);
        }
      }

      var _ViewCountryComponent = /*#__PURE__*/function (_shared_components_pa) {
        _inherits(_ViewCountryComponent, _shared_components_pa);

        var _super = _createSuper(_ViewCountryComponent);

        function _ViewCountryComponent(_CountryService, _Router) {
          var _this3;

          _classCallCheck(this, _ViewCountryComponent);

          _this3 = _super.call(this);
          _this3._CountryService = _CountryService;
          _this3._Router = _Router;
          return _this3;
        }

        _createClass(_ViewCountryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getcountries();
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.pager.pageNumber = event.page; // -1 * pageSize;

            this.getcountries();
          }
        }, {
          key: "getcountries",
          value: function getcountries() {
            var _this4 = this;

            this._CountryService.GetAllRecords(this.pager).subscribe(function (res) {
              _this4.countries = res.data;
              _this4.totalCount = res.totalCount;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertCountry"]);

            this._CountryService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this5._CountryService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: "success",
                    title: "Deleted Successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this5.getcountries();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewCountryComponent;
      }(_shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent);

      _ViewCountryComponent.ɵfac = function ViewCountryComponent_Factory(t) {
        return new (t || _ViewCountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_1__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _ViewCountryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewCountryComponent,
        selectors: [["app-view-country"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 35,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-6", "header-titles"], ["routerLink", "/content/admin/InsertCountry", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], [1, ""], ["scope", "col"], ["class", " ", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "w-100"], [1, "d-flex", "justify-content-center", "w-50", "py-3"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "pageChanged"], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewCountryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u062F\u0648\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0627\u0636\u0627\u0641\u0629 \u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0643\u0648\u062F \u0627\u0644\u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ViewCountryComponent_tr_31_Template, 10, 3, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "pagination", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChanged", function ViewCountryComponent_Template_pagination_pageChanged_34_listener($event) {
              return ctx.pageChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.totalCount)("itemsPerPage", ctx.pager.pageSize);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNvdW50cnkuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    67684:
    /*!****************************************************************************************!*\
      !*** ./src/app/components/admin/Religion/insert-religion/insert-religion.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertReligionComponent": function InsertReligionComponent() {
          return (
            /* binding */
            _InsertReligionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/religion.service */
      22061);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InsertReligionComponent_ng_template_10_Template(rf, ctx) {}

      function InsertReligionComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u062D\u0641\u0638 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.button);
        }
      }

      function InsertReligionComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u062A\u0639\u062F\u064A\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _InsertReligionComponent = /*#__PURE__*/function () {
        function _InsertReligionComponent(_ReligionService, _Router, _FormBuilder) {
          _classCallCheck(this, _InsertReligionComponent);

          this._ReligionService = _ReligionService;
          this._Router = _Router;
          this._FormBuilder = _FormBuilder;
          this.update = false;
          this.button = false;
        }

        _createClass(_InsertReligionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this._ReligionService.Data.subscribe(function (res) {
              if (res == null) {
                _this6._Router.navigate(['content/admin/ViewReligion']);
              } else {
                _this6.update = true;
                _this6.recordtoupdate = res;

                _this6.initiate(_this6.recordtoupdate);
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(data) {
            this.ReligionForm = this._FormBuilder.group({
              ReligionName: [(data === null || data === void 0 ? void 0 : data.religionName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.ReligionForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            this.button = true;

            if (this.ReligionForm.status == "VALID" && this.update == true) {
              this.ReligionForm.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.recordtoupdate.id));

              this._ReligionService.Update(this.ReligionForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تعديل الديانة بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this7.ReligionForm.reset();

                _this7._Router.navigate(['content/admin/ViewReligion']);
              }, function (err) {
                _this7.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'لم تقم بتغيير اي شئ'
                });
                _this7.button = false;
              });
            } else {
              this.button = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'خطأ',
                text: 'تأكد من ملئ جميع الخانات'
              });
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._ReligionService.Data.next(null);
          }
        }]);

        return _InsertReligionComponent;
      }();

      _InsertReligionComponent.ɵfac = function InsertReligionComponent_Factory(t) {
        return new (t || _InsertReligionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_1__.ReligionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _InsertReligionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _InsertReligionComponent,
        selectors: [["app-insert-religion"]],
        decls: 24,
        vars: 8,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "ReligionName", "required", "", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629", 1, "form-control", 3, "tooltip"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], ["type", "submit", 1, "btn", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "pull-right"]],
        template: function InsertReligionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062F\u064A\u0627\u0646\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u064A\u0631\u062C\u0649 \u0645\u0644\u0626 \u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u0627\u0646\u0627\u062A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, InsertReligionComponent_ng_template_10_Template, 0, 0, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function InsertReligionComponent_Template_form_ngSubmit_12_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " \u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, InsertReligionComponent_ng_template_21_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, InsertReligionComponent_div_23_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ReligionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.fc.ReligionName.valid && ctx.fc.ReligionName.touched)("is-invalid", ctx.fc.ReligionName.invalid && ctx.fc.ReligionName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltip", (ctx.fc.ReligionName.errors == null ? null : ctx.fc.ReligionName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtcmVsaWdpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    70275:
    /*!************************************************************************************!*\
      !*** ./src/app/components/admin/Religion/view-religion/view-religion.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewReligionComponent": function ViewReligionComponent() {
          return (
            /* binding */
            _ViewReligionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/API-Service/services/religion.service */
      22061);
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../shared/components/pagination/pagination.component */
      23556);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      25367);

      function ViewReligionComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewReligionComponent_tr_23_Template_button_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var view_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3["delete"](view_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewReligionComponent_tr_23_Template_button_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var view_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.Update(view_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var view_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.religionName);
        }
      }

      var _ViewReligionComponent = /*#__PURE__*/function (_shared_components_pa2) {
        _inherits(_ViewReligionComponent, _shared_components_pa2);

        var _super2 = _createSuper(_ViewReligionComponent);

        function _ViewReligionComponent(_ReligionService, _Router) {
          var _this8;

          _classCallCheck(this, _ViewReligionComponent);

          _this8 = _super2.call(this);
          _this8._ReligionService = _ReligionService;
          _this8._Router = _Router;
          return _this8;
        }

        _createClass(_ViewReligionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getreligions();
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.pager.pageNumber = event.page; // -1 * pageSize;

            this.getreligions();
          }
        }, {
          key: "getreligions",
          value: function getreligions() {
            var _this9 = this;

            this._ReligionService.GetAllRecords(this.pager).subscribe(function (res) {
              _this9.religions = res.data;
              _this9.totalCount = res.totalCount;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertReligion"]);

            this._ReligionService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this10 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: 'هل انت متأكد?',
              text: "لن يكون لك صلاحية لاسترجاع هذة الديانة!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'امسح!',
              cancelButtonText: 'رجوع'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this10._ReligionService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: "success",
                    title: "تم المسح بنجاح",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this10.getreligions();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewReligionComponent;
      }(_shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent);

      _ViewReligionComponent.ɵfac = function ViewReligionComponent_Factory(t) {
        return new (t || _ViewReligionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_1__.ReligionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _ViewReligionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewReligionComponent,
        selectors: [["app-view-religion"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 27,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], ["scope", "col"], ["class", " ", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "w-100"], [1, "d-flex", "justify-content-center", "w-50", "py-3"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "pageChanged"], [1, ""], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewReligionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u062F\u064A\u0627\u0646\u0627\u062A");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0627\u0633\u0645 \u0627\u0644\u062F\u064A\u0627\u0646\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ViewReligionComponent_tr_23_Template, 10, 2, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "pagination", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChanged", function ViewReligionComponent_Template_pagination_pageChanged_26_listener($event) {
              return ctx.pageChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.religions);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.totalCount)("itemsPerPage", ctx.pager.pageSize);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJlbGlnaW9uLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    18955:
    /*!**********************************************************!*\
      !*** ./src/app/components/admin/admin-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminRoutingModule": function AdminRoutingModule() {
          return (
            /* binding */
            _AdminRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product/view-product/view-product.component */
      92976);
      /* harmony import */


      var _Country_view_country_view_country_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Country/view-country/view-country.component */
      90830);
      /* harmony import */


      var _Country_insert_country_insert_country_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Country/insert-country/insert-country.component */
      48172);
      /* harmony import */


      var _Religion_view_religion_view_religion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Religion/view-religion/view-religion.component */
      70275);
      /* harmony import */


      var _Religion_insert_religion_insert_religion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Religion/insert-religion/insert-religion.component */
      67684);
      /* harmony import */


      var _students_view_students_view_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./students/view-students/view-students.component */
      3957);
      /* harmony import */


      var _students_insert_students_insert_students_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./students/insert-students/insert-students.component */
      71485);
      /* harmony import */


      var _admins_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./admins/view-admins/view-admins.component */
      41654);
      /* harmony import */


      var _admins_insert_admins_insert_admins_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./admins/insert-admins/insert-admins.component */
      37972);
      /* harmony import */


      var _students_insert_student_ibi_insert_student_ibi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./students/insert-student-ibi/insert-student-ibi.component */
      38995);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716); // ChangePassword Component


      var routes = [{
        path: "",
        children: [{
          path: "ViewProduct",
          component: _product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_0__.ViewProductComponent
        }, {
          path: "ViewCountry",
          component: _Country_view_country_view_country_component__WEBPACK_IMPORTED_MODULE_1__.ViewCountryComponent
        }, {
          path: "InsertCountry",
          component: _Country_insert_country_insert_country_component__WEBPACK_IMPORTED_MODULE_2__.InsertCountryComponent
        }, {
          path: "ViewReligion",
          component: _Religion_view_religion_view_religion_component__WEBPACK_IMPORTED_MODULE_3__.ViewReligionComponent
        }, {
          path: "InsertReligion",
          component: _Religion_insert_religion_insert_religion_component__WEBPACK_IMPORTED_MODULE_4__.InsertReligionComponent
        }, {
          path: "ViewStudents",
          component: _students_view_students_view_students_component__WEBPACK_IMPORTED_MODULE_5__.ViewStudentsComponent
        }, {
          path: "InsertStudents",
          component: _students_insert_students_insert_students_component__WEBPACK_IMPORTED_MODULE_6__.InsertStudentsComponent
        }, {
          path: "InsertStudentsIBI",
          component: _students_insert_student_ibi_insert_student_ibi_component__WEBPACK_IMPORTED_MODULE_9__.InsertStudentIBIComponent
        }, {
          path: "ViewAdmin",
          component: _admins_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_7__.ViewAdminsComponent
        }, {
          path: "InsertAdmin",
          component: _admins_insert_admins_insert_admins_component__WEBPACK_IMPORTED_MODULE_8__.InsertAdminsComponent
        }]
      }];

      var _AdminRoutingModule = /*#__PURE__*/_createClass(function _AdminRoutingModule() {
        _classCallCheck(this, _AdminRoutingModule);
      });

      _AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || _AdminRoutingModule)();
      };

      _AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _AdminRoutingModule
      });
      _AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_AdminRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81100:
    /*!**************************************************!*\
      !*** ./src/app/components/admin/admin.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminModule": function AdminModule() {
          return (
            /* binding */
            _AdminModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-routing.module */
      18955);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var angular_archwizard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular-archwizard */
      72386);
      /* harmony import */


      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @sweetalert2/ngx-sweetalert2 */
      60845);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      1305);
      /* harmony import */


      var ngx_print_element__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-print-element */
      55894);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-apexcharts */
      46505);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-pagination */
      82798);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-cookie-service */
      31584);
      /* harmony import */


      var devexpress_reporting_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! devexpress-reporting-angular */
      3449);
      /* harmony import */


      var _product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product/view-product/view-product.component */
      92976);
      /* harmony import */


      var _Country_view_country_view_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Country/view-country/view-country.component */
      90830);
      /* harmony import */


      var _Country_insert_country_insert_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Country/insert-country/insert-country.component */
      48172);
      /* harmony import */


      var _Religion_view_religion_view_religion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Religion/view-religion/view-religion.component */
      70275);
      /* harmony import */


      var _Religion_insert_religion_insert_religion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Religion/insert-religion/insert-religion.component */
      67684);
      /* harmony import */


      var _admins_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./admins/view-admins/view-admins.component */
      41654);
      /* harmony import */


      var _admins_insert_admins_insert_admins_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./admins/insert-admins/insert-admins.component */
      37972);
      /* harmony import */


      var _students_view_students_view_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./students/view-students/view-students.component */
      3957);
      /* harmony import */


      var _students_insert_students_insert_students_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./students/insert-students/insert-students.component */
      71485);
      /* harmony import */


      var _students_insert_student_ibi_insert_student_ibi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./students/insert-student-ibi/insert-student-ibi.component */
      38995);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716); // **  
      // cookie 


      var _AdminModule = /*#__PURE__*/_createClass(function _AdminModule() {
        _classCallCheck(this, _AdminModule);
      });

      _AdminModule.ɵfac = function AdminModule_Factory(t) {
        return new (t || _AdminModule)();
      };

      _AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _AdminModule
      });
      _AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__.CookieService],
        imports: [[devexpress_reporting_angular__WEBPACK_IMPORTED_MODULE_14__.DxReportViewerModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_16__.ArchwizardModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__.SweetAlert2Module, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.NgxPaginationModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule, ngx_print_element__WEBPACK_IMPORTED_MODULE_21__.NgxPrintElementModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__.NgMultiSelectDropDownModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_AdminModule, {
          declarations: [_product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_2__.ViewProductComponent, _Country_view_country_view_country_component__WEBPACK_IMPORTED_MODULE_3__.ViewCountryComponent, _Country_insert_country_insert_country_component__WEBPACK_IMPORTED_MODULE_4__.InsertCountryComponent, _Religion_view_religion_view_religion_component__WEBPACK_IMPORTED_MODULE_5__.ViewReligionComponent, _Religion_insert_religion_insert_religion_component__WEBPACK_IMPORTED_MODULE_6__.InsertReligionComponent, _admins_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_7__.ViewAdminsComponent, _admins_insert_admins_insert_admins_component__WEBPACK_IMPORTED_MODULE_8__.InsertAdminsComponent, _students_view_students_view_students_component__WEBPACK_IMPORTED_MODULE_9__.ViewStudentsComponent, _students_insert_students_insert_students_component__WEBPACK_IMPORTED_MODULE_10__.InsertStudentsComponent, _students_insert_student_ibi_insert_student_ibi_component__WEBPACK_IMPORTED_MODULE_11__.InsertStudentIBIComponent],
          imports: [devexpress_reporting_angular__WEBPACK_IMPORTED_MODULE_14__.DxReportViewerModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_16__.ArchwizardModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__.SweetAlert2Module, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.NgxPaginationModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule, ngx_print_element__WEBPACK_IMPORTED_MODULE_21__.NgxPrintElementModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__.NgMultiSelectDropDownModule]
        });
      })();
      /***/

    },

    /***/
    37972:
    /*!**********************************************************************************!*\
      !*** ./src/app/components/admin/admins/insert-admins/insert-admins.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertAdminsComponent": function InsertAdminsComponent() {
          return (
            /* binding */
            _InsertAdminsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/admin.service */
      80459);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InsertAdminsComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u062D\u0641\u0638 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.button);
        }
      }

      function InsertAdminsComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u062A\u0639\u062F\u064A\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _InsertAdminsComponent = /*#__PURE__*/function () {
        function _InsertAdminsComponent(_AdminService, _Router, _FormBuilder) {
          _classCallCheck(this, _InsertAdminsComponent);

          this._AdminService = _AdminService;
          this._Router = _Router;
          this._FormBuilder = _FormBuilder;
          this.update = false;
          this.button = false;
        }

        _createClass(_InsertAdminsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this._AdminService.Data.subscribe(function (res) {
              if (res == null) {
                _this11.initiate();
              } else {
                _this11.update = true;
                _this11.recordtoupdate = res;

                _this11.initiate(_this11.recordtoupdate);
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(data) {
            this.AdminForm = this._FormBuilder.group({
              FirstName: [(data === null || data === void 0 ? void 0 : data.firstName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              SecondName: [(data === null || data === void 0 ? void 0 : data.secondName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              Email: [(data === null || data === void 0 ? void 0 : data.email) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              Password: [(data === null || data === void 0 ? void 0 : data.password) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              RoleId: [(data === null || data === void 0 ? void 0 : data.roleId) || 1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.AdminForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            this.button = true;

            if (this.AdminForm.status == "VALID" && this.update == false) {
              this._AdminService.Create(this.AdminForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تسجيل المسؤول بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this12.AdminForm.reset();

                _this12._Router.navigate(['content/admin/ViewAdmin']);
              }, function (err) {
                _this12.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'تأكد من ملئ جميع الخانات'
                });
                _this12.button = false;
              });
            } else if (this.AdminForm.status == "VALID" && this.update == true) {
              this.AdminForm.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.recordtoupdate.id));

              this._AdminService.Update(this.AdminForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تعديل المسؤول بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this12.AdminForm.reset();

                _this12._Router.navigate(['content/admin/ViewAdmin']);
              }, function (err) {
                _this12.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'لم تقم بتغيير اي شئ'
                });
                _this12.button = false;
              });
            } else {
              this.button = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'خطأ',
                text: 'تأكد من ملئ جميع الخانات'
              });
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._AdminService.Data.next(null);
          }
        }]);

        return _InsertAdminsComponent;
      }();

      _InsertAdminsComponent.ɵfac = function InsertAdminsComponent_Factory(t) {
        return new (t || _InsertAdminsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_API_Service_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _InsertAdminsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _InsertAdminsComponent,
        selectors: [["app-insert-admins"]],
        decls: 41,
        vars: 23,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "FirstName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "SecondName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "Email", "required", "", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "Password", "required", "", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", 1, "form-control", 3, "tooltip"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], ["type", "submit", 1, "btn", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "pull-right"]],
        template: function InsertAdminsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0645\u0633\u0624\u0648\u0644 \u062C\u062F\u064A\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u064A\u0631\u062C\u0649 \u0645\u0644\u0626 \u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u0627\u0646\u0627\u062A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function InsertAdminsComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, InsertAdminsComponent_ng_template_38_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, InsertAdminsComponent_div_40_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.AdminForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.fc.FirstName.valid && ctx.fc.FirstName.touched)("is-invalid", ctx.fc.FirstName.invalid && ctx.fc.FirstName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltip", (ctx.fc.FirstName.errors == null ? null : ctx.fc.FirstName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.fc.SecondName.valid && ctx.fc.SecondName.touched)("is-invalid", ctx.fc.SecondName.invalid && ctx.fc.SecondName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltip", (ctx.fc.SecondName.errors == null ? null : ctx.fc.SecondName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.fc.Email.valid && ctx.fc.Email.touched)("is-invalid", ctx.fc.Email.invalid && ctx.fc.Email.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltip", (ctx.fc.Email.errors == null ? null : ctx.fc.Email.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.fc.Password.valid && ctx.fc.Password.touched)("is-invalid", ctx.fc.Password.invalid && ctx.fc.Password.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tooltip", (ctx.fc.Password.errors == null ? null : ctx.fc.Password.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r0);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtYWRtaW5zLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    41654:
    /*!******************************************************************************!*\
      !*** ./src/app/components/admin/admins/view-admins/view-admins.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewAdminsComponent": function ViewAdminsComponent() {
          return (
            /* binding */
            _ViewAdminsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/admin.service */
      80459);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ViewAdminsComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdminsComponent_tr_33_Template_button_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var view_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3["delete"](view_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdminsComponent_tr_33_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var view_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.Update(view_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var view_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](view_r1.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](view_r1.secondName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](view_r1.email);
        }
      }

      var _ViewAdminsComponent = /*#__PURE__*/function () {
        function _ViewAdminsComponent(_AdminService, _Router) {
          _classCallCheck(this, _ViewAdminsComponent);

          this._AdminService = _AdminService;
          this._Router = _Router;
        }

        _createClass(_ViewAdminsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getadmins();
          }
        }, {
          key: "getadmins",
          value: function getadmins() {
            var _this13 = this;

            this._AdminService.Get().subscribe(function (res) {
              _this13.admins = res.data;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertAdmin"]);

            this._AdminService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this14 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: 'هل انت متأكد ؟',
              text: "لن يكون لك صلاحية لاعادة المسؤول!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'امسح!',
              cancelButtonText: 'رجوع'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this14._AdminService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: "success",
                    title: "تم المسح بنجاح",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this14.getadmins();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewAdminsComponent;
      }();

      _ViewAdminsComponent.ɵfac = function ViewAdminsComponent_Factory(t) {
        return new (t || _ViewAdminsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_API_Service_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _ViewAdminsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ViewAdminsComponent,
        selectors: [["app-view-admins"]],
        decls: 34,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-6", "header-titles"], ["routerLink", "/content/admin/InsertAdmin", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], [1, ""], ["scope", "col"], ["class", " ", 4, "ngFor", "ngForOf"], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewAdminsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0646");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0627\u0636\u0627\u0641\u0629 \u0645\u0633\u0624\u0648\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ViewAdminsComponent_tr_33_Template, 14, 4, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.admins);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWFkbWlucy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    92976:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/admin/product/view-product/view-product.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewProductComponent": function ViewProductComponent() {
          return (
            /* binding */
            _ViewProductComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../images/images */
      96381);
      /* harmony import */


      var _shared_API_Service_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/API-Service/services/product.service */
      52775);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ViewProductComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewProductComponent_tr_35_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var product_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3["delete"](product_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewProductComponent_tr_35_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var product_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.Update(product_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r1.productCategoryTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r1.titleAr);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.img + product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      var _ViewProductComponent = /*#__PURE__*/function () {
        function _ViewProductComponent(_Router, _ProductService) {
          _classCallCheck(this, _ViewProductComponent);

          this._Router = _Router;
          this._ProductService = _ProductService;
          this.products = [];
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_1__.Image;
        }

        _createClass(_ViewProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getproducts();
          }
        }, {
          key: "getproducts",
          value: function getproducts() {}
        }, {
          key: "productupdate",
          value: function productupdate(id) {
            console.log(id);
          }
        }, {
          key: "Update",
          value: function Update(data) {
            this._Router.navigate(["/content/admin/InsertProduct"]);

            this._ProductService.Data.next(data);

            console.log(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this15 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this15._ProductService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: "success",
                    title: "Deleted Successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this15.getproducts();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewProductComponent;
      }();

      _ViewProductComponent.ɵfac = function ViewProductComponent_Factory(t) {
        return new (t || _ViewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService));
      };

      _ViewProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewProductComponent,
        selectors: [["app-view-product"]],
        decls: 36,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-6", "header-titles"], ["routerLink", "/content/admin/InsertProduct", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], [1, ""], ["scope", "col"], ["class", " ", 4, "ngFor", "ngForOf"], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "p-2", 2, "height", "50px", "width", "50px"], [1, "w-100", "rounded-circle", 3, "src"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"]],
        template: function ViewProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Insert Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Product Category Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Arabic Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "image");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ViewProductComponent_tr_35_Template, 16, 5, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    38995:
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/admin/students/insert-student-ibi/insert-student-ibi.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertStudentIBIComponent": function InsertStudentIBIComponent() {
          return (
            /* binding */
            _InsertStudentIBIComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/student.service */
      61438);
      /* harmony import */


      var _shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/country.service */
      57930);
      /* harmony import */


      var _shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/religion.service */
      22061);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);

      function InsertStudentIBIComponent_ng_template_10_Template(rf, ctx) {}

      function InsertStudentIBIComponent_ng_option_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r22.id)("disabled", ctx_r1.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r22.countryName);
        }
      }

      function InsertStudentIBIComponent_ng_option_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r23.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r23.religionName);
        }
      }

      function InsertStudentIBIComponent_img_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r3.PersonalImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_img_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r5.BirthImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_img_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.MilitralTwoSoldierImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_img_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r9.MilitralSixSoldierImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_img_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r11.GradeImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_img_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r13.AllGradesCertificateLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_img_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r15.StampedNotifyLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_img_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r17.TerminationImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentIBIComponent_ng_template_137_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u062D\u0641\u0638 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r20.button);
        }
      }

      function InsertStudentIBIComponent_div_139_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u062A\u0639\u062F\u064A\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _InsertStudentIBIComponent = /*#__PURE__*/function () {
        function _InsertStudentIBIComponent(_Router, _StudentService, _CountryService, _ReligionService, _FormBuilder, _DatePipe) {
          _classCallCheck(this, _InsertStudentIBIComponent);

          this._Router = _Router;
          this._StudentService = _StudentService;
          this._CountryService = _CountryService;
          this._ReligionService = _ReligionService;
          this._FormBuilder = _FormBuilder;
          this._DatePipe = _DatePipe;
          this.isDisabled = true;
          this.button = false;
          this.update = false;
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_4__.Image;
          this.caseone = false;
          this.casetwo = false;
        }

        _createClass(_InsertStudentIBIComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.getDropDowns();

            this._StudentService.Data.subscribe(function (res) {
              if (res != null) {
                _this16.recordtoupdate = res;

                _this16.initiate(res);

                _this16.imagesinupdate(res);

                _this16.update = true;
              } else {
                _this16.initiate();
              }
            });
          }
        }, {
          key: "imagesinupdate",
          value: function imagesinupdate(data) {
            if (data.gradeImage) {
              this.GradeImageLogo = this.img + data.gradeImage;
            }

            if (data.allGradesCertificate) {
              this.AllGradesCertificateLogo = this.img + data.allGradesCertificate;
            }

            if (data.personalImage) {
              this.PersonalImageLogo = this.img + data.personalImage;
            }

            if (data.birthImage) {
              this.BirthImageLogo = this.img + data.birthImage;
            }

            if (data.militralTwoSoldierImage) {
              this.MilitralTwoSoldierImageLogo = this.img + data.militralTwoSoldierImage;
            }

            if (data.militralSixSoldierImage) {
              this.MilitralSixSoldierImageLogo = this.img + data.militralSixSoldierImage;
            }

            if (data.militralSevenSoldierImage) {
              this.MilitralSevenSoldierImageLogo = this.img + data.militralSevenSoldierImage;
            }

            if (data.stampedNotify) {
              this.StampedNotifyLogo = this.img + data.stampedNotify;
            }
          }
        }, {
          key: "initiate",
          value: function initiate(data) {
            this.StudentForm = this._FormBuilder.group({
              FirstName: [(data === null || data === void 0 ? void 0 : data.firstName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              SecondName: [(data === null || data === void 0 ? void 0 : data.secondName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              ThirdName: [(data === null || data === void 0 ? void 0 : data.thirdName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              FourthName: [(data === null || data === void 0 ? void 0 : data.fourthName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              BirthLocation: [(data === null || data === void 0 ? void 0 : data.birthLocation) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              JobDescription: [(data === null || data === void 0 ? void 0 : data.jobDescription) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              DOB: [this._DatePipe.transform(data === null || data === void 0 ? void 0 : data.dob, 'yyyy-MM-dd') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              NationalId: [(data === null || data === void 0 ? void 0 : data.nationalId) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              GradDate: [this._DatePipe.transform(data === null || data === void 0 ? void 0 : data.gradDate, 'yyyy-MM-dd') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              GradeType: [(data === null || data === void 0 ? void 0 : data.gradeType) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              CountryId: [(data === null || data === void 0 ? void 0 : data.countryId) || 1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              ReligionId: [(data === null || data === void 0 ? void 0 : data.religionId) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              StudentType: [(data === null || data === void 0 ? void 0 : data.studentType) || 1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            });
          }
        }, {
          key: "getDropDowns",
          value: function getDropDowns() {
            var _this17 = this;

            this._CountryService.Get().subscribe(function (res) {
              _this17.countries = res.data;
            });

            this._ReligionService.Get().subscribe(function (res) {
              _this17.religions = res.data;
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.StudentForm.controls;
          } // imgFile

        }, {
          key: "getLogoUrl",
          value: function getLogoUrl(event, picnum) {
            var _this18 = this;

            var reader = new FileReader();

            if (event.target.files && event.target.files.length) {
              var _event$target$files = _slicedToArray(event.target.files, 1),
                  file = _event$target$files[0];

              switch (picnum) {
                case 1:
                  this.PersonalImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.PersonalImageLogo = reader.result;
                  };

                  break;

                case 2:
                  this.BirthImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.BirthImageLogo = reader.result;
                  };

                  break;

                case 3:
                  this.MilitralTwoSoldierImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.MilitralTwoSoldierImageLogo = reader.result;
                  };

                  break;

                case 4:
                  this.MilitralSixSoldierImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.MilitralSixSoldierImageLogo = reader.result;
                  };

                  break;

                case 5:
                  this.GradeImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.GradeImageLogo = reader.result;
                  };

                  break;

                case 6:
                  this.AllGradesCertificate = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.AllGradesCertificateLogo = reader.result;
                  };

                  break;

                case 7:
                  this.StampedNotify = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.StampedNotifyLogo = reader.result;
                  };

                  break;

                case 8:
                  this.TerminationImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this18.TerminationImageLogo = reader.result;
                  };

                  break;

                default:
                  alert('nothing selected');
                  break;
              }
            }
          }
        }, {
          key: "appendData",
          value: function appendData() {
            this.StudentFormData = new FormData();
            this.StudentFormData.append('FirstName', this.StudentForm.value.FirstName);
            this.StudentFormData.append('SecondName', this.StudentForm.value.SecondName);
            this.StudentFormData.append('ThirdName', this.StudentForm.value.ThirdName);
            this.StudentFormData.append('FourthName', this.StudentForm.value.FourthName);
            this.StudentFormData.append('BirthLocation', this.StudentForm.value.BirthLocation);
            this.StudentFormData.append('DOB', this.StudentForm.value.DOB);
            this.StudentFormData.append('JobDescription', this.StudentForm.value.JobDescription);
            this.StudentFormData.append('NationalId', this.StudentForm.value.NationalId);
            this.StudentFormData.append('StudentType', this.StudentForm.value.StudentType);
            this.StudentFormData.append('GradDate', this.StudentForm.value.GradDate);
            this.StudentFormData.append('GradeType', this.StudentForm.value.GradeType);
            this.StudentFormData.append('CountryId', this.StudentForm.value.CountryId);
            this.StudentFormData.append('ReligionId', this.StudentForm.value.ReligionId);
            this.StudentFormData.append('PersonalImage', this.PersonalImage);
            this.StudentFormData.append('BirthImage', this.BirthImage);
            this.StudentFormData.append('GradeImage', this.GradeImage);
            this.StudentFormData.append('MilitralTwoSoldierImage', this.MilitralTwoSoldierImage);
            this.StudentFormData.append('MilitralSixSoldierImage', this.MilitralSixSoldierImage);
            this.StudentFormData.append('MilitralSevenSoldierImage', this.MilitralSevenSoldierImage);
            this.StudentFormData.append('TerminationImage', this.TerminationImage);
            this.StudentFormData.append('StampedNotify', this.StampedNotify);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this19 = this;

            this.button = true;

            if (this.StudentForm.status == "VALID" && this.update == false) {
              this.appendData();

              this._StudentService.Create(this.StudentFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تسجيل الطالب بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this19.StudentForm.reset();

                _this19._Router.navigate(['content/admin/ViewStudents']);
              }, function (err) {
                _this19.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'تأكد من ملئ جميع الخانات'
                });
                _this19.button = false;
              });
            } else if (this.StudentForm.status == "VALID" && this.update == true) {
              this.appendData();
              this.StudentFormData.append('Id', this.recordtoupdate.id);

              this._StudentService.Update(this.StudentFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تعديل الطالب بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this19.StudentForm.reset();

                _this19._Router.navigate(['content/admin/ViewStudents']);
              }, function (err) {
                _this19.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'لم تقم بتغيير اي شئ'
                });
                _this19.button = false;
              });
            } else {
              this.button = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'خطأ',
                text: 'تأكد من ملئ جميع الخانات'
              });
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._StudentService.Data.next(null);

            this.GradeImageLogo = '';
            this.BirthImageLogo = '';
            this.PersonalImageLogo = '';
          }
        }]);

        return _InsertStudentIBIComponent;
      }();

      _InsertStudentIBIComponent.ɵfac = function InsertStudentIBIComponent_Factory(t) {
        return new (t || _InsertStudentIBIComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_API_Service_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_2__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_3__.ReligionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
      };

      _InsertStudentIBIComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _InsertStudentIBIComponent,
        selectors: [["app-insert-student-ibi"]],
        decls: 140,
        vars: 65,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "FirstName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "SecondName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "ThirdName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0644\u062B", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "FourthName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0627\u0628\u0639", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "BirthLocation", "required", "", "placeholder", "\u0645\u062D\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "NationalId", "required", "", "placeholder", "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "date", "formControlName", "DOB", "required", "", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "date", "formControlName", "GradDate", "required", "", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "GradeType", "required", "", "placeholder", "\u0646\u0648\u0639 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "JobDescription", "required", "", "placeholder", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u0644", 1, "form-control", 3, "tooltip"], [1, "col-lg-6", "col-sm-12", "mb-3"], ["for", "validationCustom05"], ["formControlName", "CountryId", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0644\u0629", "id", "validationCustom05", 1, "form-control", "p-0", 3, "selectOnTab"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["formControlName", "ReligionId", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u064A\u0627\u0646\u0629", "id", "validationCustom05", 1, "form-control", "p-0", 3, "selectOnTab"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "my-4", 2, "padding", "1%"], ["style", "width: 60%; height: 220px;", "class", "image-style p-2", 3, "src", 4, "ngIf"], ["type", "file", "accept", "image/*", "id", "getfirstLogo", 2, "display", "none", 3, "change"], ["file", ""], ["type", "button", "onclick", "document.getElementById('getfirstLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getsecondLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getsecondLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getthirdLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getthirdLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getfourLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getfourLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getfifthLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getfifthLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getsixthLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getsixthLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getsevenLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getsevenLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "geteightLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('geteightLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], [3, "value", "disabled"], [3, "value"], [1, "image-style", "p-2", 2, "width", "60%", "height", "220px", 3, "src"], ["type", "submit", 1, "btn", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "pull-right"]],
        template: function InsertStudentIBIComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u0637\u0627\u0644\u0628 \u0644\u0627\u0633\u0644\u0643\u064A \u062C\u062F\u064A\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " \u064A\u0631\u062C\u0649 \u0645\u0644\u0626 \u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u0627\u0646\u0627\u062A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, InsertStudentIBIComponent_ng_template_10_Template, 0, 0, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function InsertStudentIBIComponent_Template_form_ngSubmit_12_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0644\u062B");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0627\u0628\u0639");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " \u0645\u062D\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062E\u0631\u062C");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, " \u0646\u0648\u0639 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " \u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "ng-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, InsertStudentIBIComponent_ng_option_80_Template, 2, 3, "ng-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, " \u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u064A\u0627\u0646\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "ng-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, InsertStudentIBIComponent_ng_option_87_Template, 2, 2, "ng-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, InsertStudentIBIComponent_img_89_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "input", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_90_listener($event) {
              return ctx.getLogoUrl($event, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, " \u0627\u0631\u0641\u0627\u0642 \u0635\u0648\u0631\u0629 \u0634\u062E\u0635\u064A\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, InsertStudentIBIComponent_img_95_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "input", 33, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_96_listener($event) {
              return ctx.getLogoUrl($event, 2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, " \u0627\u0631\u0641\u0627\u0642 \u0635\u0648\u0631\u0629 \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0645\u064A\u0644\u0627\u062F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, InsertStudentIBIComponent_img_101_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "input", 35, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_102_listener($event) {
              return ctx.getLogoUrl($event, 3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " \u0627\u0631\u0641\u0627\u0642 \u0646\u0645\u0648\u0630\u062C 2 \u062C\u0646\u062F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](107, InsertStudentIBIComponent_img_107_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "input", 37, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_108_listener($event) {
              return ctx.getLogoUrl($event, 4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, " \u0627\u0631\u0641\u0627\u0642 \u0646\u0645\u0648\u0630\u062C 6 \u062C\u0646\u062F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](113, InsertStudentIBIComponent_img_113_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "input", 39, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_114_listener($event) {
              return ctx.getLogoUrl($event, 5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " \u0627\u0631\u0641\u0627\u0642 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0624\u0647\u0644 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](119, InsertStudentIBIComponent_img_119_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "input", 41, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_120_listener($event) {
              return ctx.getLogoUrl($event, 6);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, " \u0627\u0631\u0641\u0627\u0642 \u0635\u0648\u0631\u0629 \u0628\u064A\u0627\u0646 \u0627\u0644\u062F\u0631\u062C\u0627\u062A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](125, InsertStudentIBIComponent_img_125_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "input", 43, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_126_listener($event) {
              return ctx.getLogoUrl($event, 7);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, " \u0627\u0631\u0641\u0627\u0642 \u0627\u0644\u0628\u064A\u0627\u0646 \u0627\u0644\u0645\u062E\u062A\u0648\u0645 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](131, InsertStudentIBIComponent_img_131_Template, 1, 1, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "input", 45, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentIBIComponent_Template_input_change_132_listener($event) {
              return ctx.getLogoUrl($event, 8);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, " \u0627\u0631\u0641\u0627\u0642 \u062C\u0648\u0627\u0628 \u0627\u0644\u0641\u0635\u0644 \u0627\u0646 \u0648\u062C\u062F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](137, InsertStudentIBIComponent_ng_template_137_Template, 2, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](139, InsertStudentIBIComponent_div_139_Template, 3, 0, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](138);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.StudentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.FirstName.valid && ctx.fc.FirstName.touched)("is-invalid", ctx.fc.FirstName.invalid && ctx.fc.FirstName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.FirstName.errors == null ? null : ctx.fc.FirstName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.SecondName.valid && ctx.fc.SecondName.touched)("is-invalid", ctx.fc.SecondName.invalid && ctx.fc.SecondName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.SecondName.errors == null ? null : ctx.fc.SecondName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.ThirdName.valid && ctx.fc.ThirdName.touched)("is-invalid", ctx.fc.ThirdName.invalid && ctx.fc.ThirdName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.ThirdName.errors == null ? null : ctx.fc.ThirdName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.FourthName.valid && ctx.fc.FourthName.touched)("is-invalid", ctx.fc.FourthName.invalid && ctx.fc.FourthName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.FourthName.errors == null ? null : ctx.fc.FourthName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.BirthLocation.valid && ctx.fc.BirthLocation.touched)("is-invalid", ctx.fc.BirthLocation.invalid && ctx.fc.BirthLocation.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.BirthLocation.errors == null ? null : ctx.fc.BirthLocation.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.NationalId.valid && ctx.fc.NationalId.touched)("is-invalid", ctx.fc.NationalId.invalid && ctx.fc.NationalId.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.NationalId.errors == null ? null : ctx.fc.NationalId.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.DOB.valid && ctx.fc.DOB.touched)("is-invalid", ctx.fc.DOB.invalid && ctx.fc.DOB.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.DOB.errors == null ? null : ctx.fc.DOB.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.GradDate.valid && ctx.fc.GradDate.touched)("is-invalid", ctx.fc.GradDate.invalid && ctx.fc.GradDate.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.GradDate.errors == null ? null : ctx.fc.GradDate.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.GradeType.valid && ctx.fc.GradeType.touched)("is-invalid", ctx.fc.GradeType.invalid && ctx.fc.GradeType.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.GradeType.errors == null ? null : ctx.fc.GradeType.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.JobDescription.valid && ctx.fc.JobDescription.touched)("is-invalid", ctx.fc.JobDescription.invalid && ctx.fc.JobDescription.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.JobDescription.errors == null ? null : ctx.fc.JobDescription.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.religions);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.PersonalImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BirthImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.MilitralTwoSoldierImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.MilitralSixSoldierImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.GradeImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.AllGradesCertificateLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.StampedNotifyLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TerminationImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r19);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtc3R1ZGVudC1pYmkuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    71485:
    /*!****************************************************************************************!*\
      !*** ./src/app/components/admin/students/insert-students/insert-students.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InsertStudentsComponent": function InsertStudentsComponent() {
          return (
            /* binding */
            _InsertStudentsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/student.service */
      61438);
      /* harmony import */


      var _shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/country.service */
      57930);
      /* harmony import */


      var _shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../shared/API-Service/services/religion.service */
      22061);
      /* harmony import */


      var _images_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../images/images */
      96381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);

      function InsertStudentsComponent_ng_template_10_Template(rf, ctx) {}

      function InsertStudentsComponent_ng_option_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.countryName);
        }
      }

      function InsertStudentsComponent_ng_option_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r13.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.religionName);
        }
      }

      function InsertStudentsComponent_img_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 39);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r3.GradeImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentsComponent_img_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 39);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r5.BirthImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentsComponent_img_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 39);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.PersonalImageLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InsertStudentsComponent_ng_template_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u062D\u0641\u0638 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r10.button);
        }
      }

      function InsertStudentsComponent_div_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u062A\u0639\u062F\u064A\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _InsertStudentsComponent = /*#__PURE__*/function () {
        function _InsertStudentsComponent(_StudentService, _ReligionService, _CountryService, _Router, _FormBuilder, _DatePipe) {
          _classCallCheck(this, _InsertStudentsComponent);

          this._StudentService = _StudentService;
          this._ReligionService = _ReligionService;
          this._CountryService = _CountryService;
          this._Router = _Router;
          this._FormBuilder = _FormBuilder;
          this._DatePipe = _DatePipe;
          this.img = _images_images__WEBPACK_IMPORTED_MODULE_4__.Image;
          this.update = false;
          this.button = false;
        }

        _createClass(_InsertStudentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.getdropdown();

            this._StudentService.Data.subscribe(function (res) {
              if (res == null) {
                _this20.initiate();
              } else {
                _this20.update = true;
                _this20.recordtoupdate = res;
                _this20.GradeImageLogo = _this20.img + res.gradeImage;
                _this20.BirthImageLogo = _this20.img + res.birthImage;
                _this20.PersonalImageLogo = _this20.img + res.personalImage;

                _this20.initiate(res);
              }
            });
          }
        }, {
          key: "initiate",
          value: function initiate(data) {
            this.StudentForm = this._FormBuilder.group({
              FirstName: [(data === null || data === void 0 ? void 0 : data.firstName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              SecondName: [(data === null || data === void 0 ? void 0 : data.secondName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              ThirdName: [(data === null || data === void 0 ? void 0 : data.thirdName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              FourthName: [(data === null || data === void 0 ? void 0 : data.fourthName) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              BirthLocation: [(data === null || data === void 0 ? void 0 : data.birthLocation) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              JobDescription: [(data === null || data === void 0 ? void 0 : data.jobDescription) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              DOB: [this._DatePipe.transform(data === null || data === void 0 ? void 0 : data.dob, 'yyyy-MM-dd') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              NationalId: [(data === null || data === void 0 ? void 0 : data.nationalId) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              GradDate: [this._DatePipe.transform(data === null || data === void 0 ? void 0 : data.gradDate, 'yyyy-MM-dd') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              GradeType: [(data === null || data === void 0 ? void 0 : data.gradeType) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              CountryId: [(data === null || data === void 0 ? void 0 : data.countryId) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              ReligionId: [(data === null || data === void 0 ? void 0 : data.religionId) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              StudentType: [(data === null || data === void 0 ? void 0 : data.studentType) || 2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            });
          }
        }, {
          key: "fc",
          get: function get() {
            return this.StudentForm.controls;
          }
        }, {
          key: "getdropdown",
          value: function getdropdown() {
            var _this21 = this;

            this._CountryService.Get().subscribe(function (res) {
              _this21.countries = res.data;
            });

            this._ReligionService.Get().subscribe(function (res) {
              _this21.religions = res.data;
            });
          } // imgFile

        }, {
          key: "getLogoUrl",
          value: function getLogoUrl(event, picnum) {
            var _this22 = this;

            var reader = new FileReader();

            if (event.target.files && event.target.files.length) {
              var _event$target$files2 = _slicedToArray(event.target.files, 1),
                  file = _event$target$files2[0];

              switch (picnum) {
                case 1:
                  this.GradeImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this22.GradeImageLogo = reader.result;
                  };

                  break;

                case 2:
                  this.BirthImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this22.BirthImageLogo = reader.result;
                  };

                  break;

                case 3:
                  this.PersonalImage = event.target.files[0];
                  reader.readAsDataURL(file);

                  reader.onload = function () {
                    _this22.PersonalImageLogo = reader.result;
                  };

                  break;

                default:
                  alert('nothing selected');
                  break;
              }
            }
          }
        }, {
          key: "appendData",
          value: function appendData() {
            this.StudentFormData = new FormData();
            this.StudentFormData.append('FirstName', this.StudentForm.value.FirstName);
            this.StudentFormData.append('SecondName', this.StudentForm.value.SecondName);
            this.StudentFormData.append('ThirdName', this.StudentForm.value.ThirdName);
            this.StudentFormData.append('FourthName', this.StudentForm.value.FourthName);
            this.StudentFormData.append('BirthLocation', this.StudentForm.value.BirthLocation);
            this.StudentFormData.append('DOB', this.StudentForm.value.DOB);
            this.StudentFormData.append('JobDescription', this.StudentForm.value.JobDescription);
            this.StudentFormData.append('StudentType', this.StudentForm.value.StudentType);
            this.StudentFormData.append('NationalId', this.StudentForm.value.NationalId);
            this.StudentFormData.append('GradDate', this.StudentForm.value.GradDate);
            this.StudentFormData.append('GradeType', this.StudentForm.value.GradeType);
            this.StudentFormData.append('CountryId', this.StudentForm.value.CountryId);
            this.StudentFormData.append('ReligionId', this.StudentForm.value.ReligionId);
            this.StudentFormData.append('PersonalImage', this.PersonalImage);
            this.StudentFormData.append('GradeImage', this.GradeImage);
            this.StudentFormData.append('BirthImage', this.BirthImage);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this23 = this;

            this.button = true;

            if (this.StudentForm.status == "VALID" && this.update == false) {
              this.appendData();

              this._StudentService.Create(this.StudentFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تسجيل الطالب بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this23.StudentForm.reset();

                _this23._Router.navigate(['content/admin/ViewStudents']);
              }, function (err) {
                _this23.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'تأكد من ملئ جميع الخانات'
                });
                _this23.button = false;
              });
            } else if (this.StudentForm.status == "VALID" && this.update == true) {
              this.appendData();
              this.StudentFormData.append('Id', this.recordtoupdate.id);

              this._StudentService.Update(this.StudentFormData).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: "success",
                  title: "تم تعديل الطالب بنجاح",
                  showConfirmButton: false,
                  timer: 1500
                });

                _this23.StudentForm.reset();

                _this23._Router.navigate(['content/admin/ViewStudents']);
              }, function (err) {
                _this23.button = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  icon: 'error',
                  title: 'خطأ',
                  text: 'لم تقم بتغيير اي شئ'
                });
                _this23.button = false;
              });
            } else {
              this.button = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'خطأ',
                text: 'تأكد من ملئ جميع الخانات'
              });
              this.button = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._StudentService.Data.next(null);

            this.GradeImageLogo = '';
            this.BirthImageLogo = '';
            this.PersonalImageLogo = '';
          }
        }]);

        return _InsertStudentsComponent;
      }();

      _InsertStudentsComponent.ɵfac = function InsertStudentsComponent_Factory(t) {
        return new (t || _InsertStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_API_Service_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_API_Service_services_religion_service__WEBPACK_IMPORTED_MODULE_3__.ReligionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_API_Service_services_country_service__WEBPACK_IMPORTED_MODULE_2__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
      };

      _InsertStudentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _InsertStudentsComponent,
        selectors: [["app-insert-students"]],
        decls: 110,
        vars: 60,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "pb-2"], [1, "card-body"], ["autocomplete", "off", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-6", "mb-3"], ["for", "validation01"], [1, "validation-required"], ["id", "validation01", "type", "text", "formControlName", "FirstName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "SecondName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "ThirdName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0644\u062B", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "FourthName", "required", "", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0627\u0628\u0639", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "BirthLocation", "required", "", "placeholder", "\u0645\u062D\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "NationalId", "required", "", "placeholder", "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "date", "formControlName", "DOB", "required", "", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "date", "formControlName", "GradDate", "required", "", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "GradeType", "required", "", "placeholder", "\u0646\u0648\u0639 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629", 1, "form-control", 3, "tooltip"], ["id", "validation01", "type", "text", "formControlName", "JobDescription", "required", "", "placeholder", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0648\u0638\u064A\u0641\u0629", 1, "form-control", 3, "tooltip"], [1, "col-lg-6", "col-sm-12", "mb-3"], ["for", "validationCustom05"], ["formControlName", "CountryId", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0644\u0629", "id", "validationCustom05", 1, "form-control", "p-0", 3, "selectOnTab"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "ReligionId", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u064A\u0627\u0646\u0629", "id", "validationCustom05", 1, "form-control", "p-0", 3, "selectOnTab"], [1, "col-lg-6", "my-4", 2, "padding", "1%"], ["style", "width: 60%; height: 220px;", "class", "image-style p-2", 3, "src", 4, "ngIf"], ["type", "file", "accept", "image/*", "id", "getfirstLogo", 2, "display", "none", 3, "change"], ["file", ""], ["type", "button", "onclick", "document.getElementById('getfirstLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getsecondLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getsecondLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["type", "file", "accept", "image/*", "id", "getthirdLogo", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('getthirdLogo').click()", 1, "btn", "d-block", 2, "width", "60%"], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], [3, "value"], [1, "image-style", "p-2", 2, "width", "60%", "height", "220px", 3, "src"], ["type", "submit", 1, "btn", "pull-right", 3, "disabled"], ["type", "submit", 1, "btn", "pull-right"]],
        template: function InsertStudentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u0637\u0627\u0644\u0628 \u062C\u062F\u064A\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " \u064A\u0631\u062C\u0649 \u0645\u0644\u0626 \u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u0627\u0646\u0627\u062A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, InsertStudentsComponent_ng_template_10_Template, 0, 0, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function InsertStudentsComponent_Template_form_ngSubmit_12_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0644\u062B");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0627\u0628\u0639");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " \u0645\u062D\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062E\u0631\u062C");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, " \u0646\u0648\u0639 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0648\u0638\u064A\u0641\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " \u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0644\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "ng-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, InsertStudentsComponent_ng_option_80_Template, 2, 2, "ng-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, " \u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u064A\u0627\u0646\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "ng-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, InsertStudentsComponent_ng_option_87_Template, 2, 2, "ng-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, InsertStudentsComponent_img_89_Template, 1, 1, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "input", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentsComponent_Template_input_change_90_listener($event) {
              return ctx.getLogoUrl($event, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, " \u0627\u0631\u0641\u0627\u0642 \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062E\u0631\u062C ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, InsertStudentsComponent_img_95_Template, 1, 1, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "input", 32, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentsComponent_Template_input_change_96_listener($event) {
              return ctx.getLogoUrl($event, 2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, " \u0627\u0631\u0641\u0627\u0642 \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0645\u064A\u0644\u0627\u062F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, InsertStudentsComponent_img_101_Template, 1, 1, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "input", 34, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InsertStudentsComponent_Template_input_change_102_listener($event) {
              return ctx.getLogoUrl($event, 3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " \u0627\u0631\u0641\u0627\u0642 \u0635\u0648\u0631\u0629 \u0634\u062E\u0635\u064A\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](106, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](107, InsertStudentsComponent_ng_template_107_Template, 2, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, InsertStudentsComponent_div_109_Template, 3, 0, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](108);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.StudentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.FirstName.valid && ctx.fc.FirstName.touched)("is-invalid", ctx.fc.FirstName.invalid && ctx.fc.FirstName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.FirstName.errors == null ? null : ctx.fc.FirstName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.SecondName.valid && ctx.fc.SecondName.touched)("is-invalid", ctx.fc.SecondName.invalid && ctx.fc.SecondName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.SecondName.errors == null ? null : ctx.fc.SecondName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.ThirdName.valid && ctx.fc.ThirdName.touched)("is-invalid", ctx.fc.ThirdName.invalid && ctx.fc.ThirdName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.ThirdName.errors == null ? null : ctx.fc.ThirdName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.FourthName.valid && ctx.fc.FourthName.touched)("is-invalid", ctx.fc.FourthName.invalid && ctx.fc.FourthName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.FourthName.errors == null ? null : ctx.fc.FourthName.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.BirthLocation.valid && ctx.fc.BirthLocation.touched)("is-invalid", ctx.fc.BirthLocation.invalid && ctx.fc.BirthLocation.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.BirthLocation.errors == null ? null : ctx.fc.BirthLocation.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.NationalId.valid && ctx.fc.NationalId.touched)("is-invalid", ctx.fc.NationalId.invalid && ctx.fc.NationalId.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.NationalId.errors == null ? null : ctx.fc.NationalId.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.DOB.valid && ctx.fc.DOB.touched)("is-invalid", ctx.fc.DOB.invalid && ctx.fc.DOB.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.DOB.errors == null ? null : ctx.fc.DOB.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.GradDate.valid && ctx.fc.GradDate.touched)("is-invalid", ctx.fc.GradDate.invalid && ctx.fc.GradDate.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.GradDate.errors == null ? null : ctx.fc.GradDate.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.GradeType.valid && ctx.fc.GradeType.touched)("is-invalid", ctx.fc.GradeType.invalid && ctx.fc.GradeType.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.GradeType.errors == null ? null : ctx.fc.GradeType.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", ctx.fc.JobDescription.valid && ctx.fc.JobDescription.touched)("is-invalid", ctx.fc.JobDescription.invalid && ctx.fc.JobDescription.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", (ctx.fc.JobDescription.errors == null ? null : ctx.fc.JobDescription.errors.required) ? "\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.religions);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.GradeImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BirthImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.PersonalImageLogo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.update)("ngIfElse", _r9);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnQtc3R1ZGVudHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    3957:
    /*!************************************************************************************!*\
      !*** ./src/app/components/admin/students/view-students/view-students.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewStudentsComponent": function ViewStudentsComponent() {
          return (
            /* binding */
            _ViewStudentsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_API_Service_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/API-Service/services/student.service */
      61438);
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../shared/components/pagination/pagination.component */
      23556);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      25367);

      function ViewStudentsComponent_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewStudentsComponent_tr_45_Template_button_click_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var view_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.Update(view_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewStudentsComponent_tr_45_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var view_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5["delete"](view_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var view_r1 = ctx.$implicit;
          var x_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.secondName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.nationalId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.dob);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.gradeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](view_r1.gradDate);
        }
      }

      var _ViewStudentsComponent = /*#__PURE__*/function (_shared_components_pa3) {
        _inherits(_ViewStudentsComponent, _shared_components_pa3);

        var _super3 = _createSuper(_ViewStudentsComponent);

        function _ViewStudentsComponent(_StudentService, _Router, _DatePipe) {
          var _this24;

          _classCallCheck(this, _ViewStudentsComponent);

          _this24 = _super3.call(this);
          _this24._StudentService = _StudentService;
          _this24._Router = _Router;
          _this24._DatePipe = _DatePipe;
          return _this24;
        }

        _createClass(_ViewStudentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getstudents();
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.pager.pageNumber = event.page; // -1 * pageSize;

            this.getstudents();
          }
        }, {
          key: "getstudents",
          value: function getstudents() {
            var _this25 = this;

            this._StudentService.GetAllRecords(this.pager).subscribe(function (res) {
              res.data.forEach(function (element) {
                element.dob = _this25._DatePipe.transform(element.dob, 'yyyy-MM-dd');
                element.gradDate = _this25._DatePipe.transform(element.gradDate, 'yyyy-MM-dd');
              });
              _this25.students = res.data;
              _this25.totalCount = res.totalCount;
            });
          }
        }, {
          key: "Update",
          value: function Update(data) {
            switch (data.studentType) {
              case 1:
                this._Router.navigate(["/content/admin/InsertStudentsIBI"]);

                break;

              case 2:
                this._Router.navigate(["/content/admin/InsertStudents"]);

                break;

              default:
                alert('Delete this record because it was a trial record');
                break;
            }

            this._StudentService.Data.next(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this26 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: 'هل انت متأكد من المسح?',
              text: "لن يكون لك صلاحية لاسترجاع الطالب!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'امسح!',
              cancelButtonText: 'رجوع'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this26._StudentService.Delete(id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: "success",
                    title: "تم المسح بنجاح",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this26.getstudents();
                }, function (err) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: err.error.message
                  });
                }, function () {
                  console.log("completed");
                });
              }
            });
          }
        }]);

        return _ViewStudentsComponent;
      }(_shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent);

      _ViewStudentsComponent.ɵfac = function ViewStudentsComponent_Factory(t) {
        return new (t || _ViewStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_API_Service_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
      };

      _ViewStudentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewStudentsComponent,
        selectors: [["app-view-students"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 49,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "padding-bottom", "5px !important"], [1, "col-6"], [1, "pb-2"], [1, "col-3", "header-titles"], ["routerLink", "/content/admin/InsertStudents", 1, "d-block"], ["type", "button", 1, "btn", "btn-primary", "pull-right"], [1, "m-2"], [1, "fa", "fa-plus"], ["routerLink", "/content/admin/InsertStudentsIBI", 1, "d-block"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-responsive-sm", "text-center"], ["scope", "col"], ["class", " ", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "w-100"], [1, "d-flex", "justify-content-center", "w-50", "py-3"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "pageChanged"], [1, ""], ["scope", "row", 1, "p-2"], [1, "p-2"], [1, "font-style", "chose"], [1, "btn", "pull-right", 2, "color", "rgba(35, 118, 241, 0.667)", "padding", "7px", 3, "click"], [1, "fa", "fa-pencil"], [1, "btn", "pull-right", 2, "color", "red", "padding", "7px", 3, "click"], [1, "fa", "fa-trash"]],
        template: function ViewStudentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0637\u0644\u0627\u0628 \u0645\u0639\u0647\u062F IBI");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sub-address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0627\u0636\u0627\u0641\u0629 \u0637\u0627\u0644\u0628");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u0627\u0636\u0627\u0641\u0629 \u0637\u0627\u0644\u0628 \u0644\u0627\u0633\u0644\u0643\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "table", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u0646\u0648\u0639 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062E\u0631\u062C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ViewStudentsComponent_tr_45_Template, 20, 7, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "pagination", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChanged", function ViewStudentsComponent_Template_pagination_pageChanged_48_listener($event) {
              return ctx.pageChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.students);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.totalCount)("itemsPerPage", ctx.pager.pageSize);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXN0dWRlbnRzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    80459:
    /*!**************************************************************!*\
      !*** ./src/app/shared/API-Service/services/admin.service.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminService": function AdminService() {
          return (
            /* binding */
            _AdminService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AdminService2 = /*#__PURE__*/function () {
        function _AdminService2(_HttpClient) {
          _classCallCheck(this, _AdminService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        }

        _createClass(_AdminService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/User/GetAll"));
          }
        }, {
          key: "Create",
          value: function Create(data) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/User/Create"), data);
          }
        }, {
          key: "Update",
          value: function Update(data) {
            return this._HttpClient.put("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/User/Update"), data);
          }
        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/User/Delete?id=").concat(id));
          }
        }]);

        return _AdminService2;
      }();

      _AdminService2.ɵfac = function AdminService_Factory(t) {
        return new (t || _AdminService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AdminService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AdminService2,
        factory: _AdminService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    57930:
    /*!****************************************************************!*\
      !*** ./src/app/shared/API-Service/services/country.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryService": function CountryService() {
          return (
            /* binding */
            _CountryService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _CountryService2 = /*#__PURE__*/function () {
        function _CountryService2(_HttpClient) {
          _classCallCheck(this, _CountryService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        }

        _createClass(_CountryService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Country/GetAll"));
          }
        }, {
          key: "GetAllRecords",
          value: function GetAllRecords(data) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Country/AllRecords"), data);
          }
        }, {
          key: "Create",
          value: function Create(data) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Country/Create"), data);
          }
        }, {
          key: "Update",
          value: function Update(data) {
            return this._HttpClient.put("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Country/Update"), data);
          }
        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Country/Delete?id=").concat(id));
          }
        }]);

        return _CountryService2;
      }();

      _CountryService2.ɵfac = function CountryService_Factory(t) {
        return new (t || _CountryService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _CountryService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CountryService2,
        factory: _CountryService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    21270:
    /*!**************************************************************!*\
      !*** ./src/app/shared/API-Service/services/login.service.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginService": function LoginService() {
          return (
            /* binding */
            _LoginService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _LoginService2 = /*#__PURE__*/function () {
        function _LoginService2(_HttpClient) {
          _classCallCheck(this, _LoginService2);

          this._HttpClient = _HttpClient;
        }

        _createClass(_LoginService2, [{
          key: "user_login",
          value: function user_login(person) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/User/Login"), person);
          }
        }]);

        return _LoginService2;
      }();

      _LoginService2.ɵfac = function LoginService_Factory(t) {
        return new (t || _LoginService2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _LoginService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _LoginService2,
        factory: _LoginService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    52775:
    /*!****************************************************************!*\
      !*** ./src/app/shared/API-Service/services/product.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductService": function ProductService() {
          return (
            /* binding */
            _ProductService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ProductService2 = /*#__PURE__*/function () {
        function _ProductService2(_HttpClient) {
          _classCallCheck(this, _ProductService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        } // This to get the products 


        _createClass(_ProductService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Product/Get"));
          } // This to post the products 

        }, {
          key: "Create",
          value: function Create(product) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Product/Create"), product);
          } // This to Update the products

        }, {
          key: "Update",
          value: function Update(product_update) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Product/Update"), product_update);
          } // This to delete the products

        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Product/Delete?id=").concat(id));
          }
        }]);

        return _ProductService2;
      }();

      _ProductService2.ɵfac = function ProductService_Factory(t) {
        return new (t || _ProductService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _ProductService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ProductService2,
        factory: _ProductService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    22061:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/API-Service/services/religion.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReligionService": function ReligionService() {
          return (
            /* binding */
            _ReligionService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ReligionService2 = /*#__PURE__*/function () {
        function _ReligionService2(_HttpClient) {
          _classCallCheck(this, _ReligionService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        }

        _createClass(_ReligionService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Religion/GetAll"));
          }
        }, {
          key: "GetAllRecords",
          value: function GetAllRecords(data) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Religion/GetAllRecords"), data);
          }
        }, {
          key: "Create",
          value: function Create(data) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Religion/Create"), data);
          }
        }, {
          key: "Update",
          value: function Update(data) {
            return this._HttpClient.put("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Religion/Update"), data);
          }
        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Religion/Delete?id=").concat(id));
          }
        }]);

        return _ReligionService2;
      }();

      _ReligionService2.ɵfac = function ReligionService_Factory(t) {
        return new (t || _ReligionService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _ReligionService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ReligionService2,
        factory: _ReligionService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    61438:
    /*!****************************************************************!*\
      !*** ./src/app/shared/API-Service/services/student.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentService": function StudentService() {
          return (
            /* binding */
            _StudentService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _StudentService2 = /*#__PURE__*/function () {
        function _StudentService2(_HttpClient) {
          _classCallCheck(this, _StudentService2);

          this._HttpClient = _HttpClient;
          this.Data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        }

        _createClass(_StudentService2, [{
          key: "Get",
          value: function Get() {
            return this._HttpClient.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Student/GetAll"));
          }
        }, {
          key: "GetAllRecords",
          value: function GetAllRecords(data) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Student/GetAllRecords"), data);
          }
        }, {
          key: "Create",
          value: function Create(data) {
            return this._HttpClient.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Student/Create"), data);
          }
        }, {
          key: "Update",
          value: function Update(data) {
            return this._HttpClient.put("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Student/Update"), data);
          }
        }, {
          key: "Delete",
          value: function Delete(id) {
            return this._HttpClient["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.Server_URL, "/Student/Delete?id=").concat(id));
          }
        }]);

        return _StudentService2;
      }();

      _StudentService2.ɵfac = function StudentService_Factory(t) {
        return new (t || _StudentService2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _StudentService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _StudentService2,
        factory: _StudentService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    86022:
    /*!********************************************************!*\
      !*** ./src/app/shared/Models/login/login.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _API_Service_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../API-Service/services/login.service */
      21270);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(_FormBuilder, _LoginService, _Router) {
          _classCallCheck(this, _LoginComponent);

          this._FormBuilder = _FormBuilder;
          this._LoginService = _LoginService;
          this._Router = _Router;
          this.changetype = true;
          this.show = false;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initiate();
          }
        }, {
          key: "initiate",
          value: function initiate() {
            this.person = this._FormBuilder.group({
              "email": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
              "password": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
            });
          }
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
            this.changetype = !this.changetype;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this27 = this;

            this._LoginService.user_login(this.person.value).subscribe(function (res) {
              console.log(res);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "success",
                title: "Signed in successfully",
                showConfirmButton: false,
                timer: 1500
              });
              localStorage.setItem('Authorization', res.data["token"]);

              _this27._Router.navigate(["/content/admin/ViewStudents"]);
            }, function (err) {
              console.log("their is an error");
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'failed to sign in',
                text: err.error.message
              });
            }, function () {// console.log("completed");
            });
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_API_Service_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 38,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-7", "p-0", "d-none", "d-sm-block"], ["alt", "", "src", "../assets/images/logo/5.png", "alt", "looginpage", 1, "w-100", "vh-100"], [1, "col-lg-5", "col-sm-12"], [1, "col-12", "p-0"], [1, "login-card"], ["id", "Sign-User", 1, "login-main"], [1, "text-center"], ["novalidate", "", 1, "theme-form", "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-form-label", "col-12"], [1, "col-12", "col-sm-12"], ["required", "", "placeholder", "example@gmail.com", "formControlName", "email", 1, "form-control"], [1, "col-12", "mb-0"], [1, "col-form-label"], [1, "form-input", "position-relative"], ["required", "", "placeholder", "*********", "formControlName", "password", 1, "form-control", 3, "type"], [1, "form-group", "mb-0", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "w-100"], [1, "w-100"], [2, "text-align", "center"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "IBI Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_14_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " \xA9IBI.app 2023 All Rights Reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Developed & Powered by IDebugger.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.person);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.changetype ? "password" : "text");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6210:
    /*!******************************************!*\
      !*** ./src/app/shared/Pipes/exp.pipe.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExpPipe": function ExpPipe() {
          return (
            /* binding */
            _ExpPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ExpPipe = /*#__PURE__*/function () {
        function _ExpPipe() {
          _classCallCheck(this, _ExpPipe);
        }

        _createClass(_ExpPipe, [{
          key: "transform",
          value: function transform(value) {
            console.log(value); // const currentYear = new Date().getFullYear();
            // const dobYear = value.getFullYear();     const age = currentYear - dobYear;

            return {
              id: 212121,
              test: true
            };
          }
        }]);

        return _ExpPipe;
      }();

      _ExpPipe.ɵfac = function ExpPipe_Factory(t) {
        return new (t || _ExpPipe)();
      };

      _ExpPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "exp",
        type: _ExpPipe,
        pure: true
      });
      /***/
    },

    /***/
    41299:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbComponent": function BreadcrumbComponent() {
          return (
            /* binding */
            _BreadcrumbComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BreadcrumbComponent = /*#__PURE__*/function () {
        function _BreadcrumbComponent() {
          _classCallCheck(this, _BreadcrumbComponent);
        }

        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BreadcrumbComponent;
      }();

      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)();
      };

      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          title: "title",
          items: "items",
          active_item: "active_item"
        },
        decls: 8,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col-6"], [1, "breadcrumb"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        styles: ["h3[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQSxxQ0FBQTtBQUNEIiwiZmlsZSI6ImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaDN7XHJcbiB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"]
      });
      /***/
    },

    /***/
    71889:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/check-date/check-date.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckDateComponent": function CheckDateComponent() {
          return (
            /* binding */
            _CheckDateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CheckDateComponent = /*#__PURE__*/function () {
        function _CheckDateComponent() {
          _classCallCheck(this, _CheckDateComponent);

          this.expiration = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date().setUTCHours(24), "yyyy-MM-dd", "en-US");
          this.licenseIssue = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date().setUTCHours(-24), "yyyy-MM-dd", "en-US");
        }

        _createClass(_CheckDateComponent, [{
          key: "getDateUtc",
          value: function getDateUtc(licenseExpirationDate) {
            // console.log(licenseExpirationDate);
            var date1 = new Date((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(licenseExpirationDate, "yyyy-dd-MM", "en-US"));
            var currentDate = new Date();

            if (date1.getTime() < currentDate.getTime()) {
              console.log("date1 is before current date");
              return false;
            } else {
              return true;
            } // if(date1.getTime()>currentDate.getTime()){
            //   console.log("date1 is after current date red")
            //   console.log(false);
            //   return false
            // }

          }
        }]);

        return _CheckDateComponent;
      }();

      _CheckDateComponent.ɵfac = function CheckDateComponent_Factory(t) {
        return new (t || _CheckDateComponent)();
      };

      _CheckDateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CheckDateComponent,
        selectors: [["app-check-date"]],
        decls: 0,
        vars: 0,
        template: function CheckDateComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    61676:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeatherIconsComponent": function FeatherIconsComponent() {
          return (
            /* binding */
            _FeatherIconsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! feather-icons */
      66379);
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FeatherIconsComponent = /*#__PURE__*/function () {
        function _FeatherIconsComponent() {
          _classCallCheck(this, _FeatherIconsComponent);
        }

        _createClass(_FeatherIconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
            });
          }
        }]);

        return _FeatherIconsComponent;
      }();

      _FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) {
        return new (t || _FeatherIconsComponent)();
      };

      _FeatherIconsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FeatherIconsComponent,
        selectors: [["app-feather-icons"]],
        inputs: {
          icon: "icon"
        },
        decls: 1,
        vars: 1,
        template: function FeatherIconsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-feather", ctx.icon);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    66526:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentYear = this.getCurrentYear();
          }
        }, {
          key: "getCurrentYear",
          value: function getCurrentYear() {
            var now = new Date();
            return now.getFullYear();
          }
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 5,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], ["div", "", 1, "col-md-12", "footer-copyright", "text-center"], [1, "mb-0"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9IBI.App ", ctx.currentYear, " All Rights Reserved Developed & Powered by IDebugger.com ");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    38400:
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/bookmark/bookmark.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarkComponent": function BookmarkComponent() {
          return (
            /* binding */
            _BookmarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      function BookmarkComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", item_r2 == null ? null : item_r2.title)("routerLink", item_r2 == null ? null : item_r2.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r2 == null ? null : item_r2.icon);
        }
      }

      function BookmarkComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_22_div_1_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r5.removeFix();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_22_div_1_Template_a_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var item_r4 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r7.addToBookmark(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r4 == null ? null : item_r4.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("starred", item_r4.bookmark);
        }
      }

      function BookmarkComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BookmarkComponent_div_22_div_1_Template, 10, 5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx_r1.searchResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 3, ctx_r1.menuItems, 0, 8));
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var _BookmarkComponent = /*#__PURE__*/function () {
        function _BookmarkComponent(navServices) {
          _classCallCheck(this, _BookmarkComponent);

          this.navServices = navServices;
          this.bookmarkItems = [];
          this.bookmark = false;
          this.bookmarkFlip = false;
          this.open = false;
          this.searchResult = false;
          this.searchResultEmpty = false;
        }

        _createClass(_BookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this.navServices.items.subscribe(function (menuItems) {
              _this28.items = menuItems;

              _this28.items.filter(function (items) {
                if (items.bookmark) {
                  _this28.bookmarkItems.push(items);
                }

                if (!items.children) return false;
                items.children.filter(function (subItems) {
                  if (subItems.bookmark) {
                    _this28.bookmarkItems.push(subItems);
                  }
                });
              });
            });
          }
        }, {
          key: "openBookMark",
          value: function openBookMark() {
            this.bookmark = !this.bookmark;
          }
        }, {
          key: "flipBookMark",
          value: function flipBookMark() {
            this.bookmarkFlip = !this.bookmarkFlip;
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this29 = this;

            term ? this.addFix() : this.removeFix();

            if (!term) {
              this.open = false;
              return this.menuItems = [];
            }

            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (!(menuItems === null || menuItems === void 0 ? void 0 : menuItems.title)) return false;

              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }

              if (!menuItems.children) {
                return false;
              }

              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }

                if (!subItems.children) {
                  return false;
                }

                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });

              _this29.checkSearchResultEmpty(items);

              _this29.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) {
              this.searchResultEmpty = true;
            } else {
              this.searchResultEmpty = false;
            }
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            this.text = '';
          }
        }, {
          key: "addToBookmark",
          value: function addToBookmark(items) {
            var index = this.bookmarkItems.indexOf(items);

            if (index === -1 && !items.bookmark) {
              items.bookmark = true;
              this.bookmarkItems.push(items);
              this.text = '';
            } else {
              this.bookmarkItems.splice(index, 1);
              items.bookmark = false;
            }
          }
        }]);

        return _BookmarkComponent;
      }();

      _BookmarkComponent.ɵfac = function BookmarkComponent_Factory(t) {
        return new (t || _BookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };

      _BookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BookmarkComponent,
        selectors: [["app-bookmark"]],
        decls: 30,
        vars: 13,
        consts: [[1, "notification-box", 3, "click"], [3, "icon"], [1, "onhover-show-div", "bookmark-flip"], [1, "flip-card"], [1, "flip-card-inner"], [1, "front"], [1, "droplet-dropdown", "bookmark-dropdown"], [1, "gradient-primary"], [1, "f-18", "mb-0"], [1, "custom-scrollbar"], [1, "row"], ["class", "col-4 text-center", 4, "ngFor", "ngForOf"], [1, "text-center", 3, "click"], ["id", "flip-btn", 1, "flip-btn"], [1, "back"], [1, "droplet-dropdown", "bookmark-dropdown", "flip-back-content"], ["type", "text", "placeholder", "search...", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], ["class", "Typeahead-menu custom-scrollbar", "id", "boomark-search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], [3, "click"], ["id", "flip-back", 1, "d-block", "flip-back"], [1, "col-4", "text-center"], ["placement", "top", "routerLinkActive", "item?.active", 3, "ngbTooltip", "routerLink"], ["id", "boomark-search-outer", 1, "Typeahead-menu", "custom-scrollbar"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"], [1, "pull-right"], ["href", "javacript:void(0)", 3, "click"], [1, "fa", "fa-star-o", "f-18", "mt-1"]],
        template: function BookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_div_click_0_listener() {
              return ctx.openBookMark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BookmarkComponent_div_13_Template, 3, 3, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_li_click_14_listener() {
              return ctx.flipBookMark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Add New Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BookmarkComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.text = $event;
            })("keyup", function BookmarkComponent_Template_input_keyup_21_listener() {
              return ctx.searchTerm(ctx.text);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BookmarkComponent_div_22_Template, 3, 7, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Opps!! There are no result found. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_li_click_27_listener() {
              return ctx.flipBookMark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.bookmarkFlip || ctx.bookmark);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("flipped", ctx.bookmarkFlip);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bookmarkItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rbWFyay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    88204:
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/cart/cart.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartComponent": function CartComponent() {
          return (
            /* binding */
            _CartComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);

      var _CartComponent = /*#__PURE__*/function () {
        function _CartComponent() {
          _classCallCheck(this, _CartComponent);

          this.openCart = false;
        }

        _createClass(_CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // For Mobile Device

        }, {
          key: "toggleCart",
          value: function toggleCart() {
            this.openCart = !this.openCart;
          }
        }]);

        return _CartComponent;
      }();

      _CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || _CartComponent)();
      };

      _CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CartComponent,
        selectors: [["app-cart"]],
        decls: 64,
        vars: 6,
        consts: [[1, "cart-box", 3, "click"], [3, "icon"], [1, "badge", "badge-pill", "badge-primary"], [1, "cart-dropdown", "onhover-show-div"], [1, "mb-0", "f-20"], [1, "mt-0"], [1, "media"], ["src", "assets/images/ecommerce/01.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "mr-3", "img-60"], [1, "media-body"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "data-type", "minus", "data-field", "", 1, "btn", "quantity-left-minus"], ["data-feather", "minus"], ["type", "text", "name", "quantity", "value", "1", 1, "form-control", "input-number"], ["type", "button", "data-type", "plus", "data-field", "", 1, "btn", "quantity-right-plus"], ["data-feather", "plus"], [1, "text-right", "text-muted"], [1, "close-circle"], ["href", "#"], ["src", "assets/images/ecommerce/03.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "mr-3", "img-60"], ["type", "button", "data-type", "minus", 1, "btn", "quantity-left-minus"], ["type", "button", "data-type", "plus", 1, "btn", "quantity-right-plus"], [1, "total"], [1, "mb-2", "mt-0", "text-muted"], [1, "f-right", "f-20"], ["href", "#", 1, "btn", "btn-block", "btn-primary", "view-cart"], ["href", "#", 1, "btn", "btn-block", "btn-secondary", "view-cart"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_Template_div_click_0_listener() {
              return ctx.toggleCart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shoping Bag");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "V-Neck Shawl Collar Woman's Solid T-Shirt");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Yellow(#fcb102)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "$299.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "V-Neck Shawl Collar Woman's Solid T-Shirt");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Yellow(#fcb102)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h6", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "$299.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Order Total : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "$598.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Go to shoping bag ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Checkout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "shopping-cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openCart);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "shopping-cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "x");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    85607:
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/languages/languages.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguagesComponent": function LanguagesComponent() {
          return (
            /* binding */
            _LanguagesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/layout.service */
      85682);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function LanguagesComponent_div_7_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", lang_r1.type, ")");
        }
      }

      function LanguagesComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LanguagesComponent_div_7_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var lang_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.changeLanguage(lang_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LanguagesComponent_div_7_span_4_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r1.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lang_r1.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", lang_r1.type);
        }
      }

      var _LanguagesComponent = /*#__PURE__*/function () {
        function _LanguagesComponent(translate, layout, navServices) {
          _classCallCheck(this, _LanguagesComponent);

          this.translate = translate;
          this.layout = layout;
          this.navServices = navServices;
          this.language = false;
          this.languages = [{
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          }, {
            language: 'Arabic',
            code: 'ar',
            type: 'EG',
            icon: 'sa'
          }];
          this.selectedLanguage = {
            language: 'Arabic',
            code: 'ar',
            type: 'EG',
            icon: 'sa'
          };
          this.layoutType = 'ltr';
        }

        _createClass(_LanguagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeLanguage",
          value: function changeLanguage(lang) {
            this.translate.use(lang.code);
            this.selectedLanguage = lang;
            this.layout.language = lang.code;

            if (lang.code == 'ar') {
              this.customizeLayoutType('rtl');
            } else {
              this.customizeLayoutType('ltr');
            }
          }
        }, {
          key: "customizeLayoutType",
          value: function customizeLayoutType(val) {
            this.layoutType = val;
            this.layout.config.settings.layout_type = val;

            if (val == 'rtl') {
              document.getElementsByTagName('html')[0].setAttribute('dir', val);
            } else {
              document.getElementsByTagName('html')[0].removeAttribute('dir');
            }
          }
        }]);

        return _LanguagesComponent;
      }();

      _LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) {
        return new (t || _LanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService));
      };

      _LanguagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LanguagesComponent,
        selectors: [["app-languages"]],
        decls: 8,
        vars: 9,
        consts: [[1, "translate_wrapper"], [1, "current_lang"], [1, "lang"], [1, "lang-txt"], [1, "more_lang"], ["class", "lang selected", "data-value", "en", 3, "click", 4, "ngFor", "ngForOf"], ["data-value", "en", 1, "lang", "selected", 3, "click"], [4, "ngIf"]],
        template: function LanguagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LanguagesComponent_div_7_Template, 5, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedLanguage.code);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    54399:
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/mega-menu/mega-menu.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MegaMenuComponent": function MegaMenuComponent() {
          return (
            /* binding */
            _MegaMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      function MegaMenuComponent_div_13_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !childrenMegaItem_r5.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, childrenMegaItem_r5.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenMegaItem_r5.title, " ");
        }
      }

      function MegaMenuComponent_div_13_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenMegaItem_r5.type ? null : childrenMegaItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenMegaItem_r5.title, " ");
        }
      }

      function MegaMenuComponent_div_13_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenMegaItem_r5.type ? null : childrenMegaItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenMegaItem_r5.title, " ");
        }
      }

      function MegaMenuComponent_div_13_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_div_13_ul_5_li_1_a_1_Template, 2, 6, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MegaMenuComponent_div_13_ul_5_li_1_a_2_Template, 2, 4, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MegaMenuComponent_div_13_ul_5_li_1_a_3_Template, 2, 2, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenMegaItem_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenMegaItem_r5.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenMegaItem_r5.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenMegaItem_r5.type === "extTabLink");
        }
      }

      function MegaMenuComponent_div_13_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_div_13_ul_5_li_1_Template, 4, 3, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var megaItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", !megaItem_r2.active && ctx_r3.navServices.megaMenuColapse);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", megaItem_r2.children);
        }
      }

      function MegaMenuComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_div_13_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var megaItem_r2 = restoredCtx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.toggletNavActive(megaItem_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MegaMenuComponent_div_13_ul_5_Template, 2, 3, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var megaItem_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", megaItem_r2.active && ctx_r0.navServices.megaMenuColapse);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](megaItem_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", megaItem_r2.children);
        }
      }

      function MegaMenuComponent_li_20_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !levelmenuitem_r15.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, levelmenuitem_r15.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !levelmenuitem_r15.type ? null : levelmenuitem_r15.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !levelmenuitem_r15.type ? null : levelmenuitem_r15.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", levelmenuitem_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](levelmenuitem_r15.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !childrenItem_r26.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, childrenItem_r26.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", childrenItem_r26.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](childrenItem_r26.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", childrenItem_r26.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](childrenItem_r26.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", childrenItem_r26.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](childrenItem_r26.title);
        }
      }

      function MegaMenuComponent_li_20_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_li_20_ul_5_li_1_a_1_Template, 4, 7, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MegaMenuComponent_li_20_ul_5_li_1_a_2_Template, 4, 5, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MegaMenuComponent_li_20_ul_5_li_1_a_3_Template, 4, 3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extTabLink");
        }
      }

      function MegaMenuComponent_li_20_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_li_20_ul_5_li_1_Template, 4, 3, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", levelmenuitem_r15.children);
        }
      }

      function MegaMenuComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MegaMenuComponent_li_20_a_1_Template, 4, 2, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MegaMenuComponent_li_20_a_2_Template, 4, 7, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MegaMenuComponent_li_20_a_3_Template, 4, 5, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MegaMenuComponent_li_20_a_4_Template, 4, 3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MegaMenuComponent_li_20_ul_5_Template, 2, 1, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var levelmenuitem_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", levelmenuitem_r15.children);
        }
      }

      var _MegaMenuComponent = /*#__PURE__*/function () {
        function _MegaMenuComponent(navServices) {
          var _this30 = this;

          _classCallCheck(this, _MegaMenuComponent);

          this.navServices = navServices;
          this.navServices.megaItems.subscribe(function (megaItems) {
            return _this30.megaItems = megaItems;
          });
          this.navServices.levelmenuitems.subscribe(function (levelmenuitems) {
            return _this30.levelmenuitems = levelmenuitems;
          });
        }

        _createClass(_MegaMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "megaMenuToggle",
          value: function megaMenuToggle() {
            this.navServices.levelMenu = false;
            this.navServices.megaMenu = !this.navServices.megaMenu;

            if (window.innerWidth < 991) {
              this.navServices.collapseSidebar = true;
            }
          }
        }, {
          key: "levelMenuToggle",
          value: function levelMenuToggle() {
            this.navServices.megaMenu = false;
            this.navServices.levelMenu = !this.navServices.levelMenu;

            if (window.innerWidth < 991) {
              this.navServices.collapseSidebar = true;
            }
          } // Click Toggle menu

        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this31 = this;

            if (!item.active) {
              this.megaItems.forEach(function (a) {
                if (_this31.megaItems.includes(item)) {
                  a.active = false;
                }

                if (!a.children) {
                  return false;
                }

                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }

            item.active = !item.active;
          }
        }]);

        return _MegaMenuComponent;
      }();

      _MegaMenuComponent.ɵfac = function MegaMenuComponent_Factory(t) {
        return new (t || _MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };

      _MegaMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MegaMenuComponent,
        selectors: [["app-mega-menu"]],
        decls: 21,
        vars: 13,
        consts: [[1, "horizontal-menu"], [1, "mega-menu"], ["href", "javascript:void(0)", 1, "nav-link", 3, "click"], [3, "icon"], [1, "mega-menu-container", "nav-submenu", "menu-to-be-close"], [1, "container-fluid"], [1, "row"], [1, "col", "mega-box", "mobile-title", "d-none"], [3, "icon", "click"], ["class", "col mega-box", 4, "ngFor", "ngForOf"], [1, "level-menu"], [1, "header-level-menu", "menu-to-be-close"], [4, "ngFor", "ngForOf"], [1, "col", "mega-box"], [1, "link-section", "icon", 3, "click"], [3, "d-none", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], ["href", "javascript:void(0);", 4, "ngIf"], ["class", "header-level-sub-menu", 4, "ngIf"], ["href", "javascript:void(0);"], [1, "header-level-sub-menu"]],
        template: function MegaMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_Template_a_click_2_listener() {
              return ctx.megaMenuToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-feather-icons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Bonus Ui");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Mega menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_Template_app_feather_icons_click_12_listener() {
              return ctx.megaMenuToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MegaMenuComponent_div_13_Template, 6, 4, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MegaMenuComponent_Template_a_click_15_listener() {
              return ctx.levelMenuToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-feather-icons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Level Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MegaMenuComponent_li_20_Template, 6, 5, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.megaMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "layers");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.navServices.megaMenu ? "d-block" : "d-none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.megaItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.navServices.levelMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.navServices.levelMenu ? "d-block" : "d-none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.levelmenuitems);
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    95895:
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/message-box/message-box.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageBoxComponent": function MessageBoxComponent() {
          return (
            /* binding */
            _MessageBoxComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);

      var _MessageBoxComponent = /*#__PURE__*/function () {
        function _MessageBoxComponent() {
          _classCallCheck(this, _MessageBoxComponent);

          this.openMessageBox = false;
        }

        _createClass(_MessageBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMessageBox",
          value: function toggleMessageBox() {
            this.openMessageBox = !this.openMessageBox;
          }
        }]);

        return _MessageBoxComponent;
      }();

      _MessageBoxComponent.ɵfac = function MessageBoxComponent_Factory(t) {
        return new (t || _MessageBoxComponent)();
      };

      _MessageBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MessageBoxComponent,
        selectors: [["app-message-box"]],
        decls: 1,
        vars: 1,
        consts: [[3, "icon", "click"]],
        template: function MessageBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-feather-icons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageBoxComponent_Template_app_feather_icons_click_0_listener() {
              return ctx.toggleMessageBox();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "message-square");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLWJveC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    32413:
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/my-account/my-account.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyAccountComponent": function MyAccountComponent() {
          return (
            /* binding */
            _MyAccountComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _MyAccountComponent = /*#__PURE__*/function () {
        function _MyAccountComponent(_Router) {
          _classCallCheck(this, _MyAccountComponent);

          this._Router = _Router;
        }

        _createClass(_MyAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();

            this._Router.navigate(["/"]);
          }
        }, {
          key: "Profile",
          value: function Profile() {}
        }]);

        return _MyAccountComponent;
      }();

      _MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
        return new (t || _MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _MyAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MyAccountComponent,
        selectors: [["app-my-account"]],
        decls: 19,
        vars: 11,
        consts: [[1, "media", "profile-media"], ["src", "assets/images/dashboard/userprofile.png", "width", "37", "height", "37", 1, "b-r-10"], [1, "media-body", "pt-2"], [1, "profile-dropdown", "onhover-show-div"], ["routerLink", "/content/admin/ChangePassword"], [3, "icon"], [3, "click"]],
        template: function MyAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-feather-icons", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_li_click_13_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-feather-icons", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "\u0627\u0647\u0644\u0627 \u0628\u0643"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "log-in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 9, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"), " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
        styles: ["span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  padding: 0 0.3em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0FBQUoiLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5zcGFuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZzogIDAgLjNlbSAwIDA7XHJcbiAgICAgXHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    22666:
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/notification/notification.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationComponent": function NotificationComponent() {
          return (
            /* binding */
            _NotificationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);

      var _NotificationComponent = /*#__PURE__*/function () {
        function _NotificationComponent() {
          _classCallCheck(this, _NotificationComponent);

          this.openNotification = false;
        }

        _createClass(_NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleNotificationMobile",
          value: function toggleNotificationMobile() {
            this.openNotification = !this.openNotification;
          }
        }]);

        return _NotificationComponent;
      }();

      _NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
        return new (t || _NotificationComponent)();
      };

      _NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NotificationComponent,
        selectors: [["app-notification"]],
        decls: 36,
        vars: 4,
        consts: [[1, "notification-box", 3, "click"], [3, "icon"], [1, "badge", "badge-pill", "badge-secondary"], [1, "notification-dropdown", "onhover-show-div"], [1, "f-18", "mb-0"], [1, "fa", "fa-circle-o", "mr-3", "font-primary"], [1, "pull-right"], [1, "fa", "fa-circle-o", "mr-3", "font-success"], [1, "fa", "fa-circle-o", "mr-3", "font-info"], [1, "fa", "fa-circle-o", "mr-3", "font-danger"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function NotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_0_listener() {
              return ctx.toggleNotificationMobile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Notitications");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delivery processing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "10 min.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Order Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "1 hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Tickets Generated");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "3 hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Delivery Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "6 hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Check all notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "bell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openNotification);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "bell");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    18249:
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/search/search.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchComponent": function SearchComponent() {
          return (
            /* binding */
            _SearchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/nav.service */
      5897);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function SearchComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_4_div_1_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r3.removeFix();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", menuItem_r2 == null ? null : menuItem_r2.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r2 == null ? null : menuItem_r2.title);
        }
      }

      function SearchComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_div_4_div_1_Template, 7, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx_r0.searchResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 3, ctx_r0.menuItems, 0, 8));
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var _SearchComponent = /*#__PURE__*/function () {
        function _SearchComponent(navServices) {
          var _this32 = this;

          _classCallCheck(this, _SearchComponent);

          this.navServices = navServices;
          this.searchResult = false;
          this.searchResultEmpty = false;
          this.navServices.items.subscribe(function (menuItems) {
            return _this32.items = menuItems;
          });
        }

        _createClass(_SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.navServices.search = false;
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this33 = this;

            term ? this.addFix() : this.removeFix();
            if (!term) return this.menuItems = [];
            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (!(menuItems === null || menuItems === void 0 ? void 0 : menuItems.title)) return false;

              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }

              if (!menuItems.children) return false;
              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }

                if (!subItems.children) return false;
                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });

              _this33.checkSearchResultEmpty(items);

              _this33.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) this.searchResultEmpty = true;else this.searchResultEmpty = false;
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
            document.getElementsByTagName('body')[0].classList.add('offcanvas');
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            this.text = "";
            document.getElementsByTagName('body')[0].classList.remove('offcanvas');
          }
        }]);

        return _SearchComponent;
      }();

      _SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || _SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };

      _SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SearchComponent,
        selectors: [["app-search"]],
        decls: 9,
        vars: 9,
        consts: [[1, "form-inline", "search-full"], [1, "form-group", "w-100"], ["type", "text", "autocomplete", "off", "placeholder", "Search..", 1, "form-control-plaintext", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "close-search", 3, "icon", "click"], ["class", "Typeahead-menu", "id", "search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], ["id", "search-outer", 1, "Typeahead-menu"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.text = $event;
            })("keyup", function SearchComponent_Template_input_keyup_2_listener() {
              return ctx.searchTerm(ctx.text);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-feather-icons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_app_feather_icons_click_3_listener() {
              return ctx.searchToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 3, 7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Opps!! There are no result found. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.navServices.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36290:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/nav.service */
      5897);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/layout.service */
      85682);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./elements/my-account/my-account.component */
      32413);

      function HeaderComponent_i_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 18);
        }
      }

      function HeaderComponent_i_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 19);
        }
      }

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(layout, navServices, document) {
          _classCallCheck(this, _HeaderComponent);

          this.layout = layout;
          this.navServices = navServices;
          this.document = document;
          this.layoutType = 'ltr';
          this.dark = this.layout.config.settings.layout_version == 'dark-only' ? true : false;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.elem = document.documentElement;
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
            this.navServices.megaMenu = false;
            this.navServices.levelMenu = false;
          }
        }, {
          key: "layoutToggle",
          value: function layoutToggle() {
            this.dark = !this.dark;
            this.layout.config.settings.layout_version = this.dark ? 'dark-only' : 'light';
          }
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.navServices.search = true;
          }
        }, {
          key: "languageToggle",
          value: function languageToggle() {
            this.navServices.language = !this.navServices.language;
          }
        }, {
          key: "toggleFullScreen",
          value: function toggleFullScreen() {
            this.navServices.fullScreen = !this.navServices.fullScreen;

            if (this.navServices.fullScreen) {
              if (this.elem.requestFullscreen) {
                this.elem.requestFullscreen();
              } else if (this.elem.mozRequestFullScreen) {
                /* Firefox */
                this.elem.mozRequestFullScreen();
              } else if (this.elem.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.elem.webkitRequestFullscreen();
              } else if (this.elem.msRequestFullscreen) {
                /* IE/Edge */
                this.elem.msRequestFullscreen();
              }
            } else {
              if (!this.document.exitFullscreen) {
                this.document.exitFullscreen();
              } else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
              } else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
              } else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
              }
            }
          }
        }, {
          key: "customizeLayoutType",
          value: function customizeLayoutType(val) {
            this.layoutType = val;
            console.log(val);
            this.layout.config.settings.layout_type = val;

            if (val == 'rtl') {
              document.getElementsByTagName('html')[0].setAttribute('dir', val);
            } else {
              document.getElementsByTagName('html')[0].removeAttribute('dir');
            }
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 21,
        vars: 6,
        consts: [[1, "page-header"], [1, "header-wrapper", "row", "m-0"], [1, "header-logo-wrapper", 2, "cursor", "pointer"], [1, "logo-wrapper"], ["src", "assets/images/logo/logo.png", "alt", "", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "", 1, "img-fluid", "for-dark"], [1, "toggle-sidebar", 3, "click"], [1, "status_toggle", "middle", 3, "icon"], [1, "left-header", "col", "horizontal-wrapper", "pl-0"], [1, "nav-right", "col-8", "pull-right", "right-header", "p-0"], [1, "nav-menus"], [1, "mode", 3, "click"], ["class", "fa fa-moon-o", 4, "ngIf"], ["class", "fa fa-lightbulb-o", 4, "ngIf"], [1, "maximize"], ["href", "javascript:void(0)", 1, "text-dark", 3, "click"], [3, "icon"], [1, "profile-nav", "onhover-dropdown", "p-0"], [1, "fa", "fa-moon-o"], [1, "fa", "fa-lightbulb-o"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_7_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-feather-icons", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_13_listener() {
              return ctx.layoutToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, HeaderComponent_i_14_Template, 1, 0, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HeaderComponent_i_15_Template, 1, 0, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener() {
              return ctx.toggleFullScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-feather-icons", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "app-my-account");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("close_icon", ctx.navServices.collapseSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.dark);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dark);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "maximize");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__.MyAccountComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    14649:
    /*!***********************************************************************!*\
      !*** ./src/app/shared/components/layout/content/content.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContentComponent": function ContentComponent() {
          return (
            /* binding */
            _ContentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! feather-icons */
      66379);
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/layout.service */
      85682);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/nav.service */
      5897);
      /* harmony import */


      var _data_router_animation_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../data/router-animation/router-animation */
      47028);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../header/header.component */
      36290);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      6664);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../footer/footer.component */
      66526);

      var _ContentComponent = /*#__PURE__*/function () {
        function _ContentComponent(route, navServices, layout) {
          var _this34 = this;

          _classCallCheck(this, _ContentComponent);

          this.route = route;
          this.navServices = navServices;
          this.layout = layout;
          this.route.queryParams.subscribe(function (params) {
            _this34.layout.config.settings.layout = params.layout ? params.layout : _this34.layout.config.settings.layout;
          });
        }

        _createClass(_ContentComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
            });
          }
        }, {
          key: "getRouterOutletState",
          value: function getRouterOutletState(outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
          }
        }, {
          key: "layoutClass",
          get: function get() {
            switch (this.layout.config.settings.layout) {
              case "Dubai":
                return "compact-wrapper";

              case "London":
                return "only-body";

              case "Seoul":
                return "compact-wrapper modern-type";

              case "LosAngeles":
                return this.navServices.horizontal ? "horizontal-wrapper material-type" : "compact-wrapper material-type";

              case "Paris":
                return "compact-wrapper dark-sidebar";

              case "Tokyo":
                return "compact-sidebar";

              case "Madrid":
                return "compact-wrapper color-sidebar";

              case "Moscow":
                return "compact-sidebar compact-small";

              case "NewYork":
                return "compact-wrapper box-layout";

              case "Singapore":
                return this.navServices.horizontal ? "horizontal-wrapper enterprice-type" : "compact-wrapper enterprice-type";

              case "Rome":
                return "compact-sidebar compact-small material-icon";

              case "Barcelona":
                return this.navServices.horizontal ? "horizontal-wrapper enterprice-type advance-layout" : "compact-wrapper enterprice-type advance-layout";
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContentComponent;
      }();

      _ContentComponent.ɵfac = function ContentComponent_Factory(t) {
        return new (t || _ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
      };

      _ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ContentComponent,
        selectors: [["app-content"]],
        decls: 12,
        vars: 8,
        consts: [[3, "ngClass"], ["id", "canvas-bookmark", 1, "page-wrapper", 3, "ngClass"], [1, "page-body-wrapper"], [1, "sidebar-wrapper"], [1, "page-body"], ["o", "outlet"], [1, "footer"]],
        template: function ContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "router-outlet", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "footer", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.layout.config.settings.layout_version);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layout.config.settings.layout_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("close_icon", ctx.navServices.collapseSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("sidebar-layout", ctx.layout.config.settings.sidebar_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInAnimation", ctx.getRouterOutletState(_r0));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [_data_router_animation_router_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInAnimation]
        }
      });
      /***/
    },

    /***/
    210:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/components/layout/full/full.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FullComponent": function FullComponent() {
          return (
            /* binding */
            _FullComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _FullComponent = /*#__PURE__*/function () {
        function _FullComponent() {
          _classCallCheck(this, _FullComponent);
        }

        _createClass(_FullComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FullComponent;
      }();

      _FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || _FullComponent)();
      };

      _FullComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FullComponent,
        selectors: [["app-full"]],
        decls: 2,
        vars: 0,
        consts: [[1, "page-wrapper"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    90605:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoaderComponent": function LoaderComponent() {
          return (
            /* binding */
            _LoaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LoaderComponent = /*#__PURE__*/function () {
        function _LoaderComponent() {
          var _this35 = this;

          _classCallCheck(this, _LoaderComponent);

          this.show = true;
          setTimeout(function () {
            _this35.show = false;
          }, 3000);
        }

        _createClass(_LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return _LoaderComponent;
      }();

      _LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || _LoaderComponent)();
      };

      _LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LoaderComponent,
        selectors: [["app-loader"]],
        decls: 8,
        vars: 2,
        consts: [[1, "loader-wrapper"], [1, "loader-index"], ["id", "goo"], ["in", "SourceGraphic", "stddeviation", "11", "result", "blur"], ["in", "blur", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", "result", "goo"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "filter", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fegaussianblur", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fecolormatrix", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
          }
        },
        styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLXdyYXBwZXIubG9kZXJoaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    23556:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaginationComponent": function PaginationComponent() {
          return (
            /* binding */
            _PaginationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716); //


      var _PaginationComponent = /*#__PURE__*/_createClass(function _PaginationComponent() {
        _classCallCheck(this, _PaginationComponent);

        this.pager = {
          pageNumber: 1,
          pageSize: 15
        };
      });

      _PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || _PaginationComponent)();
      };

      _PaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PaginationComponent,
        selectors: [["app-pagination"]],
        decls: 0,
        vars: 0,
        template: function PaginationComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    6664:
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/nav.service */
      5897);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/layout.service */
      85682);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      function SidebarComponent_li_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, menuItem_r2.headTitle1));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, menuItem_r2.headTitle2));
        }
      }

      function SidebarComponent_li_22_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r2.badgeType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.badgeValue);
        }
      }

      function SidebarComponent_li_22_a_3_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      function SidebarComponent_li_22_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_22_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

            var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.toggletNavActive(menuItem_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_22_a_3_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, menuItem_r2.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_a_5_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function SidebarComponent_li_22_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_a_5_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !menuItem_r2.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, menuItem_r2.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, menuItem_r2.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_a_6_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_22_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_22_a_6_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r2.type ? null : menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, menuItem_r2.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_a_7_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r2.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_22_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_a_7_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r2.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r2.type ? null : menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", childrenItem_r28.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_22_ul_8_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);

            var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r36.toggletNavActive(childrenItem_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_ul_8_li_1_a_1_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenItem_r28.title), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_2_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      var _c2 = function _c2() {
        return {
          exact: true
        };
      };

      function SidebarComponent_li_22_ul_8_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_2_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenItem_r28.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, childrenItem_r28.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r28.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_3_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_3_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r28.type ? null : childrenItem_r28.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r28.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_4_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_4_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r28.type ? null : childrenItem_r28.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenItem_r28.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenSubItem_r47.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, childrenSubItem_r47.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r47.title), "");
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r47.type ? null : childrenSubItem_r47.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r47.title));
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r47.type ? null : childrenSubItem_r47.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenSubItem_r47.title));
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_1_Template, 4, 8, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_2_Template, 4, 6, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_a_3_Template, 4, 4, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, childrenSubItem_r47.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r47.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r47.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r47.type === "extTabLink");
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "menu-open": a0,
          "menu-close": a1
        };
      };

      function SidebarComponent_li_22_ul_8_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_ul_5_li_1_Template, 4, 6, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", childrenItem_r28.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, childrenItem_r28.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, childrenItem_r28.active, !childrenItem_r28.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_a_1_Template, 6, 4, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_22_ul_8_li_1_a_2_Template, 5, 9, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_22_ul_8_li_1_a_3_Template, 5, 7, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_22_ul_8_li_1_a_4_Template, 5, 5, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_ul_8_li_1_ul_5_Template, 2, 10, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, childrenItem_r28.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r28.children);
        }
      }

      function SidebarComponent_li_22_ul_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_ul_8_li_1_Template, 6, 8, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", menuItem_r2.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, menuItem_r2.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, menuItem_r2.active, !menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_22_div_1_Template, 7, 6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_22_label_2_Template, 2, 4, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_22_a_3_Template, 7, 10, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_22_a_5_Template, 6, 12, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_22_a_6_Template, 7, 11, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SidebarComponent_li_22_a_7_Template, 6, 9, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SidebarComponent_li_22_ul_8_Template, 2, 10, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](menuItem_r2.headTitle1 ? "sidebar-main-title" : "sidebar-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, menuItem_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.headTitle1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.badgeType && menuItem_r2.badgeValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", menuItem_r2.path, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r2.children);
        }
      }

      function SidebarComponent_li_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, menuItem_r56.headTitle1));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, menuItem_r56.headTitle2));
        }
      }

      function SidebarComponent_li_23_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r56.badgeType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r56.badgeValue);
        }
      }

      function SidebarComponent_li_23_a_3_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_23_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);

            var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r68.toggletNavActive(menuItem_r56);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_23_a_3_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r56.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, menuItem_r56.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_a_4_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_a_4_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !menuItem_r56.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, menuItem_r56.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, menuItem_r56.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_a_5_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_23_a_5_i_6_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r56.type ? null : menuItem_r56.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r56.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, menuItem_r56.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_a_6_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r56.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-feather-icons", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_a_6_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("link-nav", !menuItem_r56.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !menuItem_r56.type ? null : menuItem_r56.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", menuItem_r56.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r56.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("fa fa-angle-", childrenItem_r82.active ? "down" : "right", " pull-right");
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_23_ul_7_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92);

            var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r90.toggletNavActive(childrenItem_r82);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_ul_7_li_1_a_1_i_5_Template, 1, 3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenItem_r82.title), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_2_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_2_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenItem_r82.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, childrenItem_r82.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r82.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_3_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_3_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r82.type ? null : childrenItem_r82.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, childrenItem_r82.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_4_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 48);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_4_i_4_Template, 1, 0, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenItem_r82.type ? null : childrenItem_r82.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenItem_r82.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !childrenSubItem_r101.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, childrenSubItem_r101.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r101.title), "");
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r101.type ? null : childrenSubItem_r101.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, childrenSubItem_r101.title));
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r101.type ? null : childrenSubItem_r101.path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, childrenSubItem_r101.title));
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_1_Template, 4, 8, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_2_Template, 4, 6, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_a_3_Template, 4, 4, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r101 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, childrenSubItem_r101.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r101.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r101.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenSubItem_r101.type === "extTabLink");
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_ul_5_li_1_Template, 4, 6, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", childrenItem_r82.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, childrenItem_r82.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, childrenItem_r82.active, !childrenItem_r82.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_a_1_Template, 6, 4, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_23_ul_7_li_1_a_2_Template, 5, 9, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_23_ul_7_li_1_a_3_Template, 5, 7, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_ul_7_li_1_a_4_Template, 5, 5, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_ul_7_li_1_ul_5_Template, 2, 10, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, childrenItem_r82.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childrenItem_r82.children);
        }
      }

      function SidebarComponent_li_23_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_ul_7_li_1_Template, 6, 8, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", menuItem_r56.active ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, menuItem_r56.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c3, menuItem_r56.active, !menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", menuItem_r56.children);
        }
      }

      function SidebarComponent_li_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_23_div_1_Template, 7, 6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_23_label_2_Template, 2, 4, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_23_a_3_Template, 7, 10, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_23_a_4_Template, 6, 12, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_23_a_5_Template, 7, 11, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SidebarComponent_li_23_a_6_Template, 6, 9, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SidebarComponent_li_23_ul_7_Template, 2, 10, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](menuItem_r56.headTitle1 ? "sidebar-main-title" : "sidebar-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, menuItem_r56.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.headTitle1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.badgeType && menuItem_r56.badgeValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menuItem_r56.children);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          marginLeft: a0
        };
      };

      var _SidebarComponent = /*#__PURE__*/function () {
        function _SidebarComponent(router, navServices, layout) {
          var _this36 = this;

          _classCallCheck(this, _SidebarComponent);

          this.router = router;
          this.navServices = navServices;
          this.layout = layout; // For Horizontal Menu

          this.margin = 0;
          this.width = window.innerWidth;
          this.leftArrowNone = true;
          this.rightArrowNone = false;
          this.Role = localStorage.getItem('RiskRole'); // this.UserRole =  Roles.Agent;

          this.navServices.items.subscribe(function (res) {
            _this36.menuRolus = res; // this.navServices.itemss.subscribe((res)=>{
            //   this.donationRolus = res
            // })

            _this36.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                res.filter(function (items) {
                  if (items.path === event.url) {
                    _this36.setNavActive(items);
                  }

                  if (!items.children) {
                    return false;
                  }

                  items.children.filter(function (subItems) {
                    if (subItems.path === event.url) {
                      _this36.setNavActive(subItems);
                    }

                    if (!subItems.children) {
                      return false;
                    }

                    subItems.children.filter(function (subSubItems) {
                      if (subSubItems.path === event.url) {
                        _this36.setNavActive(subSubItems);
                      }
                    });
                  });
                });
              }
            });
          });
        }

        _createClass(_SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.width = event.target.innerWidth - 500;
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
          } // Active Nave state

        }, {
          key: "setNavActive",
          value: function setNavActive(item) {
            this.menuItems.filter(function (menuItem) {
              if (menuItem !== item) {
                menuItem.active = false;
              }

              if (menuItem.children && menuItem.children.includes(item)) {
                menuItem.active = true;
              }

              if (menuItem.children) {
                menuItem.children.filter(function (submenuItems) {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                    menuItem.active = true;
                    submenuItems.active = true;
                  }
                });
              }
            });
          } // Click Toggle menu

        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this37 = this;

            if (!item.active) {
              this.menuRolus.forEach(function (a) {
                if (_this37.menuRolus.includes(item)) {
                  a.active = false;
                }

                if (!a.children) {
                  return false;
                }

                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }

            item.active = !item.active;
          } // For Horizontal Menu

        }, {
          key: "scrollToLeft",
          value: function scrollToLeft() {
            if (this.margin >= -this.width) {
              this.margin = 0;
              this.leftArrowNone = true;
              this.rightArrowNone = false;
            } else {
              this.margin += this.width;
              this.rightArrowNone = false;
            }
          }
        }, {
          key: "scrollToRight",
          value: function scrollToRight() {
            if (this.margin <= -3051) {
              this.margin = -3464;
              this.leftArrowNone = false;
              this.rightArrowNone = true;
            } else {
              this.margin += -this.width;
              this.leftArrowNone = false;
            }
          }
        }, {
          key: "counter",
          value: function counter(i) {
            return new Array(i);
          }
        }]);

        return _SidebarComponent;
      }();

      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
      };

      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        decls: 26,
        vars: 12,
        consts: [[1, "logo-wrapper"], ["src", "", "alt", "", 1, "img-fluid", "for-light", 2, "width", "70%"], ["src", "", "alt", "", 1, "img-fluid", "for-dark", 2, "width", "70%"], [1, "back-btn", 3, "click"], [1, "fa", "fa-angle-left"], [1, "toggle-sidebar", 3, "click"], [1, "status_toggle", "middle", "sidebar-toggle", 3, "icon"], [1, "logo-icon-wrapper"], ["href", "javascript:void(0)"], ["src", "assets/images/logo/logo-icon.png", "alt", "", 1, "img-fluid"], [1, "sidebar-main"], ["id", "left-arrow", 1, "left-arrow", 3, "click"], [3, "icon"], ["id", "sidebar-menu", 3, "ngStyle"], [1, "sidebar-links", "custom-scrollbar"], [1, "back-btn"], [1, "mobile-back", "text-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "pl-2"], ["class", "text-capitalize", 3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], ["id", "right-arrow", 1, "right-arrow", 3, "click"], [1, "text-capitalize", 3, "ngClass"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["href", "javascript:void(0)", "class", "sidebar-link sidebar-title", 3, "link-nav", "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-link sidebar-title", 3, "routerLink", "link-nav", "ngClass", 4, "ngIf"], ["class", "sidebar-link sidebar-title", 3, "href", "link-nav", "ngClass", 4, "ngIf"], ["target", "_blank", "class", "sidebar-link sidebar-title", 3, "href", "link-nav", "ngClass", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", "display", 4, "ngIf"], [1, "lan-1"], [1, "lan-2"], ["href", "javascript:void(0)", 1, "sidebar-link", "sidebar-title", 3, "ngClass", "click"], [1, "according-menu"], ["routerLinkActive", "active", 1, "sidebar-link", "sidebar-title", 3, "routerLink", "ngClass"], [2, "text-transform", "capitalize !important"], [1, "sidebar-link", "sidebar-title", 3, "href", "ngClass"], ["target", "_blank", 1, "sidebar-link", "sidebar-title", 3, "href", "ngClass"], [1, "sidebar-submenu", 3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "submenu-title", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "submenu-title", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["class", "submenu-title", "routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["class", "submenu-title", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "nav-sub-childmenu submenu-content", 3, "ngClass", "display", 4, "ngIf"], ["href", "javascript:void(0)", 1, "submenu-title", 3, "click"], ["routerLinkActive", "active", 1, "submenu-title", 3, "routerLink", "routerLinkActiveOptions"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 1, "submenu-title", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 1, "submenu-title", 3, "href"], [1, "nav-sub-childmenu", "submenu-content", 3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_3_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_5_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-feather-icons", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nav", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_11_listener() {
              return ctx.scrollToLeft();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_18_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SidebarComponent_li_22_Template, 9, 13, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SidebarComponent_li_23_Template, 8, 12, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_24_listener() {
              return ctx.scrollToRight();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("d-none", ctx.leftArrowNone);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c4, ctx.layout.config.settings.layout == "Rome" || "Singapore" || "Barcelona" ? ctx.margin + "px" : "0px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuRolus);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.donationRolus);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("d-none", ctx.rightArrowNone);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    61916:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TapToTopComponent": function TapToTopComponent() {
          return (
            /* binding */
            _TapToTopComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);

      var _c0 = function _c0(a0) {
        return {
          "display": a0
        };
      };

      var _TapToTopComponent = /*#__PURE__*/function () {
        function _TapToTopComponent(viewScroller) {
          _classCallCheck(this, _TapToTopComponent);

          this.viewScroller = viewScroller;
          this.show = false;
        }

        _createClass(_TapToTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // @HostListener Decorator

        }, {
          key: "onWindowScroll",
          value: function onWindowScroll() {
            var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            if (number > 600) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
        }, {
          key: "tapToTop",
          value: function tapToTop() {
            this.viewScroller.scrollToPosition([0, 0]);
          }
        }]);

        return _TapToTopComponent;
      }();

      _TapToTopComponent.ɵfac = function TapToTopComponent_Factory(t) {
        return new (t || _TapToTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
      };

      _TapToTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TapToTopComponent,
        selectors: [["app-tap-to-top"]],
        hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 2,
        vars: 4,
        consts: [[1, "tap-top", 3, "ngStyle", "click"], [3, "icon"]],
        template: function TapToTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
              return ctx.tapToTop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.show ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "chevrons-up");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXAtdG8tdG9wLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    47028:
    /*!******************************************************************!*\
      !*** ./src/app/shared/data/router-animation/router-animation.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fadeInAnimation": function fadeInAnimation() {
          return (
            /* binding */
            _fadeInAnimation
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      17238);

      var _fadeInAnimation = (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInAnimation', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        position: 'relative'
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '0'
      })], {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.2s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '0'
      }))], {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.2s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '1'
      }))], {
        delay: 300,
        optional: true
      })]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
        optional: true
      })])]);
      /***/

    },

    /***/
    87500:
    /*!******************************************************************!*\
      !*** ./src/app/shared/directives/disable-key-press.directive.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisableKeyPressDirective": function DisableKeyPressDirective() {
          return (
            /* binding */
            _DisableKeyPressDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DisableKeyPressDirective = /*#__PURE__*/function () {
        function _DisableKeyPressDirective() {
          _classCallCheck(this, _DisableKeyPressDirective);

          this.autocomplete = 'off';
        }

        _createClass(_DisableKeyPressDirective, [{
          key: "disableKeys",
          value: function disableKeys(event) {
            event.preventDefault();
          }
        }]);

        return _DisableKeyPressDirective;
      }();

      _DisableKeyPressDirective.ɵfac = function DisableKeyPressDirective_Factory(t) {
        return new (t || _DisableKeyPressDirective)();
      };

      _DisableKeyPressDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableKeyPressDirective,
        selectors: [["", "disableKeyPress", ""]],
        hostVars: 1,
        hostBindings: function DisableKeyPressDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DisableKeyPressDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    53732:
    /*!************************************************************************!*\
      !*** ./src/app/shared/directives/disable-weriting-arabic.directive.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisableWeritingArabicDirective": function DisableWeritingArabicDirective() {
          return (
            /* binding */
            _DisableWeritingArabicDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DisableWeritingArabicDirective = /*#__PURE__*/function () {
        function _DisableWeritingArabicDirective() {
          _classCallCheck(this, _DisableWeritingArabicDirective);

          this.autocomplete = 'off';
        }

        _createClass(_DisableWeritingArabicDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            var stringAllow = /^[-\sa-zA-Z,0-9]+$/;
            var inputChar = e.key;

            if (!stringAllow.test(inputChar)) {
              e.preventDefault();
            }
          }
        }]);

        return _DisableWeritingArabicDirective;
      }();

      _DisableWeritingArabicDirective.ɵfac = function DisableWeritingArabicDirective_Factory(t) {
        return new (t || _DisableWeritingArabicDirective)();
      };

      _DisableWeritingArabicDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableWeritingArabicDirective,
        selectors: [["", "appDisableWeritingArabic", ""]],
        hostVars: 1,
        hostBindings: function DisableWeritingArabicDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DisableWeritingArabicDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    45347:
    /*!*************************************************************************!*\
      !*** ./src/app/shared/directives/disable-weriting-english.directive.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisableWeritingEnglishDirective": function DisableWeritingEnglishDirective() {
          return (
            /* binding */
            _DisableWeritingEnglishDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DisableWeritingEnglishDirective = /*#__PURE__*/function () {
        function _DisableWeritingEnglishDirective() {
          _classCallCheck(this, _DisableWeritingEnglishDirective);

          this.autocomplete = 'off';
        }

        _createClass(_DisableWeritingEnglishDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            var stringAllow = /^[-\s,\u0600-\u06FF,0-9]+$/;
            var inputChar = e.key;

            if (!stringAllow.test(inputChar)) {
              e.preventDefault();
            }
          }
        }]);

        return _DisableWeritingEnglishDirective;
      }();

      _DisableWeritingEnglishDirective.ɵfac = function DisableWeritingEnglishDirective_Factory(t) {
        return new (t || _DisableWeritingEnglishDirective)();
      };

      _DisableWeritingEnglishDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableWeritingEnglishDirective,
        selectors: [["", "appDisableWeritingEnglish", ""]],
        hostVars: 1,
        hostBindings: function DisableWeritingEnglishDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DisableWeritingEnglishDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    33177:
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/only-alphabets.directive.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnlyAlphabetsDirective": function OnlyAlphabetsDirective() {
          return (
            /* binding */
            _OnlyAlphabetsDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _OnlyAlphabetsDirective = /*#__PURE__*/function () {
        function _OnlyAlphabetsDirective() {
          _classCallCheck(this, _OnlyAlphabetsDirective);

          this.autocomplete = 'off';
        }

        _createClass(_OnlyAlphabetsDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            document.all ? e.keyCode : e.keyCode;
            return e.keyCode === 8 || e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 90;
          }
        }]);

        return _OnlyAlphabetsDirective;
      }();

      _OnlyAlphabetsDirective.ɵfac = function OnlyAlphabetsDirective_Factory(t) {
        return new (t || _OnlyAlphabetsDirective)();
      };

      _OnlyAlphabetsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyAlphabetsDirective,
        selectors: [["", "onlyAlphabets", ""]],
        hostVars: 1,
        hostBindings: function OnlyAlphabetsDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OnlyAlphabetsDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    59112:
    /*!***********************************************************!*\
      !*** ./src/app/shared/directives/only-dates.directive.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnlyDatesDirective": function OnlyDatesDirective() {
          return (
            /* binding */
            _OnlyDatesDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _OnlyDatesDirective = /*#__PURE__*/function () {
        function _OnlyDatesDirective() {
          _classCallCheck(this, _OnlyDatesDirective);

          this.autocomplete = 'off';
        }

        _createClass(_OnlyDatesDirective, [{
          key: "Date",
          value: function Date(e) {
            document.all ? e.keyCode : e.keyCode;

            if (e.target.value <= '1930-01-01') {
              e.target.value = '1930-01-01';
            }
          }
        }]);

        return _OnlyDatesDirective;
      }();

      _OnlyDatesDirective.ɵfac = function OnlyDatesDirective_Factory(t) {
        return new (t || _OnlyDatesDirective)();
      };

      _OnlyDatesDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyDatesDirective,
        selectors: [["", "appOnlyDates", ""]],
        hostVars: 1,
        hostBindings: function OnlyDatesDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function OnlyDatesDirective_blur_HostBindingHandler($event) {
              return ctx.Date($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    5262:
    /*!*************************************************************!*\
      !*** ./src/app/shared/directives/only-numbers.directive.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnlyNumbersDirective": function OnlyNumbersDirective() {
          return (
            /* binding */
            _OnlyNumbersDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _OnlyNumbersDirective = /*#__PURE__*/function () {
        function _OnlyNumbersDirective() {
          _classCallCheck(this, _OnlyNumbersDirective);

          this.autocomplete = 'off';
        }

        _createClass(_OnlyNumbersDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            document.all ? e.keyCode : e.keyCode; // let y = this.x.test( e.keyCode)

            return e.keyCode == 8 || e.keyCode >= 48 && e.keyCode <= 57;
          }
        }]);

        return _OnlyNumbersDirective;
      }();

      _OnlyNumbersDirective.ɵfac = function OnlyNumbersDirective_Factory(t) {
        return new (t || _OnlyNumbersDirective)();
      };

      _OnlyNumbersDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyNumbersDirective,
        selectors: [["", "onlyNumbers", ""]],
        hostVars: 1,
        hostBindings: function OnlyNumbersDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OnlyNumbersDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });
      /***/
    },

    /***/
    84177:
    /*!*************************************************************!*\
      !*** ./src/app/shared/directives/show-options.directive.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowOptionsDirective": function ShowOptionsDirective() {
          return (
            /* binding */
            _ShowOptionsDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ShowOptionsDirective = /*#__PURE__*/function () {
        function _ShowOptionsDirective(elRef, renderer) {
          _classCallCheck(this, _ShowOptionsDirective);

          this.elRef = elRef;
          this.renderer = renderer;
          this.options = false;
        }

        _createClass(_ShowOptionsDirective, [{
          key: "openOptions",
          value: function openOptions() {
            this.options = !this.options;
          }
        }, {
          key: "setStyle",
          value: function setStyle() {
            this.options = this.options === true ? false : true;

            if (this.options) {
              this.renderer.setStyle(this.elRef.nativeElement, 'width', '230px');
            } else {
              this.renderer.setStyle(this.elRef.nativeElement, 'width', '35px');
            }
          }
        }]);

        return _ShowOptionsDirective;
      }();

      _ShowOptionsDirective.ɵfac = function ShowOptionsDirective_Factory(t) {
        return new (t || _ShowOptionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _ShowOptionsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ShowOptionsDirective,
        selectors: [["", "appShowOptions", ""]],
        hostBindings: function ShowOptionsDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowOptionsDirective_click_HostBindingHandler() {
              return ctx.openOptions();
            });
          }
        }
      });
      /***/
    },

    /***/
    12406:
    /*!************************************************!*\
      !*** ./src/app/shared/guard/is-login.guard.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IsLoginGuard": function IsLoginGuard() {
          return (
            /* binding */
            _IsLoginGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _IsLoginGuard = /*#__PURE__*/function () {
        function _IsLoginGuard(_Router) {
          _classCallCheck(this, _IsLoginGuard);

          this._Router = _Router;
          this.Token = localStorage.getItem('CamelgateAuthorization');
        }

        _createClass(_IsLoginGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem('Authorization') == null) {
              this._Router.navigate(['/login']);

              return;
            } else {
              return true;
            }
          }
        }]);

        return _IsLoginGuard;
      }();

      _IsLoginGuard.ɵfac = function IsLoginGuard_Factory(t) {
        return new (t || _IsLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _IsLoginGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _IsLoginGuard,
        factory: _IsLoginGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    31762:
    /*!****************************************************!*\
      !*** ./src/app/shared/guard/is-not-login.guard.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IsNotLoginGuard": function IsNotLoginGuard() {
          return (
            /* binding */
            _IsNotLoginGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _IsNotLoginGuard = /*#__PURE__*/function () {
        function _IsNotLoginGuard(_Router) {
          _classCallCheck(this, _IsNotLoginGuard);

          this._Router = _Router;
        }

        _createClass(_IsNotLoginGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem("Authorization") == null) {
              return true;
            } else {
              this._Router.navigate(["/content/admin"]);

              return false;
            }
          }
        }]);

        return _IsNotLoginGuard;
      }();

      _IsNotLoginGuard.ɵfac = function IsNotLoginGuard_Factory(t) {
        return new (t || _IsNotLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _IsNotLoginGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _IsNotLoginGuard,
        factory: _IsNotLoginGuard.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    46382:
    /*!*****************************************!*\
      !*** ./src/app/shared/routes/routes.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "content": function content() {
          return (
            /* binding */
            _content
          );
        }
        /* harmony export */

      });

      var _content = [// {
      //   path: 'sample-page',
      //   // loadChildren: () => import('../../components/sample/sample.module').then(m => m.SampleModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/admin/admin.module */
          81100)).then(function (m) {
            return m.AdminModule;
          });
        }
      } // {
      //   path: 'agent',
      //   // loadChildren: () => import('../../components/Agent/agent-module.module').then(m => m.AgentModuleModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      // {
      //   path: 'donation',
      //   // loadChildren: () => import('../../components/donation/donation.module').then(m=> m.DonationModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      // {
      //   path: 'collectormanager',
      //   // loadChildren: () => import('../../components/collectormanager/collectormanager.module').then(m=> m.CollectormanagerModule)
      //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
      // },
      ];
      /***/
    },

    /***/
    85682:
    /*!***************************************************!*\
      !*** ./src/app/shared/services/layout.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutService": function LayoutService() {
          return (
            /* binding */
            _LayoutService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LayoutService = /*#__PURE__*/_createClass(function _LayoutService() {
        _classCallCheck(this, _LayoutService);

        this.language = "ar";
        this.config = {
          settings: {
            layout: "Dubai",
            layout_type: "rtl",
            layout_version: "light-only",
            sidebar_type: "default-sidebar"
          },
          color: {
            primary_color: "#48267F",
            secondary_color: "#EE7A24"
          }
        };
        if (this.config.settings.layout_type == "rtl") document.getElementsByTagName("html")[0].setAttribute("dir", this.config.settings.layout_type);
        document.documentElement.style.setProperty("--theme-deafult", this.config.color.primary_color);
        document.documentElement.style.setProperty("--theme-secondary", this.config.color.secondary_color);
      });

      _LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || _LayoutService)();
      };

      _LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LayoutService,
        factory: _LayoutService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    5897:
    /*!************************************************!*\
      !*** ./src/app/shared/services/nav.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavService": function NavService() {
          return (
            /* binding */
            _NavService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _NavService = /*#__PURE__*/function () {
        function _NavService(router) {
          var _this38 = this;

          _classCallCheck(this, _NavService);

          this.router = router;
          this.unsubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.screenWidth = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(window.innerWidth); // Search Box

          this.search = false; // Language

          this.language = false; // Mega Menu

          this.megaMenu = false;
          this.levelMenu = false;
          this.megaMenuColapse = window.innerWidth < 1199 ? true : false; // For Horizontal Layout Mobile

          this.horizontal = window.innerWidth < 991 ? false : true; // Collapse Sidebar

          this.collapseSidebar = window.innerWidth < 991 ? true : false; // Full screen

          this.fullScreen = false;
          this.Role = localStorage.getItem("CamlRole");
          this.RoleCamlGATE = 1; // private admin only

          this.RoleCamlEmployee = 2; // private admin only

          this.RoleCompany = 5; // private Company only

          this.RoleCompanyEmployee = 3; // private Company only

          this.RoledCompanyTruck = 6; // private CompanyTruck  only

          this.RoledCompanyTruckEmployee = 4; // private CompanyTruck  only

          this.MENUITEMS_andalus = [{
            headTitle1: "IBI",
            headTitle2: "لوحة التحكم"
          }, {
            title: "الدول",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewCountry",
              title: "ادارة الدول",
              type: "link"
            }]
          }, {
            title: "الديانات",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewReligion",
              title: "ادارة الديانات",
              type: "link"
            }]
          }, {
            title: "الطلاب",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewStudents",
              title: "ادارة الطلاب",
              type: "link"
            }]
          }, {
            title: "المستخدمين",
            icon: "activity",
            type: "sub",
            badgeType: "success",
            children: [{
              path: "admin/ViewAdmin",
              title: "ادارة المستخدمين",
              type: "link"
            }]
          }]; // ===============

          this.MEGAMENUITEMS = [{
            title: "Error Pages",
            type: "sub",
            active: true,
            children: [{
              path: "javascript:void(0);",
              title: "Error Page 400",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 401",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 403",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 404",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 500",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Error Page 503",
              type: "extLink"
            }]
          }, {
            title: "Authentication",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "Login Simple",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Login BG Image",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Login BG Video",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Simple Register",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Register BG Image",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Register BG Video",
              type: "extLink"
            }]
          }, {
            title: "Usefull Pages",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "Search Pages",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Unlock User",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Forgot Password",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Reset Password",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Maintenance",
              type: "extLink"
            }]
          }, {
            title: "Email templates",
            type: "sub",
            active: false,
            children: [{
              path: "http://admin.pixelstrap.com/cuba/theme/basic-template.html",
              title: "Basic Email",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/email-header.html",
              title: "Basic With Header",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/template-email.html",
              title: "Ecomerce Template",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/template-email-2.html",
              title: "Email Template 2",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/ecommerce-templates.html",
              title: "Ecommerce Email",
              type: "extTabLink"
            }, {
              path: "http://admin.pixelstrap.com/cuba/theme/email-order-success.html",
              title: "Order Success",
              type: "extTabLink"
            }]
          }, {
            title: "Coming Soon",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "Coming Simple",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Coming BG Image",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Coming BG Video",
              type: "extLink"
            }]
          }];
          this.LEVELMENUITEMS = [{
            path: "javascript:void(0);",
            title: "File Manager",
            icon: "git-pull-request",
            type: "extLink"
          }, {
            title: "Users",
            icon: "users",
            type: "sub",
            active: false,
            children: [{
              path: "javascript:void(0);",
              title: "All Users",
              icon: "users",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "User Profile",
              icon: "users",
              type: "extLink"
            }, {
              path: "javascript:void(0);",
              title: "Edit Profile",
              icon: "users",
              type: "extLink"
            }]
          }, {
            path: "javascript:void(0);",
            title: "Bookmarks",
            icon: "heart",
            type: "extLink"
          }, {
            path: "javascript:void(0);",
            title: "Calender",
            icon: "calendar",
            type: "extLink"
          }, {
            path: "javascript:void(0);",
            title: "Social App",
            icon: "zap",
            type: "extLink"
          }];
          this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS_andalus);
          this.megaItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MEGAMENUITEMS);
          this.levelmenuitems = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.LEVELMENUITEMS);
          this.setScreenWidth(window.innerWidth);
          (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, "resize").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscriber)).subscribe(function (evt) {
            _this38.setScreenWidth(evt.target.innerWidth);

            if (evt.target.innerWidth < 991) {
              _this38.collapseSidebar = true;
              _this38.megaMenu = false;
              _this38.levelMenu = false;
            }

            if (evt.target.innerWidth < 1199) {
              _this38.megaMenuColapse = true;
            }
          });

          if (window.innerWidth < 991) {
            // Detect Route change sidebar close
            this.router.events.subscribe(function (event) {
              _this38.collapseSidebar = true;
              _this38.megaMenu = false;
              _this38.levelMenu = false;
            });
          }
        }

        _createClass(_NavService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscriber.next();
            this.unsubscriber.complete();
          }
        }, {
          key: "setScreenWidth",
          value: function setScreenWidth(width) {
            this.screenWidth.next(width);
          }
        }]);

        return _NavService;
      }();

      _NavService.ɵfac = function NavService_Factory(t) {
        return new (t || _NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _NavService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _NavService,
        factory: _NavService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      27995);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng2-dragula */
      88989);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      66526);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/header/header.component */
      36290);
      /* harmony import */


      var _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/layout/content/content.component */
      14649);
      /* harmony import */


      var _components_layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/layout/full/full.component */
      210);
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/loader/loader.component */
      90605);
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      6664);
      /* harmony import */


      var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/tap-to-top/tap-to-top.component */
      61916);
      /* harmony import */


      var _components_header_elements_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/header/elements/search/search.component */
      18249);
      /* harmony import */


      var _components_header_elements_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/header/elements/mega-menu/mega-menu.component */
      54399);
      /* harmony import */


      var _components_header_elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/header/elements/languages/languages.component */
      85607);
      /* harmony import */


      var _components_header_elements_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/header/elements/notification/notification.component */
      22666);
      /* harmony import */


      var _components_header_elements_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/header/elements/bookmark/bookmark.component */
      38400);
      /* harmony import */


      var _components_header_elements_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/header/elements/cart/cart.component */
      88204);
      /* harmony import */


      var _components_header_elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/header/elements/message-box/message-box.component */
      95895);
      /* harmony import */


      var _components_header_elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/header/elements/my-account/my-account.component */
      32413);
      /* harmony import */


      var _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./directives/disable-key-press.directive */
      87500);
      /* harmony import */


      var _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./directives/only-alphabets.directive */
      33177);
      /* harmony import */


      var _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./directives/only-numbers.directive */
      5262);
      /* harmony import */


      var _directives_show_options_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./directives/show-options.directive */
      84177);
      /* harmony import */


      var _directives_only_dates_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./directives/only-dates.directive */
      59112);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/layout.service */
      85682);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/nav.service */
      5897);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      45675);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      27799);
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      25367);
      /* harmony import */


      var _directives_disable_weriting_english_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./directives/disable-weriting-english.directive */
      45347);
      /* harmony import */


      var _directives_disable_weriting_arabic_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./directives/disable-weriting-arabic.directive */
      53732);
      /* harmony import */


      var _Pipes_exp_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./Pipes/exp.pipe */
      6210);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _Models_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./Models/login/login.component */
      86022);
      /* harmony import */


      var _components_check_date_check_date_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/check-date/check-date.component */
      71889);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/core */
      37716); // Components
      // Header Elements Components
      // Directives
      //product services
      // Services
      // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


      var _SharedModule = /*#__PURE__*/_createClass(function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      });

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
        providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_23__.NavService, _services_layout_service__WEBPACK_IMPORTED_MODULE_22__.LayoutService],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_36__.DragulaModule.forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule.forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule.forRoot()], _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.SidebarComponent, _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _components_layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__.FullComponent, _directives_show_options_directive__WEBPACK_IMPORTED_MODULE_20__.ShowOptionsDirective, _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__.DisableKeyPressDirective, _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__.OnlyAlphabetsDirective, _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__.OnlyNumbersDirective, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_8__.TapToTopComponent, _components_header_elements_search_search_component__WEBPACK_IMPORTED_MODULE_9__.SearchComponent, _components_header_elements_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_10__.MegaMenuComponent, _components_header_elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__.LanguagesComponent, _components_header_elements_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__.NotificationComponent, _components_header_elements_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__.BookmarkComponent, _components_header_elements_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__.CartComponent, _components_header_elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_15__.MessageBoxComponent, _components_header_elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_16__.MyAccountComponent, _directives_only_dates_directive__WEBPACK_IMPORTED_MODULE_21__.OnlyDatesDirective, _directives_disable_weriting_english_directive__WEBPACK_IMPORTED_MODULE_24__.DisableWeritingEnglishDirective, _directives_disable_weriting_arabic_directive__WEBPACK_IMPORTED_MODULE_25__.DisableWeritingArabicDirective, _Pipes_exp_pipe__WEBPACK_IMPORTED_MODULE_26__.ExpPipe, _Models_login_login_component__WEBPACK_IMPORTED_MODULE_27__.LoginComponent, _components_check_date_check_date_component__WEBPACK_IMPORTED_MODULE_28__.CheckDateComponent],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_36__.DragulaModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateModule, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_8__.TapToTopComponent, _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__.DisableKeyPressDirective, _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__.OnlyAlphabetsDirective, _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__.OnlyNumbersDirective, _directives_only_dates_directive__WEBPACK_IMPORTED_MODULE_21__.OnlyDatesDirective, _directives_disable_weriting_english_directive__WEBPACK_IMPORTED_MODULE_24__.DisableWeritingEnglishDirective, _directives_disable_weriting_arabic_directive__WEBPACK_IMPORTED_MODULE_25__.DisableWeritingArabicDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_37__.BsDatepickerModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__.ModalModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__.NgSelectModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_40__.TooltipModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_41__.PaginationModule, _Pipes_exp_pipe__WEBPACK_IMPORTED_MODULE_26__.ExpPipe]
        });
      })();
      /***/

    },

    /***/
    68077:
    /*!**********************************************!*\
      !*** ./src/app/token-interceptor.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenInterceptorService": function TokenInterceptorService() {
          return (
            /* binding */
            _TokenInterceptorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TokenInterceptorService = /*#__PURE__*/function () {
        function _TokenInterceptorService(injector) {
          _classCallCheck(this, _TokenInterceptorService);

          this.injector = injector;
        }

        _createClass(_TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = localStorage.getItem('Authorization');

            if (token) {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(req);
          }
        }]);

        return _TokenInterceptorService;
      }();

      _TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
        return new (t || _TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      };

      _TokenInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _TokenInterceptorService,
        factory: _TokenInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    89019:
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app/shared/services/layout.service */
      85682); // src/app/shared/services/layout.service


      var injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector.create([{
        provide: _app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService,
        deps: []
      }]);

      var inject = injector.get(_app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService);
      var lang = inject.language;
      var _environment = {
        production: true,
        Server_URL: "https://localhost:44363/api"
      };
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment2
          );
        },

        /* harmony export */
        "Server_URL": function Server_URL() {
          return (
            /* binding */
            _Server_URL
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment2 = {
        production: false
      };
      var _Server_URL = 'https://localhost:44363/api';
      /***/
    },

    /***/
    96381:
    /*!******************************!*\
      !*** ./src/images/images.ts ***!
      \******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "img": function img() {
          return (
            /* binding */
            _img
          );
        },

        /* harmony export */
        "Image": function Image() {
          return (
            /* binding */
            _Image
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _img = {
        production: false
      };
      var _Image = "https://localhost:44363/";
      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map