import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
})
export class ECommerceComponent implements OnInit {
  products: Product[] = [];
  selectedView = 'grid';

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 40; i++) {
      this.products.push({
        title: `Product Id: ${i + 1}`,
        price: (i + 1) * 1000,
      });
    }
  }

  sortProducts(option: Event): void {
    const selectedOption = option.target as HTMLInputElement;
    if (selectedOption?.value === '2') {
      this.products = this.products.sort((a, b) => b.price - a.price);
    } else {
      this.products = this.products.sort((a, b) => a.price - b.price);
    }
  }
}

export interface Product {
  title: string;
  price: number;
}
