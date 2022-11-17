import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-laptop',
  templateUrl: './create-laptop.component.html',
  styleUrls: ['./create-laptop.component.css']
})
export class CreateLaptopComponent implements OnInit {
  laptop:Laptop=new Laptop();

  constructor(private laptopservice : LaptopService,private router : Router) { }

  ngOnInit(): void {
  }

  gotolaptoplist() {
    this.router.navigate(['laptop-list']);
  }
  saveLaptop(){
    this.laptopservice.add(this.laptop).subscribe(data=>{
      console.log(data)});
      this.gotolaptoplist();
   
   
  }
  onSubmit(){
    console.log(this.laptop);
    this.saveLaptop();
    
  }

}
