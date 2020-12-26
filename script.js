const urlInput = document.getElementById("url-input");
const shortenBtn = document.getElementById("shorten-btn");
const output = document.getElementById("output");
let link;

shortenBtn.addEventListener("click", () => {
    const beginningURL = urlInput.value.match(/amazon\.\w+/gim)[0];
    const importantInfo = urlInput.value.match(/\/dp\/.{10}/gim)[0];
    output.textContent = beginningURL + importantInfo;
    link = "https://www." + beginningURL + importantInfo;
    // make a href
});

const copyLink = () => {
    navigator.clipboard.writeText(link).then(
        () => {
            console.log("copied!");
        },
        () => {
            console.log("failed to copy.");
        }
    );
};

const openLink = () => {
    window.open(link, "_blank");
};
