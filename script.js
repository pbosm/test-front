var slider = document.getElementById("Range");
var output = document.getElementById("number");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var money = document.getElementById("money");
var month = document.getElementById("month");
var year = document.getElementById("year");
var monthoryear = document.getElementById("month-year");
var btn = document.getElementById("btn-buy");
var trade = document.getElementById("trade");

month.classList.add("active");

output.innerHTML = slider.value;
slider.style.backgroundSize = "10%";

slider.oninput = function () {
    output.innerHTML = this.value;
    slider.style.backgroundSize = this.value + "0%";
    money.innerHTML = "R$ " + this.value + '00,00';

    if (year.className == 'btn btn-month btn-light rounded-start p-2 active') {
        var valor_atual = slider.value;

        money.innerHTML = "R$ " + valor_atual * 12 + '00,00';
        trade.href = valor_atual;
    }
}

left.addEventListener("click", function () {
    var output = document.getElementById("number");
    var money = document.getElementById("money");
    var slider = document.getElementById("Range");
    var valor_atual = slider.value;

    if (valor_atual > 1) {
        valor_atual--;
        slider.value = valor_atual;
        slider.style.backgroundSize = valor_atual + "0%";
        money.innerHTML = "R$ " + valor_atual + '00,00';
        output.innerHTML = valor_atual;
    }
})

right.addEventListener("click", function () {
    var output = document.getElementById("number");
    var money = document.getElementById("money");
    var slider = document.getElementById("Range");
    var valor_atual = slider.value;

    if (valor_atual < 10) {
        valor_atual++;
        slider.value = valor_atual;
        slider.style.backgroundSize = valor_atual + "0%";
        money.innerHTML = "R$ " + valor_atual + '00,00';
        output.innerHTML = valor_atual;
    }

    if (year.className == 'btn btn-month btn-light rounded-start p-2 active') {
        money.innerHTML = "R$ " + valor_atual * 12 + '00,00';
        trade.href = valor_atual;
    }

})

month.addEventListener("click", function () {
    var valor_atual = slider.value;

    month.classList.add("active");
    year.classList.remove("active");
    monthoryear.innerHTML = "Equivalente a mensalmente";
    money.innerHTML = "R$ " + valor_atual + '00,00';
})

year.addEventListener("click", function () {
    var valor_atual = slider.value;

    year.classList.add("active");
    month.classList.remove("active");
    monthoryear.innerHTML = "Equivalente anualmente";
    money.innerHTML = "R$ " + valor_atual * 12 + '00,00';
    trade.href = valor_atual;
})