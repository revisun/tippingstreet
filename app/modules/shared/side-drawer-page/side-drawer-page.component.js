"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var action_bar_1 = require("ui/action-bar");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var SideDrawerPageComponent = (function () {
    function SideDrawerPageComponent(routerExtensions, activatedRoute, page, ngZone) {
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
    SideDrawerPageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SideDrawerPageComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    SideDrawerPageComponent.prototype.toggleSideDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    /**
     * Navigates to next page after drawer is closed.
     */
    SideDrawerPageComponent.prototype.navigateTo = function (routeCommands) {
        var _this = this;
        this.drawer.closeDrawer();
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        var newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', function () {
                _this.ngZone.run(function () {
                    _this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    _this.isContentVisible = true;
                });
            });
        }
    };
    SideDrawerPageComponent.prototype.setDrawerTransition = function () {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    };
    SideDrawerPageComponent.prototype.setActionBarIcon = function (page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    };
    SideDrawerPageComponent.prototype.getNavigationButton = function () {
        var navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_black';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    };
    SideDrawerPageComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return SideDrawerPageComponent;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBRXVCO0FBQ3ZCLDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsZ0NBQStCO0FBQy9CLHFDQUE0QztBQUM1Qyw0Q0FBMkM7QUFDM0Msc0VBRW9EO0FBQ3BELGlFQUU0QztBQU81QyxJQUFhLHVCQUF1QjtJQTBCbEMsaUNBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLElBQVUsRUFDVixNQUFjO1FBSGQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzQnhCOztXQUVHO1FBQ0gscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBT2pDOztXQUVHO1FBQ0gsWUFBTyxHQUFVO1lBQ2YsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtTQUM1QyxDQUFDO1FBVUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixD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QXBCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUF6R0QsSUF5R0M7QUF4R29DO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQWtCLGdDQUFzQjtnRUFBQztBQURoRSx1QkFBdUI7SUFMbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGlFQUFpRTtRQUM5RSxTQUFTLEVBQUUsQ0FBQyxnRUFBZ0UsQ0FBQztLQUM5RSxDQUFDO3FDQTRCNEIseUJBQWdCO1FBQ2xCLHVCQUFjO1FBQ3hCLFdBQUk7UUFDRixhQUFNO0dBOUJiLHVCQUF1QixDQXlHbkM7QUF6R1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSAndWkvYWN0aW9uLWJhcic7XG5pbXBvcnQge1xuICBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZVxufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgUHVzaFRyYW5zaXRpb24sIFNsaWRlSW5PblRvcFRyYW5zaXRpb25cbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGUtZHJhd2VyLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc2hhcmVkL3NpZGUtZHJhd2VyLXBhZ2Uvc2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtb2R1bGVzL3NoYXJlZC9zaWRlLWRyYXdlci1wYWdlL3NpZGUtZHJhd2VyLXBhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIE9uIHRhcCBvZiBhbnkgc2lkZS1kcmF3ZXIgaXRlbSwgaGlkaW5nIGNvbnRlbnQgaWYgdGhpcyBmbGFnIGlzIHRydWUuXG4gICAqL1xuICBpc0NvbnRlbnRWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogRm9yIGFuZHJvaWQgdXNpbmcgU2xpZGVPblRvcCB0cmFuc2l0aW9uIGFuZCBmb3IgaU9TLCBwdXNoIHRyYW5zaXRpb24uXG4gICAqL1xuICBkcmF3ZXJUcmFuc2l0aW9uOiBhbnk7XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gTWVudSBJdGVtc1xuICAgKi9cbiAgbmF2TWVudTogYW55W10gPSBbXG4gICAgeyBuYW1lOiAnQnV5ZXJzXFwncyBBY2NvdW50JywgY29tbWFuZHM6IFsnLyddIH0sXG4gICAgeyBuYW1lOiAnU2VsbGVyc1xcJ3MgQWNjb3VudCcsIGNvbW1hbmRzOiBbJy9zYSddIH0sXG4gICAgeyBuYW1lOiAnU2VsbGluZyBQcmljZSBTaW11bGF0b3InLCBjb21tYW5kczogWycvc3BzJ10gfSxcbiAgICB7IG5hbWU6ICdBYm91dCcsIGNvbW1hbmRzOiBbJy9hYm91dCddIH0sXG4gICAgeyBuYW1lOiAnQ29udGFjdCcsIGNvbW1hbmRzOiBbJy9jb250YWN0J10gfVxuICBdO1xuXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5zZXRBY3Rpb25CYXJJY29uKHRoaXMucGFnZSk7XG4gICAgdGhpcy5zZXREcmF3ZXJUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gbmV4dCBwYWdlIGFmdGVyIGRyYXdlciBpcyBjbG9zZWQuXG4gICAqL1xuICBuYXZpZ2F0ZVRvKHJvdXRlQ29tbWFuZHM6IGFueVtdKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICBsZXQgY3VycmVudFVybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsO1xuICAgIGxldCBuZXdVcmxUcmVlID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5jcmVhdGVVcmxUcmVlKHJvdXRlQ29tbWFuZHMpO1xuICAgIGxldCBuZXdVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnNlcmlhbGl6ZVVybChuZXdVcmxUcmVlKTtcbiAgICBpZiAoY3VycmVudFVybCAhPT0gbmV3VXJsKSB7XG4gICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kcmF3ZXIub24oJ2RyYXdlckNsb3NlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUocm91dGVDb21tYW5kcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaXNDb250ZW50VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREcmF3ZXJUcmFuc2l0aW9uKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHRoaXMuZHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgUHVzaFRyYW5zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGlvbkJhckljb24ocGFnZTogUGFnZSkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSB0aGlzLmdldE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLmFkZEl0ZW0odGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkJ1dHRvbigpIHtcbiAgICBsZXQgbmF2QWN0aW9uSXRlbSA9IG5ldyBBY3Rpb25JdGVtKCk7XG4gICAgbmF2QWN0aW9uSXRlbS5pY29uID0gJ3JlczovL2ljX21lbnVfYmxhY2snO1xuICAgIGlmIChuYXZBY3Rpb25JdGVtLmlvcykge1xuICAgICAgbmF2QWN0aW9uSXRlbS5pb3MucG9zaXRpb24gPSAnbGVmdCc7XG4gICAgfVxuICAgIG5hdkFjdGlvbkl0ZW0ub24oJ3RhcCcsIHRoaXMudG9nZ2xlRHJhd2VyLmJpbmQodGhpcykpO1xuICAgIHJldHVybiBuYXZBY3Rpb25JdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxufVxuIl19