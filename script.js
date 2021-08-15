let text = prompt('Введіть текст');
console.log(text);
let count = 0;

let pos = 0;
while (true) {
    let foundPos = text.indexOf('html', pos);
    if (foundPos == -1) break;

    //console.log(` Знайдено тут: ${foundPos} `);
    count++;
    pos = foundPos + 1; // продолжаем со следующей позиции
}
console.log(count);
