(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rafanegrette/Projects/wayuu-translator/wayuunaiki-translator-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 29, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acerca de este projecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "El presente es un prototipo de aplicacion para la traducci\u00F3n del espa\u00F1ol al wayuunaiki y wayuunaiki al espa\u00F1ol orientado al contexto turistico. Producto de la investigaci\u00F3n para optar al titulo de Magister en Analitica de Datos de la Universidad Jorge Tadeo Lozano de Bogota.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Este traductor se diferencia de otros similares en:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "La tecnica de traducci\u00F3n, redes neuronales recurrentes con mecanismo de atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "El codigo fuente permanecera libre, bajo licencia GNU, para que otros investigadores puedan continuar la investigaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "El corpus recolectado permanecer\u00E1 libre y disponible, el unico requerimiento es que la fuente sea citada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "El despliegue de esta aplicaci\u00F3n es basado en plataformas libres para que siempre pueda ser consultado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Colaboradores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Leonardi Fernandes, traductor lider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Jandy Rodriguez, traductor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Neima Paz, traductora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Osnaider Cifuentes, dise\u00F1ador grafico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tambien usamos parte del corpus JW300 v1b (filtrado por longitud de token):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u017Deljko Agi\u0107, Ivan Vuli\u0107: \"JW300: A Wide-Coverage Parallel Corpus for Low-Resource Languages\", In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (ACL), 2019.");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    translateSpaToGucUrl: "http://172.17.0.3:8000/",
    translateGucToSpaUrl: "http://172.17.0.2:8000/"
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

/***/ "Ece1":
/*!********************************************************!*\
  !*** ./src/app/phrases-list/phrases-list.component.ts ***!
  \********************************************************/
/*! exports provided: PhrasesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhrasesListComponent", function() { return PhrasesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _phrases_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../phrases-list.service */ "ICfS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PhrasesListComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PhrasesListComponent_tr_12_Template_a_mouseover_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.mouseOutSpeaker = i_r2; })("mouseout", function PhrasesListComponent_tr_12_Template_a_mouseout_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.mouseOutSpeaker = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhrasesListComponent_tr_12_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const phrase_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.playAudio(phrase_r1.audioPath); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phrase_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phrase_r1.spa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phrase_r1.guc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.mouseOutSpeaker === i_r2 ? ctx_r0.speakerHoverPath : ctx_r0.speakerNormalPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PhrasesListComponent {
    constructor(phraseListService) {
        this.phraseListService = phraseListService;
        this.phrases = [];
        this.SPEAKER_HOVER_PATH = "assets/speaker-icon-hover.svg";
        this.speakerHoverPath = this.SPEAKER_HOVER_PATH;
        this.speakerNormalPath = "assets/speaker-icon.svg";
        this.speakerPlayingPath = "assets/speaker-icon-playing.svg";
        this.speakerPath = this.speakerNormalPath;
        this.mouseOutSpeaker = -1;
        this.isAudioPlaying = false;
    }
    ngOnInit() {
        this.phraseListService.loadData().then(data => {
            this.phrases = data;
        });
    }
    playAudio(idAudio) {
        this.speakerHoverPath = this.speakerPlayingPath;
        let audio = new Audio();
        audio.src = 'https://github.com/rafanegrette/publicdatasets/blob/master/audios-wayunaiki/' + idAudio + '.wav?raw=true';
        audio.load();
        this.isAudioPlaying = true;
        audio.play();
        audio.onended = () => {
            this.speakerHoverPath = this.SPEAKER_HOVER_PATH;
            this.isAudioPlaying = false;
        };
    }
}
PhrasesListComponent.ɵfac = function PhrasesListComponent_Factory(t) { return new (t || PhrasesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_phrases_list_service__WEBPACK_IMPORTED_MODULE_1__["PhrasesListService"])); };
PhrasesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhrasesListComponent, selectors: [["app-phrases-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_phrases_list_service__WEBPACK_IMPORTED_MODULE_1__["PhrasesListService"]])], decls: 13, vars: 1, consts: [[1, "table", "table-hover"], ["scope", ""], [4, "ngFor", "ngForOf"], ["scope", "row"], [2, "cursor", "pointer", 3, "mouseover", "mouseout"], [3, "src", "click"]], template: function PhrasesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Frases utiles en contexto turistico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Espa\u00F1ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wayuunaiki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PhrasesListComponent_tr_12_Template, 8, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.phrases);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaHJhc2VzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhrasesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phrases-list',
                templateUrl: './phrases-list.component.html',
                styleUrls: ['./phrases-list.component.css'],
                providers: [_phrases_list_service__WEBPACK_IMPORTED_MODULE_1__["PhrasesListService"]]
            }]
    }], function () { return [{ type: _phrases_list_service__WEBPACK_IMPORTED_MODULE_1__["PhrasesListService"] }]; }, null); })();


/***/ }),

/***/ "ICfS":
/*!*****************************************!*\
  !*** ./src/app/phrases-list.service.ts ***!
  \*****************************************/
/*! exports provided: PhrasesListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhrasesListService", function() { return PhrasesListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PhrasesListService {
    constructor(http) {
        this.http = http;
        this._listPhrases = [];
        this.PATH_DATA = 'assets/phrases-json.json';
    }
    getPhrases() {
        return this._listPhrases;
    }
    loadData() {
        return new Promise(resolve => {
            this.http.get(this.PATH_DATA).subscribe(data => {
                this._listPhrases = data;
                resolve(this._listPhrases);
            });
        });
    }
}
PhrasesListService.ɵfac = function PhrasesListService_Factory(t) { return new (t || PhrasesListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PhrasesListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhrasesListService, factory: PhrasesListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhrasesListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NZXM":
/*!**************************************!*\
  !*** ./src/app/translate.service.ts ***!
  \**************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.heroku+json; version=3.docker-releases'
    })
};
class TranslateService {
    //url:string ="http://localhost:5000/";
    constructor(http) {
        this.http = http;
    }
    translateSpaToGuc(textToTranslate) {
        let textJson = { "text": textToTranslate };
        console.log(textJson);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].translateSpaToGucUrl, textJson, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = "Ocurrio un error: " + error.error.message;
        }
        else {
            errorMessage = "Occurrio un error: " +
                error.status + "\nMensaje: " + error.message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage + ". \n\nContacte al administrador.");
    }
    translateGucToSpa(textToTranslate) {
        let textJson = { "text": textToTranslate };
        console.log(textJson);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].translateGucToSpaUrl, textJson, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [["role", "main", 1, "content"], [1, "w-100", "p-3"], [1, "card-container"], ["title", "Animations", "href", "#", "rel", "noopener", 1, "circle-link"], ["href", "https://www.utadeo.edu.co/es/facultad/ciencias-naturales-e-ingenieria/programa/bogota/maestria-en-ingenieria-y-analitica-de-datos", "target", "_blank", "rel", "noopener", 2, "color", "#ff2a2a"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Maestr\u00EDa en Ingenier\u00EDa y Anal\u00EDtica de Datos,\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Utadeo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .translator-title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content:center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #cb0000;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width:-webkit-fit-content;\n    width:-moz-fit-content;\n    width:fit-content;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 70px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n\n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n  .container[_ngcontent-%COMP%] {\n  position: relative;\n  align-content: center;\n}\n\n  .image[_ngcontent-%COMP%] {\n  opacity: 1;\n  position: relative;\n  display: block;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  align-content: center;\n}\n\n  .middle[_ngcontent-%COMP%] {\n  transition: .5s ease;\n  opacity: 0.8;\n  position: absolute;\n  top: 0%;\n  left: 50%;\n}\n\n  .container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n  .container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n  .text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n\n  .error[_ngcontent-%COMP%] {\n  color: #cb0000;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ2hCLGtJQUFrSTtFQUNwSTs7RUFFQTtJQUNFLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUdBLHNCQUFzQjs7RUFDdEI7O0lBRUU7O01BRUUsV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLFlBQVk7TUFDWix3QkFBd0I7SUFDMUI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtFQUNGOztFQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0FBQ1g7O0VBRUE7RUFDRSxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxVQUFVO0FBQ1o7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIDpob3N0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG5cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50cmFuc2xhdG9yLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSAgXG5cbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cblxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogIzg4ODtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLTI0cHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG5cbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltYWdlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb250YWluZXI6aG92ZXIgLmltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjY2IwMDAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _translator_translator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translator/translator.component */ "iKfc");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _phrases_list_phrases_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phrases-list/phrases-list.component */ "Ece1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "84zG");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _translator_translator_component__WEBPACK_IMPORTED_MODULE_5__["TranslatorComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _phrases_list_phrases_list_component__WEBPACK_IMPORTED_MODULE_7__["PhrasesListComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _translator_translator_component__WEBPACK_IMPORTED_MODULE_5__["TranslatorComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _phrases_list_phrases_list_component__WEBPACK_IMPORTED_MODULE_7__["PhrasesListComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "sticky-top"], [1, "container-fluid", "toolbar"], ["href", "#", 1, "navbar-brand", 2, "color", "white"], ["height", "60", "alt", "Angular Logo", "src", "assets/simbolo-blanco-250px.png"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "translator", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "phrases-list", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav-link"], [1, "spacer"], ["href", "https://www.linkedin.com/in/rafael-negrette-650a12b8/", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "id", "linkedin-logo", "width", "34", "height", "34", "viewBox", "0 0 34 34"], ["d", "M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z", "fill", "#fff"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Bienvenido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Traduccir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Frases turismo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Acerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    background-color: #cb0000;\n\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #linkedin-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #linkedin-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n\n.spacer[_ngcontent-%COMP%] {\nflex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7QUFDQSxPQUFPO0FBQ1AiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IwMDAwO1xuXG59XG5cbi50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICNsaW5rZWRpbi1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICNsaW5rZWRpbi1sb2dvOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5zcGFjZXIge1xuZmxleDogMTtcbn1cbiJdfQ== */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .translator-title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content:center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #cb0000;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width:-webkit-fit-content;\n    width:-moz-fit-content;\n    width:fit-content;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 70px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n\n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n  .container[_ngcontent-%COMP%] {\n  position: relative;\n  align-content: center;\n}\n\n  .image[_ngcontent-%COMP%] {\n  opacity: 1;\n  position: relative;\n  display: block;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  align-content: center;\n}\n\n  .middle[_ngcontent-%COMP%] {\n  transition: .5s ease;\n  opacity: 0.8;\n  position: absolute;\n  top: 0%;\n  left: 50%;\n}\n\n  .container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n  .container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n  .text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n\n  .error[_ngcontent-%COMP%] {\n  color: #cb0000;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ2hCLGtJQUFrSTtFQUNwSTs7RUFFQTtJQUNFLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUdBLHNCQUFzQjs7RUFDdEI7O0lBRUU7O01BRUUsV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLFlBQVk7TUFDWix3QkFBd0I7SUFDMUI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtFQUNGOztFQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0FBQ1g7O0VBRUE7RUFDRSxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxVQUFVO0FBQ1o7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIDpob3N0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG5cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50cmFuc2xhdG9yLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSAgXG5cbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cblxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogIzg4ODtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLTI0cHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG5cbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltYWdlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb250YWluZXI6aG92ZXIgLmltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjY2IwMDAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css', '../app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iKfc":
/*!****************************************************!*\
  !*** ./src/app/translator/translator.component.ts ***!
  \****************************************************/
/*! exports provided: TranslatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorComponent", function() { return TranslatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translate.service */ "NZXM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { "spinner": a0 }; };
const _c1 = function (a0) { return { "transparent-background": a0 }; };
class TranslatorComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.error = '';
        this.labelToTranslate = "Español";
        this.labelTranslated = "Wayuunaiki";
        this.spanishToWayuu = true;
        this.textToTranslate = "";
        this.textTranslated = "";
        this.textDictionaryResult = "";
        this.results = { dictionary: "", predict: "" };
        this.logoPath = "assets/logo128px.png";
        this.TITLE_S_TO_W = 'Traductor español - wayuunaiki';
        this.TITLE_W_TO_S = 'Traductor wayuunaiki - español';
        this.title = this.TITLE_S_TO_W;
        this.isLoading = false;
        this.logoPathChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    translate() {
        this.error = '';
        this.isLoading = true;
        if (this.spanishToWayuu) {
            this.translateService.translateSpaToGuc(this.textToTranslate)
                .subscribe(response => {
                if (response.statusCode === 200) {
                    this.textTranslated = response.body.predict;
                    this.textDictionaryResult = response.body.dictionary;
                }
                else {
                    this.error = response.body.predict;
                    this.textDictionaryResult = '';
                    this.textTranslated = '';
                }
                this.isLoading = false;
            }, error => {
                this.error = error;
                this.textTranslated = '',
                    this.isLoading = false;
            });
        }
        else {
            this.translateService.translateGucToSpa(this.textToTranslate)
                .subscribe(response => {
                if (response.statusCode === 200) {
                    this.textTranslated = response.body.predict;
                    this.textDictionaryResult = response.body.dictionary;
                }
                else {
                    this.error = response.body.predict;
                    this.textTranslated = '';
                    this.textDictionaryResult = '';
                }
                this.isLoading = false;
            }, error => {
                this.error = error;
                this.textTranslated = '';
                this.isLoading = false;
            });
        }
    }
    interchange() {
        this.spanishToWayuu = !this.spanishToWayuu;
        let textTemp = "";
        this.textDictionaryResult = '';
        if (this.spanishToWayuu) {
            this.labelToTranslate = "Español";
            this.labelTranslated = "Wayuunaiki";
            textTemp = this.textToTranslate;
            this.textToTranslate = this.textTranslated;
            this.textTranslated = textTemp;
            this.logoPath = "assets/logo128px.png";
            this.title = this.TITLE_S_TO_W;
        }
        else {
            this.labelToTranslate = "Wayuunaiki";
            this.labelTranslated = "Español";
            textTemp = this.textTranslated;
            this.textTranslated = this.textToTranslate;
            this.textToTranslate = textTemp;
            this.logoPath = "assets/logo2-128px.png";
            this.title = this.TITLE_W_TO_S;
        }
        this.logoPathChanged.emit(this.logoPath);
    }
    ngOnInit() {
    }
    changeLogoPath(path) {
        this.logoPath = path;
    }
}
TranslatorComponent.ɵfac = function TranslatorComponent_Factory(t) { return new (t || TranslatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TranslatorComponent, selectors: [["app-translator"]], outputs: { logoPathChanged: "logoPathChanged" }, decls: 41, vars: 15, consts: [["id", "title", 1, "translator-title"], [1, "card", "highlight-card", "card-medium"], ["alt", "Wayuunaiki App", 2, "position", "absolute", "top", "-35px", "left", "-40px", 3, "src"], ["id", "rocket-smoke", "alt", "Rocket Ship Smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], [1, "badge", "bg-secondary"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "bi", "bi-pencil-fill", "fa-2x"], ["aria-label", "With textarea", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngClass"], [1, "container"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "middle"], ["type", "image", "alt", "intercambiar", "src", "assets/swap-logo.svg", 3, "click"], ["aria-label", "With textarea", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "error"]], template: function TranslatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ingrese la frase a traducir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Esta aplicaci\u00F3n se encuentra aun en desarrollo, mensualmente la exactitud de las traducciones iran mejorando");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0 Escriba la frase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TranslatorComponent_Template_textarea_ngModelChange_22_listener($event) { return ctx.textToTranslate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslatorComponent_Template_button_click_27_listener() { return ctx.translate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Traduccir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslatorComponent_Template_input_click_31_listener() { return ctx.interchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TranslatorComponent_Template_textarea_ngModelChange_35_listener($event) { return ctx.textTranslated = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TranslatorComponent_Template_textarea_ngModelChange_38_listener($event) { return ctx.textDictionaryResult = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logoPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.labelToTranslate, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textToTranslate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.labelTranslated, " - Prediccion AI:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textTranslated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.labelTranslated, " - Diccionario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textDictionaryResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".spinner[_ngcontent-%COMP%] {\n    border: 10px solid;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 50 50'%3E%3Cpath d='M28.43 6.378C18.27 4.586 8.58 11.37 6.788 21.533c-1.791 10.161 4.994 19.851 15.155 21.643l.707-4.006C14.7 37.768 9.392 30.189 10.794 22.24c1.401-7.95 8.981-13.258 16.93-11.856l.707-4.006z'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E\") center / 100px no-repeat;\n  }\n\n.transparent-background[_ngcontent-%COMP%]{\n  background-color:gray;\n  position:absolute;\n  width:100%;\n  height:100%;\n  opacity:.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCwwZ0JBQTBnQjtFQUM1Z0I7O0FBRUY7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtBQUNaIiwiZmlsZSI6InRyYW5zbGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcbiAgICBib3JkZXI6IDEwcHggc29saWQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA1MCA1MCclM0UlM0NwYXRoIGQ9J00yOC40MyA2LjM3OEMxOC4yNyA0LjU4NiA4LjU4IDExLjM3IDYuNzg4IDIxLjUzM2MtMS43OTEgMTAuMTYxIDQuOTk0IDE5Ljg1MSAxNS4xNTUgMjEuNjQzbC43MDctNC4wMDZDMTQuNyAzNy43NjggOS4zOTIgMzAuMTg5IDEwLjc5NCAyMi4yNGMxLjQwMS03Ljk1IDguOTgxLTEzLjI1OCAxNi45My0xMS44NTZsLjcwNy00LjAwNnonJTNFJTNDYW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVUeXBlPSd4bWwnIGF0dHJpYnV0ZU5hbWU9J3RyYW5zZm9ybScgdHlwZT0ncm90YXRlJyBmcm9tPScwIDI1IDI1JyB0bz0nMzYwIDI1IDI1JyBkdXI9JzAuNnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8lM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIikgY2VudGVyIC8gMTAwcHggbm8tcmVwZWF0O1xuICB9XG5cbi50cmFuc3BhcmVudC1iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgb3BhY2l0eTouMztcbn0iXX0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .translator-title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content:center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #cb0000;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width:-webkit-fit-content;\n    width:-moz-fit-content;\n    width:fit-content;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 70px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n\n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n  .container[_ngcontent-%COMP%] {\n  position: relative;\n  align-content: center;\n}\n\n  .image[_ngcontent-%COMP%] {\n  opacity: 1;\n  position: relative;\n  display: block;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  align-content: center;\n}\n\n  .middle[_ngcontent-%COMP%] {\n  transition: .5s ease;\n  opacity: 0.8;\n  position: absolute;\n  top: 0%;\n  left: 50%;\n}\n\n  .container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n  .container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n  .text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n\n  .error[_ngcontent-%COMP%] {\n  color: #cb0000;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ2hCLGtJQUFrSTtFQUNwSTs7RUFFQTtJQUNFLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUdBLHNCQUFzQjs7RUFDdEI7O0lBRUU7O01BRUUsV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLFlBQVk7TUFDWix3QkFBd0I7SUFDMUI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtFQUNGOztFQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0FBQ1g7O0VBRUE7RUFDRSxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxVQUFVO0FBQ1o7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIDpob3N0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG5cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50cmFuc2xhdG9yLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSAgXG5cbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cblxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogIzg4ODtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLTI0cHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG5cbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltYWdlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb250YWluZXI6aG92ZXIgLmltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjY2IwMDAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-translator',
                templateUrl: './translator.component.html',
                styleUrls: ['./translator.component.css', '../app.component.css']
            }]
    }], function () { return [{ type: _translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, { logoPathChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _phrases_list_phrases_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phrases-list/phrases-list.component */ "Ece1");
/* harmony import */ var _translator_translator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translator/translator.component */ "iKfc");







const appRoutes = [
    { path: 'translator', component: _translator_translator_component__WEBPACK_IMPORTED_MODULE_4__["TranslatorComponent"] },
    { path: 'phrases-list', component: _phrases_list_phrases_list_component__WEBPACK_IMPORTED_MODULE_3__["PhrasesListComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: '**', redirectTo: '/translator' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map