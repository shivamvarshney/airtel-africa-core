/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CoreAirtelAfricaComponent } from './core-airtel-africa.component';
import { AafModalComponent } from './aaf-modal/aaf-modal.component';
import { AafGridComponent } from './aaf-grid/aaf-grid.component';
import { MaterialModules } from './material.module';
import { AafModalService } from './aaf-modal/aaf-modal.service';
var CoreAirtelAfricaModule = /** @class */ (function () {
    function CoreAirtelAfricaModule() {
    }
    CoreAirtelAfricaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CoreAirtelAfricaComponent, AafModalComponent, AafGridComponent],
                    imports: [
                        CommonModule,
                        MaterialModules,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxUiLoaderModule
                    ],
                    exports: [
                        AafModalComponent,
                        AafGridComponent
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [AafModalService]
                },] }
    ];
    return CoreAirtelAfricaModule;
}());
export { CoreAirtelAfricaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1haXJ0ZWwtYWZyaWNhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUtYWlydGVsLWFmcmljYS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWFpcnRlbC1hZnJpY2EubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFDLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFDLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFaEU7SUFBQTtJQWdCc0MsQ0FBQzs7Z0JBaEJ0QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQzlFLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtvQkFDbkMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUM3Qjs7SUFDcUMsNkJBQUM7Q0FBQSxBQWhCdkMsSUFnQnVDO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4VWlMb2FkZXJNb2R1bGUgfSBmcm9tICduZ3gtdWktbG9hZGVyJztcbmltcG9ydCB7IENvcmVBaXJ0ZWxBZnJpY2FDb21wb25lbnQgfSBmcm9tICcuL2NvcmUtYWlydGVsLWFmcmljYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWFmTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2FhZi1tb2RhbC9hYWYtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFhZkdyaWRDb21wb25lbnQgfSBmcm9tICcuL2FhZi1ncmlkL2FhZi1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZXMgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBBYWZNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2FhZi1tb2RhbC9hYWYtbW9kYWwuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvcmVBaXJ0ZWxBZnJpY2FDb21wb25lbnQsIEFhZk1vZGFsQ29tcG9uZW50LCBBYWZHcmlkQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZXMsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZ3hVaUxvYWRlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWFmTW9kYWxDb21wb25lbnQsXG4gICAgQWFmR3JpZENvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgcHJvdmlkZXJzOiBbQWFmTW9kYWxTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlQWlydGVsQWZyaWNhTW9kdWxlIHsgfVxuIl19