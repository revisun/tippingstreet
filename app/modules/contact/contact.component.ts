import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'contact',
    templateUrl: 'modules/contact/contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    public contactString: string;
    constructor(){
        this.contactString = '<span><h1>Contact Information</h1><p><em>Phone: </em>+63 936-986-8303 | +63 925-617-8303</p>';
        this.contactString = this.contactString + '<p><em>Address: </em>417 St. Benedict Subdivision Sta. Lucia, Samal Bataan Philippines</p>';
        this.contactString = this.contactString + '<p><em>Email: </em>raguinibrokers@gmail.com</p></span>'
    }
}
