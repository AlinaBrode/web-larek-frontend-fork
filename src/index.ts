import { SellItemAPI } from './components/SellItemAPI';
import './scss/styles.scss';
import { RepoModel } from './components/RepoModel';
import { SellItem } from "./types/sellitem"
import { API_URL } from './utils/constants';
import { cloneTemplate, ensureElement } from './utils/utils';
import { Gallery } from './components/gallery';
import { GalleryCard } from './components/gallery-card';

/*
  Описание данных
*/


enum PaymentTypeEnum {
  ONLINE = 0,
  ON_DELIVERY = 1
}

export interface IDeliveryDetails {
  paymentType: PaymentTypeEnum;
  address: string;
  email: string;
  phone: string;
}


/*
  Описание действий
*/

// Про корзинку

//Про персональные данные
export interface IPersonalInfo {
  setInfo(info: Partial<IDeliveryDetails>): void;
  getInfo(): IDeliveryDetails;
}

// console.log("we are here!");

let apiFetch = new SellItemAPI(API_URL);  // "https://larek-api.nomoreparties.co/api/weblarek"
let bm = new RepoModel();
// let gallery = new Gallery(ensureElement('.gallery'));
// let galleryCard = new GalleryCard(ensureElement('.gallery'));
let gallery = ensureElement('.gallery');
let gc = new GalleryCard(cloneTemplate("#card-catalog"));
/*{
        category: 'таракан',
        name: 'Мой лучший друг',
        price: 2000,
      }*/ 

function getSellItems() {
  apiFetch.getSellItems()
    .then((response) => {
      bm.setItems(response.items);
      console.log(bm);
      console.log('selected element', bm.getSellItem('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));
      let elementToShow = bm.getSellItem('854cef69-976d-4c2a-a18c-2aa45046c390');
      console.log('element to show', elementToShow);
      gallery.append(gc.render(elementToShow));
      bm.delItem('c101ab44-ed99-4a54-990d-47aa2bb4e7d9');
      console.log('Total Sum',bm.getTotalSum());
      console.log('Get basket items',bm.getBasketItems());
      console.log('total number',bm.itemsNumber());
      console.log(bm);
      
      

      /*const itemsHtmlArray = bm.getIds().map( itemId => {
        const card = new Item(cloneTemplate("#card-catalog"));  // TODO: create an Item class to render one card in the gallery
        return card.render(bm.getSellItem(itemId));
      })*/

    });
  }

getSellItems();

/*
apiFetch.getOneSellItem("f3867296-45c7-4603-bd34-29cea3a061d5")
  .then((sellItem) => console.log(sellItem));
*/

/*
fetch('https://larek-api.nomoreparties.co/api/weblarek/product/')
  .then((data) => data.json())
  .then((data) => {console.log(data)});
*/

/*
fetch('https://larek-api.nomoreparties.co/api/weblarek/product/412bcf81-7e75-4e70-bdb9-d3c73c9803b7')
  .then((data) => data.json())
  .then((data) => {console.log(data)});
*/

// getInfo = A

