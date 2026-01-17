import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.html',
  styleUrl: './sales-person-list.css',
  imports: [CommonModule]
})

export class SalesPersonList implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@example.com', 50000),
    new SalesPerson('John', 'Doe', 'john.doe@example.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire.murphy@example.com', 90000),
    new SalesPerson('Mai', 'Truong', 'mai.truong@example.com', 60000)
  ];

  constructor() { }

  ngOnInit() {

  }

}
