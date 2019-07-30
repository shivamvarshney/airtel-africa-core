/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TvmazeService } from '../tvmaze.service';
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
export { PosterComponent };
if (false) {
    /** @type {?} */
    PosterComponent.prototype.showId;
    /** @type {?} */
    PosterComponent.prototype.posterUrl$;
    /**
     * @type {?}
     * @private
     */
    PosterComponent.prototype.tvmaze;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3R2bWF6ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3N0ZXIvcG9zdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxEO0lBVUUseUJBQW9CLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBSSxDQUFDOzs7O0lBRTdDLGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQ3pDLFVBQUEsSUFBSTs7OztRQUFFLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQWpCLENBQWlCLElBQUEsRUFDOUIsQ0FBQTtJQUNILENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGtDQUFzQzs7aUJBRXZDOzs7O2dCQU5RLGFBQWE7Ozt5QkFVbkIsS0FBSzs7SUFVUixzQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksZUFBZTs7O0lBRzFCLGlDQUF1Qjs7SUFDdkIscUNBQThCOzs7OztJQUNsQixpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFR2bWF6ZVNlcnZpY2UgfSBmcm9tICcuLi90dm1hemUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RtLXBvc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3N0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBASW5wdXQoKSBzaG93SWQ6bnVtYmVyO1xuICBwb3N0ZXJVcmwkOk9ic2VydmFibGU8c3RyaW5nPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0dm1hemU6VHZtYXplU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50dm1hemUuZ2V0U2hvd3ModGhpcy5zaG93SWQpLnN1YnNjcmliZShcbiAgICAgIHJlc3A9PnJlc3A9PnJlc3AuaW1hZ2UubWVkaXVtXG4gICAgKVxuICB9IFxuXG59XG4iXX0=