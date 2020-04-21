const myButton = document.getElementById("clickMe");
    const noun1 = document.getElementById("noun1");
    const noun1Input = document.getElementById("noun1Input");
    const noun2 = document.getElementById("noun2");
    const noun2Input = document.getElementById("noun2Input");

    myButton.addEventListener('click', function (e) {
        e.preventDefault();
        
        noun1.innerHTML = noun1Input.value;
        noun2.innerHTML = noun2Input.value;
    });