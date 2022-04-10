import { isNgContent } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
/*filter property is a type of union, which have the value of 'all', 'active'
of 'done'.
*/
  filter: 'all' | 'active' | 'done' = 'all';

/*allItems array contains the to-do items objects and whether they are done

*/
  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

/*retrieves the 'items' from the 'allItems' array if the 'filter'
is equal to 'all', otherwise it returns the 'done' items.*/
  get items() {
    if (this.filter == 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ?
    item.done : !item.done);
  }
  /*'addItem' method allows our app to add items, it takes an items
  from the user clicks 'Add' button. It uses array method unshift() to
  add new item to the beginning of the array and top of the list. 
  */
  addItem(description:string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

}
