let simpleList = [1, 2, 3, 9];
let deepList = [
    [1, 2], [3, 4], [5, 6, 7]
];

function calcSimple(lst) {
    let res = 1;
    for (let x = 0; x < lst.length; x++) {
        res *= lst[x];
       console.log(`O produto da soma dos elementos da lista é: ${res}`);
    }
}

function multiplyAll(lst) {
    let res = 1;
    for (let x = 0; x < lst.length; x++) {
        for (let y = 0; y < lst[x].length; y++) {
            res *= lst[x][y];
        }
    }
    console.log(res);
    return res;
}

calcDeep([[1], [2], [3]]);