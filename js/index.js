// Fetch Vehicles for Selection



getVehiclesSelection();
async function getVehiclesSelection() {
  try {
    const response = await fetch("http://localhost:8000/api/vehicles/", {
      method: 'GET',  // Change the method to GET
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const json = await response.json();

     
      let container = '<option value="">Select Vehicle</option>';
      json.forEach((element) => {
        container += `<option id="${element.id}" value="${element.id}">${element.body_style}</option>`;
      });

      const selectElement = document.querySelector('#car_body_style');
      if (selectElement) {
        selectElement.innerHTML = container;
      } else {
        console.error("Select element not found");
      }


      let container1 = '<option value="">Select VIN</option>';
      json.forEach((element) => {
        container1 += `<option id="${element.id}" value="${element.id}">${element.vin}</option>`;
      });

      const selectElement1 = document.querySelector('#vehicle_vin');
      if (selectElement1) {
        selectElement1.innerHTML = container1;
      } else {
        console.error("Select element not found");
      }



      

    let car_image = [
        {id: 1, image:"rav42.jpg"},
        {id: 2, image:"chev1.png"},
        {id: 3, image:"tesla1.jpg"},
        {id: 4, image:"nissan1.jpg"},
        {id: 5, image:"ranger1.jpg"},
        {id: 6, image:"gmc.jpg"},
        {id: 7, image:"mazda.jpg"},
        {id: 8, image:"mustang1.jpg"},
        {id: 9, image:"sedona1.png"},
        {id: 10, image:"dodge.jpg"},
        {id: 11, image:"rav41.jpg"},
    ]


  

    let car_link = [
      "toyota.html",
      "chevrolet.html",
      "tesla.html",
      "nissan.html",
      "ford.html",
      "gmc.html",
      "mazda.html",
      "kia.html",
      "dodge.html",
      "honda.html"
    ]

    

      let container2 = '<option value="">Select Brand</option>';
      json.forEach((element) => {

        container2 += `<option id="${element.id}" value="${element.id}">${element.brand_name}</option>`;
      });

      const selectElement2 = document.querySelector('#vehicle_brand');
      if (selectElement2) {
        selectElement2.innerHTML = container2;
      } else {
        console.error("Select element not found");
      }


    
      let container3 = '<option value="">Select Model</option>';

      json.forEach((element) => {
        container3 += `<option id="${element.id}" value="${element.id}">${element.model_name}</option>`;
      });

      const selectElement3 = document.querySelector('#vehicle_model');
      if (selectElement3) {
        selectElement3.innerHTML = container3;
      } else {
        console.error("Select element not found");
      }



      let container4 = '<option value="">Select Transmission</option>';

      json.forEach((element) => {
        container4 += `<option id="${element.id}" value="${element.id}">${element.transmission}</option>`;
      });

      const selectElement4 = document.querySelector('#vehicle_transmission');
      if (selectElement4) {
        selectElement4.innerHTML = container4;
      } else {
        console.error("Select element not found");
      }


      let container5 = '<option value="">Select Engine</option>';

      json.forEach((element) => {
        container5 += `<option id="${element.id}" value="${element.id}">${element.engine}</option>`;
      });

      const selectElement5 = document.querySelector('#vehicle_engine');
      if (selectElement4) {
        selectElement5.innerHTML = container5;
      } else {
        console.error("Select element not found");
      }

      
      let container6 = '<option value="">Select Color</option>';

      json.forEach((element) => {
        container6 += `<option id="${element.id}" value="${element.id}">${element.color}</option>`;
      });

      const selectElement6 = document.querySelector('#vehicle_color');
      if (selectElement4) {
        selectElement6.innerHTML = container6;
      } else {
        console.error("Select element not found");
      }




      let carsContainer =  "";
      let vehiclesHTML = '';
      let countArr = 0;

    
      json.forEach((element) => {

        if (element.vehicle_id !== undefined){

        
       console.log(element.vehicle_id);
        carsContainer += `<div class="col-md-4 mt-5">
        <div class="card card-box-a card-shadow">
          <div class="object-fit-sm-contain border rounded" alt="...">>
            <img
              src="assets/images/cars/${car_image[countArr].image}"
              alt=""
              class="img-a"
              width="500"
              height="200"
            />
          </div>
          <div class="card-overlay">
            <div class="card-overlay-a-content">
              <div class="card-header-a">
                <h2 class="card-title-a">
                  <a href="#"> <span class="fs-6"> ${element.body_style}</span> <br />${element.model_name}</a>
                </h2>
              </div>
              <div class="card-body-a">
                <div class="price-box d-flex">
                  <span class="price-a">price | $${element.price}</span>
                </div>
                <a href="${car_link[countArr]}" class="link-a">
                  Click here to view
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
              <div class="card-footer-a">
                <ul class="card-info d-flex justify-content-around">
                  <li>
                    <h4 class="card-info-title">Vehicle</h4>
                    <span>${element.body_style}</span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Brand</h4>
                    <span>${element.brand_name}</span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Model</h4>
                    <span>${element.model_name}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      vehiclesHTML += `
      <div class="col-lg-5">
        <div class="property-price d-flex justify-content-evenly">
          <div class="card-header-c d-flex">
            <div class="card-title-c align-self-center">
              <h5 class="title-c">Price: $${element.price}</h5>
            </div>
          </div>
        </div>
        <div class="property-summary justify-content-evenly">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box-d section-t4">
                <h3 class="title-d">Summary Specification</h3>
              </div>
            </div>
          </div>
          <div class="summary-list">
            <ul class="list">
              <li class="d-flex justify-content-between">
                <strong>Vehicle:</strong>
                <span>${element.body_style}</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>VIN:</strong>
                <span>${element.vin}</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Brand:</strong>
                <span>${element.brand_name}</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Model:</strong>
                <span>${element.model_name}</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Color:</strong>
                <span>${element.color}</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Transmission:</strong>
                <span>${element.transmission}</span>
              </li>
              <li class="d-flex justify-content-between">
                <strong>Engine:</strong>
                <span>${element.engine}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>`;
      
        }
      countArr++;

      });


      document.getElementById("cars_container").innerHTML = carsContainer;
      document.getElementById("existing_container_id").innerHTML = vehiclesHTML;


     
 








    } else {
      console.error("Failed to fetch vehicles for selection. Status:", response.status);
    }
  } catch (error) {
    console.error("An error occurred while fetching vehicles for selection", error);
  }
}

 // Function to get and update data
 function getVehicleData() {
  // Get the element by its ID
  var dataContainer = document.getElementById("dataContainer");

  // Replace the content with new data (you can modify this part)
  var newData = "New Data: " + new Date().toLocaleTimeString();
  dataContainer.textContent = newData;
}
// Get All Vehicles




// Rest of the code remains the same...
// Function to reset filters
function resetFilters() {
    // Reset all select elements to their default values
    document.querySelectorAll('.filter-options-section select').forEach(select => {
      select.value = '';
    });
  
    // Trigger the form submission to fetch all vehicles without filters
    document.querySelector('.form-inline').dispatchEvent(new Event('submit'));
  }
  
  