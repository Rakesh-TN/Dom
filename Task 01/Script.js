//alert("Wellcome to Task 01 by Rakesh")

function changeEvent() {
    let FullName = document.querySelector('#inName').value
    let nameEl = document.querySelector('#outName')
    nameEl.textContent = FullName

    let Email = document.querySelector('#inMail-Id').value
    let mailEl = document.querySelector('#outMail-Id')
    mailEl.textContent = Email

    let num = document.querySelector('#incellNumber').value
    let numEl = document.querySelector('#outcellNumber')
    numEl.textContent = num

    let dob = document.querySelector('#inGender').value
    let dobEl = document.querySelector('#outGender')
    dobEl.textContent = dob

    let add = document.querySelector('#inAddress').value
    let addEl = document.querySelector('#outAddress')
    addEl.textContent = add
    
    let gen = document.querySelector('#indaofBirth').value
    let genEl = document.querySelector('#outdaofBirth')
    genEl.textContent = gen
}

function backgruondEvent() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

function backgruondEvent1() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
}

function resetEvent(){
    let nameEl = document.querySelector('#outName')
    let mailEl = document.querySelector('#outMail-Id')
    let numEl = document.querySelector('#outcellNumber')
    let dobEl = document.querySelector('#outGender')
}