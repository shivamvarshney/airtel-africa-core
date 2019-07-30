import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvmazeService } from '../tvmaze.service';
export declare class PosterComponent implements OnInit {
    private tvmaze;
    showId: number;
    posterUrl$: Observable<string>;
    constructor(tvmaze: TvmazeService);
    ngOnInit(): void;
}
