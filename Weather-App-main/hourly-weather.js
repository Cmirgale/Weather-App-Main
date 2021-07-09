const filterHourlyData = async (promise) => {
    // console.log(promise);
    let data = await promise;
    let currentTime = new Date();
    let hourlyData = [];
    let time,imageDesc,temp;
    // let weekDayDate;
    // console.log(data);

    for(let i=0; i<12; i += 1){
        time = currentTime.toLocaleString("en-US", {
            hour: "numeric",
            hour12: true,
          });
          currentTime.setHours(currentTime.getHours() + 1);
        
        temp = Math.round(data.hourly[i].temp)
        imageDesc = data.hourly[i].weather[0].main;
        
        
        hourlyData.push({time, temp, imageDesc});
    }
    // console.log(hourlyData);
    return hourlyData;
}

const fillHourlyData = (hourlyData) => {
    document.querySelector('.hourly-container-1').innerHTML='';
    document.querySelector('.hourly-container-2').innerHTML='';
    document.querySelector('.weekly-container').innerHTML='';
    for(let i = 0; i<hourlyData.length/2; i += 1){
        let span = document.createElement('span')
        span.classList.add('hours-report');
        
        let div = document.createElement('div');
    
        let dayDiv = document.createElement('div')
        dayDiv.classList.add('hour');
        dayDiv.textContent = hourlyData[i].time;
        div.appendChild(dayDiv);


        let imgDiv = document.createElement('div')
        imgDiv.classList.add('weather-img-icon');
        let img = document.createElement('img')
        img.classList.add('weather-icon');
        img.src = `images\\${hourlyData[i].imageDesc}.png`;
        img.title = `${hourlyData[i].imageDesc}`;
        img.alt = `${hourlyData[i].imageDesc}`
        imgDiv.appendChild(img);
        div.appendChild(imgDiv);

        
    
        let tempDiv = document.createElement('div')
        tempDiv.classList.add('hourly-temp');
        tempDiv.textContent = `${hourlyData[i].temp}°C`;
        div.appendChild(tempDiv);
    
        span.appendChild(div)
        document.querySelector('.hourly-container-1').appendChild(span);
    }

        for(let i=6; i<hourlyData.length;i++){
        let span = document.createElement('span')
        span.classList.add('hours-report');
        
        let div = document.createElement('div');
    
        let dayDiv = document.createElement('div')
        dayDiv.classList.add('hour');
        dayDiv.textContent = hourlyData[i].time;
        div.appendChild(dayDiv);


        let imgDiv = document.createElement('div')
        imgDiv.classList.add('weather-img-icon');
        let img = document.createElement('img')
        img.classList.add('weather-icon');
        img.src = `images\\${hourlyData[i].imageDesc}.png`;
        img.title = `${hourlyData[i].imageDesc}`;
        img.alt = `${hourlyData[i].imageDesc}`
        imgDiv.appendChild(img);
        div.appendChild(imgDiv);

        
    
        let tempDiv = document.createElement('div')
        tempDiv.classList.add('hourly-temp');
        tempDiv.textContent = `${hourlyData[i].temp}°C`;
        div.appendChild(tempDiv);
    
        span.appendChild(div)
        document.querySelector('.hourly-container-2').appendChild(span);
        }
}
export{filterHourlyData,fillHourlyData};