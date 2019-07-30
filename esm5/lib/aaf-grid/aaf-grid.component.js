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
var AafGridComponent = /** @class */ (function () {
    function AafGridComponent(aafModalService, router, ngxService) {
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
    // At initilizing time set configuration also set data source
    /**
     * @return {?}
     */
    AafGridComponent.prototype.ngOnInit = 
    // At initilizing time set configuration also set data source
    /**
     * @return {?}
     */
    function () {
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
    };
    // Call to Fetch Data commonly
    // Call to Fetch Data commonly
    /**
     * @return {?}
     */
    AafGridComponent.prototype.getListData = 
    // Call to Fetch Data commonly
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngxService.start();
        this.dataProvider.getData().subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            /** @type {?} */
            var listRowData;
            if (_this.listingType == 'users') {
                listRowData = _this.getDataSource(assignedKitRowData);
            }
            else {
                listRowData = _this.getDataSource(kitRowData);
            }
            //console.log(listRowData);
            _this.data = new MatTableDataSource(listRowData.dataSource);
            _this.refreshConfiguration();
        }), (/**
         * @return {?}
         */
        function () {
            _this.ngxService.stop();
        }));
    };
    // Prepare DataSource in the Array as per the Listing requirment
    // Prepare DataSource in the Array as per the Listing requirment
    /**
     * @param {?} dataSource
     * @return {?}
     */
    AafGridComponent.prototype.getDataSource = 
    // Prepare DataSource in the Array as per the Listing requirment
    /**
     * @param {?} dataSource
     * @return {?}
     */
    function (dataSource) {
        /** @type {?} */
        var finalKitDataSource = new Array();
        finalKitDataSource['dataSource'] = dataSource;
        return finalKitDataSource;
    };
    // Delete Assigned Kit User
    // Delete Assigned Kit User
    /**
     * @param {?} rowData
     * @return {?}
     */
    AafGridComponent.prototype.deleteUser = 
    // Delete Assigned Kit User
    /**
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
    };
    // Get all kits as per pagination as well filters
    // Get all kits as per pagination as well filters
    /**
     * @param {?=} filtersInfo
     * @param {?=} paginationInfo
     * @return {?}
     */
    AafGridComponent.prototype.getkits = 
    // Get all kits as per pagination as well filters
    /**
     * @param {?=} filtersInfo
     * @param {?=} paginationInfo
     * @return {?}
     */
    function (filtersInfo, paginationInfo) {
        if (filtersInfo === void 0) { filtersInfo = ''; }
        if (paginationInfo === void 0) { paginationInfo = ''; }
        this.getListData();
        this.refreshConfiguration();
    };
    // Get all assigned kits as per pagination as well filters
    // Get all assigned kits as per pagination as well filters
    /**
     * @param {?=} filtersInfo
     * @param {?=} paginationInfo
     * @return {?}
     */
    AafGridComponent.prototype.getAssignedKits = 
    // Get all assigned kits as per pagination as well filters
    /**
     * @param {?=} filtersInfo
     * @param {?=} paginationInfo
     * @return {?}
     */
    function (filtersInfo, paginationInfo) {
        if (filtersInfo === void 0) { filtersInfo = ''; }
        if (paginationInfo === void 0) { paginationInfo = ''; }
        this.getListData();
        this.refreshConfiguration();
    };
    // Do refresh all the Listing configuration
    // Do refresh all the Listing configuration
    /**
     * @return {?}
     */
    AafGridComponent.prototype.refreshConfiguration = 
    // Do refresh all the Listing configuration
    /**
     * @return {?}
     */
    function () {
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        this.selection = new SelectionModel(true, []);
        // All Events need to asign here
        this.backEvent = this.listHeader.backInfo.action;
        this.listingType == 'users' ? this.diffrentiateAssignKits = true : this.diffrentiateAssignKits = false;
        console.log('this.listingType = ', this.listingType);
    };
    /**
     * @return {?}
     */
    AafGridComponent.prototype.advanceSearch = /**
     * @return {?}
     */
    function () {
        this.advancedSearch = true;
        this.advanceFilter = !this.advanceFilter;
    };
    // Back to Dashboard page
    // Back to Dashboard page
    /**
     * @return {?}
     */
    AafGridComponent.prototype.backToDashboard = 
    // Back to Dashboard page
    /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/dashboard/kit/panel');
    };
    // Kit Filtering Action
    // Kit Filtering Action
    /**
     * @return {?}
     */
    AafGridComponent.prototype.kitFilters = 
    // Kit Filtering Action
    /**
     * @return {?}
     */
    function () {
        this.getListData();
    };
    // Assigned Kit Filter Action
    // Assigned Kit Filter Action
    /**
     * @return {?}
     */
    AafGridComponent.prototype.assignedKitFilters = 
    // Assigned Kit Filter Action
    /**
     * @return {?}
     */
    function () {
        this.getListData();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    AafGridComponent.prototype.isAllSelected = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        /** @type {?} */
        var numRows = this.data.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    AafGridComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.data.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.selection.select(row); }));
    };
    /** The label for the checkbox on the passed row */
    /**
     * The label for the checkbox on the passed row
     * @param {?} row
     * @return {?}
     */
    AafGridComponent.prototype.checkboxLabel = /**
     * The label for the checkbox on the passed row
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    AafGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aaf-grid',
                    template: "<!-- Filters Info -->\n    <!-- *ngIf=\"!diffrentiateAssignKits\" -->\n    <div class=\"list-top-header\">\n      <section *ngIf=\"listHeader\" class=\"tondo-regular d-i-block\">\n          <div *ngIf=\"listHeader.backInfo\"  class=\"d-i-block\">\n              <p class=\"m-0\">\n                  <a href=\"JavaScript:Void(0);\" (click)=\"this[backEvent]()\">\n                  <img class=\"back-icon\" src=\"assets/fonts/svg/{{ listHeader.backInfo.imageName }}\" />\n                  <span class=\"back\">{{listHeader.backInfo.title}}</span>\n                  </a>\n              </p>\n          </div> \n          <div *ngIf=\"listHeader.listTitle\" class=\"d-i-block\">\n              <p class=\"list-title\">\n                  {{listHeader.listTitle}}\n              </p>\n          </div> \n      </section>\n  \n      <section class=\"d-i-block kits\" [ngClass]=\"{ 'section-kit': advancedSearch }\" *ngIf=\"!diffrentiateAssignKits\">\n          <div *ngIf=\"!advanceFilter\">\n              <div *ngIf=\"filterInfo.default\">\n                  <div *ngFor=\"let defaultFilter of filterInfo.default\">\n                      <div *ngIf=\"defaultFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\" [ngClass]=\"{ 'input-kit': advancedSearch }\">\n                              <mat-label *ngIf=\"defaultFilter.label\">{{defaultFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"defaultFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"defaultFilter.inputType == 'select'\">\n                          <mat-select *ngIf=\"defaultFilter.options\" placeholder=\"{{defaultFilter.placeholder}}\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of defaultFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div *ngIf=\"advanceFilter && !diffrentiateAssignKits\" class=\"d-i-block\">\n              <div *ngIf=\"filterInfo.default\" class=\"d-i-block default-block\">\n                  <div *ngFor=\"let defaultFilter of filterInfo.default\" class=\"d-i-block\">\n                      <div *ngIf=\"defaultFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\">\n                              <mat-label *ngIf=\"defaultFilter.label\">{{defaultFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"defaultFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"defaultFilter.inputType == 'select'\">\n                          <mat-select *ngIf=\"defaultFilter.options\" placeholder=\"{{defaultFilter.placeholder}}\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of defaultFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n              <div *ngIf=\"filterInfo.advance\" class=\"d-i-block filter-parent\">\n                  <div *ngFor=\"let advanceFilter of filterInfo.advance\" class=\"d-i-block select-option\">\n                      <div *ngIf=\"advanceFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\">\n                              <mat-label *ngIf=\"advanceFilter.label\">{{advanceFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"advanceFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"advanceFilter.inputType == 'select'\" class=\"mat-opt\">\n                          <mat-select *ngIf=\"advanceFilter.options\" [placeholder]=\"advanceFilter.placeHolder\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of advanceFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </section>\n      <section class=\"d-i-block float-right\" *ngIf=\"!diffrentiateAssignKits\">\n          <div  class=\"d-i-block\">\n              <button (click)=\"this[doFilter]()\" class=\"search-btn\">Search</button>\n          </div>\n      </section>\n      <div *ngIf=\"filterInfo.searchButton && !diffrentiateAssignKits\"> \n          <div  class=\"search-btn-adv\">\n              <a class=\"a-search\" (click)=\"advanceSearch()\">Advanced Search</a>\n          </div>\n      </div>\n      </div>\n      <div *ngIf=\"diffrentiateAssignKits\">\n          <div class=\"search-box\">\n              <input class=\"input-search-box\" type=\"text\" placeholder=\"Search Users by Name / MSISDN / AUUID\" />\n          </div>\n      </div>\n      <!-- Table Structure Starts from Here -->\n      <div class=\"table-responsive\">\n      <table *ngIf=\"data\" mat-table [dataSource]=\"data\" matSort class=\"mat-elevation-z8 table-column\">\n          <!-- CheckBox Implementation -->\n          <!-- <ng-container *ngIf=\"checkBoxFunction\" matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox \n                    (change)=\"$event ? masterToggle() : null\" \n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\" \n                    [aria-label]=\"checkboxLabel()\">\n                  </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                  </mat-checkbox>\n              </td>\n          </ng-container> -->\n          <!-- Dynamic Column with Header Implementation -->\n          <ng-container *ngFor=\"let column of columns\" matColumnDef=\"{{column.name}}\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>{{column.label}}</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element[column.name] ? element[column.name] : '--'}} </td>\n          </ng-container>\n          <!-- Actions Column Implementation -->\n          <ng-container matColumnDef=\"actions\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element\">\n                  <ng-container *ngFor=\"let action of actionInfo\">\n                      <mat-select *ngIf=\"action.type === 'select' && action.options\" placeholder=\"{{action.name}}\">\n                          <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of action.options\">\n                              {{actionOptions}}\n                          </mat-option>\n                      </mat-select>\n                      <div *ngIf=\"action.type === 'button'\" class=\"d-i-block f-16 img-wrapper\">\n                          <figure *ngIf=\"action.icon\" class=\"text-center m-0\">\n                              <img src=\"assets/fonts/svg/{{ action.iconName }}\" alt=\"\">\n                          </figure>\n                          {{action.name}}\n                      </div>\n                  </ng-container>\n              </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></tr>\n      </table>\n      </div>\n      <mat-paginator class=\"custom-pagination\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>",
                    styles: [".list-top-header{padding:18px 26px 8px 40px;border:1px solid #707070}.back{font-size:18px;color:#ed1c24;padding:0 20px 0 15px}.list-title{font-size:26px;color:#ed1c24}.back-icon{height:auto;width:23px;vertical-align:top}.input-border{width:148px;height:39px}.input-border input{padding:5px 0 5px 10px;border:1px solid #d7dae2;margin:0;height:39px;border-radius:2px;width:147px;box-shadow:1px 1px 1px 1px #d7dae2}.input-border .mat-form-field-wrapper{padding-bottom:0}.search-btn{height:39px;width:168px;outline:0;border:none;font-size:18px;color:#ed1c24;padding:0;border-radius:3px;background:#f5f5f5}.a-search{color:#01a9f4!important;font-size:13px;cursor:pointer}.list-top-header .tondo-regular.d-i-block{vertical-align:top;margin-right:52px}.search-btn-adv{text-align:right;width:82%}.select-option{display:inline-block;width:148px;margin-right:34px;vertical-align:top;box-shadow:1px 1px 1px 1px #d7dae2}.filter-parent{vertical-align:top}.filter-parent .mat-opt{padding:9px 10px;border:1px solid #d7dae2;border-radius:3px}.default-block{margin-right:34px}.input-kit{width:248px;margin-right:34px}.input-kit input{width:248px}.section-kit{width:65.5%;text-align:right}.table-column td.mat-cell,td.mat-footer-cell,th.mat-header-cell{font-size:17px;width:4%;font-family:tondo-regular;color:#707070;padding:30px 0 10px 25px}.m-0 a:hover{text-decoration:none}.search-box{color:#fff;height:65px}.input-search-box{height:100%;width:100%;font-size:22px;color:#fff;padding-left:23px;border:none;background:#707070}.search-box ::-webkit-input-placeholder{color:#fff}.search-box ::placeholder{color:#fff}.search-box :-ms-input-placeholder{color:#fff}.search-box ::-ms-input-placeholder{color:#fff}.img-wrapper{margin-left:51px}.img-wrapper figure.text-center.m-0{padding-bottom:12px}@media screen and (max-width:767px){.list-title{font-size:20px}.list-top-header{padding:18px 26px 8px 20px}.input-search-box{font-size:16px}.search-box{height:50px}.img-wrapper{margin-left:0;width:80px;text-align:center}.back{font-size:16px;padding:0 10px}.img-wrapper figure.text-center.m-0{padding-bottom:5px}.img-wrapper figure.text-center.m-0 img{width:20%}}"]
                }] }
    ];
    /** @nocollapse */
    AafGridComponent.ctorParameters = function () { return [
        { type: AafModalService },
        { type: Router },
        { type: NgxUiLoaderService }
    ]; };
    AafGridComponent.propDecorators = {
        config: [{ type: Input }],
        dataProvider: [{ type: Input }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }]
    };
    return AafGridComponent;
}());
export { AafGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS1haXJ0ZWwtYWZyaWNhLyIsInNvdXJjZXMiOlsibGliL2FhZi1ncmlkL2FhZi1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU8sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUVqRTtJQXNDRSwwQkFDVSxlQUFnQyxFQUNoQyxNQUFjLEVBQ2QsVUFBOEI7UUFGOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQXZCeEMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBTWxDLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxX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RUFBRSxVQUFVO29CQUNwQix1clFBQXdDOztpQkFHekM7Ozs7Z0JBUFEsZUFBZTtnQkFMZixNQUFNO2dCQUlOLGtCQUFrQjs7O3lCQVd4QixLQUFLOytCQUVMLEtBQUs7NEJBb0JMLFNBQVMsU0FBQyxZQUFZO3VCQUV0QixTQUFTLFNBQUMsT0FBTzs7SUFtSXBCLHVCQUFDO0NBQUEsQUFuS0QsSUFtS0M7U0E3SlksZ0JBQWdCOzs7SUFFM0Isa0NBQXFCOztJQUVyQix3Q0FBOEM7O0lBRTlDLDZDQUFzQjs7SUFDdEIsZ0RBQXlCOztJQUN6Qiw0Q0FBMkI7O0lBQzNCLGdDQUFVOztJQUNWLHFDQUFlOztJQUNmLG1DQUFhOztJQUNiLDRDQUFrQzs7SUFDbEMsc0NBQWdCOztJQUNoQixzQ0FBZ0I7O0lBQ2hCLHVDQUFpQjs7SUFDakIsdUNBQWlCOztJQUNqQixzQ0FBZ0I7O0lBQ2hCLDBDQUErQjs7SUFDL0IseUNBQStCOztJQUMvQixrREFBd0M7O0lBQ3hDLDBDQUFvQjs7SUFDcEIsa0NBQTJCOztJQUUzQixxQ0FBaUQ7O0lBRWpELGdDQUFrQzs7SUFHbEMscUNBQWU7O0lBQ2Ysb0NBQWM7O0lBQ2QsNkNBQXNCOzs7OztJQUVwQiwyQ0FBd0M7Ozs7O0lBQ3hDLGtDQUFzQjs7Ozs7SUFDdEIsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYWZHcmlkRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9hYWYtZ3JpZC1kYXRhLXByb3ZpZGVyJztcbmltcG9ydCB7IGtpdFJvd0RhdGEgfSBmcm9tICcuL2tpdHMtZGF0YSc7XG5pbXBvcnQgeyBhc3NpZ25lZEtpdFJvd0RhdGEgfSAgZnJvbSAnLi9hc3NpZ25lZC1raXRzLWRhdGEnO1xuaW1wb3J0IHsgTmd4VWlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXVpLWxvYWRlcic7XG5pbXBvcnQgeyBBYWZNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9hYWYtbW9kYWwvYWFmLW1vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYWYtZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYWYtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FhZi1ncmlkLmNvbXBvbmVudC5jc3MnXSxcbiAgLy9wcm92aWRlcnM6WyBBYWZNb2RhbFNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBBYWZHcmlkQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gQWxsIHRoZSBjb25maWd1cmF0aW9uIG5lZWQgdG8gcGFzcyBpbiBDb25maWcgdmFyaWFibGUgXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICAvLyBBbGwgdGhlIERhdGEgU291cmNlIG5lZWQgdG8gcGFzcyBhcyBpbiBEYXRhUHJvdmlkZXIgRm9ybVxuICBASW5wdXQoKSBkYXRhUHJvdmlkZXI6IEFhZkdyaWREYXRhUHJvdmlkZXI8VD47XG4gIC8vIEhlcmUgd2UgYXJlIGRlY2xhcmluZyBhbGwgdGhlIHZhcmlhYmxlIHdoaWNoIHJlcXVpZSBjb25maWd1cmF0aW9uIGFuZCBuZWVkIHRvIHBhc3MgdG8gdGhlIEhUTUxcbiAgZGlzcGxheWluZ0NvbHVtbnM6YW55O1xuICBkaXNwbGF5aW5nRGF0YVNvdXJjZTphbnk7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xuICBkYXRhOiBhbnk7XG4gIHNlbGVjdGlvbjogYW55O1xuICBjb2x1bW5zOiBhbnk7XG4gIGNoZWNrQm94RnVuY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWN0aW9uSW5mbzogYW55O1xuICBmaWx0ZXJJbmZvOiBhbnk7XG4gIGl0ZW1QZXJQYWdlOiBhbnk7XG4gIGxpc3RpbmdUeXBlOiBhbnk7XG4gIGxpc3RIZWFkZXI6IGFueTtcbiAgYWR2YW5jZWRTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xuICBhZHZhbmNlRmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGRpZmZyZW50aWF0ZUFzc2lnbktpdHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGF0YVNvdXJjZUluZm86IGFueTtcbiAgYW1vdW50ID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIC8vIEZvciBBbmd1bGFyIFBhZ2luYXRpb24gd2UgbmVlZCByZWYgb2YgTWF0UGFnaW5hdG9yXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgLy8gRm9yIEFuZ3VsYXIgU29ydGluZyB3ZSBuZWVkIHJlZiBvZiBNYXRTb3J0XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcblxuICAvLyBFdmVudCBIYW5kbGVycyBwYXNzIGZyb20gQ29uZmlndXJhdGlvbiB3aWxsIGdvaW5nIHRvIGFzc2lnbiBvbiB0aGVzZSBkZWZpbmVkIHZhcmlhYmxlc1xuICBiYWNrRXZlbnQ6IGFueTtcbiAgZG9GaWx0ZXI6IGFueTtcbiAgZGVsZXRlQXNzaWduZWRLaXQ6YW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFhZk1vZGFsU2VydmljZTogQWFmTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxuICAgIHByaXZhdGUgbmd4U2VydmljZTogTmd4VWlMb2FkZXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgLy8gQXQgaW5pdGlsaXppbmcgdGltZSBzZXQgY29uZmlndXJhdGlvbiBhbHNvIHNldCBkYXRhIHNvdXJjZVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbmZpZy5maW5hbER5bmFtaWNEaXNwbGF5Q29sdW1ucztcbiAgICB0aGlzLmNoZWNrQm94RnVuY3Rpb24gPSB0aGlzLmNvbmZpZy5mdW5jdGlvbmFsaXR5Q2hlY2tCb3g7XG4gICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb25maWcuY29sdW1uRGF0YTtcbiAgICB0aGlzLmZpbHRlckluZm8gPSB0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXJzO1xuICAgIHRoaXMuYWN0aW9uSW5mbyA9IHRoaXMuY29uZmlnLmFjdGlvbkF0dHI7XG4gICAgdGhpcy5saXN0aW5nVHlwZSA9IHRoaXMuY29uZmlnLmNvbmZpZ3VyYXRpb25Gb3I7XG4gICAgdGhpcy5pdGVtUGVyUGFnZSA9IHRoaXMuY29uZmlnLml0ZW1QZXJQYWdlO1xuICAgIHRoaXMubGlzdEhlYWRlciA9IHRoaXMuY29uZmlnLmxpc3RIZWFkZXI7XG4gICAgdGhpcy5kYXRhU291cmNlSW5mbyA9IHRoaXMuY29uZmlnLnNvdXJjZURhdGFJbmZvO1xuICAgIC8vIEFsbCBFdmVudHMgbmVlZCB0byBhc2lnbiBoZXJlXG4gICAgdGhpcy5iYWNrRXZlbnQgPSB0aGlzLmxpc3RIZWFkZXIuYmFja0luZm8uYWN0aW9uO1xuICAgIHRoaXMuZG9GaWx0ZXIgPSB0aGlzLmZpbHRlckluZm8uc2VhcmNoQWN0aW9uO1xuICAgIC8vZGVsZXRlQXNzaWduZWRLaXRcbiAgICAvLyBXZSByZXF1aXJlIGRhdGFTb3VyY2UgaGVyZSBTbyB3ZSBuZWVkIHRvIGNhbGwgZ2V0TGlzdERhdGEgZnVuY3Rpb24gZnJvbSBuZ09uSXRcbiAgICB0aGlzLmdldExpc3REYXRhKCk7XG4gIH1cblxuICAvLyBDYWxsIHRvIEZldGNoIERhdGEgY29tbW9ubHlcbiAgZ2V0TGlzdERhdGEoKSB7XG4gICAgdGhpcy5uZ3hTZXJ2aWNlLnN0YXJ0KCk7XG4gICAgdGhpcy5kYXRhUHJvdmlkZXIuZ2V0RGF0YSgpLnN1YnNjcmliZShcbiAgICAgIHJlc3A9PntcblxuICAgICAgfSxcbiAgICAgIGVycj0+e1xuICAgICAgICBsZXQgbGlzdFJvd0RhdGE7XG4gICAgICAgIGlmKHRoaXMubGlzdGluZ1R5cGUgPT0gJ3VzZXJzJyl7XG4gICAgICAgICAgbGlzdFJvd0RhdGEgPSB0aGlzLmdldERhdGFTb3VyY2UoYXNzaWduZWRLaXRSb3dEYXRhKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbGlzdFJvd0RhdGEgPSB0aGlzLmdldERhdGFTb3VyY2Uoa2l0Um93RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaXN0Um93RGF0YSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UobGlzdFJvd0RhdGEuZGF0YVNvdXJjZSk7XG4gICAgICAgIHRoaXMucmVmcmVzaENvbmZpZ3VyYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICAoKT0+e1xuICAgICAgICB0aGlzLm5neFNlcnZpY2Uuc3RvcCgpO1xuICAgICAgfVxuICAgICk7XG4gIH0gXG5cbiAgLy8gUHJlcGFyZSBEYXRhU291cmNlIGluIHRoZSBBcnJheSBhcyBwZXIgdGhlIExpc3RpbmcgcmVxdWlybWVudFxuICBnZXREYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSkge1xuICAgIGxldCBmaW5hbEtpdERhdGFTb3VyY2UgPSBuZXcgQXJyYXkoKTtcbiAgICBmaW5hbEtpdERhdGFTb3VyY2VbJ2RhdGFTb3VyY2UnXSA9IGRhdGFTb3VyY2U7XG4gICAgcmV0dXJuIGZpbmFsS2l0RGF0YVNvdXJjZTtcbiAgfVxuXG4gIC8vIERlbGV0ZSBBc3NpZ25lZCBLaXQgVXNlclxuICBkZWxldGVVc2VyKHJvd0RhdGE6YW55KXtcblxuICB9XG5cbiAgLy8gR2V0IGFsbCBraXRzIGFzIHBlciBwYWdpbmF0aW9uIGFzIHdlbGwgZmlsdGVyc1xuICBnZXRraXRzKGZpbHRlcnNJbmZvOiBhbnkgPSAnJywgcGFnaW5hdGlvbkluZm86IGFueSA9ICcnKSB7XG4gICAgdGhpcy5nZXRMaXN0RGF0YSgpO1xuICAgIHRoaXMucmVmcmVzaENvbmZpZ3VyYXRpb24oKTtcbiAgfVxuXG4gIC8vIEdldCBhbGwgYXNzaWduZWQga2l0cyBhcyBwZXIgcGFnaW5hdGlvbiBhcyB3ZWxsIGZpbHRlcnNcbiAgZ2V0QXNzaWduZWRLaXRzKGZpbHRlcnNJbmZvOiBhbnkgPSAnJywgcGFnaW5hdGlvbkluZm86IGFueSA9ICcnKSB7XG4gICAgdGhpcy5nZXRMaXN0RGF0YSgpO1xuICAgIHRoaXMucmVmcmVzaENvbmZpZ3VyYXRpb24oKTtcbiAgfSBcblxuICAvLyBEbyByZWZyZXNoIGFsbCB0aGUgTGlzdGluZyBjb25maWd1cmF0aW9uXG4gIHJlZnJlc2hDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydDtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgLy8gQWxsIEV2ZW50cyBuZWVkIHRvIGFzaWduIGhlcmVcbiAgICB0aGlzLmJhY2tFdmVudCA9IHRoaXMubGlzdEhlYWRlci5iYWNrSW5mby5hY3Rpb247XG5cbiAgICB0aGlzLmxpc3RpbmdUeXBlID09ICd1c2VycycgPyB0aGlzLmRpZmZyZW50aWF0ZUFzc2lnbktpdHMgPSB0cnVlIDogdGhpcy5kaWZmcmVudGlhdGVBc3NpZ25LaXRzID0gZmFsc2U7IFxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmxpc3RpbmdUeXBlID0gJywgdGhpcy5saXN0aW5nVHlwZSk7XG4gIH1cblxuICBhZHZhbmNlU2VhcmNoKCl7XG4gICAgdGhpcy5hZHZhbmNlZFNlYXJjaCA9IHRydWU7XG4gICAgdGhpcy5hZHZhbmNlRmlsdGVyID0gIXRoaXMuYWR2YW5jZUZpbHRlcjtcbiAgfVxuXG4gIC8vIEJhY2sgdG8gRGFzaGJvYXJkIHBhZ2VcbiAgYmFja1RvRGFzaGJvYXJkKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9kYXNoYm9hcmQva2l0L3BhbmVsJyk7XG4gIH1cblxuICAvLyBLaXQgRmlsdGVyaW5nIEFjdGlvblxuICBraXRGaWx0ZXJzKCkge1xuICAgIHRoaXMuZ2V0TGlzdERhdGEoKTtcbiAgfVxuXG4gIC8vIEFzc2lnbmVkIEtpdCBGaWx0ZXIgQWN0aW9uXG4gIGFzc2lnbmVkS2l0RmlsdGVycygpIHtcbiAgICB0aGlzLmdldExpc3REYXRhKCk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGg7XG4gICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICB9XG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgIHRoaXMuZGF0YS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgfVxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0J30gYWxsYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3RoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KSA/ICdkZXNlbGVjdCcgOiAnc2VsZWN0J30gcm93ICR7cm93LnBvc2l0aW9uICsgMX1gO1xuICB9XG5cbn1cbiAiXX0=