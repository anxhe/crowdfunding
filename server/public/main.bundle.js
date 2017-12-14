webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\"[routerLink]=\"['causes']\">FightingXChange</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"auth.user?.role == 'creatorcause'\">\n          <a [routerLink]=\"['/causes','creator']\">creator</a>\n        </li>\n        <li *ngIf=\"auth.user?.role == 'admin' \">\n          <a [routerLink]=\"['/causes', 'admin']\">admin</a>\n        </li>\n        <li><a [routerLink]=\"['/causes']\">Causes</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <button type=\"button\" [routerLink]=\"['/causes/new']\" class=\"btn btn-primary navbar-btn\"> Create Cause</button>\n        </li>\n        <li>\n          <button type=\"button\" [routerLink]=\"['/causes/donations']\" class=\"btn btn-primary navbar-btn\"> Donations </button>\n        </li>\n        <li *ngIf=\"!auth.user\">\n          <button class=\"btn btn-primary navbar-btn\" (click)=\"openAuthModal()\">\n            <span class=\"glyphicon glyphicon-log-in\"></span>\n            Login\n          </button>\n        </li>\n        <li *ngIf=\"auth.user\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"caret\"></span>\n            {{ auth.user.name }}\n            <span class=\"glyphicon glyphicon-option-vertical\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a [routerLink]=\"['/profile']\" >\n                <span class=\"glyphicon glyphicon-user\"></span>\n                Profile\n              </a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li>\n              <a (click)=\"logout()\" href>\n                <span class=\"glyphicon glyphicon-log-out\"></span>\n                Logout\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_modal_auth_modal_component__ = __webpack_require__("../../../../../src/app/auth-modal/auth-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(auth, router, modalService) {
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
    }
    ;
    AppComponent.prototype.openAuthModal = function () {
        this.modal = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__auth_modal_auth_modal_component__["a" /* AuthModalComponent */], { class: 'modal-sm' });
        this.modal.content.action = 'login';
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (event) {
            _this.router.navigate(['/']);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/guard/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_select2__ = __webpack_require__("../../../../ng2-select2/ng2-select2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_select2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_select2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__causeList_causeList_component__ = __webpack_require__("../../../../../src/app/causeList/causeList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cause_details_cause_details_component__ = __webpack_require__("../../../../../src/app/cause-details/cause-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__new_cause_new_cause_component__ = __webpack_require__("../../../../../src/app/new-cause/new-cause.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__edit_cause_edit_cause_component__ = __webpack_require__("../../../../../src/app/edit-cause/edit-cause.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_modal_auth_modal_component__ = __webpack_require__("../../../../../src/app/auth-modal/auth-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__donations_donations_component__ = __webpack_require__("../../../../../src/app/donations/donations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__list_donations_list_donations_component__ = __webpack_require__("../../../../../src/app/list-donations/list-donations.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { CreatorService } from './services/creator.service';
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_15__causeList_causeList_component__["a" /* CauseListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_18__cause_details_cause_details_component__["a" /* CauseDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__new_cause_new_cause_component__["a" /* NewCauseComponent */],
            __WEBPACK_IMPORTED_MODULE_20__edit_cause_edit_cause_component__["a" /* EditCauseComponent */],
            __WEBPACK_IMPORTED_MODULE_21__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_22__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__auth_modal_auth_modal_component__["a" /* AuthModalComponent */],
            __WEBPACK_IMPORTED_MODULE_24__donations_donations_component__["a" /* DonationsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__list_donations_list_donations_component__["a" /* ListDonationsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_select2__["Select2Module"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_embed_video__["EmbedVideo"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* routes */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_23__auth_modal_auth_modal_component__["a" /* AuthModalComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__guard_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_8__services_cause_service__["a" /* CauseService */], __WEBPACK_IMPORTED_MODULE_10__services_admin_service__["a" /* AdminService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-modal/auth-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth-modal/auth-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modal.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <h4 class=\"modal-title text-center\">{{ action | titlecase }}</h4>\n</div>\n\n<div class=\"modal-body\">\n  <div *ngIf=\"error\" class=\"alert alert-danger\">\n    {{ error }}\n  </div>\n\n  <form ngNativeValidate>\n    <div *ngIf=\"action === 'signup'\"class=\"form-group\">\n      <label for=\"name\" class=\"control-label\">Name</label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" class=\"form-control\" required/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"control-label\">Email</label>\n      <input type=\"email\" [(ngModel)]=\"formInfo.email\" name=\"email\" class=\"form-control\" (keydown)=\"submit($event)\" required/>\n    </div>\n\n    <div class=\"form-group\">\n       <label for=\"password\" class=\"control-label\">Password </label>\n       <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" class=\"form-control\" (keydown)=\"submit($event)\" required/>\n    </div>\n\n    <div [ngSwitch]=\"action\">\n      <div class=\"form-group\">\n        <button type=\"button\" *ngSwitchCase=\"'login'\" (click)=\"login()\" class=\"btn btn-primary form-control\" name=\"login\">Log In</button>\n        <button type=\"button\" *ngSwitchCase=\"'signup'\" (click)=\"signup()\" class=\"btn btn-primary form-control\" name=\"signup\">Sign Up</button>\n      </div>\n      <p class=\"text-center\">or</p>\n\n      <div class=\"form-group\">\n        <button type=\"button\" *ngSwitchCase=\"'login'\" (click)=\"toggleAuthModal()\" class=\"btn btn-default form-control\">Sign Up</button>\n        <button type=\"button\"   *ngSwitchCase=\"'signup'\" (click)=\"toggleAuthModal()\" class=\"btn btn-default form-control\">Log In</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth-modal/auth-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthModalComponent = (function () {
    function AuthModalComponent(modal, router, auth) {
        this.modal = modal;
        this.router = router;
        this.auth = auth;
        this.formInfo = {
            email: '',
            password: ''
        };
    }
    AuthModalComponent.prototype.ngOnInit = function () {
    };
    AuthModalComponent.prototype.toggleAuthModal = function () {
        this.action = this.action === 'login' ? 'signup' : 'login';
    };
    AuthModalComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, email = _a.email, password = _a.password;
        if ([email, password].every(function (f) { return f !== ''; })) {
            this.auth.login(email, password).subscribe(function (success) {
                _this.modal.hide();
                _this.router.navigate(['/causes']);
            }, function (failure) { return _this.error = failure; });
        }
        else {
            this.error = 'There are missing or invalid fields.';
        }
    };
    AuthModalComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, name = _a.name, email = _a.email, password = _a.password;
        if ([name, email, password].every(function (f) { return f !== ''; })) {
            this.auth.signup(name, email, password).subscribe(function (success) {
                _this.modal.hide();
                _this.router.navigate(['profile']);
            }, function (failure) { return _this.error = failure; });
        }
        else {
            this.error = 'There are missing or invalid fields.';
        }
    };
    AuthModalComponent.prototype.submit = function (event) {
        if (event.keyCode === 13) {
            this.action === 'login' ? this.login() : this.signup();
        }
    };
    return AuthModalComponent;
}());
AuthModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth-modal',
        template: __webpack_require__("../../../../../src/app/auth-modal/auth-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth-modal/auth-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], AuthModalComponent);

var _a, _b, _c;
//# sourceMappingURL=auth-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/cause-details/cause-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cause-details/cause-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cause\" >\n  <div  class=\"page-header\">\n    <h2>{{cause.name}}</h2>\n    <div *ngIf=\"auth.user?.role == 'creatorcause'\">\n      <a [routerLink]=\"['/causes', cause._id, 'edit']\">Edit</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <section  class=\"col-md-12 col-xs-12\">\n      <div class=\"col-md-6 col-md-offset-1 col-xs-12\">\n        <div class=\"embed-responsive embed-responsive-16by9\" [innerHtml]=\"video\"></div>\n      </div>\n      <div class=\"col-md-4 col-md-offset-1 col-xs-12\">\n        <ul>\n          <li>\n            <div>\n              <span class=\"glyphicon glyphicon-time\"></span>\n                Time remaining: {{cause.timeRemaining}}\n            </div>\n          </li>\n          <li>Total budget: {{cause.totalBudget}}</li>\n          <li>Total Donation: {{cause.percentageDonation}}%</li>\n        </ul>\n      </div>\n    </section>\n    <div class=\"row\">\n      <section  class=\"col-md-6 col-md-offset-1 col-xs-12\">\n        <p>{{cause.description}}</p>\n      </section>\n    </div>\n    <div class=\"row\">\n      <section  class=\"col-md-6 col-md-offset-1 col-xs-12\">\n        <ol>\n          <li *ngFor=\"let obj of cause.objectives\">{{obj}}</li>\n        </ol>\n      </section>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let member of cause.members\">\n        <span>{{ member.name }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n<app-donations></app-donations>\n"

/***/ }),

/***/ "../../../../../src/app/cause-details/cause-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CauseDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CauseDetailsComponent = (function () {
    function CauseDetailsComponent(auth, router, causeservice, route, videoService) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.causeservice = causeservice;
        this.route = route;
        this.videoService = videoService;
        this.user = this.auth.user;
        route.params.subscribe(function (params) {
            _this.causeservice.getCauseByID(params['id'])
                .subscribe(function (data) {
                _this.cause = data.cause;
                _this.video = _this.videoService.embed(data.cause.videourl, { attr: { class: 'embed-responsive-item' } });
            });
        });
    }
    CauseDetailsComponent.prototype.ngOnInit = function () {
    };
    return CauseDetailsComponent;
}());
CauseDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cause-details',
        template: __webpack_require__("../../../../../src/app/cause-details/cause-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cause-details/cause-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cause_service__["a" /* CauseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cause_service__["a" /* CauseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__["EmbedVideoService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__["EmbedVideoService"]) === "function" && _e || Object])
], CauseDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cause-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/causeList/causeList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/causeList/causeList.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Causes</h1>\n<section class=\"col-xs-12 col-md-8\">\n  <div class=\"col-xs-6 col-md-4\">\n    <div *ngFor=\"let cause of causeList\" class=\"cause thumbnail\" >\n      <div class=\"embed-responsive embed-responsive-4by3\" width=\"300\">\n        <!-- <iframe class=\"embed-responsive-item\" src=\"{{cause.videourl}}\" ></iframe> -->\n      </div>\n      <div class=\"caption\">\n        <h4><a *ngIf=\"cause\" [routerLink]=\"[cause._id]\">{{cause.name}}</a></h4>\n        <div>\n          <div>\n            <span class=\"glyphicon glyphicon-time\"></span>\n            Time remaining: {{cause.timeRemaining}}\n          </div>\n          <span>Total budget: {{cause.totalBudget}}</span>\n          <span>Total Donation: {{cause.percentageDonation}}%</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/causeList/causeList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CauseListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CauseListComponent = (function () {
    function CauseListComponent(cause, auth) {
        var _this = this;
        this.cause = cause;
        this.auth = auth;
        this.causeList = [];
        this.cause.getCauseList().subscribe(function (data) {
            _this.causeList = data.causes;
        });
    }
    CauseListComponent.prototype.ngOnInit = function () {
    };
    return CauseListComponent;
}());
CauseListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-CauseList',
        template: __webpack_require__("../../../../../src/app/causeList/causeList.component.html"),
        styles: [__webpack_require__("../../../../../src/app/causeList/causeList.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], CauseListComponent);

var _a, _b;
//# sourceMappingURL=causeList.component.js.map

/***/ }),

/***/ "../../../../../src/app/donations/donations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/donations/donations.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let donor of donations\">{{donor._user?.name}} {{donor.amount}}</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/donations/donations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonationsComponent = (function () {
    function DonationsComponent(causeservice, route) {
        var _this = this;
        this.causeservice = causeservice;
        this.route = route;
        route.params.subscribe(function (params) {
            _this.causeservice.getCauseByID(params['id'])
                .subscribe(function (data) {
                console.log(data.cause.donations[10]._user);
                _this.donations = data.cause.donations;
            });
        });
    }
    DonationsComponent.prototype.ngOnInit = function () { };
    return DonationsComponent;
}());
DonationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-donations',
        template: __webpack_require__("../../../../../src/app/donations/donations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/donations/donations.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DonationsComponent);

var _a, _b;
//# sourceMappingURL=donations.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-cause/edit-cause.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-cause/edit-cause.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/causes', cause._id]\"></a>\n<button name=\"button\" (click)=\"submit()\">SubmitFinal</button>\n<app-cause-details></app-cause-details>\n<div class=\"container\">\n  <div class=\"row\">\n    <form class=\"form\" >\n      <div class=\"form-group\">\n        <label for=\"members\">Members</label>\n        <select2  (valueChanged)=\"added($event)\" name=\"members\" [width]=\"600\" [value]=\"members\" [options]=\"options\"></select2>\n        <button type=\"button\" (click)=\"addMembers()\"></button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"container\">\n  <app-table></app-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-cause/edit-cause.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCauseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCauseComponent = (function () {
    function EditCauseComponent(route, router, causeService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.causeService = causeService;
        this.options = {
            allowClear: true,
            dropdownCssClass: 'hidden',
            multiple: true,
            placeholder: 'Type emails here pepita@example.com',
            tags: true,
            theme: 'bootstrap',
            tokenSeparators: [',', ' '],
        };
        this.cause = {};
        this.members = [];
        this.route.params.subscribe(function (params) {
            _this.causeService.getCreatorCause(params['id']).subscribe(function (data) {
                _this.cause = data.cause;
                // this.members = data.cause.members.map(m => { return { id: m.email, text: m.email } });
                // this.emails = data.cause.members.map(m => m.email);
                // this.members.push({ id: data.cause._creator.email , text: data.cause._creator.email });
            });
        });
    }
    EditCauseComponent.prototype.addMembers = function () {
        var _this = this;
        this.causeService.addMembers(this.cause._id, this.members).subscribe(function (data) {
            _this.cause = data.cause;
        });
    };
    EditCauseComponent.prototype.added = function (data) {
        this.members = data.value;
    };
    EditCauseComponent.prototype.submit = function () {
        var _this = this;
        this.causeService.updateCauseStatus(this.cause._id, "pending").subscribe(function (status) {
            _this.router.navigate(["causes/" + _this.cause._id]);
        });
    };
    EditCauseComponent.prototype.ngOnInit = function () {
    };
    return EditCauseComponent;
}());
EditCauseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-cause',
        template: __webpack_require__("../../../../../src/app/edit-cause/edit-cause.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-cause/edit-cause.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */]) === "function" && _c || Object])
], EditCauseComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-cause.component.js.map

/***/ }),

/***/ "../../../../../src/app/guard/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const timeout = (nS) => new Promise((resolve) => setTimeout(resolve,nS * 1000));
var IsLoggedInService = (function () {
    function IsLoggedInService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    IsLoggedInService.prototype.canActivate = function (next, state) {
        console.log("Checking can activate");
        var isAuth = this.auth.getUser() ? true : false;
        if (!isAuth) {
            this.router.navigate(['login']);
        }
        return isAuth;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IsLoggedInService);

var _a, _b;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/list-donations/list-donations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-donations/list-donations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list-donations works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/list-donations/list-donations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDonationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListDonationsComponent = (function () {
    function ListDonationsComponent() {
    }
    ListDonationsComponent.prototype.ngOnInit = function () {
    };
    return ListDonationsComponent;
}());
ListDonationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-donations',
        template: __webpack_require__("../../../../../src/app/list-donations/list-donations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-donations/list-donations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListDonationsComponent);

//# sourceMappingURL=list-donations.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-striped table-bordered\">\n      <thead>\n          <tr>\n              <th class=\"col-md-2\" >Name</th>\n              <th class=\"col-md-8\">Objectives</th>\n              <th class=\"col-md-1\">Status</th>\n              <th *ngIf=\"auth.user?.role == 'admin' \"> class=\"col-md-1\">Action</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let cause of causeList; let i = index\">\n              <td>\n                  {{cause.name}}\n              </td>\n              <td>\n                  {{cause.objectives[0]}}\n              </td>\n              <td>\n                  {{cause.status}}\n              </td>\n              <td *ngIf=\"auth.user?.role == 'admin' \">\n                <button  class=\"btn btn-default glyphicon glyphicon-ok\"  type=\"button\" (click)=\"approve(i)\"></button>\n                <button  class=\"btn btn-default glyphicon glyphicon-remove\"  type=\"button\" (click)=\"reject(i)\"></button>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(auth, causeService, admin) {
        var _this = this;
        this.auth = auth;
        this.causeService = causeService;
        this.admin = admin;
        this.causeList = [];
        this.user = this.auth.user;
        if (this.user.role == "creatorcause") {
            this.causeService.getCauseListCreator().subscribe(function (cause) {
                _this.causeList = cause;
            });
        }
        else if (this.user.role == "admin") {
            this.causeService.getCauseListAdmin().subscribe(function (data) {
                _this.causeList = data.causes;
            });
        }
    }
    ListComponent.prototype.approve = function (index) {
        var _this = this;
        this.admin.updateCauseStatus(this.causeList[index]._id, "approved")
            .subscribe(function (data) { return _this.causeList[index] = data.result; });
    };
    ListComponent.prototype.reject = function (index) {
        var _this = this;
        this.admin.updateCauseStatus(this.causeList[index]._id, "reject")
            .subscribe(function (data) { return _this.causeList[index] = data.result; });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cause_service__["a" /* CauseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cause_service__["a" /* CauseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */]) === "function" && _c || Object])
], ListComponent);

var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<form >\n  <h2> Login </h2>\n  <label> Email </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.email\" name=\"email\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n  <button (click)=\"login()\"> login </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            email: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, email = _a.email, password = _a.password;
        if (email != "" && password != "") {
            this.auth.login(email, password)
                .subscribe(function (user) { return _this.router.navigate(['profile']); }, function (err) { return _this.error = err; });
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-cause/new-cause.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-cause/new-cause.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section class=\"row\">\n    <form class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"cause.name\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"objectives\">Objectives:</label><button type=\"button\" name=\"button\" (click)=\"addObjectives()\"></button>\n        <input type=\"text\" class=\"form-control\" name=\"objectives[]\" [(ngModel)]=\"newObjective\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"objectives\">Description:</label>\n        <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"cause.description\" placeholder=\"\" required></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"videourl\">Videourl: </label>\n        <input type=\"url\" class=\"form-control\" name=\"videourl\" [(ngModel)]=\"cause.videourl\" placeholder=\"\" required>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-4\">\n          <label for=\"deadline\">Deadline: </label>\n          <input type=\"date\" class=\"form-control\" name=\"deadline\" [(ngModel)]=\"cause.deadline\" placeholder=\"\" required>\n        </div>\n      </div>\n      <button class=\"btn btn-default col-md-offset-4 col-md-4\" (click)=\"newCause(cause)\" >Submit</button>\n    </form>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-cause/new-cause.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCauseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCauseComponent = (function () {
    function NewCauseComponent(service, router) {
        this.service = service;
        this.router = router;
        this.cause = {};
        this.objectives = [];
    }
    NewCauseComponent.prototype.ngOnInit = function () {
    };
    NewCauseComponent.prototype.addObjectives = function () {
        this.objectives.push(this.newObjective);
        this.newObjective = '';
    };
    NewCauseComponent.prototype.newCause = function (cause) {
        var _this = this;
        cause.objectives = this.objectives;
        this.service.createCause(cause)
            .subscribe(function (data) {
            _this.router.navigate(["causes/" + data.cause._id]);
        });
    };
    return NewCauseComponent;
}());
NewCauseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-cause',
        template: __webpack_require__("../../../../../src/app/new-cause/new-cause.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-cause/new-cause.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewCauseComponent);

var _a, _b;
//# sourceMappingURL=new-cause.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__causeList_causeList_component__ = __webpack_require__("../../../../../src/app/causeList/causeList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cause_details_cause_details_component__ = __webpack_require__("../../../../../src/app/cause-details/cause-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_cause_new_cause_component__ = __webpack_require__("../../../../../src/app/new-cause/new-cause.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_cause_edit_cause_component__ = __webpack_require__("../../../../../src/app/edit-cause/edit-cause.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donations_donations_component__ = __webpack_require__("../../../../../src/app/donations/donations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/guard/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: 'causes', component: __WEBPACK_IMPORTED_MODULE_0__causeList_causeList_component__["a" /* CauseListComponent */] },
    { path: 'causes/new', component: __WEBPACK_IMPORTED_MODULE_2__new_cause_new_cause_component__["a" /* NewCauseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'causes/admin', component: __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */] },
    { path: 'causes/creator', component: __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */] },
    { path: 'causes/donations', component: __WEBPACK_IMPORTED_MODULE_5__donations_donations_component__["a" /* DonationsComponent */] },
    { path: 'causes/:id', component: __WEBPACK_IMPORTED_MODULE_1__cause_details_cause_details_component__["a" /* CauseDetailsComponent */] },
    { path: 'causes/:id/edit', component: __WEBPACK_IMPORTED_MODULE_3__edit_cause_edit_cause_component__["a" /* EditCauseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__loginform_loginform_component__["a" /* LoginformComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__signupform_signupform_component__["a" /* SignupformComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__userprofile_userprofile_component__["a" /* UserprofileComponent */] },
    { path: '**', redirectTo: 'causes' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASEURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASEURL;
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers, withCredentials: true });
    }
    AdminService.prototype.updateCauseStatus = function (id, status) {
        return this.http.put(BASEURL + "/admin/causes/" + id + "/status", { status: status }, this.options)
            .map(function (res) { return res.json(); });
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (name, email, password) {
        var _this = this;
        return this.http.post(BASEURL + "/signup", { name: name, email: email, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { email: email, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cause.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CauseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASEURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASEURL;
var CauseService = (function () {
    function CauseService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers, withCredentials: true });
    }
    CauseService.prototype.getCauseList = function () {
        return this.http.get(BASEURL + "/causes")
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.getCauseByID = function (id) {
        return this.http.get(BASEURL + "/causes/" + id)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.createCause = function (cause) {
        return this.http.post(BASEURL + "/causes", cause, this.options)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.getCreatorCause = function (id) {
        return this.http.get(BASEURL + "/creator/causes/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.addMembers = function (causeId, emails) {
        return this.http.put(BASEURL + "/creator/causes/" + causeId + "/members", { members: emails }, this.options)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.addBudget = function (causeId, item) {
        return this.http.post(BASEURL + "/creator/causes/" + causeId + "/budget_item", item, this.options)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.deleteItem = function (causeId, item) {
        return this.http.delete(BASEURL + "/creator/causes/" + causeId + "/budget_item/" + item._id, this.options)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.updateCauseStatus = function (causeId, status) {
        return this.http.put(BASEURL + "/creator/causes/" + causeId + "/status", { status: status }, this.options)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.getCauseListAdmin = function () {
        return this.http.get(BASEURL + "/admin/causes", this.options)
            .map(function (res) { return res.json(); });
    };
    CauseService.prototype.getCauseListCreator = function () {
        return this.http.get(BASEURL + "/creator/causes", this.options)
            .map(function (res) { return res.json(); });
    };
    return CauseService;
}());
CauseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CauseService);

var _a;
//# sourceMappingURL=cause.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<form >\n  <h2> Signup </h2>\n  <label> Name </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\"/>\n  <br>\n  <label> Email </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.email\" name=\"email\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n  <button (click)=\"signup()\"> signup </button>\n  <p class=\"error\"> {{ error }} </p>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            name: "",
            email: "",
            password: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        this.auth.signup(this.formInfo.name, this.formInfo.email, this.formInfo.password)
            .subscribe(function (user) { return _this.router.navigate(['profile']); }, function (err) { return _this.error = err; });
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-striped table-bordered\">\n      <thead>\n          <tr>\n              <th>Concept</th>\n              <th>quantity</th>\n              <th>Cost</th>\n              <th>Add</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let field of budget; let i = index\">\n              <td>\n                  <input [(ngModel)]=\"field.concept\" class=\"form-control\" type=\"text\" name=\"{{field.concept}}\" />\n              </td>\n              <td>\n                  <input [(ngModel)]=\"field.quantity\" class=\"form-control\" type=\"text\" name=\"{{field.quantity}}\" />\n              </td>\n              <td>\n                  <input [(ngModel)]=\"field.cost\" class=\"form-control\" type=\"text\" name=\"{{field.cost}}\" />\n              </td>\n              <td>\n                  <button class=\"btn btn-default\"  type=\"button\" (click)=\"deleteFieldValue(i)\">Delete</button>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                  <input class=\"form-control\" type=\"text\" id=\"newItemCode\" [(ngModel)]=\"newItem.concept\" name=\"concept\" />\n              </td>\n              <td>\n                  <input class=\"form-control\" type=\"text\" id=\"newItemName\" [(ngModel)]=\"newItem.quantity\" name=\"quantity\" />\n              </td>\n              <td>\n                  <input class=\"form-control\" type=\"text\" id=\"newItemPrice\" [(ngModel)]=\"newItem.cost\" name=\"cost\" />\n              </td>\n              <td>\n                  <button class=\"btn btn-default\" type=\"button\" (click)=\"addBudget()\">Add</button>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cause_service__ = __webpack_require__("../../../../../src/app/services/cause.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = (function () {
    function TableComponent(CauseService, route) {
        var _this = this;
        this.CauseService = CauseService;
        this.route = route;
        this.budget = [];
        this.newItem = {};
        this.cause = {};
        this.route.params.subscribe(function (params) {
            _this.CauseService.getCreatorCause(params['id']).subscribe(function (data) {
                _this.cause = data.cause;
                _this.budget = data.cause.budget;
            });
        });
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.deleteFieldValue = function (index) {
        var _this = this;
        var item = this.budget.splice(index, 1)[0];
        this.CauseService.deleteItem(this.cause._id, item).subscribe(function (data) {
            _this.cause = data.cause;
            _this.budget = data.cause.budget;
        });
    };
    TableComponent.prototype.addBudget = function () {
        var _this = this;
        this.CauseService.addBudget(this.cause._id, this.newItem).subscribe(function (data) {
            console.log({ data: data });
            _this.cause = data.cause;
            _this.budget = data.cause.budget;
            _this.newItem = {};
        });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table/table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cause_service__["a" /* CauseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], TableComponent);

var _a, _b;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>NO USER LOGGED IN</h2>\n</div>\n\n<div *ngIf=\"user\">\n  <h2> You are now logged in as {{ user.username }}!! </h2>\n  <p> Here's the user object </p>\n  <pre> {{ user | json }} </pre>\n\n  <button (click)=\"auth.logout().subscribe()\"> logout </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileComponent = (function () {
    function UserprofileComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserprofileComponent);

var _a;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEURL: 'https://fightxchange.herokuapp.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map