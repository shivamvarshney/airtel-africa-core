import { HttpClient } from '@angular/common/http';
export declare class TvmazeService {
    private http;
    private readonly apiRoot;
    constructor(http: HttpClient);
    getShows(id: number): import("rxjs").Observable<Object>;
}
