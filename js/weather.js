

const loadWeather = () => {

    navigator.geolocation.getCurrentPosition((position) => {

        // 지리정보 가져오기 성공

        const {latitude, longitude} = position.coords;
        const apiKey = "776c966b6ec8675ddfe46dd65ca300ec";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=kr`;

        fetch(url)
            .then(response => response.json())
            .then(json => {             
                const {locKorean, weatherKorean} = convertToKorean(json.name, json.weather[0].main);

                document.querySelector("#location").innerText = locKorean;
                document.querySelector("#weather").innerText = weatherKorean;

            });
        
    }, () => {
        // 지리정보 가져오기 실패
        alert("지리 정보를 가져오는 데에 실패 하였습니다.");
    });
};

const convertToKorean = (locEng, weatherEng) => {
    let locKorean = "";
    let weatherKorean = "";

    switch(locEng){

        case "Incheon":
            locKorean = "인천";
            break;
        case "Seoul":
            locKorean = "서울";
            break;
    }

    switch(weatherEng){

        case "Drizzle":
            weatherKorean = "얕은 비";
            break;
        case "Mist":
            weatherKorean = "안개";
            break;
            
    }

    return {locKorean, weatherKorean};
};