function challenge2(){
    console.log("Made it");
    var is_checked = document.querySelector("#sameAddress").checked;
    console.log(is_checked);


    

    if (is_checked) {
        let address = document.querySelector("#bill").value;
        console.log(address);
        document.querySelector("#home").value = address;
        document.querySelector("#home").disabled = true;
    } else {
        document.querySelector("#home").value = "";
        document.querySelector("#home").disabled = false;
    }
}