import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   username: string = '';
   disabled: boolean = false;
   
   inputEvent(event: Event) {
      this.username = (<HTMLInputElement>event.target).value;
      this.disabled = true;
      if (this.username === '') {
         this.disabled = false;
      }
   }

   onClick() {
       this.disabled = false;
       this.username = '';
   }
   
}
