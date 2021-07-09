const filterDailyData = async (promise) => {
    // console.log(promise);
    let data = await promise;
    let currentDate = new Date();
    let dailyData = [];
    let weekDay,imageDesc,minTemp,maxTemp;
    let weekDayDate;
    // console.log(data);

    for(let i=1; i<8; i += 1){
        weekDayDate = currentDate
            .toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                weekday: "short",
            })
            .split(",");
            // console.log(currentDate.getDate()+1);
        currentDate.setDate(currentDate.getDate() + 1);
        // console.log(weekDayDate);
        weekDay = weekDayDate[0];
        minTemp = Math.round(data.daily[i].temp.min);
        maxTemp = Math.round(data.daily[i].temp.max);
        imageDesc = data.daily[i].weather[0].main;
        
        
        dailyData.push({weekDay, minTemp, maxTemp, imageDesc});
    }
    // console.log(dailyData);
    return dailyData;
}

const fillDailyData = (dailyData) => {
    document.querySelector('.hourly-container-1').innerHTML='';
    document.querySelector('.hourly-container-2').innerHTML='';
    document.querySelector('.weekly-container').innerHTML='';
    for(let i = 0; i<dailyData.length; i += 1){
        let span = document.createElement('span')
        span.classList.add('daily-report');
        
        let div = document.createElement('div');
    
        let dayDiv = document.createElement('div')
        dayDiv.classList.add('weekday');
        dayDiv.textContent = dailyData[i].weekDay;
        div.appendChild(dayDiv);


        let imgDiv = document.createElement('div')
        imgDiv.classList.add('weather-img-icon');
        let img = document.createElement('img')
        img.classList.add('weather-icon');
        img.src = `images\\${dailyData[i].imageDesc}.png`;
        img.title = `${dailyData[i].imageDesc}`;
        img.alt = `${dailyData[i].imageDesc}`
        imgDiv.appendChild(img);
        div.appendChild(imgDiv);

        
    
        let maxTempDiv = document.createElement('div')
        maxTempDiv.classList.add('daily-max-temp');
        maxTempDiv.textContent = `${dailyData[i].maxTemp}°C`;
        div.appendChild(maxTempDiv);

        

        let minTempDiv = document.createElement('div')
        minTempDiv.classList.add('daily-min-temp');
        minTempDiv.textContent = `${dailyData[i].minTemp}°C`;
        div.appendChild(minTempDiv);
    
        span.appendChild(div)
        document.querySelector('.weekly-container').appendChild(span);
    }
}
export{filterDailyData,fillDailyData};