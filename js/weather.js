

const loadWeather = () => {


    

    navigator.geolocation.getCurrentPosition((position) => {

        // 지리정보 가져오기 성공

        const {latitude, longitude} = position.coords;
        const apiKey = "776c966b6ec8675ddfe46dd65ca300ec";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json));
        
    }, () => {
        // 지리정보 가져오기 실패
        alert("지리 정보를 가져오는 데에 실패 하였습니다.");
    });
};