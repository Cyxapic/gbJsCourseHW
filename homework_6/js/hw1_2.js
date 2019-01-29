'use strict';

/*
 * Реализовать модуль корзины. У каждого товара есть кнопка «Купить», при нажатии на которую
 * происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать
 * общую сумму заказа. Один товар можно добавить несколько раз.
 */

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */

class Basket {
    constructor(userSettings = {}) {
        this.settings = {
            countSelector: '#basket-count',
            priceSelector: '#basket-price',
        };
        Object.assign(this.settings, userSettings);
        this.goods = [];
        this.countEl = document.querySelector(this.settings.countSelector);
        this.priceEl = document.querySelector(this.settings.priceSelector);
    };
    /**
     * Отображает количество всех товаров и их цену.
     */
    render() {
        console.log(this.goods);
        console.log(this.countEl);
        this.countEl.innerText = this.goods.length;
        this.priceEl.innerText = this.getGoodsPrice();
    };
    /**
     * Считает и возвращает цену всех купленных товаров из массива this.goods.
     * @returns {number} Цену всех купленных товаров.
     */
    getGoodsPrice() {
        let summ = 0;
        this.goods.forEach(el => {
            summ += +el.goodPrice;
        });
        console.log(summ);
        return summ;
    };

    /**
     * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
     * @param goodName Название товара.
     * @param goodPrice Цена товара.
     */
    add(goodName, goodPrice) {
        this.goods.push({
            goodName: goodName,
            goodPrice: goodPrice
        });
    };
}