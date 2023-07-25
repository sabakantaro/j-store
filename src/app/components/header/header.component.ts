import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  searchQuery: string = '';

  @Input() get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((acc, cur) => acc + cur, 0);
  }
  constructor(private cartService: CartService, private storeService: StoreService) { }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  onClearCart(): void {
    return this.cartService.clearCart();
  }
  onSearch(): void {
    this.storeService.getALLProducts('12', 'desc', this.searchQuery).subscribe(
      (products: any) => {
        console.log(products);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
