// javascript for connect form (CONNECT PAGE) (validation)

const form = document.getElementById('connectForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')


const formElements = [ ...form.elements ]

const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if (element.nodeName === 'BUTTON') {
      return element.value !== 'Please fill all required options'
    } else {
      return element.checkValidity()
    }
  })
  return valid
}


const handleChange = () => {
  formElements.forEach((element) => {
 
    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'  
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }
  })


  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}


const handleSubmit = (e) => {
  e.preventDefault()

  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

   
    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 5000)
  }
}

formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

form.addEventListener('submit', (e) => handleSubmit(e))



<script>

const map = L.map('map').setView([43.096214, -79.037743], 13);      

  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: 'Copyright Google Maps'
      }).addTo(map);

  var marker = L.marker([43.096214, -79.037743]).addTo(map);
  var circle = L.circle([43.08, -79.08], {radius: 600}).addTo(map);


  var latlngs = [[43.09, -79.07],[43.08, -79.06], [43.1, -79.05]];
</script>

