const myButton = document.getElementById("clickMe");
    const number1 = document.getElementById("number1");
    const number1Input = document.getElementById("number1Input");
    const name1 = document.getElementById("name1");
    const name1Input = document.getElementById("name1Input");
    const state = document.getElementById("state");
    const stateInput = document.getElementById("stateInput");
    const dayOfWeek = document.getElementById("dayOfWeek");
    const dayOfWeekInput = document.getElementById("dayOfWeekInput");
    const month = document.getElementById("month");
    const monthInput = document.getElementById("monthInput");
    const animal = document.getElementById("animal");
    const animalInput = document.getElementById("animalInput");
    

    myButton.addEventListener('click', function (e) {
        e.preventDefault();
        
        number1.innerHTML = number1Input.value;
        name1.innerHTML = name1Input.value;
        state.innerHTML = stateInput.value;
        dayOfWeek.innerHTML = dayOfWeekInput.value;
        month.innerHTML = monthInput.value;
        animal.innerHTML = animalInput.value;
    });