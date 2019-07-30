import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeService = /** @class */ (function () {
    function TvmazeService(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    TvmazeService.prototype.getShows = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var url = this.apiRoot + "/shows/" + id;
        return this.http.get(url);
    };
    TvmazeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TvmazeService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ TvmazeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(ɵɵinject(HttpClient)); }, token: TvmazeService, providedIn: "root" });
    return TvmazeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeComponent = /** @class */ (function () {
    function TvmazeComponent() {
    }
    /**
     * @return {?}
     */
    TvmazeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TvmazeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tm-tvmaze',
                    template: "\n    <p>\n      tvmaze works! Kuldeep SHivam\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    TvmazeComponent.ctorParameters = function () { return []; };
    return TvmazeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PosterComponent = /** @class */ (function () {
    function PosterComponent(tvmaze) {
        this.tvmaze = tvmaze;
    }
    /**
     * @return {?}
     */
    PosterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tvmaze.getShows(this.showId).subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return (/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return resp.image.medium; }); }));
    };
    PosterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tm-poster',
                    template: "<p>poster works!</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PosterComponent.ctorParameters = function () { return [
        { type: TvmazeService }
    ]; };
    PosterComponent.propDecorators = {
        showId: [{ type: Input }]
    };
    return PosterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeModule = /** @class */ (function () {
    function TvmazeModule() {
    }
    TvmazeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TvmazeComponent,
                        PosterComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    exports: [TvmazeComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return TvmazeModule;
}());

export { TvmazeComponent, TvmazeModule, TvmazeService, PosterComponent as ɵa };
//# sourceMappingURL=tvmaze.js.map
