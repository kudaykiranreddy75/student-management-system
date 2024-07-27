const scriptURL='https://script.google.com/macros/s/AKfycbyZ9hgmEUq_ctPbgV2AJc1mEj9Ns3PtgwH61Eb-QAsgXi78Gou8iL36PNX7hWwflP9P/exec'

const form = document.forms['aca_data']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank  you! your form is submitted successfully!"))
    .then(() => { window.location.href = "parentsdetails.html"; })
    .catch(error => console.error('Error!', error.message))
})
