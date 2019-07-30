/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { kitRowData } from './kits-data';
import { assignedKitRowData } from './assigned-kits-data';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AafModalService } from '../aaf-modal/aaf-modal.service';
/**
 * @template T
 */
export class AafGridComponent {
    /**
     * @param {?} aafModalService
     * @param {?} router
     * @param {?} ngxService
     */
    constructor(aafModalService, router, ngxService) {
        this.aafModalService = aafModalService;
        this.router = router;
        this.ngxService = ngxService;
        this.checkBoxFunction = false;
        this.advancedSearch = true;
        this.advanceFilter = false;
        this.diffrentiateAssignKits = false;
        this.amount = new FormControl();
    }
    // At initilizing time set configuration also set data source
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayedColumns = this.config.finalDynamicDisplayColumns;
        this.checkBoxFunction = this.config.functionalityCheckBox;
        this.columns = this.config.columnData;
        this.filterInfo = this.config.customFilters;
        this.actionInfo = this.config.actionAttr;
        this.listingType = this.config.configurationFor;
        this.itemPerPage = this.config.itemPerPage;
        this.listHeader = this.config.listHeader;
        this.dataSourceInfo = this.config.sourceDataInfo;
        // All Events need to asign here
        this.backEvent = this.listHeader.backInfo.action;
        this.doFilter = this.filterInfo.searchAction;
        //deleteAssignedKit
        // We require dataSource here So we need to call getListData function from ngOnIt
        this.getListData();
    }
    // Call to Fetch Data commonly
    /**
     * @return {?}
     */
    getListData() {
        this.ngxService.start();
        this.dataProvider.getData().subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            /** @type {?} */
            let listRowData;
            if (this.listingType == 'users') {
                listRowData = this.getDataSource(assignedKitRowData);
            }
            else {
                listRowData = this.getDataSource(kitRowData);
            }
            //console.log(listRowData);
            this.data = new MatTableDataSource(listRowData.dataSource);
            this.refreshConfiguration();
        }), (/**
         * @return {?}
         */
        () => {
            this.ngxService.stop();
        }));
    }
    // Prepare DataSource in the Array as per the Listing requirment
    /**
     * @param {?} dataSource
     * @return {?}
     */
    getDataSource(dataSource) {
        /** @type {?} */
        let finalKitDataSource = new Array();
        finalKitDataSource['dataSource'] = dataSource;
        return finalKitDataSource;
    }
    // Delete Assigned Kit User
    /**
     * @param {?} rowData
     * @return {?}
     */
    deleteUser(rowData) {
    }
    // Get all kits as per pagination as well filters
    /**
     * @param {?=} filtersInfo
     * @param {?=} paginationInfo
     * @return {?}
     */
    getkits(filtersInfo = '', paginationInfo = '') {
        this.getListData();
        this.refreshConfiguration();
    }
    // Get all assigned kits as per pagination as well filters
    /**
     * @param {?=} filtersInfo
     * @param {?=} paginationInfo
     * @return {?}
     */
    getAssignedKits(filtersInfo = '', paginationInfo = '') {
        this.getListData();
        this.refreshConfiguration();
    }
    // Do refresh all the Listing configuration
    /**
     * @return {?}
     */
    refreshConfiguration() {
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        this.selection = new SelectionModel(true, []);
        // All Events need to asign here
        this.backEvent = this.listHeader.backInfo.action;
        this.listingType == 'users' ? this.diffrentiateAssignKits = true : this.diffrentiateAssignKits = false;
        console.log('this.listingType = ', this.listingType);
    }
    /**
     * @return {?}
     */
    advanceSearch() {
        this.advancedSearch = true;
        this.advanceFilter = !this.advanceFilter;
    }
    // Back to Dashboard page
    /**
     * @return {?}
     */
    backToDashboard() {
        this.router.navigateByUrl('/dashboard/kit/panel');
    }
    // Kit Filtering Action
    /**
     * @return {?}
     */
    kitFilters() {
        this.getListData();
    }
    // Assigned Kit Filter Action
    /**
     * @return {?}
     */
    assignedKitFilters() {
        this.getListData();
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.data.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.data.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.selection.select(row)));
    }
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
AafGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'aaf-grid',
                template: "<!-- Filters Info -->\n    <!-- *ngIf=\"!diffrentiateAssignKits\" -->\n    <div class=\"list-top-header\">\n      <section *ngIf=\"listHeader\" class=\"tondo-regular d-i-block\">\n          <div *ngIf=\"listHeader.backInfo\"  class=\"d-i-block\">\n              <p class=\"m-0\">\n                  <a href=\"JavaScript:Void(0);\" (click)=\"this[backEvent]()\">\n                  <img class=\"back-icon\" src=\"assets/fonts/svg/{{ listHeader.backInfo.imageName }}\" />\n                  <span class=\"back\">{{listHeader.backInfo.title}}</span>\n                  </a>\n              </p>\n          </div> \n          <div *ngIf=\"listHeader.listTitle\" class=\"d-i-block\">\n              <p class=\"list-title\">\n                  {{listHeader.listTitle}}\n              </p>\n          </div> \n      </section>\n  \n      <section class=\"d-i-block kits\" [ngClass]=\"{ 'section-kit': advancedSearch }\" *ngIf=\"!diffrentiateAssignKits\">\n          <div *ngIf=\"!advanceFilter\">\n              <div *ngIf=\"filterInfo.default\">\n                  <div *ngFor=\"let defaultFilter of filterInfo.default\">\n                      <div *ngIf=\"defaultFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\" [ngClass]=\"{ 'input-kit': advancedSearch }\">\n                              <mat-label *ngIf=\"defaultFilter.label\">{{defaultFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"defaultFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"defaultFilter.inputType == 'select'\">\n                          <mat-select *ngIf=\"defaultFilter.options\" placeholder=\"{{defaultFilter.placeholder}}\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of defaultFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div *ngIf=\"advanceFilter && !diffrentiateAssignKits\" class=\"d-i-block\">\n              <div *ngIf=\"filterInfo.default\" class=\"d-i-block default-block\">\n                  <div *ngFor=\"let defaultFilter of filterInfo.default\" class=\"d-i-block\">\n                      <div *ngIf=\"defaultFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\">\n                              <mat-label *ngIf=\"defaultFilter.label\">{{defaultFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"defaultFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"defaultFilter.inputType == 'select'\">\n                          <mat-select *ngIf=\"defaultFilter.options\" placeholder=\"{{defaultFilter.placeholder}}\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of defaultFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n              <div *ngIf=\"filterInfo.advance\" class=\"d-i-block filter-parent\">\n                  <div *ngFor=\"let advanceFilter of filterInfo.advance\" class=\"d-i-block select-option\">\n                      <div *ngIf=\"advanceFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\">\n                              <mat-label *ngIf=\"advanceFilter.label\">{{advanceFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"advanceFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"advanceFilter.inputType == 'select'\" class=\"mat-opt\">\n                          <mat-select *ngIf=\"advanceFilter.options\" [placeholder]=\"advanceFilter.placeHolder\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of advanceFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </section>\n      <section class=\"d-i-block float-right\" *ngIf=\"!diffrentiateAssignKits\">\n          <div  class=\"d-i-block\">\n              <button (click)=\"this[doFilter]()\" class=\"search-btn\">Search</button>\n          </div>\n      </section>\n      <div *ngIf=\"filterInfo.searchButton && !diffrentiateAssignKits\"> \n          <div  class=\"search-btn-adv\">\n              <a class=\"a-search\" (click)=\"advanceSearch()\">Advanced Search</a>\n          </div>\n      </div>\n      </div>\n      <div *ngIf=\"diffrentiateAssignKits\">\n          <div class=\"search-box\">\n              <input class=\"input-search-box\" type=\"text\" placeholder=\"Search Users by Name / MSISDN / AUUID\" />\n          </div>\n      </div>\n      <!-- Table Structure Starts from Here -->\n      <div class=\"table-responsive\">\n      <table *ngIf=\"data\" mat-table [dataSource]=\"data\" matSort class=\"mat-elevation-z8 table-column\">\n          <!-- CheckBox Implementation -->\n          <ng-container *ngIf=\"checkBoxFunction\" matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox \n                    (change)=\"$event ? masterToggle() : null\" \n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\" \n                    [aria-label]=\"checkboxLabel()\">\n                  </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                  </mat-checkbox>\n              </td>\n          </ng-container>\n          <!-- Dynamic Column with Header Implementation -->\n          <ng-container *ngFor=\"let column of columns\" matColumnDef=\"{{column.name}}\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>{{column.label}}</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element[column.name] ? element[column.name] : '--'}} </td>\n          </ng-container>\n          <!-- Actions Column Implementation -->\n          <ng-container matColumnDef=\"actions\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element\">\n                  <ng-container *ngFor=\"let action of actionInfo\">\n                      <mat-select *ngIf=\"action.type === 'select' && action.options\" placeholder=\"{{action.name}}\">\n                          <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of action.options\">\n                              {{actionOptions}}\n                          </mat-option>\n                      </mat-select>\n                      <div *ngIf=\"action.type === 'button'\" class=\"d-i-block f-16 img-wrapper\">\n                          <figure *ngIf=\"action.icon\" class=\"text-center m-0\">\n                              <img src=\"assets/fonts/svg/{{ action.iconName }}\" alt=\"\">\n                          </figure>\n                          {{action.name}}\n                      </div>\n                  </ng-container>\n              </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></tr>\n      </table>\n      </div>\n      <mat-paginator class=\"custom-pagination\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>",
                styles: [".list-top-header{padding:18px 26px 8px 40px;border:1px solid #707070}.back{font-size:18px;color:#ed1c24;padding:0 20px 0 15px}.list-title{font-size:26px;color:#ed1c24}.back-icon{height:auto;width:23px;vertical-align:top}.input-border{width:148px;height:39px}.input-border input{padding:5px 0 5px 10px;border:1px solid #d7dae2;margin:0;height:39px;border-radius:2px;width:147px;box-shadow:1px 1px 1px 1px #d7dae2}.input-border .mat-form-field-wrapper{padding-bottom:0}.search-btn{height:39px;width:168px;outline:0;border:none;font-size:18px;color:#ed1c24;padding:0;border-radius:3px;background:#f5f5f5}.a-search{color:#01a9f4!important;font-size:13px;cursor:pointer}.list-top-header .tondo-regular.d-i-block{vertical-align:top;margin-right:52px}.search-btn-adv{text-align:right;width:82%}.select-option{display:inline-block;width:148px;margin-right:34px;vertical-align:top;box-shadow:1px 1px 1px 1px #d7dae2}.filter-parent{vertical-align:top}.filter-parent .mat-opt{padding:9px 10px;border:1px solid #d7dae2;border-radius:3px}.default-block{margin-right:34px}.input-kit{width:248px;margin-right:34px}.input-kit input{width:248px}.section-kit{width:65.5%;text-align:right}.table-column td.mat-cell,td.mat-footer-cell,th.mat-header-cell{font-size:17px;width:4%;font-family:tondo-regular;color:#707070;padding:30px 0 10px 25px}.m-0 a:hover{text-decoration:none}.search-box{color:#fff;height:65px}.input-search-box{height:100%;width:100%;font-size:22px;color:#fff;padding-left:23px;border:none;background:#707070}.search-box ::-webkit-input-placeholder{color:#fff}.search-box ::placeholder{color:#fff}.search-box :-ms-input-placeholder{color:#fff}.search-box ::-ms-input-placeholder{color:#fff}.img-wrapper{margin-left:51px}.img-wrapper figure.text-center.m-0{padding-bottom:12px}@media screen and (max-width:767px){.list-title{font-size:20px}.list-top-header{padding:18px 26px 8px 20px}.input-search-box{font-size:16px}.search-box{height:50px}.img-wrapper{margin-left:0;width:80px;text-align:center}.back{font-size:16px;padding:0 10px}.img-wrapper figure.text-center.m-0{padding-bottom:5px}.img-wrapper figure.text-center.m-0 img{width:20%}}"]
            }] }
];
/** @nocollapse */
AafGridComponent.ctorParameters = () => [
    { type: AafModalService },
    { type: Router },
    { type: NgxUiLoaderService }
];
AafGridComponent.propDecorators = {
    config: [{ type: Input }],
    dataProvider: [{ type: Input }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
if (false) {
    /** @type {?} */
    AafGridComponent.prototype.config;
    /** @type {?} */
    AafGridComponent.prototype.dataProvider;
    /** @type {?} */
    AafGridComponent.prototype.displayingColumns;
    /** @type {?} */
    AafGridComponent.prototype.displayingDataSource;
    /** @type {?} */
    AafGridComponent.prototype.displayedColumns;
    /** @type {?} */
    AafGridComponent.prototype.data;
    /** @type {?} */
    AafGridComponent.prototype.selection;
    /** @type {?} */
    AafGridComponent.prototype.columns;
    /** @type {?} */
    AafGridComponent.prototype.checkBoxFunction;
    /** @type {?} */
    AafGridComponent.prototype.actionInfo;
    /** @type {?} */
    AafGridComponent.prototype.filterInfo;
    /** @type {?} */
    AafGridComponent.prototype.itemPerPage;
    /** @type {?} */
    AafGridComponent.prototype.listingType;
    /** @type {?} */
    AafGridComponent.prototype.listHeader;
    /** @type {?} */
    AafGridComponent.prototype.advancedSearch;
    /** @type {?} */
    AafGridComponent.prototype.advanceFilter;
    /** @type {?} */
    AafGridComponent.prototype.diffrentiateAssignKits;
    /** @type {?} */
    AafGridComponent.prototype.dataSourceInfo;
    /** @type {?} */
    AafGridComponent.prototype.amount;
    /** @type {?} */
    AafGridComponent.prototype.paginator;
    /** @type {?} */
    AafGridComponent.prototype.sort;
    /** @type {?} */
    AafGridComponent.prototype.backEvent;
    /** @type {?} */
    AafGridComponent.prototype.doFilter;
    /** @type {?} */
    AafGridComponent.prototype.deleteAssignedKit;
    /**
     * @type {?}
     * @private
     */
    AafGridComponent.prototype.aafModalService;
    /**
     * @type {?}
     * @private
     */
    AafGridComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AafGridComponent.prototype.ngxService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS1haXJ0ZWwtYWZyaWNhLyIsInNvdXJjZXMiOlsibGliL2FhZi1ncmlkL2FhZi1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU8sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQVFqRSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFnQzNCLFlBQ1UsZUFBZ0MsRUFDaEMsTUFBYyxFQUNkLFVBQThCO1FBRjlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUF2QnhDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQU1sQyxtQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQiwyQkFBc0Is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QywwQ0FBb0I7O0lBQ3BCLGtDQUEyQjs7SUFFM0IscUNBQWlEOztJQUVqRCxnQ0FBa0M7O0lBR2xDLHFDQUFlOztJQUNmLG9DQUFjOztJQUNkLDZDQUFzQjs7Ozs7SUFFcEIsMkNBQXdDOzs7OztJQUN4QyxrQ0FBc0I7Ozs7O0lBQ3RCLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWFmR3JpZERhdGFQcm92aWRlciB9IGZyb20gJy4vYWFmLWdyaWQtZGF0YS1wcm92aWRlcic7XG5pbXBvcnQgeyBraXRSb3dEYXRhIH0gZnJvbSAnLi9raXRzLWRhdGEnO1xuaW1wb3J0IHsgYXNzaWduZWRLaXRSb3dEYXRhIH0gIGZyb20gJy4vYXNzaWduZWQta2l0cy1kYXRhJztcbmltcG9ydCB7IE5neFVpTG9hZGVyU2VydmljZSB9IGZyb20gJ25neC11aS1sb2FkZXInO1xuaW1wb3J0IHsgQWFmTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vYWFmLW1vZGFsL2FhZi1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWFmLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWFmLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hYWYtZ3JpZC5jb21wb25lbnQuY3NzJ10sXG4gIC8vcHJvdmlkZXJzOlsgQWFmTW9kYWxTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgQWFmR3JpZENvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIEFsbCB0aGUgY29uZmlndXJhdGlvbiBuZWVkIHRvIHBhc3MgaW4gQ29uZmlnIHZhcmlhYmxlIFxuICBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgLy8gQWxsIHRoZSBEYXRhIFNvdXJjZSBuZWVkIHRvIHBhc3MgYXMgaW4gRGF0YVByb3ZpZGVyIEZvcm1cbiAgQElucHV0KCkgZGF0YVByb3ZpZGVyOiBBYWZHcmlkRGF0YVByb3ZpZGVyPFQ+O1xuICAvLyBIZXJlIHdlIGFyZSBkZWNsYXJpbmcgYWxsIHRoZSB2YXJpYWJsZSB3aGljaCByZXF1aWUgY29uZmlndXJhdGlvbiBhbmQgbmVlZCB0byBwYXNzIHRvIHRoZSBIVE1MXG4gIGRpc3BsYXlpbmdDb2x1bW5zOmFueTtcbiAgZGlzcGxheWluZ0RhdGFTb3VyY2U6YW55O1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcbiAgZGF0YTogYW55O1xuICBzZWxlY3Rpb246IGFueTtcbiAgY29sdW1uczogYW55O1xuICBjaGVja0JveEZ1bmN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIGFjdGlvbkluZm86IGFueTtcbiAgZmlsdGVySW5mbzogYW55O1xuICBpdGVtUGVyUGFnZTogYW55O1xuICBsaXN0aW5nVHlwZTogYW55O1xuICBsaXN0SGVhZGVyOiBhbnk7XG4gIGFkdmFuY2VkU2VhcmNoOiBib29sZWFuID0gdHJ1ZTtcbiAgYWR2YW5jZUZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBkaWZmcmVudGlhdGVBc3NpZ25LaXRzOiBib29sZWFuID0gZmFsc2U7XG4gIGRhdGFTb3VyY2VJbmZvOiBhbnk7XG4gIGFtb3VudCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAvLyBGb3IgQW5ndWxhciBQYWdpbmF0aW9uIHdlIG5lZWQgcmVmIG9mIE1hdFBhZ2luYXRvclxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIC8vIEZvciBBbmd1bGFyIFNvcnRpbmcgd2UgbmVlZCByZWYgb2YgTWF0U29ydFxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgLy8gRXZlbnQgSGFuZGxlcnMgcGFzcyBmcm9tIENvbmZpZ3VyYXRpb24gd2lsbCBnb2luZyB0byBhc3NpZ24gb24gdGhlc2UgZGVmaW5lZCB2YXJpYWJsZXNcbiAgYmFja0V2ZW50OiBhbnk7XG4gIGRvRmlsdGVyOiBhbnk7XG4gIGRlbGV0ZUFzc2lnbmVkS2l0OmFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhYWZNb2RhbFNlcnZpY2U6IEFhZk1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcbiAgICBwcml2YXRlIG5neFNlcnZpY2U6IE5neFVpTG9hZGVyU2VydmljZVxuICApIHsgfVxuXG4gIC8vIEF0IGluaXRpbGl6aW5nIHRpbWUgc2V0IGNvbmZpZ3VyYXRpb24gYWxzbyBzZXQgZGF0YSBzb3VyY2VcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb25maWcuZmluYWxEeW5hbWljRGlzcGxheUNvbHVtbnM7XG4gICAgdGhpcy5jaGVja0JveEZ1bmN0aW9uID0gdGhpcy5jb25maWcuZnVuY3Rpb25hbGl0eUNoZWNrQm94O1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29uZmlnLmNvbHVtbkRhdGE7XG4gICAgdGhpcy5maWx0ZXJJbmZvID0gdGhpcy5jb25maWcuY3VzdG9tRmlsdGVycztcbiAgICB0aGlzLmFjdGlvbkluZm8gPSB0aGlzLmNvbmZpZy5hY3Rpb25BdHRyO1xuICAgIHRoaXMubGlzdGluZ1R5cGUgPSB0aGlzLmNvbmZpZy5jb25maWd1cmF0aW9uRm9yO1xuICAgIHRoaXMuaXRlbVBlclBhZ2UgPSB0aGlzLmNvbmZpZy5pdGVtUGVyUGFnZTtcbiAgICB0aGlzLmxpc3RIZWFkZXIgPSB0aGlzLmNvbmZpZy5saXN0SGVhZGVyO1xuICAgIHRoaXMuZGF0YVNvdXJjZUluZm8gPSB0aGlzLmNvbmZpZy5zb3VyY2VEYXRhSW5mbztcbiAgICAvLyBBbGwgRXZlbnRzIG5lZWQgdG8gYXNpZ24gaGVyZVxuICAgIHRoaXMuYmFja0V2ZW50ID0gdGhpcy5saXN0SGVhZGVyLmJhY2tJbmZvLmFjdGlvbjtcbiAgICB0aGlzLmRvRmlsdGVyID0gdGhpcy5maWx0ZXJJbmZvLnNlYXJjaEFjdGlvbjtcbiAgICAvL2RlbGV0ZUFzc2lnbmVkS2l0XG4gICAgLy8gV2UgcmVxdWlyZSBkYXRhU291cmNlIGhlcmUgU28gd2UgbmVlZCB0byBjYWxsIGdldExpc3REYXRhIGZ1bmN0aW9uIGZyb20gbmdPbkl0XG4gICAgdGhpcy5nZXRMaXN0RGF0YSgpO1xuICB9XG5cbiAgLy8gQ2FsbCB0byBGZXRjaCBEYXRhIGNvbW1vbmx5XG4gIGdldExpc3REYXRhKCkge1xuICAgIHRoaXMubmd4U2VydmljZS5zdGFydCgpO1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyLmdldERhdGEoKS5zdWJzY3JpYmUoXG4gICAgICByZXNwPT57XG5cbiAgICAgIH0sXG4gICAgICBlcnI9PntcbiAgICAgICAgbGV0IGxpc3RSb3dEYXRhO1xuICAgICAgICBpZih0aGlzLmxpc3RpbmdUeXBlID09ICd1c2Vycycpe1xuICAgICAgICAgIGxpc3RSb3dEYXRhID0gdGhpcy5nZXREYXRhU291cmNlKGFzc2lnbmVkS2l0Um93RGF0YSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGxpc3RSb3dEYXRhID0gdGhpcy5nZXREYXRhU291cmNlKGtpdFJvd0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2cobGlzdFJvd0RhdGEpO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGxpc3RSb3dEYXRhLmRhdGFTb3VyY2UpO1xuICAgICAgICB0aGlzLnJlZnJlc2hDb25maWd1cmF0aW9uKCk7XG4gICAgICB9LFxuICAgICAgKCk9PntcbiAgICAgICAgdGhpcy5uZ3hTZXJ2aWNlLnN0b3AoKTtcbiAgICAgIH1cbiAgICApO1xuICB9IFxuXG4gIC8vIFByZXBhcmUgRGF0YVNvdXJjZSBpbiB0aGUgQXJyYXkgYXMgcGVyIHRoZSBMaXN0aW5nIHJlcXVpcm1lbnRcbiAgZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlOiBhbnkpIHtcbiAgICBsZXQgZmluYWxLaXREYXRhU291cmNlID0gbmV3IEFycmF5KCk7XG4gICAgZmluYWxLaXREYXRhU291cmNlWydkYXRhU291cmNlJ10gPSBkYXRhU291cmNlO1xuICAgIHJldHVybiBmaW5hbEtpdERhdGFTb3VyY2U7XG4gIH1cblxuICAvLyBEZWxldGUgQXNzaWduZWQgS2l0IFVzZXJcbiAgZGVsZXRlVXNlcihyb3dEYXRhOmFueSl7XG5cbiAgfVxuXG4gIC8vIEdldCBhbGwga2l0cyBhcyBwZXIgcGFnaW5hdGlvbiBhcyB3ZWxsIGZpbHRlcnNcbiAgZ2V0a2l0cyhmaWx0ZXJzSW5mbzogYW55ID0gJycsIHBhZ2luYXRpb25JbmZvOiBhbnkgPSAnJykge1xuICAgIHRoaXMuZ2V0TGlzdERhdGEoKTtcbiAgICB0aGlzLnJlZnJlc2hDb25maWd1cmF0aW9uKCk7XG4gIH1cblxuICAvLyBHZXQgYWxsIGFzc2lnbmVkIGtpdHMgYXMgcGVyIHBhZ2luYXRpb24gYXMgd2VsbCBmaWx0ZXJzXG4gIGdldEFzc2lnbmVkS2l0cyhmaWx0ZXJzSW5mbzogYW55ID0gJycsIHBhZ2luYXRpb25JbmZvOiBhbnkgPSAnJykge1xuICAgIHRoaXMuZ2V0TGlzdERhdGEoKTtcbiAgICB0aGlzLnJlZnJlc2hDb25maWd1cmF0aW9uKCk7XG4gIH0gXG5cbiAgLy8gRG8gcmVmcmVzaCBhbGwgdGhlIExpc3RpbmcgY29uZmlndXJhdGlvblxuICByZWZyZXNoQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLmRhdGEucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vIEFsbCBFdmVudHMgbmVlZCB0byBhc2lnbiBoZXJlXG4gICAgdGhpcy5iYWNrRXZlbnQgPSB0aGlzLmxpc3RIZWFkZXIuYmFja0luZm8uYWN0aW9uO1xuXG4gICAgdGhpcy5saXN0aW5nVHlwZSA9PSAndXNlcnMnID8gdGhpcy5kaWZmcmVudGlhdGVBc3NpZ25LaXRzID0gdHJ1ZSA6IHRoaXMuZGlmZnJlbnRpYXRlQXNzaWduS2l0cyA9IGZhbHNlOyBcbiAgICBjb25zb2xlLmxvZygndGhpcy5saXN0aW5nVHlwZSA9ICcsIHRoaXMubGlzdGluZ1R5cGUpO1xuICB9XG5cbiAgYWR2YW5jZVNlYXJjaCgpe1xuICAgIHRoaXMuYWR2YW5jZWRTZWFyY2ggPSB0cnVlO1xuICAgIHRoaXMuYWR2YW5jZUZpbHRlciA9ICF0aGlzLmFkdmFuY2VGaWx0ZXI7XG4gIH1cblxuICAvLyBCYWNrIHRvIERhc2hib2FyZCBwYWdlXG4gIGJhY2tUb0Rhc2hib2FyZCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZGFzaGJvYXJkL2tpdC9wYW5lbCcpO1xuICB9XG5cbiAgLy8gS2l0IEZpbHRlcmluZyBBY3Rpb25cbiAga2l0RmlsdGVycygpIHtcbiAgICB0aGlzLmdldExpc3REYXRhKCk7XG4gIH1cblxuICAvLyBBc3NpZ25lZCBLaXQgRmlsdGVyIEFjdGlvblxuICBhc3NpZ25lZEtpdEZpbHRlcnMoKSB7XG4gICAgdGhpcy5nZXRMaXN0RGF0YSgpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgfVxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICB0aGlzLmRhdGEuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXG4gIGNoZWNrYm94TGFiZWwocm93PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaXNBbGxTZWxlY3RlZCgpID8gJ3NlbGVjdCcgOiAnZGVzZWxlY3QnfSBhbGxgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpID8gJ2Rlc2VsZWN0JyA6ICdzZWxlY3QnfSByb3cgJHtyb3cucG9zaXRpb24gKyAxfWA7XG4gIH1cblxufVxuICJdfQ==