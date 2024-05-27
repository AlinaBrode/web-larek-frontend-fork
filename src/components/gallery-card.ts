import { CDN_URL } from "../utils/constants";
import { ensureElement } from "../utils/utils";
import { Component } from "./base/components"

export interface IGalleryCard {
  category: string;
  name: string;
  price: number;
  image: string;
} 

export class GalleryCard extends Component<IGalleryCard> implements IGalleryCard {
  protected elementCategory: HTMLElement;
  protected elementName: HTMLElement;
  protected elementPrice: HTMLElement;
  protected elementImage: HTMLImageElement;
  
  constructor(container: HTMLElement) {
    super(container)
    this.elementCategory = ensureElement('.card__category', this.container);
    this.elementName = ensureElement('.card__title', this.container);
    this.elementPrice = ensureElement('.card__price', this.container);
    this.elementImage = ensureElement<HTMLImageElement>('.card__image', this.container);
  }

  set category(val:string) {
    this.elementCategory.textContent = val;
  }
  set name(val:string) {
    this.elementName.textContent = val;

  }
  set price(val:number) {
    this.elementPrice.textContent = String(val) +" синапсов";

  }
  set image(val:string) {
    this.elementImage.src = CDN_URL + val;
    this.elementImage.alt = "картинка товара";
  }
}