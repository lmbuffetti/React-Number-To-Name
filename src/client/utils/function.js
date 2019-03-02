import {
    NUMBERS,
    DOZENS,
    ERRORNUMBER,
} from '../config/constants';

export function numberToEnglish(num) {
    if ((num.toString().split('.').length > 2 || Number.isNaN(num) || num.toString().indexOf(',') !== -1) && num) {
        return ERRORNUMBER.invalidNumber;
    }
    let number = parseFloat(num);
    let res = '';
    if (number > 2000000000000000) {
        return ERRORNUMBER.largeNumber;
    }
    if (number < 0) {
        res = 'negative ';
        number = num * -1;
    }

    let decimal = 0;

    if (number.toString().indexOf('.') !== -1) {
        decimal = parseInt(number.toString().split('.')[1], 10);
        number = parseInt(number.toString().split('.')[0], 10);
        if (decimal > 100000) {
            return ERRORNUMBER.largeDecimals;
        }
    }

    const quadrillion = Math.floor(number / (10 ** 15)); /* Quadrillion */
    number -= quadrillion * (10 ** 15);
    const trillion = Math.floor(number / (10 ** 12)); /* trillion */
    number -= trillion * (10 ** 12);
    const billion = Math.floor(number / (10 ** 9)); /* billion */
    number -= billion * (10 ** 9);
    const milion = Math.floor(number / (10 ** 6)); /* milion */
    number -= milion * (10 ** 6);
    const thousand = Math.floor(number / (10 ** 3)); /* thousand */
    number -= thousand * (10 ** 3);
    const hundred = Math.floor(number / 100); /* hundred */
    const numSmall = number % 100;
    const ten = Math.floor(numSmall / 10); /* Ten  */
    const one = Math.floor(numSmall % 10); /* Ones */

    if (quadrillion > 0) {
        res += `${numberToEnglish(quadrillion)} Quadrillion`;
    }
    if (trillion > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(trillion)} Trillion`;
    }
    if (billion > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(billion)} Billion`;
    }
    if (milion > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(milion)} milion`;
    }
    if (thousand > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(thousand)} thousand`;
    }
    if (hundred) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(hundred)} hundred`;
    }

    if ((ten > 0 || one > 0)) {
        if (!(res === '') && res !== 'negative ') {
            res += ' and ';
        }
        if (ten < 2) {
            res += NUMBERS[ten * 10 + one];
        } else {
            res += DOZENS[ten];
            if (one > 0) {
                res += (`-${NUMBERS[one]}`);
            }
        }
    }

    if (res === '' && num) {
        res = 'zero';
    }
    if (decimal > 0) {
        return `${res} point ${numberDecimalsToEnglish(decimal)}`;
    }
    return res;
}

function numberDecimalsToEnglish(num) {
    let number = num;
    let res = '';
    const milion = Math.floor(number / 1000000); /* milion */
    number -= milion * 1000000;
    const thousand = Math.floor(number / 1000); /* thousand */
    number -= thousand * 1000;
    const hundred = Math.floor(number / 100); /* Tens */
    const numSmall = number % 100; /* Ones */
    const ten = Math.floor(numSmall / 10);
    const one = Math.floor(numSmall % 10);

    if (milion > 0) {
        res += `${numberDecimalsToEnglish(milion)} milion`;
    }
    if (thousand > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberDecimalsToEnglish(thousand)} Thousand`;
    }
    if (hundred) {
        res += `${((res === '') ? '' : ' ')} ${numberDecimalsToEnglish(hundred)} Hundred`;
    }

    if ((ten > 0 || one > 0)) {
        if (!(res === '')) {
            res += ' and ';
        }
        if (ten < 2) {
            res += NUMBERS[ten * 10 + one];
        } else {
            res += DOZENS[ten];
            if (one > 0) {
                res += (`-${NUMBERS[one]}`);
            }
        }
    }

    if (res === '' && num) {
        res = 'zero';
    }
    return res;
}
