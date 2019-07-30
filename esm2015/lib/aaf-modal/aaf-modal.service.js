/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AafModalComponent } from './aaf-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AafModalService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} modalData
     * @return {?}
     */
    openModal(modalData) {
        /** @type {?} */
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '300px';
        dialogConfig.data = {
            title: modalData.title,
            reason: modalData.reason,
            status: modalData.status
        };
        /** @type {?} */
        const dialogRef = this.dialog.open(AafModalComponent, dialogConfig);
    }
}
AafModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AafModalService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AafModalService.ngInjectableDef = i0.defineInjectable({ factory: function AafModalService_Factory() { return new AafModalService(i0.inject(i1.MatDialog)); }, token: AafModalService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AafModalService.prototype.openDialog;
    /** @type {?} */
    AafModalService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLWFpcnRlbC1hZnJpY2EvIiwic291cmNlcyI6WyJsaWIvYWFmLW1vZGFsL2FhZi1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUMsZUFBZSxFQUErQixNQUFNLG1CQUFtQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFJMUQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFFMUIsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7O0lBQ3hDLFNBQVMsQ0FBQyxTQUFjOztjQUNoQixZQUFZLEdBQUcsSUFBSSxlQUFlLEVBQUU7UUFDMUMsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDN0IsWUFBWSxDQUFDLElBQUksR0FBRztZQUNsQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3hCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN6QixDQUFDOztjQUNJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUM7SUFDckUsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFNBQVM7Ozs7O0lBTWhCLHFDQUFnQjs7SUFDSixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7IFxuaW1wb3J0IHsgTWF0RGlhbG9nLE1hdERpYWxvZ0NvbmZpZyxNYXREaWFsb2dSZWYsTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQWFmTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2FhZi1tb2RhbC5jb21wb25lbnQnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWFmTW9kYWxTZXJ2aWNlIHtcbiAgb3BlbkRpYWxvZzogYW55O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG4gIG9wZW5Nb2RhbChtb2RhbERhdGE6IGFueSkge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBkaWFsb2dDb25maWcuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dDb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgICBkaWFsb2dDb25maWcud2lkdGggPSAnMzAwcHgnO1xuICAgIGRpYWxvZ0NvbmZpZy5kYXRhID0ge1xuICAgICAgdGl0bGU6IG1vZGFsRGF0YS50aXRsZSxcbiAgICAgIHJlYXNvbjogbW9kYWxEYXRhLnJlYXNvbixcbiAgICAgIHN0YXR1czogbW9kYWxEYXRhLnN0YXR1c1xuICAgIH07XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBYWZNb2RhbENvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcbiAgfVxufVxuICJdfQ==