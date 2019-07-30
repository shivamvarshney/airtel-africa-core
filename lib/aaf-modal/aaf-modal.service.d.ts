import { MatDialog } from '@angular/material';
export declare class AafModalService {
    dialog: MatDialog;
    openDialog: any;
    constructor(dialog: MatDialog);
    openModal(modalData: any): void;
}
