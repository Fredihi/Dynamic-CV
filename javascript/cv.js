const cv = "https://fredihi.github.io/Dynamic-CV/json/data.json"
const display = document.querySelector("#display-data");

const getData = async () => {
    const res = await fetch (cv);
    const data = await res.json();
    return data
}


const displayInfo = async () => {
    const payLoad = await getData();
    
    let dataDisplay = payLoad.personalinfo.map((object) => {
        const {header, name} = object;
        return `
        <div class ="container">
        <h2>${header}</h2>
        <p>${name}<p>
        <br></br>
        </div>

        `
    }).join("")

    display.innerHTML = dataDisplay;
}

displayInfo();
