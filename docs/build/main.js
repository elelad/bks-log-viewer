webpackJsonp([0],{

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewer_logging_viewer_filter_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loggingViewerFilterService, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.loggingViewerFilterService = loggingViewerFilterService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.level = '0';
        this.maxMessagesToLogToFile = 0;
        this.maxFilesToSave = 3;
        this.messagesFromFile = [];
        this.meassage = 'log something...';
    }
    HomePage.prototype.getFile = function (ev) {
        var _this = this;
        var files = ev.target.files;
        console.log(files);
        var prms = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var f = files_1[_i];
            prms.push(this.readFormFile(f));
        }
        Promise.all(prms).then(function () {
            _this.messagesFromFile.sort(function (a, b) {
                return new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime();
            });
            _this.loggingViewerFilterService.filterChanged.emit();
        });
    };
    HomePage.prototype.readFormFile = function (file) {
        var _this = this;
        return new Promise(function (res, rej) {
            var fReader = new FileReader();
            fReader.onerror = function (e) { rej(e); };
            fReader.onload = function (ev) {
                var _a;
                if (fReader.readyState === 2) {
                    var result = fReader.result;
                    try {
                        _this.messagesFromFile = (_a = _this.messagesFromFile).concat.apply(_a, JSON.parse(result));
                    }
                    catch (e) {
                        _this.toast(e);
                    }
                }
            };
            fReader.onloadend = function () {
                //this.loggingViewerFilterService.filterChanged.emit();
                res('done');
            };
            fReader.readAsText(file);
        });
    };
    HomePage.prototype.clearLogs = function () {
        var _this = this;
        console.log('clearLogs');
        this.messagesFromFile = [];
        setTimeout(function () { _this.loggingViewerFilterService.filterChanged.emit(); }, 20);
    };
    HomePage.prototype.toast = function (msg) {
        var t = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        t.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\projects\bks-log-viewer\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>\n\n      BKS Log Viewer\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <input hidden #fl type="file" accept=".json" multiple (change)="getFile($event)" />\n\n        <button item-end icon-start ion-button (click)="fl.value = \'\';fl.click()">\n\n            <ion-icon end name="download"></ion-icon>\n\n          Browse\n\n        </button>\n\n        <button item-end ion-button default clear icon-only color="danger" (click)="clearLogs()">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="back">\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n  <ion-col col-lg-10 col-xl-8>\n\n  <ion-card>\n\n    <ion-toolbar>\n\n      <ionic-logging-viewer-search></ionic-logging-viewer-search>\n\n    </ion-toolbar>\n\n    <ion-toolbar>\n\n      <ionic-logging-viewer-levels></ionic-logging-viewer-levels>\n\n    </ion-toolbar>\n\n    <ionic-logging-viewer [logMessages]="messagesFromFile"></ionic-logging-viewer>\n\n  </ion-card>\n\n</ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\projects\bks-log-viewer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__viewer_logging_viewer_filter_service__["a" /* LoggingViewerFilterService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingViewerModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_logging_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Ionic modal containing the LoggingViewerComponent.
 */
var LoggingViewerModalComponent = /** @class */ (function () {
    function LoggingViewerModalComponent(viewController, navParams, loggingService) {
        this.viewController = viewController;
        this.logger = loggingService.getLogger("Ionic.Logging.Viewer.Modal.Component");
        var methodName = "ctor";
        this.logger.entry(methodName);
        this.language = navParams.get("language");
        this.translation = navParams.get("translation");
        this.logger.exit(methodName);
    }
    /**
     * Initializes the LoggingViewerModalComponent.
     * It configures the supported translations.
     */
    LoggingViewerModalComponent.prototype.ngOnInit = function () {
        // prepare translations
        this.translations = {};
        // tslint:disable-next-line:no-string-literal
        this.translations["en"] = {
            cancel: "Cancel",
            searchPlaceholder: "Search",
            title: "Logging",
        };
        // tslint:disable-next-line:no-string-literal
        this.translations["de"] = {
            cancel: "Abbrechen",
            searchPlaceholder: "Suchen",
            title: "Konfiguration",
        };
    };
    /**
     * Eventhandler called by Ionic when the modal is opened.
     */
    LoggingViewerModalComponent.prototype.ionViewDidEnter = function () {
        var methodName = "ionViewDidEnter";
        this.logger.entry(methodName);
        this.logger.exit(methodName);
    };
    /**
     * Eventhandler called when the cancel button is clicked.
     */
    LoggingViewerModalComponent.prototype.onClose = function () {
        var methodName = "onClose";
        this.logger.entry(methodName);
        this.viewController.dismiss();
        this.logger.exit(methodName);
    };
    /**
     * Helper method returning the current translation:
     * - the property translation if defined
     * - the translation according property language if valid
     * - English translation, otherwise
     */
    LoggingViewerModalComponent.prototype.getTranslation = function () {
        if (typeof this.translation !== "undefined") {
            return this.translation;
        }
        else if (typeof this.language !== "undefined" && typeof this.translations[this.language] === "object") {
            return this.translations[this.language];
        }
        else {
            // tslint:disable-next-line:no-string-literal
            return this.translations["en"];
        }
    };
    LoggingViewerModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-header>" +
                "<ion-toolbar color=\"primary\">" +
                "<ion-title>{{ getTranslation().title }}</ion-title>" +
                "<ion-buttons start>" +
                "<button ion-button hideWhen=\"android,windows\" (click)=\"onClose()\" >" +
                "{{ getTranslation().cancel }}" +
                "</button>" +
                "<button ion-button icon-only showWhen=\"android,windows\" (click)=\"onClose()\" >" +
                "<ion-icon name=\"md-close\"></ion-icon>" +
                "</button>" +
                "</ion-buttons>" +
                "</ion-toolbar>" +
                "<ion-toolbar>" +
                "<ionic-logging-viewer-search [placeholder]=\"getTranslation().searchPlaceholder\"></ionic-logging-viewer-search>" +
                "</ion-toolbar>" +
                "<ion-toolbar>" +
                "<ionic-logging-viewer-levels></ionic-logging-viewer-levels>" +
                "</ion-toolbar>" +
                "</ion-header>" +
                "<ion-content>" +
                "<ionic-logging-viewer></ionic-logging-viewer>" +
                "</ion-content>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_logging_service__["b" /* LoggingService */]])
    ], LoggingViewerModalComponent);
    return LoggingViewerModalComponent;
}());

//# sourceMappingURL=logging-viewer-modal.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_logging_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viewer_logging_viewer_module__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__pages_viewer_logging_viewer_module__["a" /* LoggingViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_logging_service__["b" /* LoggingService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\projects\bks-log-viewer\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\projects\bks-log-viewer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingViewerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels_component_logging_viewer_levels_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logging_viewer_modal_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logging_viewer_modal_manager__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_component_logging_viewer_search_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewr_component_logging_viewer_component__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * LoggingViewerModule is an NgModule that provides a viewer component showing the logs
 * currently written the LoggingService.
 *
 * The module is meant for use at development and test, not for production.
 *
 * The module contains mainly
 * - LoggingViewerComponent: directive showing the data, which can placed anywhere in your app
 * - LoggingViewerModalManager: provides method to open a modal containing the component
 *
 * Additionally, there are two components for filtering the data:
 * - LoggingViewerLevelComponent: allows filtering by log level
 * - LoggingViewerSearchComponent: allows filtering by an arbitrary expression
 */
var LoggingViewerModule = /** @class */ (function () {
    function LoggingViewerModule() {
    }
    LoggingViewerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__logging_viewer_modal_component__["a" /* LoggingViewerModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__viewr_component_logging_viewer_component__["a" /* LoggingViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__levels_component_logging_viewer_levels_component__["a" /* LoggingViewerLevelsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_component_logging_viewer_search_component__["a" /* LoggingViewerSearchComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__logging_viewer_modal_component__["a" /* LoggingViewerModalComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__viewr_component_logging_viewer_component__["a" /* LoggingViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__levels_component_logging_viewer_levels_component__["a" /* LoggingViewerLevelsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__logging_viewer_modal_component__["a" /* LoggingViewerModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_component_logging_viewer_search_component__["a" /* LoggingViewerSearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__["a" /* LoggingViewerFilterService */],
                __WEBPACK_IMPORTED_MODULE_5__logging_viewer_modal_manager__["a" /* LoggingViewerModalManager */],
            ],
        })
    ], LoggingViewerModule);
    return LoggingViewerModule;
}());

//# sourceMappingURL=logging-viewer.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingViewerLevelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for displaying the log levels for filtering the current logs.
 * The component can be embedded in any web page using the directive ionic-logging-viewer-levels.
 */
var LoggingViewerLevelsComponent = /** @class */ (function () {
    function LoggingViewerLevelsComponent(loggingService, loggingViewerFilterService) {
        this.loggingViewerFilterService = loggingViewerFilterService;
        this.logger = loggingService.getLogger("Ionic.Logging.Viewer.Levels.Component");
        var methodName = "ctor";
        this.logger.entry(methodName);
        this.logLevels = [];
        this.logLevels.push("DEBUG", "INFO", "WARN", "ERROR");
        this.selectedLevel = loggingViewerFilterService.level;
        this.logger.exit(methodName);
    }
    LoggingViewerLevelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var methodName = "ngOnInit";
        this.logger.entry(methodName);
        // subscribe to loggingViewerFilterService.filterChanged event, to refresh,
        // when someone else modifies the level
        this.filterChangedSubscription = this.loggingViewerFilterService.filterChanged.subscribe(function () {
            _this.selectedLevel = _this.loggingViewerFilterService.level;
        });
        this.logger.exit(methodName);
    };
    LoggingViewerLevelsComponent.prototype.ngOnDestroy = function () {
        var methodName = "ngOnDestroy";
        this.logger.entry(methodName);
        this.filterChangedSubscription.unsubscribe();
        this.logger.exit(methodName);
    };
    LoggingViewerLevelsComponent.prototype.onLevelChanged = function () {
        var methodName = "onLevelChanged";
        this.logger.entry(methodName, this.selectedLevel);
        this.loggingViewerFilterService.level = this.selectedLevel;
        this.logger.exit(methodName);
    };
    LoggingViewerLevelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ionic-logging-viewer-levels",template:/*ion-inline-start:"D:\projects\bks-log-viewer\src\pages\viewer\levels-component\logging-viewer-levels.component.html"*/'<ion-segment [(ngModel)]="selectedLevel" (ionChange)="onLevelChanged()">\n\n    <ion-segment-button *ngFor="let logLevel of logLevels" [value]="logLevel">\n\n        {{ logLevel }}\n\n    </ion-segment-button>\n\n</ion-segment>'/*ion-inline-end:"D:\projects\bks-log-viewer\src\pages\viewer\levels-component\logging-viewer-levels.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__["b" /* LoggingService */],
            __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__["a" /* LoggingViewerFilterService */]])
    ], LoggingViewerLevelsComponent);
    return LoggingViewerLevelsComponent;
}());

//# sourceMappingURL=logging-viewer-levels.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingViewerModalManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_viewer_modal_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_logging_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Helper class which makes the usage of the LoggingViewerModalComponent more comfortable.
 */
var LoggingViewerModalManager = /** @class */ (function () {
    function LoggingViewerModalManager(modalController, loggingService) {
        this.modalController = modalController;
        /**
         * Event submitted when the modal gets closed.
         */
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.logger = loggingService.getLogger("Ionic.Logging.Viewer.Modal.Manager");
        var methodName = "ctor";
        this.logger.entry(methodName);
        this.logger.exit(methodName);
    }
    /**
     * Opens the modal.
     * @returns Promise which gets resolved as soon as the modal is shown.
     */
    LoggingViewerModalManager.prototype.openModal = function (language, translation) {
        var _this = this;
        var methodName = "openModal";
        this.logger.entry(methodName);
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__logging_viewer_modal_component__["a" /* LoggingViewerModalComponent */], {
            language: language,
            translation: translation,
        });
        modal.onDidDismiss(function () {
            _this.onModalClosed();
        });
        var promise = modal.present();
        this.logger.exit(methodName);
        return promise;
    };
    /**
     * Callback called when the modal is closed.
     */
    LoggingViewerModalManager.prototype.onModalClosed = function () {
        var methodName = "onModalClosed";
        this.logger.entry(methodName);
        this.modalClosed.emit();
        this.logger.exit(methodName);
    };
    LoggingViewerModalManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_logging_service__["b" /* LoggingService */]])
    ], LoggingViewerModalManager);
    return LoggingViewerModalManager;
}());

//# sourceMappingURL=logging-viewer-modal.manager.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingViewerSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for displaying the search bar for filtering the current logs.
 * The component can be embedded in any web page using the directive ionic-logging-viewer-search.
 */
var LoggingViewerSearchComponent = /** @class */ (function () {
    function LoggingViewerSearchComponent(loggingService, loggingViewerFilterService) {
        this.loggingViewerFilterService = loggingViewerFilterService;
        this.logger = loggingService.getLogger("Ionic.Logging.Viewer.Search.Component");
        var methodName = "ctor";
        this.logger.entry(methodName);
        if (!this.placeholder) {
            this.placeholder = "Search";
        }
        this.search = this.loggingViewerFilterService.search;
        this.logger.exit(methodName);
    }
    LoggingViewerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var methodName = "ngOnInit";
        this.logger.entry(methodName);
        // subscribe to loggingViewerFilterService.filterChanged event, to refresh,
        // when someone else modifies the search value
        this.filterChangedSubscription = this.loggingViewerFilterService.filterChanged.subscribe(function () {
            _this.search = _this.loggingViewerFilterService.search;
        });
        this.logger.exit(methodName);
    };
    LoggingViewerSearchComponent.prototype.ngOnDestroy = function () {
        var methodName = "ngOnDestroy";
        this.logger.entry(methodName);
        this.filterChangedSubscription.unsubscribe();
        this.logger.exit(methodName);
    };
    LoggingViewerSearchComponent.prototype.onSearchChanged = function () {
        var methodName = "onSearchChanged";
        this.logger.entry(methodName);
        this.loggingViewerFilterService.search = this.search;
        this.logger.exit(methodName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LoggingViewerSearchComponent.prototype, "placeholder", void 0);
    LoggingViewerSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ionic-logging-viewer-search",template:/*ion-inline-start:"D:\projects\bks-log-viewer\src\pages\viewer\search-component\logging-viewer-search.component.html"*/'<ion-searchbar placeholder="{{placeholder}}" [(ngModel)]="search" (ionInput)="onSearchChanged()"></ion-searchbar>'/*ion-inline-end:"D:\projects\bks-log-viewer\src\pages\viewer\search-component\logging-viewer-search.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__["b" /* LoggingService */],
            __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__["a" /* LoggingViewerFilterService */]])
    ], LoggingViewerSearchComponent);
    return LoggingViewerSearchComponent;
}());

//# sourceMappingURL=logging-viewer-search.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for displaying the current logs.
 * The component can be embedded in any web page using the directive ionic-logging-viewer.
 */
var LoggingViewerComponent = /** @class */ (function () {
    function LoggingViewerComponent(loggingService, loggingViewerFilterService) {
        this.loggingService = loggingService;
        this.loggingViewerFilterService = loggingViewerFilterService;
        this.logger = loggingService.getLogger("Ionic.Logging.Viewer.Component");
        var methodName = "ctor";
        this.logger.entry(methodName);
        this.logger.exit(methodName);
    }
    LoggingViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var methodName = "ngOnInit";
        this.logger.entry(methodName);
        //this.logMessages = this.loggingService.getLogMessages();
        //this.logMessages = this.fromFileMsgs
        this.filterLogMessages();
        // subscribe to loggingService.logMessagesChanged event, to refresh, when new message is logged
        this.logMessagesChangedSubscription = this.loggingService.logMessagesChanged.subscribe(function () {
            _this.logMessages = _this.loggingService.getLogMessages();
            _this.filterLogMessages();
        });
        // subscribe to loggingViewerFilterService.filterChanged event, to refresh, when filter is modified
        this.filterChangedSubscription = this.loggingViewerFilterService.filterChanged.subscribe(function () {
            _this.filterLogMessages();
        });
        this.logger.exit(methodName);
    };
    LoggingViewerComponent.prototype.ngOnDestroy = function () {
        var methodName = "ngOnDestroy";
        this.logger.entry(methodName);
        this.logMessagesChangedSubscription.unsubscribe();
        this.filterChangedSubscription.unsubscribe();
        this.logger.exit(methodName);
    };
    LoggingViewerComponent.prototype.filterLogMessages = function () {
        var _this = this;
        this.logMessagesForDisplay = this.logMessages.filter(function (message) {
            return _this.filterLogMessagesByLevel(message) && _this.filterLogMessagesBySearch(message);
        });
    };
    LoggingViewerComponent.prototype.filterLogMessagesByLevel = function (message) {
        var levelValue = this.loggingViewerFilterService.level;
        return __WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__["a" /* LogLevelConverter */].levelFromString(message.level) >= __WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__["a" /* LogLevelConverter */].levelFromString(levelValue);
    };
    LoggingViewerComponent.prototype.filterLogMessagesBySearch = function (message) {
        var searchValue = new RegExp(this.loggingViewerFilterService.search, "i");
        return message.logger.search(searchValue) >= 0 ||
            message.methodName.search(searchValue) >= 0 ||
            message.message.join("|").search(searchValue) >= 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], LoggingViewerComponent.prototype, "logMessages", void 0);
    LoggingViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ionic-logging-viewer",template:/*ion-inline-start:"D:\projects\bks-log-viewer\src\pages\viewer\viewr-component\logging-viewer.component.html"*/'<ion-list>\n\n    <ion-item *ngFor="let logMessage of logMessagesForDisplay">\n\n        <p>{{ logMessage.timeStamp | date:\'dd.MM.yyyy HH:mm:ss\' }} {{ logMessage.level }}</p>\n\n        <p>{{ logMessage.logger }}</p>\n\n        <p>\n\n            {{ logMessage.methodName }}\n\n            <span *ngFor="let messagePart of logMessage.message"> {{ messagePart }} </span>\n\n        </p>\n\n    </ion-item>\n\n</ion-list>'/*ion-inline-end:"D:\projects\bks-log-viewer\src\pages\viewer\viewr-component\logging-viewer.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__["b" /* LoggingService */],
            __WEBPACK_IMPORTED_MODULE_2__logging_viewer_filter_service__["a" /* LoggingViewerFilterService */]])
    ], LoggingViewerComponent);
    return LoggingViewerComponent;
}());

//# sourceMappingURL=logging-viewer.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingViewerFilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service for storing filter settings for logging viewer.
 */
var LoggingViewerFilterService = /** @class */ (function () {
    function LoggingViewerFilterService(loggingService) {
        this.logger = loggingService.getLogger("Ionic.Logging.Viewer.Filter.Service");
        var methodName = "ctor";
        this.logger.entry(methodName);
        this.levelValue = "DEBUG";
        this.searchValue = "";
        this.filterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.logger.exit(methodName);
    }
    Object.defineProperty(LoggingViewerFilterService.prototype, "level", {
        /**
         * Gets the current log level.
         * @return log level
         */
        get: function () {
            return this.levelValue;
        },
        /**
         * Sets the new log level and emits a filterChanged event.
         * @param value new slog level
         */
        set: function (value) {
            this.levelValue = value;
            this.filterChanged.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggingViewerFilterService.prototype, "search", {
        /**
         * Gets the current search value.
         * @return search value
         */
        get: function () {
            return this.searchValue;
        },
        /**
         * Sets the new search value and emits a filterChanged event.
         * @param value new search value
         */
        set: function (value) {
            this.searchValue = value;
            this.filterChanged.emit();
        },
        enumerable: true,
        configurable: true
    });
    LoggingViewerFilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_logging_service__["b" /* LoggingService */]])
    ], LoggingViewerFilterService);
    return LoggingViewerFilterService;
}());

//# sourceMappingURL=logging-viewer-filter.service.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.js.map