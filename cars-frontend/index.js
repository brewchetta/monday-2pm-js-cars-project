const URL = `http://localhost:3000/cars`
const carsContainer = document.getElementById('cars-container')
const carsForm = document.getElementById('car-create-form')

const headers = {
  "Accepts": "application/json",
  "Content-Type": "application/json"
}

let cars = []

const parseJSON = response => response.json()

const fetchCars = () => {
  fetch(URL)
  .then(parseJSON)
  .then(data => {
    cars = data
    cars.forEach(car => {
      const pTag = document.createElement('p')
      pTag.className = 'car-card'
      pTag.innerText = `Make: ${car.make} / Model: ${car.model} / Year: ${car.year}`
      carsContainer.append(pTag)
    })
  })
}

carsForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const inputs = event.target.querySelectorAll('input')

  const body = {
    make: inputs[0].value,
    model: inputs[1].value,
    year: inputs[2].value
  }

  fetch(URL, {
    method: "POST",
    headers,
    body: JSON.strinfigy(body)
  })

  const pTag = document.createElement('p')
  pTag.className = 'car-card'
  pTag.innerText = `Make: ${body.make} / Model: ${body.model} / Year: ${body.year}`
  carsContainer.append(pTag)

})

fetchCars()
