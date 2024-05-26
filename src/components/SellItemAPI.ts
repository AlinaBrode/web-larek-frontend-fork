import { Api } from "./base/api";
import { SellItem } from "../types/sellitem"


export class SellItemAPI extends Api {
  constructor(baseUrl: string, options?: RequestInit) {
    super(baseUrl, options);
  }

  getSellItems(): Promise<SellItem[]> {
    return this.get<SellItem[]>('/product');
  }

  getOneSellItem(sellItemID: string): Promise<SellItem> {
    return this.get<SellItem>(`/product/${sellItemID}`);
  }
}
