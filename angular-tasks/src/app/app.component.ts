import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initial';
  number = 55;
  arr = [1,2,3];
  obj = {
    a: 77,
    b: {
      name: 'Yuriy',
      surname: 'Liubinskyi'
    }
  }
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghvcCI3_buV94HmXOYyJYtwKXDXDZMl55NSGgFZtQ7mUr7pBj78NeL2BJv7c8hGaJ_3A&usqp=CAU'
  inputValue = 'dfvdfv';
  backgroundToggle = false;
  toggle = true;
  arrFibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
  objs = [
    {title: 'Post 1', author: 'Vlad', comments:[
        {name: 'Max', text: 'lorem1'},
        {name: 'Max', text: 'lorem2'},
        {name: 'Max', text: 'lorem3'}
      ]},
    {title: 'Post 2', author: 'Sasha', comments:[
        {name: 'Max2', text: 'lorems1'},
        {name: 'Max2', text: 'lorems2'},
        {name: 'Max2', text: 'lorems3'}
      ]}
  ]
  constructor() {
    setTimeout(()=>{
      this.img = 'https://w7.pngwing.com/pngs/224/196/png-transparent-web-development-angularjs-javascript-vue-js-world-wide-web-thumbnail.png'
    }, 3000)
  }
  onInput(event: any) {
    console.log('Event', event)
    this.title = event.target.value
  }
  onClick() {
    console.log('click-click!')
  }
  onBlur(str:string) {
    this.inputValue = str;
    console.log(str);
  }
}
