const scriptURL='https://script.google.com/macros/s/AKfycbzoZJsalcUpRXabX6gTGyDUdIvxBvVPC5Rg7ksYJOKt9dEL1KxyE5GGIVanRm3UhOkH/exec'

const form = document.forms['data-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank  you! your form is submitted successfully!"))
    .then(() => { window.location.href = "student_acadamic-details.html"; })
    .catch(error => console.error('Error!', error.message))
})