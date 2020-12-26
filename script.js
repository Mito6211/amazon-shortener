const urlInput = document.getElementById("url-input");
const shortenBtn = document.getElementById("shorten-btn");
const output = document.getElementById("output");
const errorMessage = document.getElementById("error-message");

let link;

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

shortenBtn.addEventListener("click", () => {
    try {
        const inputText = urlInput.value.replace("product/", "");
        const beginningURL = inputText.match(/amazon\.(\w|\.)+/gim)[0];
        const importantInfo = inputText.match(/\/dp\/.{10}/gim)[0];
        output.textContent = beginningURL + importantInfo;
        link = "https://www." + beginningURL + importantInfo;
    } catch {
        output.textContent = "";
        showMessage("Invalid Link", "failure");
    }
});

output.addEventListener("click", (event) => {
    if (event.detail === 2) {
        window.open(link, "_blank");
    } else {
        navigator.clipboard.writeText(link).then(
            () => {
                showMessage("Copied!", "success");
            },
            (err) => {
                showMessage("Failed to copy.", "failure");
                console.error(err);
            }
        );
    }
});
