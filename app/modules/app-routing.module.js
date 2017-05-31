"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("nativescript-angular/router");
const home_component_1 = require("./home/home.component");
const sa_component_1 = require("./sa/sa.component");
const sps_component_1 = require("./sps/sps.component");
const about_component_1 = require("./about/about.component");
const contact_component_1 = require("./contact/contact.component");
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'sa', component: sa_component_1.SaComponent },
                { path: 'sps', component: sps_component_1.SpsComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXlDO0FBRXpDLHdEQUF1RTtBQUV2RSwwREFBc0Q7QUFDdEQsb0RBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCw2REFBeUQ7QUFDekQsbUVBQStEO0FBYy9ELElBQWEsZ0JBQWdCLEdBQTdCO0NBRUMsQ0FBQTtBQUZZLGdCQUFnQjtJQVo1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtnQkFDdEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSwwQkFBVyxFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUU7Z0JBQ3hDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtnQkFDNUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTthQUNqRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYUNvbXBvbmVudCB9IGZyb20gJy4vc2Evc2EuY29tcG9uZW50JztcbmltcG9ydCB7IFNwc0NvbXBvbmVudCB9IGZyb20gJy4vc3BzL3Nwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc2EnLCBjb21wb25lbnQ6IFNhQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdzcHMnLCBjb21wb25lbnQ6IFNwc0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdjb250YWN0JywgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHtcblxufVxuIl19