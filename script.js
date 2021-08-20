function scrollTo(element){
    Document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

document.querySelector("#goToDown").addEventListener("click", function(event){
    event.preventDefault();

    scrollTo("#container1");

    console.log("go to down");
});