/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TvmazeService } from '../tvmaze.service';
export class PosterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3R2bWF6ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3N0ZXIvcG9zdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2xELE1BQU0sT0FBTyxlQUFlOzs7O0lBSzFCLFlBQW9CLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBSSxDQUFDOzs7O0lBRTdDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUN6QyxJQUFJLENBQUEsRUFBRTs7OztRQUFBLElBQUksQ0FBQSxFQUFFLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUEsRUFDOUIsQ0FBQTtJQUNILENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGtDQUFzQzs7YUFFdkM7Ozs7WUFOUSxhQUFhOzs7cUJBVW5CLEtBQUs7Ozs7SUFBTixpQ0FBdUI7O0lBQ3ZCLHFDQUE4Qjs7Ozs7SUFDbEIsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUdm1hemVTZXJ2aWNlIH0gZnJvbSAnLi4vdHZtYXplLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bS1wb3N0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQElucHV0KCkgc2hvd0lkOm51bWJlcjtcbiAgcG9zdGVyVXJsJDpPYnNlcnZhYmxlPHN0cmluZz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHZtYXplOlR2bWF6ZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudHZtYXplLmdldFNob3dzKHRoaXMuc2hvd0lkKS5zdWJzY3JpYmUoXG4gICAgICByZXNwPT5yZXNwPT5yZXNwLmltYWdlLm1lZGl1bVxuICAgIClcbiAgfSBcblxufVxuIl19