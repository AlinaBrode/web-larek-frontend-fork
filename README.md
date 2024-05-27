# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# Архитектура

# Данные

* IRepository - интерфейс хранилища товаров (repo.ts)
  * getSellItem - получить товар по его id
  * ...
* SellItem - описание товара (sellitems.ts)
  * id - идентификатор товара
   ...
* SellItemsFromAPI - как информация о товарах приходит с сервера (sellitems.ts) 
  * ...
* SellItemRepo - внутренний тип для репозитария товаров, в описание включён флаг принадлежности корзине
  * ...

# События
## диспетчер событий

* events 

## События
* "click: submit_buy_form" - клик на кнопке "поместить в корзину/удалить из корзины" в форме покупки
* "click: online_purchaise_form" - клик на кнопке "онлайн" в форме типа оплаты
* ...

# Представление
* ShowItems - все доступные элементы
* ItemBox - показ одного элемента в репозитарии
* ItemRow - показ одного элемента в корзине
* PopupItem - показ одного элемента для помещения в корзину/доставания из корзины
* ....