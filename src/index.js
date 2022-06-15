/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(` `).map( item => item.charAt(0).toUpperCase() + item.slice(1) ).join(` `);

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString (string) {
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)}
    }
    return arr.join(' ');
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
    if (action === 'uppercase') return string.toUpperCase();
    else if (action === 'lowercase') return string.toLowerCase();
    else if (action === 'capitalize') return string.split(` `).map( item => item.charAt(0).toUpperCase() + item.slice(1) ).join(` `);
    else if (action === 'fence') {
        string = string.toLowerCase().split('');
        for (let i = 0; i < string.length; i++) {
            if (i % 2 !== 0) string[i] = string[i].charAt(0).toUpperCase();
        }
        return string.join(' ');
    } 
    else return string;
}

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action) {
        case ('uppercase'): 
            return string.toUpperCase();
        case ('lowercase'): 
            return string.toLowerCase();
        case ('capitalize'): 
            return string.split(` `).map( item => item.charAt(0).toUpperCase() + item.slice(1) ).join(` `);
        case ('fence'): 
            string = string.toLowerCase().split('');
            for (let i = 0; i < string.length; i++) {
                if (i % 2 !== 0) string[i] = string[i].charAt(0).toUpperCase();
            }
            return string.join(' '); 
            
            // почему не работает? результат = STRING
            // return string.toLowerCase().split(` `).map( item => string[item] % 2 !== 0? item.toUpperCase(): item.toLowerCase() ).join(` `);

        default: 
            return string;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => { 
    let arr = string.split('');
    for (let index of arr) console.log(index); 
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => { 
    let arr = string.split('');
    for (let index = 0; index < arr.length; ++index) console.log(arr[index]); 
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => { 
    let arr = string.split('');
    let index = 0;
    while (index < arr.length) {
        console.log(str[index]);
        index = ++index;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) =>  {
    let arr = string.split('');
    arr.forEach(item => console.log(item));
};