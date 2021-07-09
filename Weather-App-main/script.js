import * as weather from './weather.js';
import * as data from './data.js';
import * as daily from './daily-weather.js';
import * as hourly from './hourly-weather.js';

const displayInfoByCoord = async (position) =>{
  try{
    const lat = await position.coords.latitude;
    const lon = await position.coords.longitude;
    const filteredData = await weather.filterData(data.getDataByCoord(lat,lon));
    // console.log(filteredData);
    weather.fillData(filteredData);
    
    // document.querySelector('.hourly-container').classList.add('active') ;
    // document.querySelector('.weekly-container').classList.add('active') ;
    // document.querySelector('.daily-hourly-container').classList.add('active');
    

    // let filteredDailyData = await daily.filterDailyData(data.getDailyData(lat,lon))
    // daily.fillDailyData(filteredDailyData);
    
    // let filteredHourlyData = await hourly.filterHourlyData(data.getHourlyData(lat,lon))
    // hourly.fillHourlyData(filteredHourlyData);
        
  }catch(err){
    console.log(err);
  }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayInfoByCoord);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}



const displayInfoByCity = async () =>{
  document.querySelector('.hourly-container').classList.remove('active');
  document.querySelector('.weekly-container').classList.remove('active');
  document.querySelector('.daily-hourly-container').classList.remove('active');
  try{
      const city = document.querySelector('.city-input').value;
      const filteredData = await weather.filterData(data.getDataByCity(city));
      // console.log(filteredData);
      weather.fillData(filteredData);
    }catch(err){
      console.log(err);
    }
    
  }



const showWeeklyByCity = async () => {
  document.querySelector('.hourly-container').classList.remove('active');
  document.querySelector('.weekly-container').classList.add('active');
  document.querySelector('.daily-hourly-container').classList.add('active');
try{
  const city = document.querySelector('.city-input').value;
    const json = await data.getDataByCity(city);
    let filteredData = await daily.filterDailyData(data.getDailyData(json.coord.lat,json.coord.lon))
    daily.fillDailyData(filteredData);
  }catch(err){
    console.log(err);
  }
}

const showHourly = async () => {
  document.querySelector('.weekly-container').classList.remove('active');
  document.querySelector('.daily-hourly-container').classList.add('active');
  document.querySelector('.hourly-container').classList.add('active');
  try{
    const city = document.querySelector('.city-input').value;
      const json = await data.getDataByCity(city);
      let filteredData = await hourly.filterHourlyData(data.getHourlyData(json.coord.lat,json.coord.lon))
      hourly.fillHourlyData(filteredData);
    }catch(err){
      console.log(err);
    }
}

document.querySelector('.hourly-btn').addEventListener('click',showHourly)
document.querySelector('.weekly-btn').addEventListener('click', showWeeklyByCity);
document.querySelector('.current-location').addEventListener('click',getLocation);
document.querySelector('.search-location-btn').addEventListener('click',displayInfoByCity);