let number = document.getElementById('number');
let result = document.getElementById('result');
let setStatus = document.getElementById('status');

function numberOdd() {
    if (number.value == "") {
        alert("Fill in the blank form");
    }
    else {
        let odd = "";
        for (let a = 1; a <= parseInt(number.value); a++) {
            if (a % 2 == 1) {
                odd += `<span>${a} , </span>`;
            }
        }
        result.innerHTML = odd;
        setStatus.innerText = "Odd";
    }
}

function numberEven() {
    if (number.value == "") {
        alert("Fill in the blank form");
    }
    else {
        let even = "";
        for (let a = 1; a <= parseInt(number.value); a++) {
            if (a % 2 == 0) {
                even += `<span>${a} , </span>`;
            }
        }
        result.innerHTML = even;
        setStatus.innerText = "Even";

    }
}

function numberPrime() {
    let prime = "";
    if (number.value == "") {
        alert("Fill in the blank form");
    }
    else {
        for (let i = 1; i <= parseInt(number.value); i++) {
            let calculate = 0;
            for (let a = 1; a <= i; a++) {
                if (i % a == 0) {
                    calculate++;
                }
            }
            if (calculate == 2) {
                prime += `<span> ${i} , </span>`;
            }
        }
        result.innerHTML = prime;
        setStatus.innerText = "Prime";
    }
}

function reset() {
    result.innerText = "- -";
    setStatus.innerText = "- -";
    number.value = " ";
}