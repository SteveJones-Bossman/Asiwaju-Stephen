function myFunction() {
    var x = document.grtElementById ("nav")
    if (x.className === "nav") {
        x.className += "responsive"
    }
    else{
        x.className = "nav"
    }
}