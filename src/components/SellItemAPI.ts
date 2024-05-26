import { Api } from "./base/api";
import { SellItem, SellItemsFromAPI } from "../types/sellitem"


export class SellItemAPI extends Api {
  constructor(baseUrl: string, options?: RequestInit) {
    super(baseUrl, options);
  }

  getSellItems(): Promise<SellItemsFromAPI> {
    return this.get<SellItemsFromAPI>('/product');
  }

  getOneSellItem(sellItemID: string): Promise<SellItem> {
    return this.get<SellItem>(`/product/${sellItemID}`);
  }
}
