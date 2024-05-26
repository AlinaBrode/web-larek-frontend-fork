import { SellItem } from "../types/sellitem";

export interface IBasket {
  getSellItem(id: string): SellItem;
  setItems(newItems: SellItem[]): void;
  delItem(id: string): void;
  getIds(): string[];
  getTotalSum(): number;
  itemsNumber(): number;
}
