"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
const side_drawer_page_1 = require("./side-drawer-page");
const borderless_btn_directive_1 = require("./borderless-btn.directive");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
        ],
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ],
        exports: [
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBeUM7QUFFekMsa0ZBQThFO0FBQzlFLHdFQUFtRjtBQUVuRix5REFBNkQ7QUFDN0QseUVBQW9FO0FBZ0JwRSxJQUFhLFlBQVksR0FBekI7Q0FFQyxDQUFBO0FBRlksWUFBWTtJQWR4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7U0FDbkI7UUFDRCxZQUFZLEVBQUU7WUFDWiwrQkFBcUI7WUFDckIsMENBQXVCO1lBQ3ZCLGlEQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLDBDQUF1QjtZQUN2QixpREFBc0I7U0FDdkI7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUV4QjtBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1kcmF3ZXItcGFnZSc7XG5pbXBvcnQgeyBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlIH0gZnJvbSAnLi9ib3JkZXJsZXNzLWJ0bi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG5cbn1cbiJdfQ==