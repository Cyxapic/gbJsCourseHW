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
        this.countEl.innerText = this.goods.length;
        this.priceEl.innerText = this.getGoodsPrice();
    };
    /**
     * Считает и возвращает цену всех купленных товаров из массива this.goods.
     * @returns {number} Цену всех купленных товаров.
     */
    getGoodsPrice() {
        return this.goods.reduce((summ, good) => summ + good.goodPrice, 0);
    };

    /**
     * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
     * @param {string} goodName Название товара.
     * @param {string} goodPrice Цена товара.
     */
    add(goodName, goodPrice) {
        this.goods.push({
            goodName: goodName,
            goodPrice: +goodPrice
        });
    };
}