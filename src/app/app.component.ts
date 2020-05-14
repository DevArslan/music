import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music';


  public changeMusic(event) {
    const currentMusic = event.srcElement
    const previousMusic = currentMusic.nextSibling
    const nextMusic = currentMusic.previousSibling
    previousMusic.nextSibling.nextSibling.className = 'secondCountry'
    nextMusic.previousSibling.previousSibling.className = 'firstCountry'
    previousMusic.className = 'selectMusic-previous'
    currentMusic.className = 'selectMusic-current'
    nextMusic.className = 'selectMusic-next'
    previousMusic.nextSibling.className = 'selectMusic-prev-previous'
    nextMusic.previousSibling.className = 'selectMusic-next-next'

    // currentMusic.parentElement.firstElementChild.className = 'firstCountry'
    // currentMusic.parentElement.lastElementChild.className = 'secondCountry'
  }

}
