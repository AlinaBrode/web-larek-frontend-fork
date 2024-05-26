export interface SellItem {
  category: string;
  id: string;
  name: string;
  title: string;
  price: number;
  image: string;
}

export interface SellItemsFromAPI {
  total: number;
  items: SellItem[];
}
