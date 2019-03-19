import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  hide: boolean = false;
  searchValue : string;
  // Event emit for navigate to dio admin list
  @Output() searchValueEmit = new EventEmitter<any>();
    
  constructor() { }

  ngOnInit() {
  }

  searchMarchant(){
    this.searchValueEmit.emit(parseInt(this.searchValue));
    this.hide = false;
  }

  searchMarchantEvent(){
    this.hide = !this.hide;
  }
  
}
