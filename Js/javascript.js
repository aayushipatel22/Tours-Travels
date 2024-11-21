document.addEventListener("DOMContentLoaded", function () {
  var transportOptions = document.getElementById("transport-options").getElementsByTagName("a");
  var detailsContainer = document.getElementById("details-container");

  // Add click event listeners to transport options
  for (var i = 0; i < transportOptions.length; i++) {
    transportOptions[i].addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Hide all details containers
      var detailsContainers = document.getElementsByClassName("details-container");
      for (var j = 0; j < detailsContainers.length; j++) {
        detailsContainers[j].style.display = "none";
      }

      // Show details container corresponding to the selected transport mode
      var transport = this.getAttribute("data-transport");
      var detailsContainerToShow = document.getElementById(transport + "-details-container");
      detailsContainerToShow.style.display = "block";
    });
  }

  // Submit form
  var bookingForm = document.getElementById("booking-form");
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    var destination = document.getElementById("destination").value;
    var departureDate = document.getElementById("departure-date").value;
    var returnDate = document.getElementById("return-date").value;
    var totalPersons = document.getElementById("total-persons").value;
    var cabinClass = document.getElementById("cabin-class").value;

    // Display form data (you can replace this with your desired functionality)
    alert("Destination: " + destination + "\nDeparture Date: " + departureDate + "\nReturn Date: " + returnDate + "\nTotal Persons: " + totalPersons + "\nCabin Class: " + cabinClass);
  });
});






// for aeroplane details
document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  var destination = document.getElementById("destination").value;
  var departureDate = document.getElementById("departureDate").value;
  var returnDate = document.getElementById("returnDate").value;
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;
  var infants = document.getElementById("infants").value;
  var cabinClass = document.getElementById("cabinClass").value;

  // Display the submitted data
  var aeroplaneDetails = document.getElementById("aeroplaneDetails");
  aeroplaneDetails.innerHTML = "<h3>Aeroplane Ticket Details</h3>" +
    "<p><strong>Destination:</strong> " + destination + "</p>" +
    "<p><strong>Departure Date:</strong> " + departureDate + "</p>" +
    "<p><strong>Return Date:</strong> " + returnDate + "</p>" +
    "<p><strong>Total Persons:</strong> " + adults + " Adult(s), " + children + " Child(ren), " + infants + " Infant(s)</p>" +
    "<p><strong>Cabin Class:</strong> " + cabinClass + "</p>";
});