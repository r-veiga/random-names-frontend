import { Component, OnInit, ViewChild } from '@angular/core';
import { RandomNamesService } from './random-names.service';

@Component({
  selector: 'app-random-names',
  templateUrl: './random-names.component.html',
  styleUrls: ['./random-names.component.scss']
})
export class RandomNamesComponent implements OnInit {
  
  randomName: string;
  public newName: string = 'Ben';

  constructor( private service: RandomNamesService ) { }

  ngOnInit() { this.service.createNameList(); }

  getRandomName(): void {
    this.randomName = this.service.getRandomNameBackend();
  } 

  addName() {
    console.log(this.newName);
    if (this.newName.length > 0) {
      this.service.addName(this.newName);
      this.newName = '';
    }
  }


}
