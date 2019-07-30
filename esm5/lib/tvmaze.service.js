/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ TvmazeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(i0.ɵɵinject(i1.HttpClient)); }, token: TvmazeService, providedIn: "root" });
    return TvmazeService;
}());
export { TvmazeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TvmazeService.prototype.apiRoot;
    /**
     * @type {?}
     * @private
     */
    TvmazeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90dm1hemUvIiwic291cmNlcyI6WyJsaWIvdHZtYXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbEQ7SUFNRSx1QkFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFEbEIsWUFBTyxHQUFHLHdCQUF3QixDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFDeEMsZ0NBQVE7Ozs7SUFBUixVQUFTLEVBQVM7O1lBQ1YsR0FBRyxHQUFNLElBQUksQ0FBQyxPQUFPLGVBQVUsRUFBSTtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQVZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsVUFBVTs7O3dCQURuQjtDQWNDLEFBWEQsSUFXQztTQVJZLGFBQWE7Ozs7OztJQUV4QixnQ0FBb0Q7Ozs7O0lBQ3hDLDZCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR2bWF6ZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBpUm9vdCA9ICdodHRwczovL2FwaS50dm1hemUuY29tJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxuICBnZXRTaG93cyhpZDpudW1iZXIpe1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpUm9vdH0vc2hvd3MvJHtpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XG4gIH1cbn1cbiAiXX0=