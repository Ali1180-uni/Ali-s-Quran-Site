document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search button");
    const searchInput = document.querySelector("#search");

    const arabicHeading = document.querySelector(".Arabic h3");
    const arabicText = document.querySelector(".Arabic p");

    const audioPlayer = document.querySelector("audio");
    const audioSource = document.querySelector("audio source");

    const translationSelect = document.querySelector("#trans");
    const translationHeading = document.querySelector(".Translation h3");
    const translationText = document.querySelector(".Translation p");

    let currentSurah = null;
    let currentAyah = null;

    // Search button click
    searchBtn.addEventListener("click", async function (e) {
        e.preventDefault();

        const inputVal = searchInput.value.trim();
        if (!inputVal || !inputVal.includes(":")) {
            alert("Please enter in format SurahNo:VerseNo (e.g., 2:255)");
            return;
        }

        const [surah, ayah] = inputVal.split(":").map(Number);
        currentSurah = surah;
        currentAyah = ayah;

        try {
            // Arabic text + audio
            const arabicRes = await axios.get(
                `https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`
            );
            const arabicData = arabicRes.data.data;

            // Set heading
            arabicHeading.textContent = `Verse ${currentSurah}:${currentAyah}: Arabic\nSurah - ${arabicData.surah.englishName}`;

            // Set Arabic text
            arabicText.textContent = arabicData.text;

            // Set audio but DO NOT autoplay
            audioSource.src = arabicData.audio;
            audioPlayer.load();
            audioPlayer.style.display = "block"; // make sure it’s visible
            document.querySelector("audio").classList.add("active");


            // Reset translation
            translationHeading.textContent = "";
            translationText.textContent = "";
        } catch (err) {
            console.error("Error fetching Arabic:", err);
            arabicHeading.textContent = "";
            arabicText.textContent = "Failed to load Arabic text.";
        }
    });

    // Translation dropdown change
    translationSelect.addEventListener("change", async function () {
        if (!currentSurah || !currentAyah) {
            alert("Please search for a verse first.");
            return;
        }

        const lang = this.value;
        if (lang === "non") {
            translationHeading.textContent = "";
            translationText.textContent = "";
            return;
        }

        try {
            let edition;
            let langName;
            if (lang === "ur") {
                edition = "ur.jalandhry";
                langName = "Urdu";
            } else if (lang === "en") {
                edition = "en.asad";
                langName = "English";
            }

            const translationRes = await axios.get(
                `https://api.alquran.cloud/v1/ayah/${currentSurah}:${currentAyah}/${edition}`
            );
            const translationData = translationRes.data.data;

            translationHeading.textContent = `Verse ${currentSurah}:${currentAyah}: Translation in ${langName}\nSurah - ${translationData.surah.englishName}`;
            translationText.textContent = translationData.text;
        } catch (err) {
            console.error("Error fetching translation:", err);
            translationHeading.textContent = "";
            translationText.textContent = "Failed to load translation.";
        }
    });
});
