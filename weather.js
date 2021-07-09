const filterData = async (promise) => {
    // console.log(promise);
    let data = await promise;
    // console.log(data.main.temp_min);
    let city = data.name;
    let temp = Math.round(data.main.temp);
    let minTemp = Math.round(data.main.temp_min);
    let maxTemp = Math.round(data.main.temp_max);
    let weatherDesc = data.weather[0].main;

    return {city, temp, minTemp, maxTemp, weatherDesc};

}

const fillData = ({
    city,
    temp,
    minTemp,
    maxTemp,
    weatherDesc,
  }) => {
    let display = [
      { key: ".city", value: city },
      { key: ".temp", value: `${temp}` },
      { key: ".max-temp", value: `Max : ${maxTemp}`},
      { key: ".min-temp", value: `Min : ${minTemp}` },
      { key: ".weather-desc", value: weatherDesc }
    ];
  
    display.forEach(({ key, value }) => {
        // console.log(docu7ment.querySelector(key).textContent);
      document.querySelector(key).textContent = value;
    });
  };
export {filterData, fillData};