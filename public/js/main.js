const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal=="")
    {
        city_name.innerText = "Write name of the City first before Search.";
        datahide.classList.add("data_hide");
    }
    else
    {
       try
       {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=51463a0e5db0a8a69a098b12867dd9ab`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText =  `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;

        const tempMood = arrData[0].weather[0].main;
    
        //condition to check Sunny or Cloudy
        if(tempMood=="Clear")
        {
            temp_status.innerHTML = "<i class='fa fa-sun-o' style='color: #eccc68;' aria-hidden='true'></i>"; 
        }
        else if(tempMood=="Cloudy")
        {
            temp_status.innerHTML = "<i class='fa fa-cloud' style='color: #fff;'aria-hidden='true'></i>"; 
        }
        else if(tempMood=="Rainy")
        {
            temp_status.innerHTML = "<i class='fa fa-tint' style='color: #fff;'aria-hidden='true'></i>"; 
        }
        else
        {
            temp_status.innerHTML = "<i class='fa fa-tint' style='color: #fff;'aria-hidden='true'></i>"; 
        }
        datahide.classList.remove("data_hide");
       }
       catch
       {
        city_name.innerText = "Please Enter the City name Properly";
        datahide.classList.add("data_hide");
       } 
    }
}
submitBtn.addEventListener("click",getInfo)