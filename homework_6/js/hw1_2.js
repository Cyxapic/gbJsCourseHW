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
                    container: '#container',
                    countSelector: '#basket-count',
                    priceSelector: '#basket-price',
                };
                this.goods = [];
                this.countEl = null;
                this.priceEl = null;
                Object.assign(this.settings, userSettings);
            };
            /**
             * Отображает количество всех товаров и их цену.
             */
            render() {

            };
            /**
             * Считает и возвращает цену всех купленных товаров из массива this.goods.
             * @returns {number} Цену всех купленных товаров.
             */
            getGoodsPrice() {};

            /**
             * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
             * @param goodName Название товара.
             * @param goodPrice Цена товара.
             */
            add(goodName, goodPrice) {
                const container = document.querySelectorAll(this.settings.container);
                container.forEach((el) => {
                    el.addEventListener('click', );
                });
            };

            

        }
        // const basket = {
        //     settings: {
        //         countSelector: '#basket-count',
        //         priceSelector: '#basket-price',
        //     },
        //     goods: [],
        //     countEl: null,
        //     priceEl: null,

        //     /**
        //      * Инициализирует переменные для корзины и показывает эти значения.
        //      */
        //     init(settings = {}) {},

        //     /**
        //      * Отображает количество всех товаров и их цену.
        //      */
        //     render() {},

        //     /**
        //      * Считает и возвращает цену всех купленных товаров из массива this.goods.
        //      * @returns {number} Цену всех купленных товаров.
        //      */
        //     getGoodsPrice() {},

        //     /**
        //      * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
        //      * @param goodName Название товара.
        //      * @param goodPrice Цена товара.
        //      */
        //     add(goodName, goodPrice) {},
        // };