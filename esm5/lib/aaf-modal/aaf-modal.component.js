/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var AafModalComponent = /** @class */ (function () {
    function AafModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('data', data);
    }
    /**
     * @return {?}
     */
    AafModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    AafModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aaf-modal',
                    template: "<div>\n  <h1 mat-dialog-title>{{ data.title }}</h1>\n  <mat-divider></mat-divider>\n  <div mat-dialog-content>\n    <p class=\"pd-tp-12\">{{ data.reason }}</p>\n  </div>\n  <div mat-dialog-actions>\n    <button\n      mat-raised-button\n      color=\"warn\"\n      [mat-dialog-close]=\"data.animal\"\n      cdkFocusInitial\n    >\n      Ok\n    </button>\n  </div>\n</div>\n",
                    styles: [".pd-tp-12{padding-top:12px}"]
                }] }
    ];
    /** @nocollapse */
    AafModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AafModalComponent;
}());
export { AafModalComponent };
if (false) {
    /** @type {?} */
    AafModalComponent.prototype.dialogRef;
    /** @type {?} */
    AafModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUtYWlydGVsLWFmcmljYS8iLCJzb3VyY2VzIjpbImxpYi9hYWYtbW9kYWwvYWFmLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFhLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3RTtJQU9FLDJCQUNTLFNBQTBDLEVBQ2pCLElBQVM7UUFEbEMsY0FBUyxHQUFULFNBQVMsQ0FBaUM7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBZGQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixrWUFBeUM7O2lCQUUxQzs7OztnQkFObUIsWUFBWTtnREFXM0IsTUFBTSxTQUFDLGVBQWU7O0lBTzNCLHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxpQkFBaUI7OztJQUcxQixzQ0FBaUQ7O0lBQ2pELGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhZi1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYWYtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hYWYtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFhZk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWFmTW9kYWxDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55XG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiJdfQ==