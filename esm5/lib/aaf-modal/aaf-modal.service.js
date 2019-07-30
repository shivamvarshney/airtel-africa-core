/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AafModalComponent } from './aaf-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AafModalService = /** @class */ (function () {
    function AafModalService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} modalData
     * @return {?}
     */
    AafModalService.prototype.openModal = /**
     * @param {?} modalData
     * @return {?}
     */
    function (modalData) {
        /** @type {?} */
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '300px';
        dialogConfig.data = {
            title: modalData.title,
            reason: modalData.reason,
            status: modalData.status
        };
        /** @type {?} */
        var dialogRef = this.dialog.open(AafModalComponent, dialogConfig);
    };
    AafModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AafModalService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AafModalService.ngInjectableDef = i0.defineInjectable({ factory: function AafModalService_Factory() { return new AafModalService(i0.inject(i1.MatDialog)); }, token: AafModalService, providedIn: "root" });
    return AafModalService;
}());
export { AafModalService };
if (false) {
    /** @type {?} */
    AafModalService.prototype.openDialog;
    /** @type {?} */
    AafModalService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLWFpcnRlbC1hZnJpY2EvIiwic291cmNlcyI6WyJsaWIvYWFmLW1vZGFsL2FhZi1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUMsZUFBZSxFQUErQixNQUFNLG1CQUFtQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFDMUQ7SUFLRSx5QkFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7O0lBQ3hDLG1DQUFTOzs7O0lBQVQsVUFBVSxTQUFjOztZQUNoQixZQUFZLEdBQUcsSUFBSSxlQUFlLEVBQUU7UUFDMUMsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDN0IsWUFBWSxDQUFDLElBQUksR0FBRztZQUNsQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3hCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN6QixDQUFDOztZQUNJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUM7SUFDckUsQ0FBQzs7Z0JBakJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsU0FBUzs7OzBCQURsQjtDQXFCQyxBQWxCRCxJQWtCQztTQWZZLGVBQWU7OztJQUMxQixxQ0FBZ0I7O0lBQ0osaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyBcbmltcG9ydCB7IE1hdERpYWxvZyxNYXREaWFsb2dDb25maWcsTWF0RGlhbG9nUmVmLE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEFhZk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9hYWYtbW9kYWwuY29tcG9uZW50JztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFhZk1vZGFsU2VydmljZSB7XG4gIG9wZW5EaWFsb2c6IGFueTtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuICBvcGVuTW9kYWwobW9kYWxEYXRhOiBhbnkpIHtcbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG4gICAgZGlhbG9nQ29uZmlnLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgZGlhbG9nQ29uZmlnLmF1dG9Gb2N1cyA9IHRydWU7XG4gICAgZGlhbG9nQ29uZmlnLndpZHRoID0gJzMwMHB4JztcbiAgICBkaWFsb2dDb25maWcuZGF0YSA9IHtcbiAgICAgIHRpdGxlOiBtb2RhbERhdGEudGl0bGUsXG4gICAgICByZWFzb246IG1vZGFsRGF0YS5yZWFzb24sXG4gICAgICBzdGF0dXM6IG1vZGFsRGF0YS5zdGF0dXNcbiAgICB9O1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQWFmTW9kYWxDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG4gIH1cbn1cbiAiXX0=