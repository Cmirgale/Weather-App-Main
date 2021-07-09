import APIKEY from './apikey.js';

const getDataByCity = async (city) =>{
    // console.log(city);
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`, {mod : 'cors'});
    let json = await response.json();
    // console.log(json);
    if (json.cod !== 200) throw new Error("City not found");
    return json;
}

const getDataByCoord = async (lat,lon) =>{
    // console.log(city);
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`, {mod : 'cors'});
    let json = await response.json();
    // console.log(json);
    if (json.cod !== 200) throw new Error("City not found");
    return json;
}

const getDailyData = async (lat, lon) =>{
  let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly&appid=${APIKEY}`, {mod : 'cors'});
  let json = await response.json();
  // console.log(json);
  return json;
};

const getHourlyData = async (lat, lon) =>{
  let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,daily&appid=${APIKEY}`, {mod : 'cors'});
  let json = await response.json();
  // console.log(json);
  return json;
};
export {getDataByCity, getDataByCoord, getDailyData, getHourlyData};