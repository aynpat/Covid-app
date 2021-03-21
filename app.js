
       var form = document.getElementById('formdata');
       var result = document.getElementById('result');
       var coutryname = document.getElementById('countryname');

       // adding event listener to button


// selecting loading div
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    result.innerHTML = '';
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 100000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}
  // function myload(){
  //   return displayLoading();
  // }

        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            countryname.innerHTML = '';
            displayLoading();
        var country = document.getElementById('searchcountry').value;
           var url = "https://api.covid19api.com/total/dayone/country/"+country;
         
            getdata(url)
            coutryname.append(`${country}`)
        })

        async function getdata(url){
            var response = await fetch(url);
            var data = await response.json(data);
            console.log(data);
           
            var length = data.length;
            var index = length - 1;
            hideLoading();
            result.innerHTML = `

            <div class="card text-white bg-primary mb-3 mt-5 mr-3" style="max-width: 18rem;">
               
                <div class="card-body">


                <div class="media d-flex pt-4 mr-3">
                <div class="align-self-center">
                  <i class="icon-pencil white font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>${data[index].Confirmed}</h3>
                  <span>Confirmed Cases :</span>
                </div>
              </div>

                </div>
            </div>

            
            <div class="card text-white bg-red mb-3 mt-5 mr-3" style="max-width: 18rem;">
                
                <div class="card-body">


                <div class="media d-flex pt-4 mr-3">
                <div class="align-self-center">
                  <i class="icon-pencil white font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>${data[index].Active}</h3>
                  <span>Total Active Cases :</span>
                </div>
              </div>

                </div>
            </div>

            <div class="card text-white bg-black mb-3 mt-5 mr-3" style="max-width: 18rem;">
                
                <div class="card-body">


                <div class="media d-flex pt-4 ">
                <div class="align-self-center">
                  <i class="icon-pencil white font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>${data[index].Deaths}</h3>
                  <span>Total Number of Deaths :</span>
                </div>
              </div>

                </div>
            </div>

            <div class="card text-white bg-secondary mb-3 mt-5 mr-3" style="max-width: 18rem;">
                
                <div class="card-body">


                <div class="media d-flex pt-4 ">
                <div class="align-self-center">
                  <i class="icon-pencil white font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>${data[index].Recovered}</h3>
                  <span>Total Number of Recovered :</span>
                </div>
              </div>

                </div>
            </div>



       
                
            `;
        }


   