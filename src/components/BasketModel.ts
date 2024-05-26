import { IBasket } from './basket'
import { SellItem } from '../types/sellitem'


export class BasketModel implements IBasket {
  protected basketContent: SellItem[] = [];

  getSellItem(id: string): SellItem {
    return this.basketContent.find((item) => (item.id === id));
  }

  setItems(newContent: SellItem[]): void {
    this.basketContent = newContent;
  }

  delItem(id: string): void {
    console.log("array", this.basketContent);
    console.log("array type", typeof this.basketContent);
    this.basketContent = this.basketContent.filter((item) => item.id !== id);
  }

  getIds(): string[] {
    return this.basketContent.map(item => item.id);
  }

  getTotalSum(): number {
    let s = 0;
    for (let item of this.basketContent) {
      s += item.price;  //s = s + item.price
    }
    return s;
  }

  itemsNumber(): number {
    return this.basketContent.length;
  }
}