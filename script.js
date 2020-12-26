const urlInput = document.getElementById("url-input");
const shortenBtn = document.getElementById("shorten-btn");
const output = document.getElementById("output");
const errorMessage = document.getElementById("error-message");

let link;

shortenBtn.addEventListener("click", () => {
    try {
        const inputText = urlInput.value.replace("product/", "");
        const beginningURL = inputText.match(/amazon\.(\w|\.)+/gim)[0];
        const importantInfo = inputText.match(/\/dp\/.{10}/gim)[0];
        output.textContent = beginningURL + importantInfo;
        link = "https://www." + beginningURL + importantInfo;
    } catch {
        console.log("invalid link");
    }
});

output.addEventListener("click", () => {
    navigator.clipboard.writeText(link).then(
        () => {
            errorMessage.textContent = "Copied!";
            errorMessage.style.backgroundColor = "#33996999";
            errorMessage.classList.remove("hidden");
        },
        () => {
            errorMessage.textContent = "Failed to copy.";
            errorMessage.classList.remove("hidden");
        }
    );
});

output.addEventListener("dblclick", () => {
    window.open(link, "_blank");
});
