const urlInput = document.getElementById("url-input");
const shortenBtn = document.getElementById("shorten-btn");
const output = document.getElementById("output");
let link;

shortenBtn.addEventListener("click", () => {
    const inputText = urlInput.value.replace("product/", "");
    const beginningURL = inputText.match(/amazon\.(\w|\.)+/gim)[0];
    const importantInfo = inputText.match(/\/dp\/.{10}/gim)[0];
    output.textContent = beginningURL + importantInfo;
    link = "https://www." + beginningURL + importantInfo;
    // make a href
});

output.addEventListener("click", () => {
    navigator.clipboard.writeText(link).then(
        () => {
            console.log("copied!");
        },
        () => {
            console.log("failed to copy.");
        }
    );
});

output.addEventListener("dblclick", () => {
    window.open(link, "_blank");
});
