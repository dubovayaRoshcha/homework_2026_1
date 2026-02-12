'use strict';

/**
 * Фильтрует объект и возвращает новый объект только с указанными ключами
 * @param {Object} obj исходный объект
 * @param {Array<string>} keys массив нужных ключей
 * @returns {Object} новый объект с выбранными ключами
 *
 * @example
 * filterObjectByKeys({a: 1, b: 2, c: 3}, ['a', 'c'])
 * вернёт {a: 1, c: 3}
 */
const filterObjectByKeys = (obj, keys) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key))
  );
};


