import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
key:any;
item:any;
x:any;
del:any;
  ngOnInit(): void {
   for(let i=0;i<localStorage.length;i++){
    this.key=localStorage.key(i);
    this.item=localStorage.getItem(this.key);
    var x:any=document.getElementById('mySelect');
let option=document.createElement("option");
option.textContent=this.item;
x.add(option);
localStorage.setItem(this.item,this.item);
   }
  }
  
  onClick(val:any){
localStorage.setItem('key',val);
var x:any=document.getElementById('mySelect');
let option=document.createElement("option");
option.text=val;
x.add(option);


  }

  ondelete(event:any){
    this.del=event.target.value;
//  localStorage.removeItem('del');
  var x:any=document.getElementById('mySelect');
  x.remove(x.selectedIndex);
for(let i=0;i<localStorage.length;i++){
  const key:any=localStorage.key(i);
  if(this.del==`${localStorage.getItem(key)}`){
    localStorage.removeItem(key);
  }
}
  }
 

}
