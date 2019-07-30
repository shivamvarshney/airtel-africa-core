(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/dialog'), require('@angular/cdk/collections'), require('@angular/material/sort'), require('@angular/material/paginator'), require('@angular/router'), require('@angular/forms'), require('ngx-ui-loader'), require('@angular/core'), require('@angular/material/checkbox'), require('@angular/common'), require('@angular/material/table'), require('@angular/material/select'), require('@angular/material/snack-bar'), require('@angular/material/datepicker'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('core-airtel-africa', ['exports', '@angular/material/dialog', '@angular/cdk/collections', '@angular/material/sort', '@angular/material/paginator', '@angular/router', '@angular/forms', 'ngx-ui-loader', '@angular/core', '@angular/material/checkbox', '@angular/common', '@angular/material/table', '@angular/material/select', '@angular/material/snack-bar', '@angular/material/datepicker', '@angular/material'], factory) :
    (factory((global['core-airtel-africa'] = {}),global.ng.material.dialog,global.ng.cdk.collections,global.ng.material.sort,global.ng.material.paginator,global.ng.router,global.ng.forms,global.ngxUiLoader,global.ng.core,global.ng.material.checkbox,global.ng.common,global.ng.material.table,global.ng.material.select,global.ng.material['snack-bar'],global.ng.material.datepicker,global.ng.material));
}(this, (function (exports,i1,collections,sort,paginator,router,forms,ngxUiLoader,i0,checkbox,common,table,select,snackBar,datepicker,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'aaf-modal',
                        template: "<div>\n  <h1 mat-dialog-title>{{ data.title }}</h1>\n  <mat-divider></mat-divider>\n  <div mat-dialog-content>\n    <p class=\"pd-tp-12\">{{ data.reason }}</p>\n  </div>\n  <div mat-dialog-actions>\n    <button\n      mat-raised-button\n      color=\"warn\"\n      [mat-dialog-close]=\"data.animal\"\n      cdkFocusInitial\n    >\n      Ok\n    </button>\n  </div>\n</div>\n",
                        styles: [".pd-tp-12{padding-top:12px}"]
                    }] }
        ];
        /** @nocollapse */
        AafModalComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return AafModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                var dialogConfig = new material.MatDialogConfig();
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AafModalService.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        /** @nocollapse */ AafModalService.ngInjectableDef = i0.defineInjectable({ factory: function AafModalService_Factory() { return new AafModalService(i0.inject(i1.MatDialog)); }, token: AafModalService, providedIn: "root" });
        return AafModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var kitRowData = [
        { "kit_no": 1001, "oem": "Lorem Ipsum", "device_model": "HDJK1231", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1002, "oem": "Lorem Ipsum", "device_model": "HDJK1232", "sales_user": "", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1003, "oem": "Lorem Ipsum", "device_model": "HDJK1233", "sales_user": "John Smith", "channel_partner": "", "kit_status": "Assigned" },
        { "kit_no": 1004, "oem": "Lorem Ipsum", "device_model": "HDJK1234", "sales_user": "John Smith", "channel_partner": "", "kit_status": "Assigned" },
        { "kit_no": 1005, "oem": "Lorem Ipsum", "device_model": "HDJK1235", "sales_user": "", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1006, "oem": "Lorem Ipsum", "device_model": "HDJK1236", "sales_user": "", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1007, "oem": "Lorem Ipsum", "device_model": "HDJK1237", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1008, "oem": "Lorem Ipsum", "device_model": "HDJK1238", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1009, "oem": "Lorem Ipsum", "device_model": "HDJK1239", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1010, "oem": "Lorem Ipsum", "device_model": "HDJK1230", "sales_user": "", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1011, "oem": "Lorem Ipsum", "device_model": "HDJK1231", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1012, "oem": "Lorem Ipsum", "device_model": "HDJK1232", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1013, "oem": "Lorem Ipsum", "device_model": "HDJK1233", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1014, "oem": "Lorem Ipsum", "device_model": "HDJK1234", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1015, "oem": "Lorem Ipsum", "device_model": "HDJK1235", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1016, "oem": "Lorem Ipsum", "device_model": "HDJK1236", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1017, "oem": "Lorem Ipsum", "device_model": "HDJK1237", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1018, "oem": "Lorem Ipsum", "device_model": "HDJK1238", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1019, "oem": "Lorem Ipsum", "device_model": "HDJK1239", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1020, "oem": "Lorem Ipsum", "device_model": "HDJK1230", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1021, "oem": "Lorem Ipsum", "device_model": "HDJK1231", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1022, "oem": "Lorem Ipsum", "device_model": "HDJK1232", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1023, "oem": "Lorem Ipsum", "device_model": "HDJK1233", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1024, "oem": "Lorem Ipsum", "device_model": "HDJK1234", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1025, "oem": "Lorem Ipsum", "device_model": "HDJK1235", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1026, "oem": "Lorem Ipsum", "device_model": "HDJK1236", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1027, "oem": "Lorem Ipsum", "device_model": "HDJK1237", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1028, "oem": "Lorem Ipsum", "device_model": "HDJK1238", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1029, "oem": "Lorem Ipsum", "device_model": "HDJK1239", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1030, "oem": "Lorem Ipsum", "device_model": "HDJK1230", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1031, "oem": "Lorem Ipsum", "device_model": "HDJK1231", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1032, "oem": "Lorem Ipsum", "device_model": "HDJK1232", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1033, "oem": "Lorem Ipsum", "device_model": "HDJK1233", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1034, "oem": "Lorem Ipsum", "device_model": "HDJK1234", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1035, "oem": "Lorem Ipsum", "device_model": "HDJK1235", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1036, "oem": "Lorem Ipsum", "device_model": "HDJK1236", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1037, "oem": "Lorem Ipsum", "device_model": "HDJK1237", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1038, "oem": "Lorem Ipsum", "device_model": "HDJK1238", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1039, "oem": "Lorem Ipsum", "device_model": "HDJK1239", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1040, "oem": "Lorem Ipsum", "device_model": "HDJK1230", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1041, "oem": "Lorem Ipsum", "device_model": "HDJK1231", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1042, "oem": "Lorem Ipsum", "device_model": "HDJK1232", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1043, "oem": "Lorem Ipsum", "device_model": "HDJK1233", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1044, "oem": "Lorem Ipsum", "device_model": "HDJK1234", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1045, "oem": "Lorem Ipsum", "device_model": "HDJK1235", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1046, "oem": "Lorem Ipsum", "device_model": "HDJK1236", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1047, "oem": "Lorem Ipsum", "device_model": "HDJK1237", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1048, "oem": "Lorem Ipsum", "device_model": "HDJK1238", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1049, "oem": "Lorem Ipsum", "device_model": "HDJK1239", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
        { "kit_no": 1050, "oem": "Lorem Ipsum", "device_model": "HDJK1230", "sales_user": "John Smith", "channel_partner": "Lorem Ipsum", "kit_status": "Assigned" },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var assignedKitRowData = [
        { "id": 234235236237238, "name": "Alex", "role": "Sales" },
        { "id": 234235236237239, "name": "Abner", "role": "Sales" },
        { "id": 234235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 234235236237232, "name": "Bert", "role": "Channel" },
        { "id": 234235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 134235236237238, "name": "Alex", "role": "Sales" },
        { "id": 134235236237239, "name": "Abner", "role": "Sales" },
        { "id": 134235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 134235236237232, "name": "Bert", "role": "Channel" },
        { "id": 134235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 334235236237238, "name": "Alex", "role": "Sales" },
        { "id": 334235236237239, "name": "Abner", "role": "Sales" },
        { "id": 334235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 334235236237232, "name": "Bert", "role": "Channel" },
        { "id": 334235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 434235236237238, "name": "Alex", "role": "Sales" },
        { "id": 434235236237239, "name": "Abner", "role": "Sales" },
        { "id": 434235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 434235236237232, "name": "Bert", "role": "Channel" },
        { "id": 434235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 534235236237238, "name": "Alex", "role": "Sales" },
        { "id": 534235236237239, "name": "Abner", "role": "Sales" },
        { "id": 534235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 534235236237232, "name": "Bert", "role": "Channel" },
        { "id": 534235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 634235236237238, "name": "Alex", "role": "Sales" },
        { "id": 634235236237239, "name": "Abner", "role": "Sales" },
        { "id": 634235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 634235236237232, "name": "Bert", "role": "Channel" },
        { "id": 634235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 734235236237238, "name": "Alex", "role": "Sales" },
        { "id": 734235236237239, "name": "Abner", "role": "Sales" },
        { "id": 734235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 734235236237232, "name": "Bert", "role": "Channel" },
        { "id": 734235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 834235236237238, "name": "Alex", "role": "Sales" },
        { "id": 834235236237239, "name": "Abner", "role": "Sales" },
        { "id": 834235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 834235236237232, "name": "Bert", "role": "Channel" },
        { "id": 834235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 934235236237238, "name": "Alex", "role": "Sales" },
        { "id": 934235236237239, "name": "Abner", "role": "Sales" },
        { "id": 934235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 934235236237232, "name": "Bert", "role": "Channel" },
        { "id": 934235236237233, "name": "Blaine", "role": "Channel" },
        { "id": 1034235236237238, "name": "Alex", "role": "Sales" },
        { "id": 10234235236237239, "name": "Abner", "role": "Sales" },
        { "id": 10234235236237231, "name": "Alexander", "role": "Sales" },
        { "id": 10234235236237232, "name": "Bert", "role": "Channel" },
        { "id": 10234235236237233, "name": "Blaine", "role": "Channel" }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var AafGridComponent = /** @class */ (function () {
        function AafGridComponent(aafModalService, router$$1, ngxService) {
            this.aafModalService = aafModalService;
            this.router = router$$1;
            this.ngxService = ngxService;
            this.checkBoxFunction = false;
            this.advancedSearch = true;
            this.advanceFilter = false;
            this.diffrentiateAssignKits = false;
            this.amount = new forms.FormControl();
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
                this.dataProvider.getData().subscribe(( /**
                 * @param {?} resp
                 * @return {?}
                 */function (resp) {
                }), ( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    /** @type {?} */
                    var listRowData;
                    if (_this.listingType == 'users') {
                        listRowData = _this.getDataSource(assignedKitRowData);
                    }
                    else {
                        listRowData = _this.getDataSource(kitRowData);
                    }
                    //console.log(listRowData);
                    _this.data = new table.MatTableDataSource(listRowData.dataSource);
                    _this.refreshConfiguration();
                }), ( /**
                 * @return {?}
                 */function () {
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
                if (filtersInfo === void 0) {
                    filtersInfo = '';
                }
                if (paginationInfo === void 0) {
                    paginationInfo = '';
                }
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
                if (filtersInfo === void 0) {
                    filtersInfo = '';
                }
                if (paginationInfo === void 0) {
                    paginationInfo = '';
                }
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
                this.selection = new collections.SelectionModel(true, []);
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
                    this.data.data.forEach(( /**
                     * @param {?} row
                     * @return {?}
                     */function (row) { return _this.selection.select(row); }));
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
            { type: i0.Component, args: [{
                        selector: 'aaf-grid',
                        template: "<!-- Filters Info -->\n    <!-- *ngIf=\"!diffrentiateAssignKits\" -->\n    <div class=\"list-top-header\">\n      <section *ngIf=\"listHeader\" class=\"tondo-regular d-i-block\">\n          <div *ngIf=\"listHeader.backInfo\"  class=\"d-i-block\">\n              <p class=\"m-0\">\n                  <a href=\"JavaScript:Void(0);\" (click)=\"this[backEvent]()\">\n                  <img class=\"back-icon\" src=\"assets/fonts/svg/{{ listHeader.backInfo.imageName }}\" />\n                  <span class=\"back\">{{listHeader.backInfo.title}}</span>\n                  </a>\n              </p>\n          </div> \n          <div *ngIf=\"listHeader.listTitle\" class=\"d-i-block\">\n              <p class=\"list-title\">\n                  {{listHeader.listTitle}}\n              </p>\n          </div> \n      </section>\n  \n      <section class=\"d-i-block kits\" [ngClass]=\"{ 'section-kit': advancedSearch }\" *ngIf=\"!diffrentiateAssignKits\">\n          <div *ngIf=\"!advanceFilter\">\n              <div *ngIf=\"filterInfo.default\">\n                  <div *ngFor=\"let defaultFilter of filterInfo.default\">\n                      <div *ngIf=\"defaultFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\" [ngClass]=\"{ 'input-kit': advancedSearch }\">\n                              <mat-label *ngIf=\"defaultFilter.label\">{{defaultFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"defaultFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"defaultFilter.inputType == 'select'\">\n                          <mat-select *ngIf=\"defaultFilter.options\" placeholder=\"{{defaultFilter.placeholder}}\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of defaultFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div *ngIf=\"advanceFilter && !diffrentiateAssignKits\" class=\"d-i-block\">\n              <div *ngIf=\"filterInfo.default\" class=\"d-i-block default-block\">\n                  <div *ngFor=\"let defaultFilter of filterInfo.default\" class=\"d-i-block\">\n                      <div *ngIf=\"defaultFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\">\n                              <mat-label *ngIf=\"defaultFilter.label\">{{defaultFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"defaultFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"defaultFilter.inputType == 'select'\">\n                          <mat-select *ngIf=\"defaultFilter.options\" placeholder=\"{{defaultFilter.placeholder}}\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of defaultFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n              <div *ngIf=\"filterInfo.advance\" class=\"d-i-block filter-parent\">\n                  <div *ngFor=\"let advanceFilter of filterInfo.advance\" class=\"d-i-block select-option\">\n                      <div *ngIf=\"advanceFilter.inputType == 'text'\" class=\"d-i-block\">\n                          <mat-form-field class=\"input-border\">\n                              <mat-label *ngIf=\"advanceFilter.label\">{{advanceFilter.label}}</mat-label>\n                              <input matInput [placeholder]=\"advanceFilter.placeHolder\" [formControl]=\"amount\">\n                          </mat-form-field>\n                      </div>\n                      <div *ngIf=\"advanceFilter.inputType == 'select'\" class=\"mat-opt\">\n                          <mat-select *ngIf=\"advanceFilter.options\" [placeholder]=\"advanceFilter.placeHolder\">\n                              <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of advanceFilter.options\">\n                                  {{actionOptions}}\n                              </mat-option>\n                          </mat-select>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </section>\n      <section class=\"d-i-block float-right\" *ngIf=\"!diffrentiateAssignKits\">\n          <div  class=\"d-i-block\">\n              <button (click)=\"this[doFilter]()\" class=\"search-btn\">Search</button>\n          </div>\n      </section>\n      <div *ngIf=\"filterInfo.searchButton && !diffrentiateAssignKits\"> \n          <div  class=\"search-btn-adv\">\n              <a class=\"a-search\" (click)=\"advanceSearch()\">Advanced Search</a>\n          </div>\n      </div>\n      </div>\n      <div *ngIf=\"diffrentiateAssignKits\">\n          <div class=\"search-box\">\n              <input class=\"input-search-box\" type=\"text\" placeholder=\"Search Users by Name / MSISDN / AUUID\" />\n          </div>\n      </div>\n      <!-- Table Structure Starts from Here -->\n      <div class=\"table-responsive\">\n      <table *ngIf=\"data\" mat-table [dataSource]=\"data\" matSort class=\"mat-elevation-z8 table-column\">\n          <!-- CheckBox Implementation -->\n          <!-- <ng-container *ngIf=\"checkBoxFunction\" matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox \n                    (change)=\"$event ? masterToggle() : null\" \n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\" \n                    [aria-label]=\"checkboxLabel()\">\n                  </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                  </mat-checkbox>\n              </td>\n          </ng-container> -->\n          <!-- Dynamic Column with Header Implementation -->\n          <ng-container *ngFor=\"let column of columns\" matColumnDef=\"{{column.name}}\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>{{column.label}}</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element[column.name] ? element[column.name] : '--'}} </td>\n          </ng-container>\n          <!-- Actions Column Implementation -->\n          <ng-container matColumnDef=\"actions\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element\">\n                  <ng-container *ngFor=\"let action of actionInfo\">\n                      <mat-select *ngIf=\"action.type === 'select' && action.options\" placeholder=\"{{action.name}}\">\n                          <mat-option [value]=\"actionOptions\" *ngFor=\"let actionOptions of action.options\">\n                              {{actionOptions}}\n                          </mat-option>\n                      </mat-select>\n                      <div *ngIf=\"action.type === 'button'\" class=\"d-i-block f-16 img-wrapper\">\n                          <figure *ngIf=\"action.icon\" class=\"text-center m-0\">\n                              <img src=\"assets/fonts/svg/{{ action.iconName }}\" alt=\"\">\n                          </figure>\n                          {{action.name}}\n                      </div>\n                  </ng-container>\n              </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></tr>\n      </table>\n      </div>\n      <mat-paginator class=\"custom-pagination\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>",
                        styles: [".list-top-header{padding:18px 26px 8px 40px;border:1px solid #707070}.back{font-size:18px;color:#ed1c24;padding:0 20px 0 15px}.list-title{font-size:26px;color:#ed1c24}.back-icon{height:auto;width:23px;vertical-align:top}.input-border{width:148px;height:39px}.input-border input{padding:5px 0 5px 10px;border:1px solid #d7dae2;margin:0;height:39px;border-radius:2px;width:147px;box-shadow:1px 1px 1px 1px #d7dae2}.input-border .mat-form-field-wrapper{padding-bottom:0}.search-btn{height:39px;width:168px;outline:0;border:none;font-size:18px;color:#ed1c24;padding:0;border-radius:3px;background:#f5f5f5}.a-search{color:#01a9f4!important;font-size:13px;cursor:pointer}.list-top-header .tondo-regular.d-i-block{vertical-align:top;margin-right:52px}.search-btn-adv{text-align:right;width:82%}.select-option{display:inline-block;width:148px;margin-right:34px;vertical-align:top;box-shadow:1px 1px 1px 1px #d7dae2}.filter-parent{vertical-align:top}.filter-parent .mat-opt{padding:9px 10px;border:1px solid #d7dae2;border-radius:3px}.default-block{margin-right:34px}.input-kit{width:248px;margin-right:34px}.input-kit input{width:248px}.section-kit{width:65.5%;text-align:right}.table-column td.mat-cell,td.mat-footer-cell,th.mat-header-cell{font-size:17px;width:4%;font-family:tondo-regular;color:#707070;padding:30px 0 10px 25px}.m-0 a:hover{text-decoration:none}.search-box{color:#fff;height:65px}.input-search-box{height:100%;width:100%;font-size:22px;color:#fff;padding-left:23px;border:none;background:#707070}.search-box ::-webkit-input-placeholder{color:#fff}.search-box ::placeholder{color:#fff}.search-box :-ms-input-placeholder{color:#fff}.search-box ::-ms-input-placeholder{color:#fff}.img-wrapper{margin-left:51px}.img-wrapper figure.text-center.m-0{padding-bottom:12px}@media screen and (max-width:767px){.list-title{font-size:20px}.list-top-header{padding:18px 26px 8px 20px}.input-search-box{font-size:16px}.search-box{height:50px}.img-wrapper{margin-left:0;width:80px;text-align:center}.back{font-size:16px;padding:0 10px}.img-wrapper figure.text-center.m-0{padding-bottom:5px}.img-wrapper figure.text-center.m-0 img{width:20%}}"]
                    }] }
        ];
        /** @nocollapse */
        AafGridComponent.ctorParameters = function () {
            return [
                { type: AafModalService },
                { type: router.Router },
                { type: ngxUiLoader.NgxUiLoaderService }
            ];
        };
        AafGridComponent.propDecorators = {
            config: [{ type: i0.Input }],
            dataProvider: [{ type: i0.Input }],
            paginator: [{ type: i0.ViewChild, args: [paginator.MatPaginator,] }],
            sort: [{ type: i0.ViewChild, args: [sort.MatSort,] }]
        };
        return AafGridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreAirtelAfricaComponent = /** @class */ (function () {
        function CoreAirtelAfricaComponent() {
        }
        /**
         * @return {?}
         */
        CoreAirtelAfricaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CoreAirtelAfricaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aaf-core-airtel-africa',
                        template: "\n    <p>\n      core-airtel-africa works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        CoreAirtelAfricaComponent.ctorParameters = function () { return []; };
        return CoreAirtelAfricaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //MAT_DIALOG_DEFAULT_OPTIONS
    var MaterialModules = /** @class */ (function () {
        function MaterialModules() {
        }
        MaterialModules.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatInputModule,
                            material.MatDialogModule,
                            table.MatTableModule,
                            material.MatMenuModule,
                            material.MatIconModule,
                            material.MatProgressSpinnerModule,
                            material.MatGridListModule,
                            material.MatPaginatorModule,
                            select.MatSelectModule,
                            snackBar.MatSnackBarModule,
                            datepicker.MatDatepickerModule,
                            checkbox.MatCheckboxModule,
                            material.MatSortModule,
                            material.MatFormFieldModule,
                            material.MatDividerModule,
                            material.MatTooltipModule
                            //MAT_DIALOG_DEFAULT_OPTIONS
                        ],
                        exports: [
                            common.CommonModule,
                            material.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatInputModule,
                            material.MatDialogModule,
                            table.MatTableModule,
                            material.MatMenuModule,
                            material.MatIconModule,
                            material.MatProgressSpinnerModule,
                            material.MatGridListModule,
                            material.MatPaginatorModule,
                            select.MatSelectModule,
                            snackBar.MatSnackBarModule,
                            datepicker.MatDatepickerModule,
                            checkbox.MatCheckboxModule,
                            material.MatSortModule,
                            material.MatFormFieldModule,
                            material.MatDividerModule,
                            material.MatTooltipModule
                            //MAT_DIALOG_DEFAULT_OPTIONS
                        ],
                    },] }
        ];
        return MaterialModules;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreAirtelAfricaModule = /** @class */ (function () {
        function CoreAirtelAfricaModule() {
        }
        CoreAirtelAfricaModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CoreAirtelAfricaComponent, AafModalComponent, AafGridComponent],
                        imports: [
                            common.CommonModule,
                            MaterialModules,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ngxUiLoader.NgxUiLoaderModule
                        ],
                        exports: [
                            AafModalComponent,
                            AafGridComponent
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        providers: [AafModalService]
                    },] }
        ];
        return CoreAirtelAfricaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AafModalService = AafModalService;
    exports.AafModalComponent = AafModalComponent;
    exports.AafGridComponent = AafGridComponent;
    exports.CoreAirtelAfricaComponent = CoreAirtelAfricaComponent;
    exports.CoreAirtelAfricaModule = CoreAirtelAfricaModule;
    exports.ɵa = MaterialModules;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=core-airtel-africa.umd.js.map