const mainForm = document.getElementById("main-form");
const urlInput = document.getElementById("url-input");
const shortenBtn = document.getElementById("shorten-btn");
const output = document.getElementById("output");
const errorMessage = document.getElementById("error-message");
const referalTitle = document.querySelector(".referal-title");

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

mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
        const inputText = urlInput.value
            .replace("product/", "")
            .replace("/gp/", "/dp/");
        const beginningURL = inputText.match(/amazon\.(\w|\.)+/gim)[0];
        const importantInfo = inputText.match(/\/(d)p\/.{10}/gim)[0];
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

referalTitle.addEventListener("click", () => {
    const explanation = document.querySelector(".explanation");
    explanation.classList.toggle("active");

    const plusOrMinus = document.querySelector(".referal-title span");
    plusOrMinus.textContent = explanation.classList.contains("active")
        ? "-"
        : "+";
});
