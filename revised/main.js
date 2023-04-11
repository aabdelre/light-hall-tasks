document.addEventListener("DOMContentLoaded", () => {
    let number = document.querySelector(".number").textContent;
    const increase = document.querySelector(".increase");
    console.log(number);

    const storeCount = () => {
        localStorage.setItem("count", number);
    };
    
    increase.addEventListener("click", () => {
        number++;

        document.querySelector(".number").textContent = number;
        storeCount();
    });

    if(localStorage.getItem("count")) {
        document.querySelector(".number").textContent = localStorage.getItem("count");
        number = localStorage.getItem("count");
    }
    
})