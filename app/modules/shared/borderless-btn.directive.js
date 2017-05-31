"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_1 = require("tns-core-modules/platform");
const application = require("tns-core-modules/application");
/**
 * Android Only.
 *
 * Directive which removes border from the button when applied on android.
 */
let BorderlessBtnDirective = class BorderlessBtnDirective {
    constructor(_el) {
        this._el = _el;
    }
    setBorderlessBackground() {
        let outValue = new android.util.TypedValue();
        application.android.context.getTheme().resolveAttribute(android.R.attr.selectableItemBackground, outValue, true);
        this.nsBtn.android.setBackgroundResource(outValue.resourceId);
    }
    ngOnInit() {
        if (platform_1.isAndroid) {
            this.nsBtn = this._el.nativeElement;
            // if the view has already loaded - set immediately
            if (this.nsBtn.isLoaded) {
                this.setBorderlessBackground();
            }
            // Attach the setter for future loaded events
            this.nsBtn.on('loaded', () => { this.setBorderlessBackground(); });
        }
    }
    ngOnDestroy() {
        // Cleanup
        if (platform_1.isAndroid) {
            this.nsBtn.off('loaded');
            this.nsBtn = undefined;
        }
    }
};
BorderlessBtnDirective = __decorate([
    core_1.Directive({
        selector: '.borderless-btn'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BorderlessBtnDirective);
exports.BorderlessBtnDirective = BorderlessBtnDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXlFO0FBR3pFLHdEQUFzRDtBQUN0RCw0REFBNEQ7QUFJNUQ7Ozs7R0FJRztBQUlILElBQWEsc0JBQXNCLEdBQW5DO0lBSUUsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFBSSxDQUFDO0lBRXhDLHVCQUF1QjtRQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0MsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQ3JELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQ3hELENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFFNUMsbURBQW1EO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDakMsQ0FBQztZQUVELDZDQUE2QztZQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULFVBQVU7UUFDVixFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQW5DWSxzQkFBc0I7SUFIbEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7S0FDNUIsQ0FBQztxQ0FLeUIsaUJBQVU7R0FKeEIsc0JBQXNCLENBbUNsQztBQW5DWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG4vKipcbiAqIEFuZHJvaWQgT25seS5cbiAqXG4gKiBEaXJlY3RpdmUgd2hpY2ggcmVtb3ZlcyBib3JkZXIgZnJvbSB0aGUgYnV0dG9uIHdoZW4gYXBwbGllZCBvbiBhbmRyb2lkLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICcuYm9yZGVybGVzcy1idG4nXG59KVxuZXhwb3J0IGNsYXNzIEJvcmRlcmxlc3NCdG5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBuc0J0bjogQnV0dG9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cblxuICBzZXRCb3JkZXJsZXNzQmFja2dyb3VuZCgpIHtcbiAgICBsZXQgb3V0VmFsdWUgPSBuZXcgYW5kcm9pZC51dGlsLlR5cGVkVmFsdWUoKTtcbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmNvbnRleHQuZ2V0VGhlbWUoKS5yZXNvbHZlQXR0cmlidXRlKFxuICAgICAgYW5kcm9pZC5SLmF0dHIuc2VsZWN0YWJsZUl0ZW1CYWNrZ3JvdW5kLCBvdXRWYWx1ZSwgdHJ1ZVxuICAgICk7XG4gICAgdGhpcy5uc0J0bi5hbmRyb2lkLnNldEJhY2tncm91bmRSZXNvdXJjZShvdXRWYWx1ZS5yZXNvdXJjZUlkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHRoaXMubnNCdG4gPSA8QnV0dG9uPnRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIC8vIGlmIHRoZSB2aWV3IGhhcyBhbHJlYWR5IGxvYWRlZCAtIHNldCBpbW1lZGlhdGVseVxuICAgICAgaWYgKHRoaXMubnNCdG4uaXNMb2FkZWQpIHtcbiAgICAgICAgdGhpcy5zZXRCb3JkZXJsZXNzQmFja2dyb3VuZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBBdHRhY2ggdGhlIHNldHRlciBmb3IgZnV0dXJlIGxvYWRlZCBldmVudHNcbiAgICAgIHRoaXMubnNCdG4ub24oJ2xvYWRlZCcsICgpID0+IHsgdGhpcy5zZXRCb3JkZXJsZXNzQmFja2dyb3VuZCgpOyB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBDbGVhbnVwXG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgdGhpcy5uc0J0bi5vZmYoJ2xvYWRlZCcpO1xuICAgICAgdGhpcy5uc0J0biA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==