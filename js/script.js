var nameWebsite = document.getElementById("nameWebsite");
var URLwebSite = document.getElementById("URLwebSite");
var inexNumber = 0 ;

if (localStorage.getItem("webSite") == null ){
    
   var allwebsite = [];

}else {
  allwebsite =  JSON.parse(localStorage.getItem("webSite"));
   displayWebSite();
}

function addWebSite(){

    if( (nameWebsite.value !="" || URLwebSite.value != "") &&  vaildationName() == true && validationUrl() == true   ){


        var prodauct = {

            name : nameWebsite.value,
            URL : URLwebSite.value
        }
            allwebsite.push(prodauct);
            localStorage.setItem("webSite" , JSON.stringify(allwebsite));
            displayWebSite();
            clearData();
    }
    else {
        alert("Please Enter all Data and must be correct to continue")
    }


}
function displayWebSite(){

    var box = ``;

    for( var i = 0 ; i < allwebsite.length ; i++ ){

        box += `<tr>

        <td>${i}</td>
        <td>${allwebsite[i].name}</td>
        <td>
        <a href="${allwebsite[i].URL}" target="_blank">
        <button class="btn w-50 btn-danger">Visit</button>
    </a>      </td>
    <td> <button class="btn w-50 btn-dark" onclick="UpdataWebsite(${i})">Update</button></td>
      <td> <button class="btn w-50 btn-dark" onclick="DeleteWebSite(${i})">Delete</button></td>
    </tr>`
    }

document.getElementById("tableBody").innerHTML = box ; 
}
function DeleteWebSite(num){

    allwebsite.splice(num , 1);
    localStorage.setItem("webSite" , JSON.stringify(allwebsite));
    displayWebSite();

}
function clearData(){
    nameWebsite.value = "";
    URLwebSite.value = "";
}
function UpdataWebsite(num){

    inexNumber = num ; 
    var CureentWebsite = allwebsite[num];
    nameWebsite.value = CureentWebsite.name;
    URLwebSite.value = CureentWebsite.URL;

    document.getElementById("UpdataData").classList.remove("d-none");
    document.getElementById("myButton").classList.add("d-none");



}
function addUpdataWebsite(){

    var prodauct = {

        name : nameWebsite.value,
        URL : URLwebSite.value
    }
        allwebsite.splice(inexNumber , 1 , prodauct );
        localStorage.setItem("webSite" , JSON.stringify(allwebsite));
        displayWebSite();
        document.getElementById("UpdataData").classList.add("d-none");
        document.getElementById("myButton").classList.remove("d-none");
        clearData();
}

function vaildationName(){

    var regex = /^[A-Z][a-z]{3}$/

    if(regex.test(nameWebsite.value) == true ){

        return true ; 
    }
    else{
        return false;
    }
}
function validationUrl() {

    var regex = /^(https:\/\/w{3}.)[a-z]/;
    if (regex.test(siteUrlInput.value) == true) {
        return true;
    }
    else {

        return false;

    }
}


