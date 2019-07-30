import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class AafModalComponent implements OnInit {
    dialogRef: MatDialogRef<AafModalComponent>;
    data: any;
    constructor(dialogRef: MatDialogRef<AafModalComponent>, data: any);
    ngOnInit(): void;
}
