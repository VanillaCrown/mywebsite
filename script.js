//javascript for image slider (about me section)

const images = document.querySelectorAll('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

let currentIndex = 0;


function reset() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
  }

  function initializeSlider() {
    reset();
    images[currentIndex].classList.add('active');
  }


  function slideLeft() {
    reset();
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    images[currentIndex].classList.add('active');
  }
  
  function slideRight() {
    reset();
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    images[currentIndex].classList.add('active');
  }


  initializeSlider();

previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});



// javascript for connect form (validation)

const form = document.getElementById('exampleForm')
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

    // If the element is a select dropdown and the default option is selected, style it with a red border and red text
    if (element.nodeName === 'SELECT'
          && element.value === 'Please select an option'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
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