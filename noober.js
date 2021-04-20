// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // The following code is used to grab data points about the ride and present them in a human-readable format

  // First, we would like to determine the car for the ride - Noober X, XL or Purple based on no of passengers 
  let noPassengers = ride.numberOfPassengers
  let car = 'Noober X' //created variable with default car Noober X 
  if (ride.purpleRequested==true){ //Noober Purple request supercedes Noober XL, so we check this first
    car = 'Noober Purple'
  } else if (noPassengers>3) { //If Noober Purple request is false, we check for Noober XL
    car = 'Noober XL'
  }

  //Created the below well-named variables for each data point in the object ride 
  //Passenger information details assigned to variables 
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber

  //Pickup location details assigned to variables
  let pu_address = ride.pickupLocation.address
  let pu_city = ride.pickupLocation.city
  let pu_state = ride.pickupLocation.state
  let pu_zip = ride.pickupLocation.zip

  //Drop-off location details assigned to variables
  let do_address = ride.dropoffLocation.address
  let do_city = ride.dropoffLocation.city
  let do_state = ride.dropoffLocation.state
  let do_zip = ride.dropoffLocation.zip

  //Displaying the variables in the desired format 
  console.log(`${car} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pu_address}, ${pu_city}, ${pu_state} ${pu_zip}. Drop-off at ${do_address}, ${do_city}, ${do_state} ${do_zip}.`)
  // 🔥 YOUR CODE ENDS HERE 🔥
})
