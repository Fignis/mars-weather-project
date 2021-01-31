//require("dotenv").config();
//console.log(process.env);
//const apiKey = process.env.API_KEY;
const apiKey = "7X1GuqEiB8rXF1R4iBieDqnoA64R51xLiEv0uDLm";
var butt = document.getElementById("button");
const panels = document.querySelector(".panels");
async function sendRequest() {
  let response = await fetch(
    `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
  );
  //console.log(response);
  let data = await response.json();
  const { sol_keys, validity_checks, ...solDat } = data;
  let entries = Object.entries(solDat);
  console.log(data);
  return entries.map(([sol, data]) => {
    return {
      sol: sol,
      mxTemp: data.AT.mx,
      mnTemp: data.AT.mn,
      windSpeed: data.HWS.av,
    };
    console.log(mxTemp);
  });
  console.log(data.AT.mn);
  /*for (const [day, row] of dataMap) {
    let solObj = dataMap[row];
    display(day, solObj);
    console.log(row);
  }*/
}
sendRequest().then((sols) => {
  console.log(sols);
});
const display = (day, temps) => {
  try {
    let dayNum = day;
    let temp = temps;
    let mxTemp = this.temps.mx;
    let mnTemp = temps.mn;
    let date = temps.First_UTC;
    let date2 = new Date(date);
    let month = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May.",
      "June",
      "July",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];
    var monEarth = month[date2.getUTCMonth()];
    var dayEarth = date2.getUTCDate();
    var dateEarth = `${monEarth} ${dayEarth}`;
    var highCel = Math.round(temps.mx);
    let lowCel = Math.round(temps.mn);
    var highFah = Math.round((highCel * 9) / 5 + 32);
    var lowFah = Math.round((lowCel * 9) / 5 + 32);
  } catch (err) {
    console.log("there was an error" + err);
    var highCel = "-";
    let lowCel = "-";
    var highFah = "-";
    var lowFah = "-";
  }
  console.log(temps.mx);
  panels.innerHTML = `<div>low:${lowCel} high:${highCel}<div>`;
};

butt.addEventListener("click", sendRequest);
function view() {}
