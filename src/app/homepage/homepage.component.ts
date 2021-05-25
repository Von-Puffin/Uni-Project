import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('expoModal', {static: true}) expoModal:ElementRef;
  constructor(
    private spinner: NgxSpinnerService,
    private route: Router) {}
   text: string[]
  ngOnInit() {
    // this.expoModal.nativeElement.click()
  }

  searchStart(){
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      // window.open("https://editor.p5js.org/VonPuffin/sketches/GNbFhObs1", "_blank"); 
      this.route.navigate(['app/shop-page'])
    }, 5000, );
    
  }
}


