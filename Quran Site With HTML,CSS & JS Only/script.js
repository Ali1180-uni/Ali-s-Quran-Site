let body = document.querySelector("body");
let p = document.querySelector(".Arabic p");
let p2 = document.querySelector(".Translation p");
let inp = document.querySelector("input");
let h3Arabic = document.querySelector(".Arabic h3");
let h3Trans = document.querySelector(".Translation h3");
let btn = document.querySelector("button");
let opt = document.querySelector("#trans");
let aud = document.querySelector("audio");


async function getVoice(id) {
    const urlAud = `https://api.alquran.cloud/v1/ayah/${id}/ar.alafasy`;
    try{
        let resAR = await axios.get(urlAud);
        let audioUrl = resAR.data.data.audio;
        if(audioUrl) {
            aud.src = audioUrl;
            aud.classList.add("active");
        } else {
            aud.classList.remove("active");
        }
    }
    catch(err) {
        console.error("Error fetching audio:", err);
        aud.classList.remove("active");
    }
}



async function getData(id) {
    const urlAR = `https://api.alquran.cloud/v1/ayah/${id}/quran-simple`;
    try{
        let resAR = await axios.get(urlAR);
        let resultAR = resAR.data.data.text;
        let Surah = resAR.data.data.surah.englishName;
        h3Arabic.innerText = `Verse ${id}: Arabic \n Surah - ${Surah}`;
        p.innerText = resultAR;
    }
    catch(err) {
        console.error("Error fetching data:", err);
        h3Arabic.innerText = "";
        p.innerText = "An error occurred while fetching the verse or Wrong Verse no.";
    }
}

btn.addEventListener("click", async()=>{
    let id = inp.value.trim();
    if(id === ""){
        h3Arabic.innerText = "";
        p.innerText = "Please Enter Some Verse number";
        h3Trans.innerText = "";
        p2.innerText = "";
        aud.classList.remove("active");
    }
    else{
        await getData(id);
        await getVoice(id);
        h3Trans.innerText = "";
        p2.innerText = "";
    }
});

opt.addEventListener("change", async()=>{
    let id = inp.value.trim();
    if(id === ""){
        h3Trans.innerText = "";
        p2.innerText = "";
        return;
    }
    try{
        const translationDiv = document.querySelector('.Translation.Ar');
        if(opt.value == "ur"){
            const urlUR = `https://api.alquran.cloud/v1/ayah/${id}/ur.jalandhry`;
            let resUR = await axios.get(urlUR);
            let resultUR = resUR.data.data.text;
            let Surah = resUR.data.data.surah.englishName;
            h3Trans.innerText = `Verse ${id}: Translation in Urdu \n Surah - ${Surah}`;
            p2.innerText = resultUR;
            translationDiv.setAttribute('lang', 'ur');
        }
        else if(opt.value == "en"){
            const urlEN = `https://api.alquran.cloud/v1/ayah/${id}/en.asad`;
            let resEN = await axios.get(urlEN);
            let resultEN = resEN.data.data.text;
            let Surah = resEN.data.data.surah.englishName;
            h3Trans.innerText = `Verse ${id}: Translation in English \n Surah - ${Surah}`;
            p2.innerText = resultEN;
            translationDiv.setAttribute('lang', 'en');
        }
    }
    catch(err) {
        console.error("Error fetching translation:", err);
        h3Trans.innerText = "";
        p2.innerText = "An error occurred while fetching the translation.";
    }
});


