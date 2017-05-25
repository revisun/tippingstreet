import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'modules/about/about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  public aboutString: string;
  constructor () {
    this.aboutString = '<span><h1>About Us</h1><p><em>Tripping Street </em> is a real estate advertising';
        this.aboutString = this.aboutString + ' and marketing service provider.  It is our desire at TrippingStreet.com';
        this.aboutString = this.aboutString + ' to make it quick and easy for you to search and find real estate located';
        this.aboutString = this.aboutString + ' across Bataan, Olongapo City & Zambales.</p></span>'
  }
  // text: string = 'About Page'; 
}
