
const quotes = [
    {
        author:"키케로",
        text:"삶이 있는 한 희망은 있다."
    },
    {
        author:"로망로랑",
        text:"산다는것 그것은 치열한 전투이다."
    },
    {
        author:"사무엘존슨",
        text:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다."
    },
    {
        author:"파울로 코엘료",
        text:"언제나 현재에 집중할수 있다면 행복할것이다."
    },
    {
        author:"찰리 채플린",
        text:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해."
    },
    {
        author:"엘버트 허버드",
        text:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다."
    },
    {
        author:"켄러",
        text:"신은 용기있는자를 결코 버리지 않는다."
    },
    {
        author:"헬렌켈러",
        text:"행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다"
    },
    {
        author:"로버트 엘리엇",
        text:"피할수 없으면 즐겨라"
    }    
];


const printRandomQuote = () => {
    const idx = Math.floor( (Math.random() * quotes.length) );
    const {author, text} = quotes[idx];
    document.querySelector("#quote .author").innerText = author;
    document.querySelector("#quote .text").innerText = text;
};
