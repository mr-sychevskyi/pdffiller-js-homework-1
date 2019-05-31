// Метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
function difference(arr, itemsToExclude) {
    return arr.filter(item => itemsToExclude.indexOf(item) < 0);
}

// Метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
function groupBy(array, value) {
    return array.reduce((res, item) => {
        const key = item[value];

        res[key] = [...(res[key] || []), item];

        return res;
    }, {});
}

// Если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
function flatten(array) {
    return array.reduce((res, item) => Array.isArray(item) ? [...res, ...item] : [...res, item], []);
}

// Метод должен убрать все повторяющиеся элементы из массива
function uniq(array) {
    return [...new Set(array)];
}

// Метод должен собирать элементы массива в группы с заданным размером
function chunk(array, size) {
    const res = [];

    while (array.length) {
        res.push(array.splice(0, size));
    }

    return res;
}
