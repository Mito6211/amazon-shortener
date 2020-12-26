const urlInput = document.getElementById("url-input");
const shortenBtn = document.getElementById("shorten-btn");
const output = document.getElementById("output");

shortenBtn.addEventListener("click", () => {
    const beginningURL = urlInput.value.match(/amazon\.\w+/gim)[0];
    const importantInfo = urlInput.value.match(/\/dp\/.{10}/gim)[0];
    output.textContent = beginningURL + importantInfo;
    output.href = "https://www." + beginningURL + importantInfo;
    // make a href
});
