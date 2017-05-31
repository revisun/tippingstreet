"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AboutComponent = class AboutComponent {
    constructor() {
        this.aboutString = '<span><h1>About Us</h1><p><em>Tripping Street </em> is a real estate advertising';
        this.aboutString = this.aboutString + ' and marketing service provider.  It is our desire at TrippingStreet.com';
        this.aboutString = this.aboutString + ' to make it quick and easy for you to search and find real estate located';
        this.aboutString = this.aboutString + ' across Bataan, Olongapo City & Zambales.</p></span>';
    }
};
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: 'modules/about/about.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQW1FO0FBT25FLElBQWEsY0FBYyxHQUEzQjtJQUVFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxrRkFBa0YsQ0FBQztRQUNsRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsMEVBQTBFLENBQUM7UUFDakgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLDJFQUEyRSxDQUFDO1FBQ2xILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxzREFBc0QsQ0FBQTtJQUNsRyxDQUFDO0NBRUYsQ0FBQTtBQVRZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQzs7R0FDVyxjQUFjLENBUzFCO0FBVFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Fib3V0JyxcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuICBwdWJsaWMgYWJvdXRTdHJpbmc6IHN0cmluZztcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuYWJvdXRTdHJpbmcgPSAnPHNwYW4+PGgxPkFib3V0IFVzPC9oMT48cD48ZW0+VHJpcHBpbmcgU3RyZWV0IDwvZW0+IGlzIGEgcmVhbCBlc3RhdGUgYWR2ZXJ0aXNpbmcnO1xuICAgICAgICB0aGlzLmFib3V0U3RyaW5nID0gdGhpcy5hYm91dFN0cmluZyArICcgYW5kIG1hcmtldGluZyBzZXJ2aWNlIHByb3ZpZGVyLiAgSXQgaXMgb3VyIGRlc2lyZSBhdCBUcmlwcGluZ1N0cmVldC5jb20nO1xuICAgICAgICB0aGlzLmFib3V0U3RyaW5nID0gdGhpcy5hYm91dFN0cmluZyArICcgdG8gbWFrZSBpdCBxdWljayBhbmQgZWFzeSBmb3IgeW91IHRvIHNlYXJjaCBhbmQgZmluZCByZWFsIGVzdGF0ZSBsb2NhdGVkJztcbiAgICAgICAgdGhpcy5hYm91dFN0cmluZyA9IHRoaXMuYWJvdXRTdHJpbmcgKyAnIGFjcm9zcyBCYXRhYW4sIE9sb25nYXBvIENpdHkgJiBaYW1iYWxlcy48L3A+PC9zcGFuPidcbiAgfVxuICAvLyB0ZXh0OiBzdHJpbmcgPSAnQWJvdXQgUGFnZSc7IFxufVxuIl19