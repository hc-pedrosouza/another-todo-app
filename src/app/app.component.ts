import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'another-todo-app';
  public userInput: string = ''
  public itemList: Array<{userInput:string}> = []

  public confirmInput($event:any) {
    if($event.keyCode == 13) {
      if (this.userInput!='') {
        this.itemList.push({userInput: this.userInput})
        this.userInput = ''
      }
    }
  }

  public removeAllItems() {
    this.itemList = []
  }
}
