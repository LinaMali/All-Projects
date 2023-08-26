function numbersOnly(e) {
    if (!(e.keyCode >= 48 && e.keyCode <= 57)) {
        alert("Only Numbers allowed");
        return false;
    } else {
        return true;
    }
}

function charactersOnly(e) {
        var keyCode = (e.which) ? e.which : e.keyCode;
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32){
            alert("Only Characters allowed");
        return false;
        }
        else{
            return true;
    }
}


