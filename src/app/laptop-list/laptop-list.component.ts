import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptop:Laptop[];

  constructor( private lapservice:LaptopService,
    private route:Router) { }

  ngOnInit(): void {
    this.getLap();
  }
  update(id:number) {
    this.route.navigate(['update-laptop',id]);
  }
  details (id:number){
    this.route.navigate(['laptop-details',id]);
  }
  delete(id:number) {
    this.lapservice.deleteById(id).subscribe(data=>{
      console.log(data);
      this.getLap();
    });
  }
  getLap() {
    this.lapservice.getValues().subscribe(Data=> {
      this.laptop=Data;
    });
  }

}
