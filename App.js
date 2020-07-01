const url='https://api.wheretheiss.at/v1/satellites';

async function getData(){
    const resp= await fetch(url);

    const data=JSON.parse(resp);
    console.log(data)
const {latitude,longitude}=data;
document.getElementById('lat').textContent=latitude;
document.getElementById('lon').textContent=longitude;
}

getData();
