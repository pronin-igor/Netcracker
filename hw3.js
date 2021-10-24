let text = "Наш лес большой. В лесу растут ели, сосны, дубы, липы, берёзы. В лесу гуляют дети. Они ищут грибы. Боря и Андрюша нашли два рыжика, много маслят. Юра и Яша нашли в лесу ёжика. Они положили ёжика в шапку и принесли домой. Ёжик уколол Юру, но Юра не плакал";
function bestOfThree (text) {
    if (typeof text == 'string')
        console.log('It`s string!');
    else
        console.log('Wrong type!!!');
    let mas = [];
    text = text.replace(/[.,]/g, "");
    text = text.toLocaleLowerCase();
    mas = text.split(" ");
    let count = new Array(mas.length).fill(1);
    for (let i = 0; i < mas.length; i++) {
        if (mas.indexOf(mas[i]) < i)
            count[mas.indexOf(mas[i])]++;
    }
    let max = count[0];
//находим самый популярный
    for (let i = 1; i < count.length; i++)
        if (count[i] > max) {
            max = count[i];
        }
//выписываем самые популярные и присваиваем им -1
    for (let i = 1; i < count.length; i++)
        if (count[i] == max) {
            console.log("1)", mas[i]);
            count[i] = -1;
        }
//для второго по популярности
    max = count[0];
    for (let i = 1; i < count.length; i++)
        if (count[i] > max) {
            max = count[i];
        }
    for (let i = 1; i < count.length; i++)
        if (count[i] == max) {
            console.log("2)", mas[i]);
            count[i] = -1;
        }
//для третьего по популярности
    max = count[0];
    for (let i = 1; i < count.length; i++)
        if (count[i] > max) {
            max = count[i];
        }
    for (let i = 1; i < count.length; i++)
        if (count[i] == max) {
            console.log("3)", mas[i]);
            count[i] = -1;
        }
}
bestOfThree(text);