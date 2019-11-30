import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  users: Object;

  constructor(private service : DataService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(doc => {
      this.users = doc['data'];
    })
  }
}
