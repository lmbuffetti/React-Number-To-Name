import {
    NUMBERS,
    DOZENS,
    ERRORNUMBER,
    LARGENUMBERNAME,
} from '../config/constants';

export function numberToEnglish(num) {
    let res = '';
    let number = parseFloat(num);
    if (number < 0) {
        res = `${ERRORNUMBER.nagetive} `;
        number = num * -1;
    }
    if ((num.toString().split('.').length > 2 || Number.isNaN(num) || num.toString().indexOf(',') !== -1) && num) {
        return ERRORNUMBER.invalidNumber;
    }
    if (!Number.isFinite(number)) {
        return `${res} ${ERRORNUMBER.infinity}`;
    }
    if (number > 2000000000000000) {
        return ERRORNUMBER.largeNumber;
    }

    let decimal = 0;

    if (number.toString().indexOf('.') !== -1) {
        decimal = parseInt(number.toString().split('.')[1], 10);
        number = parseInt(number.toString().split('.')[0], 10);
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
        res += `${numberToEnglish(quadrillion)} ${LARGENUMBERNAME.quadrillion}`;
    }
    if (trillion > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(trillion)} ${LARGENUMBERNAME.trillion}`;
    }
    if (billion > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(billion)} ${LARGENUMBERNAME.billion}`;
    }
    if (milion > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(milion)} ${LARGENUMBERNAME.milion}`;
    }
    if (thousand > 0) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(thousand)} ${LARGENUMBERNAME.thousand}`;
    }
    if (hundred) {
        res += `${((res === '') ? '' : ' ')} ${numberToEnglish(hundred)} ${LARGENUMBERNAME.hudrend}`;
    }

    if ((ten > 0 || one > 0)) {
        if (!(res === '') && res !== `${ERRORNUMBER.nagetive} `) {
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
    console.log(num);
    let res = '';
    const number = num.toString().split('');
    number.map((item) => {
        res += `${NUMBERS[+item]} `;
        if (+item === 0) {
            res += 'zero ';
        }
        return null;
    });
    return res;
}
