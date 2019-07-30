(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('tvmaze', ['exports', '@angular/core', '@angular/common/http', '@angular/common'], factory) :
    (global = global || self, factory(global.tvmaze = {}, global.ng.core, global.ng.common.http, global.ng.common));
}(this, function (exports, core, http, common) { 'use strict';

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TvmazeService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ TvmazeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(core.ɵɵinject(http.HttpClient)); }, token: TvmazeService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            showId: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [
                            TvmazeComponent,
                            PosterComponent
                        ],
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule
                        ],
                        exports: [TvmazeComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        return TvmazeModule;
    }());

    exports.TvmazeComponent = TvmazeComponent;
    exports.TvmazeModule = TvmazeModule;
    exports.TvmazeService = TvmazeService;
    exports.ɵa = PosterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tvmaze.umd.js.map
