

const updateTimer = () => {
    const container = document.querySelector("#timer");

    const dt = new Date();
    const text = `${pad(dt.getHours())}:${pad(dt.getMinutes())}:${pad(dt.getSeconds())}`;
    container.innerText = text;
};

const pad = num => {
    
    return  num.toString().padStart(2, "0");
};