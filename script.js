function addnewWoField(){
    // console.log("adding new work field")
    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("weFild")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2)
    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton")
    weOb.insertBefore(newNode,weAddButtonOb)

}
function peProject(){
    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("peFild")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2)
    let peOb=document.getElementById("pe")
    let peAddButtonOb=document.getElementById("peAddButton")
    peOb.insertBefore(newNode,peAddButtonOb)
}
function Acqulification(){
    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("aqFild")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2)
    let acaOb=document.getElementById("aca")
    let aqAddButtonOb=document.getElementById("aqAddButton")
    acaOb.insertBefore(newNode,aqAddButtonOb)
}
function techniaclaskil(){
      let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("teFild")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2)
    let tecOb=document.getElementById("tec")
    let teAddButtonOb=document.getElementById("teAddButton")
    tecOb.insertBefore(newNode,teAddButtonOb)
}
function achivement(){
    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("acFild")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2)
    let achOb=document.getElementById("ach")
    let acAddButtonOb=document.getElementById("acAddButton")
    achOb.insertBefore(newNode,acAddButtonOb)
}
function pers_Res(){
    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("poFild")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",2)
    let prOb=document.getElementById("pr")
    let poAddButtonOb=document.getElementById("poAddButton")
    prOb.insertBefore(newNode,poAddButtonOb)
}

// generating cv
function generateCV(){
    // console.log("generate cv")
    let nameField=document.getElementById('nameField').value
    let nameT1=document.getElementById("nameT1")
    nameT1.innerHTML=nameField
    // direct
    document.getElementById("nameT2").innerHTML=nameField

    // contact
    let contactField=document.getElementById("contactField").value
    document.getElementById("contactT").innerHTML=contactField
     
    // address
    let addressField=document.getElementById("addressField").value
    document.getElementById("addressT").innerHTML=addressField

    // linked in profile
    let LinkedinField=document.getElementById("LinkedinField").value
    document.getElementById("liT").innerHTML=LinkedinField;

    // git hub profile
    let githubField=document.getElementById("githubField").value
    document.getElementById("giT").innerHTML=githubField
    // portfolio website
    let websiteField=document.getElementById("websiteField").value
    document.getElementById("poT").innerHTML=websiteField
    // position and responaibility
    let pos=document.getElementsByClassName("poFild")
    let str=''
    for(let e of pos){
        str=str+`<li> ${e.value}</li>`
        document.getElementById("porT").innerHTML=str
    }

    // work experience/internship
    let weExp=document.getElementsByClassName("weFild")
    let str1=''
    for(let f of weExp){
        str1=str1+`<li> ${f.value}</li>`
        document.getElementById("inT").innerHTML=str1
    }

    // personal project
    let prpo=document.getElementsByClassName("peFild")
    let str2=''
    for(let g of prpo){
        str2=str2+`<li> ${g.value}</li>`
        document.getElementById("prT").innerHTML=str2
    }

    // acadimic qualification
    let acd=document.getElementsByClassName("aqFild")
    let str3=''
    for(let g of acd){
        str3=str3+`<li> ${g.value}</li>`
        document.getElementById("aqT").innerHTML=str3
    }
    // techinical skill
    let tech=document.getElementsByClassName("teFild")
    let str4=''
    for(let g of tech){
        str4=str4+`<li> ${g.value}</li>`
        document.getElementById("teT").innerHTML=str4
    }
    // achivement
    let achiv=document.getElementsByClassName("acFild")
    let str5=''
    for(let g of achiv){
        str5=str5+`<li> ${g.value}</li>`
        document.getElementById("acT").innerHTML=str5
    }
document.getElementById("cv-form").style.display="none"
document.getElementById("cv-templet").style.display="block"

}
function printcv(){
    window.print();
}