const scriptURL='https://script.google.com/macros/s/AKfycbwDjKOMjtfMb0qjh3Sy-veCwvUCyh1A3_AEjMVdu00CMe2_J2l5NDGXopGnLtu5I9dmLw/exec'

const form = document.forms['paren_data']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank  you! your form is submitted successfully!"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})