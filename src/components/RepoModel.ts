import { IRepo } from './repo'
import { SellItem, SellItemRepo } from '../types/sellitem'
import { IEvents } from './base/events';


export class RepoModel implements IRepo {
  protected repoContent: SellItemRepo[] = [];
  protected events;

  constructor(events:IEvents) {
    this.events = events;
  }

  getSellItem(id: string): SellItem {
    return this.repoContent.find((item) => (item.id === id));
  }

  setItems(newContent: SellItem[]): void {
    this.repoContent = newContent.map(item => ({... item, inCatalogue: true}));
    this.events.emit('items: changed');
  }

  delItem(id: string): void {
    console.log("array", this.repoContent);
    console.log("array type", typeof this.repoContent);
    this.repoContent = this.repoContent.filter((item) => item.id !== id);
  }

  getCatalogItems(): SellItem[] {
    return this.repoContent; // .filter(item => item.inCatalogue);
  }

  getBasketItems(): SellItem[] {
    return this.repoContent.filter(item => !item.inCatalogue);
  }

  getTotalSum(): number {
    let s = 0;
    for (let item of this.repoContent) {
      s += item.price;  //s = s + item.price
    }
    return s;
  }

  itemsNumber(): number {
    return this.repoContent.length;
  }

  toBasket(id: string): void {
    this.repoContent.filter(item => item.id === id)[0].inCatalogue = false;
  }

  fromBasket(id: string): void {
    this.repoContent.filter(item => item.id === id)[0].inCatalogue = true;
  }
}