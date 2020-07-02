import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../productservice.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public  result:any;
  constructor(private service : ProductserviceService) { }
  ngOnInit(){
                this.service.fetchProductList()
                             .subscribe((posRes)=>{
                              this.result = posRes;
                              },(errRes:HttpErrorResponse)=>{
                                console.log(errRes);
                    });
                };

};
