/***  Dynamically display current year in footer tag ***/

document.addEventListener("DOMContentLoaded", function(){
    let currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");
    yearElement.textContent = currentYear;

    //Check for change of year every hour
    function checkYear(){
        const newYear = new Date().getFullYear();
        if(newYear != currentYear){
            currentYear = newYear;
            yearElement.textContent = currentYear;
        }
    }

    //Check every hour for Year Change
    setInterval(checkYear,3600000);   

});

/** Set Contact Button to scroll user to bottom of page */
document.addEventListener("DOMContentLoaded", function(){

    var jumpBtn = document.getElementById("jumpBtn");

    jumpBtn.addEventListener('click', function(){
        var contactSection = document.getElementById("myContactSection");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/*** Handle Form Submissions ***/


