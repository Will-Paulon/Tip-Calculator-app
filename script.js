const form = document.querySelector("#tip")
const bill = document.querySelector('#txtn1')
const custom = document.querySelector('#txtn2')
const nPeople = document.querySelector('#txtn3') 
const send = document.querySelector('#SendBnt') 
const reset = document.querySelector('#resetBnt') 
const tipVal = document.querySelector("#tipValue")
const personBill = document.querySelector("#personBill")

let billV  = 0;
let qtdPeople = 0;
let tip = 10/100;
let calc = 0;

//****Envio de valores*****//

send.addEventListener('click', (e) => {
    e.preventDefault()
    if (validate(bill.value, nPeople.value, "billEmpty","peapleEmpty")){
        billV = parseFloat(bill.value)
        qtdPeople = parseFloat(nPeople.value)

        tipVal.innerHTML = currency((billV * tip)/qtdPeople)
        personBill.innerHTML = currency((billV + (billV * tip))/qtdPeople)
        clearValue()
        if (customTip.value !== ''){
            tip = parseInt(custom.value) / 100
        }
    }
})

