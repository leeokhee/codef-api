(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-base\">\n\n  <div class=\"content-header\">\n    <h2>codeF 계정 생성</h2>\n    <ol class=\"account-progress\">\n      <li>약관동의</li>\n      <li>정보입력</li>\n      <li>가입인증</li>\n      <li>가입완료</li>\n    </ol>\n  </div>\n\n\n  <div class=\"content-body\">\n\n    <div class=\"account-step1\">\n\n      <div class=\"account-header\">\n\n        <div class=\"title\">\n          <label class=\"\" for=\"exampleCheck1\">모두 확인, 동의합니다.</label>\n          <input type=\"checkbox\" class=\"\" id=\"exampleCheck1\">\n        </div>\n\n        <p class=\"description\">전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다. <br>\n          선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.</p>\n\n      </div>\n\n\n      <ul class=\"terms-list\">\n        <li>\n          <div>codeF 서비스 약관 <small class=\"required\">(필수)</small></div>\n          <div>\n            <button class=\"btn btn-primary btn-sm mr-2\">보기</button>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n          </div>\n        </li>\n        <li>\n          <div>개인정보 수집 및 이용동의 <small class=\"required\">(필수)</small></div>\n          <div>\n            <button class=\"btn btn-primary btn-sm mr-2\">보기</button>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n          </div>\n        </li>\n        <li>\n          <div>이벤트 및 마케팅 활용 동의 <small class=\"\">(선택)</small></div>\n          <div>\n            <button class=\"btn btn-primary btn-sm mr-2\">보기</button>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n          </div>\n        </li>\n      </ul>\n\n\n      <div class=\"account-footer\">\n        <button type=\"submit\" class=\"btn btn-primary btn-lg\">다음</button>\n      </div>\n    </div>\n    <div class=\"account-step2\">\n\n    </div>\n    <div class=\"account-step3\">\n\n    </div>\n    <div class=\"account-step4\">\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-progress {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n  .account-progress li {\n    margin: 0 40px; }\n  .content-body {\n  margin: 0 auto;\n  width: 918px;\n  padding: 37px 30px;\n  border-radius: 5px;\n  border: 1px solid #bfbfbf;\n  background-color: #fff; }\n  .content-body .account-header {\n    padding: 0 40px; }\n  .content-body .account-header .title {\n      display: flex;\n      justify-content: space-between;\n      font-size: 20px;\n      margin-bottom: 30px; }\n  .content-body .terms-list {\n    font-size: 20px;\n    border-top: 1px solid #bfbfbf;\n    padding: 0;\n    margin: 0; }\n  .content-body .terms-list li {\n      display: flex;\n      justify-content: space-between;\n      align-content: center;\n      padding: 27px 40px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2); }\n  .content-body .terms-list small {\n      font-size: 16px; }\n  .content-body .terms-list .required {\n      color: #4a2fa9;\n      font-size: 16px; }\n  .content-body .account-footer {\n    padding: 47px 0 49px;\n    display: flex;\n    justify-content: center; }\n  .content-body .account-footer .btn {\n      min-width: 220px; }\n  .btn.disabled, .btn:disabled {\n  opacity: 1;\n  background-color: #bfbfbf;\n  border-color: #bfbfbf; }\n  .btn.disabled:focus, .btn:disabled:focus {\n    box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWVva2hlZS93b3Jrc3BhY2UvY29kZWYtYXBpaS9zcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBS3hCO0VBUkQ7SUFNSSxlQUFjLEVBQ2Y7RUFHSDtFQUNFLGVBQWM7RUFDZCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsdUJBQXNCLEVBMkN2QjtFQWpERDtJQVNJLGdCQUFlLEVBT2hCO0VBaEJIO01BV00sY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixnQkFBZTtNQUNmLG9CQUFtQixFQUNwQjtFQWZMO0lBbUJJLGdCQUFlO0lBQ2YsOEJBQTZCO0lBQzdCLFdBQVU7SUFDVixVQUFTLEVBZVY7RUFyQ0g7TUF3Qk0sY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLDRDQUF1QyxFQUN4QztFQTdCTDtNQStCTSxnQkFBZSxFQUNoQjtFQWhDTDtNQWtDTSxlQUFjO01BQ2QsZ0JBQWUsRUFDaEI7RUFwQ0w7SUF3Q0kscUJBQW9CO0lBQ3BCLGNBQWE7SUFDYix3QkFBdUIsRUFJeEI7RUE5Q0g7TUE0Q00saUJBQWdCLEVBQ2pCO0VBTUw7RUFDRSxXQUFVO0VBQ1YsMEJBQXlCO0VBQ3pCLHNCQUFxQixFQUt0QjtFQVJEO0lBTUksaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtcHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBsaSB7XG4gICAgbWFyZ2luOiAwIDQwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQtYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOTE4cHg7XG4gIHBhZGRpbmc6IDM3cHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIC5hY2NvdW50LWhlYWRlciB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIC50aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gIH1cblxuICAudGVybXMtbGlzdCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmZiZmJmO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyN3B4IDQwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG4gICAgfVxuICAgIHNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLnJlcXVpcmVkIHtcbiAgICAgIGNvbG9yOiAjNGEyZmE5O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5hY2NvdW50LWZvb3RlciB7XG4gICAgcGFkZGluZzogNDdweCAwIDQ5cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuYnRuIHtcbiAgICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgfVxuICB9XG5cblxufVxuXG4uYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbiAgYm9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Routable animations
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('main <=> login', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], pathMatch: 'full' },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], data: { animation: '' } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], data: { animation: '' } },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--[if IE]>\n<p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n<![endif]-->\n\n<div class=\"header\">\n  <nav class=\"navbar navbar-expand-lg\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/\"><span class=\"sr-only\">CODEF API</span></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav m-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"products\">제품소개</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">이용사례</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 title\">\n                    <h4>이용사례</h4>\n                    <p>CODE F와 함께한 <br>\n                      수많은 활용사례를 확인해 보세요.</p>\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"row\">\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">자산관리</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">인증</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">보험</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">그 외 서비스</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">기업서비스</a>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">개발가이드</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 title\">\n                    <h4>개발가이드</h4>\n                    <p>CODE F API를 이용해 <br>\n                      창의적인 애플리케이션을 제작해 보세요.</p>\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"row\">\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">빠른 시작</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">라이브러리</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">API문서</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">자주묻는 질문</a>\n                      <a class=\"col-md-6 dropdown-item\" href=\"#\">API 업그레이드</a>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"pricing\">가격정책</a>\n          </li>\n          <li class=\"nav-ite\">\n            <a class=\"nav-link\" href=\"aboutUs\">회사소개</a>\n          </li>\n        </ul>\n        <form class=\"account-area\">\n          <a routerLink=\"login\" class=\"btn btn-outline-primary btn-login\">로그인</a>\n          <button class=\"btn btn-primary\" type=\"submit\">Get API Keys</button>\n        </form>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<!--<router-outlet></router-outlet>-->\n<div [@routeAnimation]=\"getAnimationData(routerOutlet)\">\n  <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n</div>\n\n<div class=\"footer\">\n  <div class=\"container\">\n\n\n    <div class=\"row\">\n\n      <div class=\"col-md-4\">\n        <a href=\"#none\" class=\"logo\"><span class=\"sr-only\">codeF</span></a>\n        <address>© 2018 codeF. All right reserved. <br>\n          Proudly made in Korea.</address>\n      </div>\n\n      <dl class=\"col-md\">\n        <dt><a href=\"#none\">Company</a></dt>\n        <dd><a href=\"#none\">About</a></dd>\n        <dd><a href=\"#none\">Leadership</a></dd>\n        <dd><a href=\"#none\">Blog</a></dd>\n        <dd><a href=\"#none\">Careers</a></dd>\n        <dd><a href=\"#none\">Partner Network</a></dd>\n        <dd><a href=\"#none\">Referral Program</a></dd>\n        <dd><a href=\"#none\">Events</a></dd>\n        <dd><a href=\"#none\">Press</a></dd>\n        <dd><a href=\"#none\">Legal & Security</a></dd>\n      </dl>\n\n      <dl class=\"col-md\">\n        <dt><a href=\"#none\">Products</a></dt>\n        <dd><a href=\"#none\">Droplets</a></dd>\n        <dd><a href=\"#none\">Spaces</a></dd>\n        <dd><a href=\"#none\">Kubernetes</a></dd>\n        <dd><a href=\"#none\">Load Balancers</a></dd>\n        <dd><a href=\"#none\">Block Storage</a></dd>\n        <dd><a href=\"#none\">Tools & Integrations</a></dd>\n        <dd><a href=\"#none\">One-Click Apps</a></dd>\n        <dd><a href=\"#none\">API</a></dd>\n        <dd><a href=\"#none\">Pricing</a></dd>\n        <dd><a href=\"#none\">Documentation</a></dd>\n        <dd><a href=\"#none\">Release Notes</a></dd>\n      </dl>\n\n      <dl class=\"col-md\">\n        <dt><a href=\"#none\">Community</a></dt>\n        <dd><a href=\"#none\">Tutorials</a></dd>\n        <dd><a href=\"#none\">Meetups</a></dd>\n        <dd><a href=\"#none\">Q&A</a></dd>\n        <dd><a href=\"#none\">Write for DOnations</a></dd>\n        <dd><a href=\"#none\">Droplets for Demos</a></dd>\n        <dd><a href=\"#none\">Hatch</a></dd>\n        <dd><a href=\"#none\">Shop Swag</a></dd>\n        <dd><a href=\"#none\">Research Program</a></dd>\n        <dd><a href=\"#none\">Currents Research</a></dd>\n        <dd><a href=\"#none\">Open Source</a></dd>\n      </dl>\n\n      <dl class=\"col-md\">\n        <dt><a href=\"#none\">Support</a></dt>\n        <dd><a href=\"#none\">Contact Support</a></dd>\n        <dd><a href=\"#none\">FAQ</a></dd>\n        <dd><a href=\"#none\">Network Status</a></dd>\n      </dl>\n\n    </div>\n\n  </div>\n</div>\n\n\n<div id=\"device-size-detector\">\n  <div id=\"xs\" class=\"d-block d-sm-none\"></div>\n  <div id=\"sm\" class=\"d-none d-sm-block d-md-none\"></div>\n  <div id=\"md\" class=\"d-none d-md-block d-lg-none\"></div>\n  <div id=\"lg\" class=\"d-none d-lg-block d-xl-none\"></div>\n  <div id=\"xl\" class=\"d-none d-xl-block\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header .navbar-brand {\n  background: url('logo.png') 0 0 no-repeat;\n  width: 130px;\n  height: 40px; }\n  @media (min-width: 576px) {\n    .header .navbar-brand {\n      top: 45px; } }\n  .header .navbar {\n  min-height: 90px; }\n  .header .navbar .navbar-toggler {\n    border: 1px solid #efefef; }\n  @media (max-width: 767.98px) {\n    .header .navbar .navbar-collapse {\n      margin: 20px 0;\n      border: 1px solid rgba(0, 0, 0, 0.15);\n      border-width: 1px 0; } }\n  .header .navbar .nav-link {\n    font-size: 16px;\n    color: #333; }\n  @media (min-width: 576px) {\n      .header .navbar .nav-link {\n        padding: 30px 22px;\n        text-align: center;\n        display: block; } }\n  @media (max-width: 767.98px) {\n      .header .navbar .nav-link {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.15); } }\n  .header .navbar .nav-link.active {\n      color: #4a2fa9; }\n  .header .account-area {\n  padding: 10px 0; }\n  .header .btn-login {\n  margin-right: 10px; }\n  @media (min-width: 576px) {\n    .header .btn-login {\n      color: var(--black-80);\n      border: 0; } }\n  .header .btn-primary {\n  min-width: 140px; }\n  .header .dropup, .header .dropright, .header .dropdown, .header .dropleft {\n  position: static; }\n  .header .dropdown-menu {\n  top: 90px;\n  width: 100%;\n  border-radius: 0;\n  background-color: white;\n  font-size: 15.5px;\n  color: rgba(17, 17, 17, 0.8); }\n  @media (max-width: 767.98px) {\n    .header .dropdown-menu {\n      border: 0;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.15); } }\n  .header .dropdown-menu .title {\n    display: none; }\n  @media (min-width: 576px) {\n      .header .dropdown-menu .title {\n        padding-left: 170px;\n        padding-top: 45px;\n        display: block; } }\n  .header .dropdown-menu h4 {\n    font-size: 27.5px;\n    font-weight: 900;\n    color: #4a2fa9; }\n  .header .dropdown-menu p {\n    font-size: 18px;\n    color: rgba(17, 17, 17, 0.5); }\n  @media (min-width: 576px) {\n  .header .dropdown-item {\n    padding: 25px 10px; } }\n  @media (min-width: 576px) {\n  .dropdown > .dropdown-toggle:active {\n    pointer-events: none; }\n  .dropdown .dropdown-menu {\n    overflow: hidden;\n    -webkit-transform-origin: top center;\n            transform-origin: top center;\n    -webkit-transform: scale(1, 0);\n            transform: scale(1, 0); }\n    .dropdown .dropdown-menu .dropdown-menu {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n  .dropdown:hover .dropdown-menu {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    display: block; } }\n  .up-sm .dropdown > .dropdown-toggle:active {\n  pointer-events: none; }\n  .up-sm .dropdown .dropdown-menu {\n  overflow: hidden;\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  -webkit-transform: scale(1, 0);\n          transform: scale(1, 0); }\n  .up-sm .dropdown .dropdown-menu .dropdown-menu {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  .up-sm .dropdown:hover .dropdown-menu {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  display: block; }\n  .footer {\n  position: relative;\n  background-color: #000e28;\n  min-height: 340px;\n  padding: 40px 20px; }\n  @media (min-width: 576px) {\n    .footer {\n      padding: 88px 0; } }\n  .footer .logo {\n    display: block;\n    background: url('logo-footer.png') 0 0 no-repeat;\n    width: 199px;\n    height: 57px;\n    margin-bottom: 23px; }\n  .footer address {\n    color: #fff;\n    font-size: 18px; }\n  .footer dt a {\n    display: block;\n    color: #fff;\n    margin-bottom: 10px; }\n  .footer dd, .footer a {\n    color: #707785; }\n  .footer dd:hover, .footer a:hover {\n      color: #fff; }\n  @media (max-width: 575.98px) {\n    .footer dd {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWVva2hlZS93b3Jrc3BhY2UvY29kZWYtYXBpaS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9sZWVva2hlZS93b3Jrc3BhY2UvY29kZWYtYXBpaS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBS0ksMENBQXdEO0VBQ3hELGFBQVk7RUFDWixhQUFZLEVBQ2I7RUNnREM7SUR4REo7TUFHTSxVQUFTLEVBS1osRUFBQTtFQVJIO0VBV0ksaUJBQWdCLEVBMkJqQjtFQXRDSDtJQWNNLDBCQUF5QixFQUMxQjtFQ3NERDtJRHJFSjtNQWtCUSxlQUFjO01BQ2Qsc0NBQXFDO01BQ3JDLG9CQUFtQixFQUV0QixFQUFBO0VBdEJMO0lBd0JNLGdCQUFlO0lBQ2YsWUFBVyxFQVlaO0VDbUJEO01EeERKO1FBMkJRLG1CQUFrQjtRQUNsQixtQkFBa0I7UUFDbEIsZUFBYyxFQVFqQixFQUFBO0VDZ0NEO01EckVKO1FBZ0NRLDZDQUE0QyxFQUsvQyxFQUFBO0VBckNMO01BbUNRLGVBQXVCLEVBQ3hCO0VBcENQO0VBeUNJLGdCQUFlLEVBQ2hCO0VBMUNIO0VBNkNJLG1CQUFrQixFQUtuQjtFQ01DO0lEeERKO01BK0NNLHVCQUFzQjtNQUN0QixVQUFTLEVBRVosRUFBQTtFQWxESDtFQXFESSxpQkFBZ0IsRUFDakI7RUF0REg7RUF5REksaUJBQWdCLEVBQ2pCO0VBMURIO0VBNERJLFVBQVM7RUFDVCxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLHdCQUFvQztFQUNwQyxrQkFBaUI7RUFDakIsNkJBQTRCLEVBd0I3QjtFQ3BCQztJRHJFSjtNQW1FTSxVQUFTO01BQ1QsNkNBQTRDLEVBcUIvQyxFQUFBO0VBekZIO0lBd0VNLGNBQWEsRUFNZDtFQ3RCRDtNRHhESjtRQTBFUSxvQkFBbUI7UUFDbkIsa0JBQWlCO1FBQ2pCLGVBQWMsRUFFakIsRUFBQTtFQTlFTDtJQWdGTSxrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLGVBQWMsRUFDZjtFQW5GTDtJQXNGTSxnQkFBZTtJQUNmLDZCQUE0QixFQUM3QjtFQ2hDRDtFRHhESjtJQTZGTSxtQkFBa0IsRUFFckIsRUFBQTtFQ3ZDQztFRDZDRjtJQUVJLHFCQUFvQixFQUNyQjtFQUhIO0lBTUksaUJBQWdCO0lBQ2hCLHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFDNUIsK0JBQXNCO1lBQXRCLHVCQUFzQixFQUt2QjtJQWJIO01BVU0sNEJBQW1CO2NBQW5CLG9CQUFtQixFQUVwQjtFQVpMO0lBaUJNLDRCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsZUFBYyxFQUNmLEVBQUE7RUFPUDtFQUdNLHFCQUFvQixFQUNyQjtFQUpMO0VBT00saUJBQWdCO0VBQ2hCLHFDQUE0QjtVQUE1Qiw2QkFBNEI7RUFDNUIsK0JBQXNCO1VBQXRCLHVCQUFzQixFQUt2QjtFQWRMO0lBV1EsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUVwQjtFQWJQO0VBa0JRLDRCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsZUFBYyxFQUNmO0VBS1A7RUFDRSxtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFtQ25CO0VDdklHO0lEZ0dKO01BTUksZ0JBQWUsRUFpQ2xCLEVBQUE7RUF2Q0Q7SUFVSSxlQUFjO0lBQ2QsaURBQStEO0lBQy9ELGFBQVk7SUFDWixhQUFZO0lBQ1osb0JBQW1CLEVBQ3BCO0VBZkg7SUFrQkksWUFBVztJQUNYLGdCQUFlLEVBQ2hCO0VBcEJIO0lBdUJJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsb0JBQW1CLEVBQ3BCO0VBMUJIO0lBNEJJLGVBQWMsRUFJZjtFQWhDSDtNQThCTSxZQUFXLEVBQ1o7RUNsSEQ7SURtRko7TUFvQ00sY0FBYSxFQUNkLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL21peGlucy9icmVha3BvaW50cyc7XG5cbi5oZWFkZXIge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgICB0b3A6IDQ1cHg7XG4gICAgfVxuICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nKSAwIDAgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xuXG4gICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG4gICAgfVxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwO1xuICAgICAgfVxuICAgIH1cbiAgICAubmF2LWxpbmsgeyAvLyBkZXB0aDFcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiByZ2IoNzQsIDQ3LCAxNjkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hY2NvdW50LWFyZWEge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gIC5idG4tbG9naW4ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2stODApO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbiAgfVxuXG4gIC5kcm9wdXAsIC5kcm9wcmlnaHQsIC5kcm9wZG93biwgLmRyb3BsZWZ0IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IDkwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC1zaXplOiAxNS41cHg7XG4gICAgY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjcuNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGNvbG9yOiAjNGEyZmE5O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC41KTtcbiAgICB9XG4gIH1cblxuICAuZHJvcGRvd24taXRlbSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgICAgcGFkZGluZzogMjVweCAxMHB4O1xuICAgIH1cbiAgfVxuXG59XG5cbi8vIHBj7JeQ7IScIOuTnOuhreuLpOyatCDrqZTribQg7J2067Kk7Yq4IOuzgOqyvSA6IGNsaWNrID4+IG1vdXNlb3ZlclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAuZHJvcGRvd24ge1xuICAgICYgPiAuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgLy90cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAvL3RyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAuZHJvcGRvd24tbWVudSB7IC8vMuywqOuplOuJtFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBwY+yXkOyEnCDrk5zroa3ri6TsmrQg66mU64m0IOydtOuypO2KuCDrs4Dqsr0gOiBjbGljayA+PiBtb3VzZW92ZXJcbi51cC1zbSB7XG4gIC5kcm9wZG93biB7XG4gICAgJiA+IC5kcm9wZG93bi10b2dnbGU6YWN0aXZlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAvL3RyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC8vdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5kcm9wZG93bi1tZW51IHsgLy8y7LCo66mU64m0XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwZTI4O1xuICBtaW4taGVpZ2h0OiAzNDBweDtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKXtcbiAgICBwYWRkaW5nOiA4OHB4IDA7XG4gIH1cblxuICAubG9nbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvbG9nby1mb290ZXIucG5nKSAwIDAgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxOTlweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgfVxuXG4gIGFkZHJlc3Mge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIGR0IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgZGQsIGEge1xuICAgIGNvbG9yOiAjNzA3Nzg1O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1vbmx5KHhzKSB7IC8vIOuqqOuwlOydvOydvOuVjFxuICAgIGRkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMnB4LCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'codef-api';
    }
    AppComponent.prototype.getAnimationData = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = /** @class */ (function () {
    function AppModule(router) {
        //
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <h3>로그인</h3>\n  <form action=\"\">\n    <div class=\"form-login\">\n\n      <div class=\"position-relative\">\n        <input type=\"email\" name=\"myEmail\" class=\"form-control form-control-lg is-invalid\" placeholder=\"이메일\">\n        <!--<div class=\"invalid-feedback\">{{myLoginZForm.myEmail.$valid}}</div>-->\n        <span class=\"invalid-feedback\">Email is invalid.</span>\n      </div>\n      <input type=\"password\" class=\"form-control form-control-lg mt-2 mb-3\" placeholder=\"비밀번호\" ng-minlength=\"8\">\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">로그인</button>\n      <button type=\"button\" routerLink=\"/account\" class=\"btn btn-outline-primary btn-lg btn-block\"><span class=\"oi oi-chevron-right\"></span>회원가입</button>\n      <p class=\"text-right\">Forgot password? <a href=\"#\" class=\"underline\">비밀번호 재설정</a></p>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  position: relative;\n  padding-bottom: 187px; }\n  .login::after {\n    content: '';\n    height: 394px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #f0f2f7;\n    z-index: -1; }\n  @media (min-width: 1200px) {\n    .login {\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n      .login h3 {\n        font-size: 47.5px;\n        color: #111;\n        margin: 65px 0 45px; }\n      .login .form-login {\n        border: 1px solid #bfbfbf;\n        border-radius: 5px;\n        padding: 60px 48px 0;\n        width: 500px;\n        height: 456px; }\n        .login .form-login p {\n          margin-top: 60px;\n          font-size: 15.5px; } }\n  .login .form-login {\n    background-color: #fff; }\n  .login .form-login p {\n      margin-top: 58px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWVva2hlZS93b3Jrc3BhY2UvY29kZWYtYXBpaS9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBV2xCLHNCQUFxQixFQThCdEI7RUExQ0Q7SUFHSSxZQUFXO0lBQ1gsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsUUFBTztJQUNQLFNBQVE7SUFDUiwwQkFBd0M7SUFDeEMsWUFBVyxFQUNaO0VBR0Q7SUFkRjtNQWVJLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsb0JBQW1CLEVBeUJ0QjtNQTFDRDtRQW1CTSxrQkFBaUI7UUFDakIsWUFBVztRQUNYLG9CQUFtQixFQUNwQjtNQXRCTDtRQXdCTSwwQkFBeUI7UUFDekIsbUJBQWtCO1FBQ2xCLHFCQUFvQjtRQUNwQixhQUFZO1FBQ1osY0FBYSxFQUtkO1FBakNMO1VBOEJRLGlCQUFnQjtVQUNoQixrQkFBaUIsRUFDbEIsRUFBQTtFQWhDUDtJQXFDSSx1QkFBc0IsRUFJdkI7RUF6Q0g7TUF1Q00saUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDM5NHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQyLCAyNDcsIDEpO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gIHBhZGRpbmctYm90dG9tOiAxODdweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiA0Ny41cHg7XG4gICAgICBjb2xvcjogIzExMTtcbiAgICAgIG1hcmdpbjogNjVweCAwIDQ1cHg7XG4gICAgfVxuICAgIC5mb3JtLWxvZ2luIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiA2MHB4IDQ4cHggMDtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgIGhlaWdodDogNDU2cHg7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNS41cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tbG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiA1OHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"visual-area container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <p>The easiest way for users\n        <strong>to connect their bank\n          accounts to an app.</strong></p>\n\n      <p>Deploy, manage, and scale cloud applications faster\n        and More efficiently on Code F. </p>\n\n      <form>\n        <div class=\"form-row\">\n          <div class=\"d-flex\">\n            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Your email\">\n          </div>\n          <div class=\"d-flex ml-2\">\n            <button type=\"submit\" class=\"btn btn-primary form-control-lg\">Get API keys</button>\n          </div>\n        </div>\n\n        <p class=\"form-text text-muted mt-3\">By signing up you agree to the <a href=\"\">Terms of Service.</a></p>\n      </form>\n\n    </div>\n    <div class=\"col-sm  visual justify-content-center\">\n      <img src=\"../../assets/images/iphone.png\" alt=\"\" class=\"align-self-end\">\n    </div>\n  </div>\n</div>\n\n<div class=\"cs-area\">\n  <div class=\"container\">\n    <p>INNOVATIVE BUSINESSES TRUST CODE F</p>\n    <a href=\"\">View customer stories</a>\n  </div>\n</div>\n\n<div class=\"api-area\">\n  <div class=\"container\">\n\n    <div class=\"title\">\n      <h3>Code F API</h3>\n      <p>Our optimized configuration process saves your team time when running and scaling distributed applications,\n        AI & machine learning workloads, hosted services, client websites, or CI/CD environments.</p>\n    </div>\n\n    <!--<div class=\"row flex-md-nowrap\">-->\n    <div class=\"row\">\n\n      <div id=\"list-example\" class=\"list-group col-sm-2\">\n        <a class=\"list-group-item list-group-item-action\" href=\"#list-item-1\">Curl</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#list-item-2\">Go</a>\n        <a class=\"list-group-item list-group-item-action active\" href=\"#list-item-3\">Java</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#list-item-4\">Ruby</a>\n      </div>\n\n      <div data-spy=\"scroll\" data-target=\"#list-example\" data-offset=\"0\" class=\"scrollspy-example col-sm\">\n        <h4 id=\"list-item-1\" class=\"sr-only\">Item 1</h4>\n\n        <!--<pre class=\"line-numbers language-html\" data-src=\"./html/main/_code.html\"></pre>-->\n        <pre></pre>\n\n        <h4 id=\"list-item-2\" class=\"sr-only\">Item 2</h4>\n\n        <h4 id=\"list-item-3\" class=\"sr-only\">Item 3</h4>\n\n        <h4 id=\"list-item-4\" class=\"sr-only\">Item 4</h4>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n<div class=\"biz-area\">\n  <div class=\"container\">\n    <h3>The features your business needs</h3>\n    <div class=\"row flex-md-nowrap\">\n      <div class=\"col-md\">\n        <h4>One account, <br>\n          multiple teams</h4>\n        <p>Leave complex pricing structures\n          behind. Always know what you’ll\n          pay per month with a flat,\n          industry-leading pricing structure.</p>\n        <a href=\"#none\">More</a>\n      </div>\n      <div class=\"col-md\">\n        <h4>One account, <br>\n          multiple teams</h4>\n        <p>Leave complex pricing structures\n          behind. Always know what you’ll\n          pay per month with a flat,\n          industry-leading pricing structure.</p>\n        <a href=\"#none\">More</a>\n      </div>\n      <div class=\"col-md\">\n        <h4>One account, <br>\n          multiple teams</h4>\n        <p>Leave complex pricing structures\n          behind. Always know what you’ll\n          pay per month with a flat,\n          industry-leading pricing structure.</p>\n        <a href=\"#none\">More</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".visual-area p {\n  font-size: 24px; }\n  .visual-area p:first-child {\n    font-size: 47.5px;\n    line-height: 1.3;\n    word-spacing: -3px; }\n  @media (min-width: 576px) {\n      .visual-area p:first-child {\n        margin-top: 105px; } }\n  @media (max-width: 575.98px) {\n      .visual-area p:first-child {\n        font-size: 30px; } }\n  .visual-area .form-row {\n  margin-top: 30px; }\n  @media (max-width: 767.98px) {\n    .visual-area .form-row .ml-2 {\n      flex-grow: 1 !important; } }\n  @media (min-width: 576px) {\n    .visual-area .form-row {\n      margin-top: 60px; } }\n  .visual-area .form-text {\n  opacity: 0.5;\n  font-size: 15.5px;\n  color: rgba(17, 17, 17, 0.5);\n  margin-bottom: 38px; }\n  .visual-area .form-text a {\n    text-decoration: underline;\n    color: inherit; }\n  .visual-area .visual {\n  display: flex;\n  align-items: end; }\n  @media (max-width: 575.98px) {\n    .visual-area .visual img {\n      width: 94%; } }\n  .cs-area {\n  background-color: #f3f5f9;\n  color: #222852;\n  font-size: 20px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  padding: 40px 0; }\n  .cs-area a {\n    font-size: 18px;\n    color: #4a2fa9; }\n  @media (min-width: 576px) {\n    .cs-area {\n      padding: 60px 0; }\n      .cs-area p {\n        padding-bottom: 80px; } }\n  .api-area {\n  position: relative;\n  margin: 60px 0; }\n  @media (min-width: 576px) {\n    .api-area {\n      margin: 128px 0; } }\n  .api-area .title {\n    text-align: center;\n    margin-bottom: 30px; }\n  @media (max-width: 767.98px) {\n      .api-area .title {\n        margin-top: 60px; } }\n  .api-area .title h3 {\n      font-size: 36.5px;\n      font-weight: 900;\n      color: #000; }\n  .api-area .title p {\n      font-size: 20px; }\n  .api-area .list-group {\n    border-left: 2px solid rgba(0, 0, 0, 0.1); }\n  @media (max-width: 575.98px) {\n      .api-area .list-group {\n        flex-direction: row; } }\n  .api-area .list-group-item {\n    background-color: #fff;\n    border: 0;\n    border-radius: 0 !important;\n    font-size: 20px;\n    padding: 0 14px;\n    margin: 25px 0; }\n  .api-area .list-group-item.active {\n      margin-left: -2px;\n      border-left: 2px solid rgba(0, 0, 0, 0.1);\n      border-color: #5944ac;\n      background-color: #fff;\n      color: black; }\n  .api-area .list-group-item-action {\n    color: rgba(0, 0, 0, 0.5); }\n  .api-area .scrollspy-example {\n    position: relative;\n    overflow: auto;\n    height: 336px;\n    border-radius: 4.3px; }\n  .api-area .scrollspy-example pre, .api-area .scrollspy-example code {\n      min-height: 336px;\n      background-color: #000;\n      border-radius: 5px; }\n  .biz-area {\n  min-height: 670px;\n  padding: 65px 20px;\n  background-color: #4a2fa9; }\n  .biz-area h3 {\n    text-align: center;\n    color: #fff;\n    margin-bottom: 39px;\n    font-size: 36.5px;\n    font-weight: 900; }\n  .biz-area .col-md {\n    min-height: 370px;\n    opacity: 0.9;\n    border-radius: 4.3px;\n    padding: 96px 30px 30px;\n    font-size: 20px;\n    background: #edebf7 url('icon-docs.png') 30px 30px no-repeat; }\n  .biz-area .col-md h4 {\n      font-size: 24px;\n      font-weight: 900; }\n  .biz-area .col-md a {\n      color: #4a2fa9;\n      font-weight: 900; }\n  @media (min-width: 768px) {\n      .biz-area .col-md {\n        flex: 0 0 32.8%; }\n        .biz-area .col-md:nth-child(2) {\n          margin: 0 9px; } }\n  @media (max-width: 767.98px) {\n      .biz-area .col-md {\n        margin: 20px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWVva2hlZS93b3Jrc3BhY2UvY29kZWYtYXBpaS9zcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9sZWVva2hlZS93b3Jrc3BhY2UvY29kZWYtYXBpaS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUksZ0JBQWUsRUFZaEI7RUFkSDtJQUlNLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsbUJBQWtCLEVBT25CO0VDMkNEO01EeERKO1FBUVEsa0JBQWlCLEVBS3BCLEVBQUE7RUN3REQ7TURyRUo7UUFXUSxnQkFBZSxFQUVsQixFQUFBO0VBYkw7RUFnQkksaUJBQWdCLEVBU2pCO0VDNENDO0lEckVKO01BbUJRLHdCQUF1QixFQUN4QixFQUFBO0VDb0NIO0lEeERKO01BdUJNLGlCQUFnQixFQUVuQixFQUFBO0VBekJIO0VBMkJJLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsNkJBQTRCO0VBQzVCLG9CQUFtQixFQUtwQjtFQW5DSDtJQWdDTSwyQkFBMEI7SUFDMUIsZUFBYyxFQUNmO0VBbENMO0VBcUNJLGNBQWE7RUFDYixpQkFBZ0IsRUFNakI7RUN5QkM7SURyRUo7TUF5Q1EsV0FBVSxFQUNYLEVBQUE7RUFLUDtFQUNFLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsZ0JBQWUsRUFnQmhCO0VBeEJEO0lBVUksZ0JBQWU7SUFDZixlQUF1QixFQUN4QjtFQ0hDO0lEVEo7TUFnQkksZ0JBQWUsRUFRbEI7TUF4QkQ7UUFrQk0scUJBQW9CLEVBQ3JCLEVBQUE7RUFPTDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjLEVBNkRmO0VDaEZHO0lEaUJKO01BSUksZ0JBQWUsRUEyRGxCLEVBQUE7RUEvREQ7SUFPSSxtQkFBa0I7SUFDbEIsb0JBQW1CLEVBYXBCO0VDekJDO01ESUo7UUFVTSxpQkFBZ0IsRUFXbkIsRUFBQTtFQXJCSDtNQWFNLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIsWUFBVyxFQUVaO0VBakJMO01BbUJNLGdCQUFlLEVBQ2hCO0VBcEJMO0lBd0JJLDBDQUF3QyxFQUt6QztFQ2pDQztNRElKO1FBMkJNLG9CQUFtQixFQUV0QixFQUFBO0VBN0JIO0lBK0JJLHVCQUFzQjtJQUN0QixVQUFTO0lBQ1QsNEJBQTJCO0lBQzNCLGdCQUFlO0lBQ2YsZ0JBQWU7SUFDZixlQUFjLEVBUWY7RUE1Q0g7TUFzQ00sa0JBQWlCO01BQ2pCLDBDQUF3QztNQUN4QyxzQkFBcUI7TUFDckIsdUJBQXNCO01BQ3RCLGFBQXVCLEVBQ3hCO0VBM0NMO0lBK0NJLDBCQUF3QixFQUN6QjtFQWhESDtJQW1ESSxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLGNBQWE7SUFDYixxQkFBb0IsRUFRckI7RUE5REg7TUF5RE0sa0JBQWlCO01BQ2pCLHVCQUFzQjtNQUN0QixtQkFBa0IsRUFFbkI7RUFJTDtFQUNFLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsMEJBQXlCLEVBc0MxQjtFQXpDRDtJQUtJLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQixpQkFBZ0IsRUFDakI7RUFWSDtJQWFJLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1oscUJBQW9CO0lBQ3BCLHdCQUF1QjtJQUN2QixnQkFBZTtJQUNmLDZEQUE4RSxFQXFCL0U7RUF2Q0g7TUFxQk0sZ0JBQWU7TUFDZixpQkFBZ0IsRUFDakI7RUF2Qkw7TUF5Qk0sZUFBYztNQUNkLGlCQUFnQixFQUNqQjtFQzdHRDtNRGtGSjtRQThCTSxnQkFBZSxFQVNsQjtRQXZDSDtVQWdDUSxjQUFhLEVBQ2QsRUFBQTtFQ3RHSDtNRHFFSjtRQXFDTSxlQUFjLEVBRWpCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL21peGlucy9icmVha3BvaW50cyc7XG5cbi52aXN1YWwtYXJlYSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGZvbnQtc2l6ZTogNDcuNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIHdvcmQtc3BhY2luZzogLTNweDtcbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTA1cHg7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkoeHMpIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZm9ybS1yb3cge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgICAubWwtMiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cbiAgfVxuICAuZm9ybS10ZXh0IHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZm9udC1zaXplOiAxNS41cHg7XG4gICAgY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC41KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbiAgLnZpc3VhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtb25seSh4cykge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNzLWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY5O1xuICBjb2xvcjogIzIyMjg1MjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAwO1xuICBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHJnYig3NCwgNDcsIDE2OSk7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgLy9oZWlnaHQ6IDI4M3B4O1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbiAgICBwIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIH1cbiAgfVxuXG5cblxufVxuXG4uYXBpLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNjBweCAwO1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgbWFyZ2luOiAxMjhweCAwO1xuICB9XG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDM2LjVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIC8vbWFyZ2luOiAxMjhweCAwIDI0cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5saXN0LWdyb3VwIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1vbmx5KHhzKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgfVxuICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICBtYXJnaW46IDI1cHggMDtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgICBib3JkZXItY29sb3I6ICM1OTQ0YWM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgfVxuICB9XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24ge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgfVxuXG4gIC5zY3JvbGxzcHktZXhhbXBsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMzM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNC4zcHg7XG5cbiAgICBwcmUsIGNvZGUge1xuICAgICAgbWluLWhlaWdodDogMzM2cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIH1cbiAgfVxufVxuXG4uYml6LWFyZWEge1xuICBtaW4taGVpZ2h0OiA2NzBweDtcbiAgcGFkZGluZzogNjVweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGEyZmE5O1xuICBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDM5cHg7XG4gICAgZm9udC1zaXplOiAzNi41cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuXG4gIC5jb2wtbWQge1xuICAgIG1pbi1oZWlnaHQ6IDM3MHB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBib3JkZXItcmFkaXVzOiA0LjNweDtcbiAgICBwYWRkaW5nOiA5NnB4IDMwcHggMzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2VkZWJmNyB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLWRvY3MucG5nKSAzMHB4IDMwcHggbm8tcmVwZWF0O1xuXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogIzRhMmZhOTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgICAgZmxleDogMCAwIDMyLjglO1xuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBtYXJnaW46IDAgOXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuICB9XG5cbn1cblxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMnB4LCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        // 브라우저 사이즈 체크
        function checkScreen() {
            return jquery__WEBPACK_IMPORTED_MODULE_1__('#device-size-detector').find('div:visible').first().attr('id');
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).on('resize', function () {
            var screen = checkScreen();
            //console.log(screen);
        });
        //
        var ui = {
            init: function () {
                this.header();
                this.invalid();
            },
            invalid: function () {
            },
            header: function () {
                // 모바일에서 메뉴 클릭시 메뉴 숨김
                jquery__WEBPACK_IMPORTED_MODULE_1__(document).on('click', '.navbar-collapse a, .navbar-collapse .btn', function () {
                    var screen = checkScreen();
                    if (screen != 'xs')
                        return;
                    var classCheck = this.className.match('dropdown-toggle') == null;
                    if (classCheck) {
                        jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-toggler').trigger('click');
                    }
                });
            },
            footer: function () {
            }
        }.init();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container page-not-found\">\n  <h2>Page not found</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-not-found {\n  min-height: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWVva2hlZS93b3Jrc3BhY2UvY29kZWYtYXBpaS9zcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1ub3QtZm91bmQge1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    products works!\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leeokhee/workspace/codef-apii/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map