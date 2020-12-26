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

const showMessage = (msgText = "Message", status = "success") => {
    if (status !== "success" && status !== "failure") return;

    errorMessage.textContent = msgText;
    errorMessage.style.backgroundColor =
        status === "success" ? "#33996999" : "#ff370099";
    errorMessage.classList.remove("hidden");
    setTimeout(() => {
        errorMessage.classList.add("hidden");
    }, 1000);
};

output.addEventListener("click", () => {
    navigator.clipboard.writeText(link).then(
        () => {
            showMessage("Copied!", "success")
        },
        () => {
            showMessage("Failed to copy.", "failure");
        }
    );
});

output.addEventListener("dblclick", () => {
    window.open(link, "_blank");
});
