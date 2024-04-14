const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const germanyColors = colors.filter(color => color === 'черный' || color === 'красный' || color === 'желтый');
    return germanyColors.join('-');
}

console.log(createColorString());
