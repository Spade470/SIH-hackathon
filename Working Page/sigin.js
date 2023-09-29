document.getElementById('loader').style.display = "none";
document.getElementById('myFile').style.display = "none";

function advocateOptionEvent() {
    const selectedOption = document.getElementById('advocateOption');
    document.getElementById('loader').style.display = "block";
    setTimeout(()=> {
        document.getElementById('loader').style.display = "none";
        document.getElementById('myFile').style.display = "block";
    }, 3000);

}