/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TvmazeService {
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
/** @nocollapse */ TvmazeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(i0.ɵɵinject(i1.HttpClient)); }, token: TvmazeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZtYXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90dm1hemUvIiwic291cmNlcyI6WyJsaWIvdHZtYXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLbEQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFHeEIsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFEbEIsWUFBTyxHQUFHLHdCQUF3QixDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFDeEMsUUFBUSxDQUFDLEVBQVM7O2NBQ1YsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxFQUFFLEVBQUU7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxVQUFVOzs7Ozs7OztJQU9qQixnQ0FBb0Q7Ozs7O0lBQ3hDLDZCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR2bWF6ZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBpUm9vdCA9ICdodHRwczovL2FwaS50dm1hemUuY29tJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxuICBnZXRTaG93cyhpZDpudW1iZXIpe1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpUm9vdH0vc2hvd3MvJHtpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XG4gIH1cbn1cbiAiXX0=