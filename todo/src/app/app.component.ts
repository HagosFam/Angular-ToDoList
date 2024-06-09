import { Component, Inject } from '@angular/core';
import { TodoService } from './service/todo.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  name = 'Hagos';
  brother = 'Tesfay';

  //readonly tesfish = Inject(TodoService);

  constructor(private tesfish:TodoService) {

  }

  ngOnInit() {
   this.getDataFromService();
  }

  displayValue() {
    console.log("Button clicked");
  }

  getDataFromService() {
    console.log(this.tesfish.getName());
  }
  
}
