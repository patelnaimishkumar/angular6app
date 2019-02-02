import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
//import {FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  empfromgroup:FormGroup;

  constructor() { }

  ngOnInit() {
    this.empfromgroup=new FormGroup({
      fullname:new FormControl(),
      email:new FormControl(),
      skills:new FormGroup({
        skillname:new FormControl(),
        exeperience:new FormControl(),
        proficiency:new FormControl()
      })
    });
  }

  onSubmit():void{
   console.log( this.empfromgroup.value);

  }
}
