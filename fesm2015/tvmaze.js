import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getShows(id) {
        /** @type {?} */
        const url = `${this.apiRoot}/shows/${id}`;
        return this.http.get(url);
    }
}
TvmazeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TvmazeService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ TvmazeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(ɵɵinject(HttpClient)); }, token: TvmazeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TvmazeComponent.decorators = [
    { type: Component, args: [{
                selector: 'tm-tvmaze',
                template: `
    <p>
      tvmaze works! Kuldeep SHivam
    </p>
  `
            }] }
];
/** @nocollapse */
TvmazeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PosterComponent {
    /**
     * @param {?} tvmaze
     */
    constructor(tvmaze) {
        this.tvmaze = tvmaze;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tvmaze.getShows(this.showId).subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        resp => (/**
         * @param {?} resp
         * @return {?}
         */
        resp => resp.image.medium)));
    }
}
PosterComponent.decorators = [
    { type: Component, args: [{
                selector: 'tm-poster',
                template: "<p>poster works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PosterComponent.ctorParameters = () => [
    { type: TvmazeService }
];
PosterComponent.propDecorators = {
    showId: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeModule {
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

export { TvmazeComponent, TvmazeModule, TvmazeService, PosterComponent as ɵa };
//# sourceMappingURL=tvmaze.js.map
