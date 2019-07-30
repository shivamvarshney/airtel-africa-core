import { OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AafGridDataProvider } from './aaf-grid-data-provider';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AafModalService } from '../aaf-modal/aaf-modal.service';
export declare class AafGridComponent<T> implements OnInit {
    private aafModalService;
    private router;
    private ngxService;
    config: any;
    dataProvider: AafGridDataProvider<T>;
    displayingColumns: any;
    displayingDataSource: any;
    displayedColumns: string[];
    data: any;
    selection: any;
    columns: any;
    checkBoxFunction: boolean;
    actionInfo: any;
    filterInfo: any;
    itemPerPage: any;
    listingType: any;
    listHeader: any;
    advancedSearch: boolean;
    advanceFilter: boolean;
    diffrentiateAssignKits: boolean;
    dataSourceInfo: any;
    amount: FormControl;
    paginator: MatPaginator;
    sort: MatSort;
    backEvent: any;
    doFilter: any;
    deleteAssignedKit: any;
    constructor(aafModalService: AafModalService, router: Router, ngxService: NgxUiLoaderService);
    ngOnInit(): void;
    getListData(): void;
    getDataSource(dataSource: any): any[];
    deleteUser(rowData: any): void;
    getkits(filtersInfo?: any, paginationInfo?: any): void;
    getAssignedKits(filtersInfo?: any, paginationInfo?: any): void;
    refreshConfiguration(): void;
    advanceSearch(): void;
    backToDashboard(): void;
    kitFilters(): void;
    assignedKitFilters(): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string;
}
