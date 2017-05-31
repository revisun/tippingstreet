"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const router_2 = require("nativescript-angular/router");
const page_1 = require("tns-core-modules/ui/page");
const platform_1 = require("tns-core-modules/platform");
const action_bar_1 = require("tns-core-modules/ui/action-bar");
const angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
const sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
let SideDrawerPageComponent = class SideDrawerPageComponent {
    constructor(routerExtensions, activatedRoute, page, ngZone) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.page = page;
        this.ngZone = ngZone;
        /**
         * On tap of any side-drawer item, hiding content if this flag is true.
         */
        this.isContentVisible = true;
        /**
         * Navigation Menu Items
         */
        this.navMenu = [
            { name: 'Buyers\'s Account', commands: ['/'] },
            { name: 'Sellers\'s Account', commands: ['/sa'] },
            { name: 'Selling Price Simulator', commands: ['/sps'] },
            { name: 'About', commands: ['/about'] },
            { name: 'Contact', commands: ['/contact'] }
        ];
        this.setActionBarIcon(this.page);
        this.setDrawerTransition();
    }
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    ngOnDestroy() {
        this.drawer.off('drawerClosed');
    }
    toggleSideDrawer() {
        this.drawer.toggleDrawerState();
    }
    /**
     * Navigates to next page after drawer is closed.
     */
    navigateTo(routeCommands) {
        this.drawer.closeDrawer();
        let currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        let newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        let newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', () => {
                this.ngZone.run(() => {
                    this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    this.isContentVisible = true;
                });
            });
        }
    }
    setDrawerTransition() {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    }
    setActionBarIcon(page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    }
    getNavigationButton() {
        let navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_black';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    }
    toggleDrawer() {
        this.drawer.toggleDrawerState();
    }
};
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerPageComponent.prototype, "drawerComponent", void 0);
SideDrawerPageComponent = __decorate([
    core_1.Component({
        selector: 'side-drawer-page',
        templateUrl: 'modules/shared/side-drawer-page/side-drawer-page.component.html',
        styleUrls: ['modules/shared/side-drawer-page/side-drawer-page.component.css']
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.ActivatedRoute,
        page_1.Page,
        core_1.NgZone])
], SideDrawerPageComponent);
exports.SideDrawerPageComponent = SideDrawerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUV1QjtBQUN2Qiw0Q0FBaUQ7QUFDakQsd0RBQStEO0FBRS9ELG1EQUFnRDtBQUNoRCx3REFBNkQ7QUFDN0QsK0RBQTREO0FBQzVELHdFQUVvRDtBQUNwRCxtRUFFNEM7QUFPNUMsSUFBYSx1QkFBdUIsR0FBcEM7SUEwQkUsWUFDVSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsSUFBVSxFQUNWLE1BQWM7UUFIZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTNCeEI7O1dBRUc7UUFDSCxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFPakM7O1dBRUc7UUFDSCxZQUFPLEdBQVU7WUFDZixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1NBQzVDLENBQUM7UUFVQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLGFBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN2RSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzFDO3dCQUNFLFlBQVksRUFBRSxJQUFJO3dCQUNsQixRQUFRLEVBQUUsS0FBSztxQkFDaEIsQ0FBQyxDQUFDO29CQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDdkQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksMkJBQWMsRUFBRSxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsSUFBVTtRQUNqQyxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0QsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxhQUFhLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdEMsQ0FBQztRQUNELGFBQWEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7QUF4R29DO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQWtCLGdDQUFzQjtnRUFBQztBQURoRSx1QkFBdUI7SUFMbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGlFQUFpRTtRQUM5RSxTQUFTLEVBQUUsQ0FBQyxnRUFBZ0UsQ0FBQztLQUM5RSxDQUFDO3FDQTRCNEIseUJBQWdCO1FBQ2xCLHVCQUFjO1FBQ3hCLFdBQUk7UUFDRixhQUFNO0dBOUJiLHVCQUF1QixDQXlHbkM7QUF6R1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhcic7XG5pbXBvcnQge1xuICBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZVxufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgUHVzaFRyYW5zaXRpb24sIFNsaWRlSW5PblRvcFRyYW5zaXRpb25cbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGUtZHJhd2VyLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc2hhcmVkL3NpZGUtZHJhd2VyLXBhZ2Uvc2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtb2R1bGVzL3NoYXJlZC9zaWRlLWRyYXdlci1wYWdlL3NpZGUtZHJhd2VyLXBhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIE9uIHRhcCBvZiBhbnkgc2lkZS1kcmF3ZXIgaXRlbSwgaGlkaW5nIGNvbnRlbnQgaWYgdGhpcyBmbGFnIGlzIHRydWUuXG4gICAqL1xuICBpc0NvbnRlbnRWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogRm9yIGFuZHJvaWQgdXNpbmcgU2xpZGVPblRvcCB0cmFuc2l0aW9uIGFuZCBmb3IgaU9TLCBwdXNoIHRyYW5zaXRpb24uXG4gICAqL1xuICBkcmF3ZXJUcmFuc2l0aW9uOiBhbnk7XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gTWVudSBJdGVtc1xuICAgKi9cbiAgbmF2TWVudTogYW55W10gPSBbXG4gICAgeyBuYW1lOiAnQnV5ZXJzXFwncyBBY2NvdW50JywgY29tbWFuZHM6IFsnLyddIH0sXG4gICAgeyBuYW1lOiAnU2VsbGVyc1xcJ3MgQWNjb3VudCcsIGNvbW1hbmRzOiBbJy9zYSddIH0sXG4gICAgeyBuYW1lOiAnU2VsbGluZyBQcmljZSBTaW11bGF0b3InLCBjb21tYW5kczogWycvc3BzJ10gfSxcbiAgICB7IG5hbWU6ICdBYm91dCcsIGNvbW1hbmRzOiBbJy9hYm91dCddIH0sXG4gICAgeyBuYW1lOiAnQ29udGFjdCcsIGNvbW1hbmRzOiBbJy9jb250YWN0J10gfVxuICBdO1xuXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5zZXRBY3Rpb25CYXJJY29uKHRoaXMucGFnZSk7XG4gICAgdGhpcy5zZXREcmF3ZXJUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gbmV4dCBwYWdlIGFmdGVyIGRyYXdlciBpcyBjbG9zZWQuXG4gICAqL1xuICBuYXZpZ2F0ZVRvKHJvdXRlQ29tbWFuZHM6IGFueVtdKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICBsZXQgY3VycmVudFVybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsO1xuICAgIGxldCBuZXdVcmxUcmVlID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5jcmVhdGVVcmxUcmVlKHJvdXRlQ29tbWFuZHMpO1xuICAgIGxldCBuZXdVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnNlcmlhbGl6ZVVybChuZXdVcmxUcmVlKTtcbiAgICBpZiAoY3VycmVudFVybCAhPT0gbmV3VXJsKSB7XG4gICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kcmF3ZXIub24oJ2RyYXdlckNsb3NlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUocm91dGVDb21tYW5kcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaXNDb250ZW50VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREcmF3ZXJUcmFuc2l0aW9uKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHRoaXMuZHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgUHVzaFRyYW5zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGlvbkJhckljb24ocGFnZTogUGFnZSkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSB0aGlzLmdldE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLmFkZEl0ZW0odGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkJ1dHRvbigpIHtcbiAgICBsZXQgbmF2QWN0aW9uSXRlbSA9IG5ldyBBY3Rpb25JdGVtKCk7XG4gICAgbmF2QWN0aW9uSXRlbS5pY29uID0gJ3JlczovL2ljX21lbnVfYmxhY2snO1xuICAgIGlmIChuYXZBY3Rpb25JdGVtLmlvcykge1xuICAgICAgbmF2QWN0aW9uSXRlbS5pb3MucG9zaXRpb24gPSAnbGVmdCc7XG4gICAgfVxuICAgIG5hdkFjdGlvbkl0ZW0ub24oJ3RhcCcsIHRoaXMudG9nZ2xlRHJhd2VyLmJpbmQodGhpcykpO1xuICAgIHJldHVybiBuYXZBY3Rpb25JdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxufVxuIl19