document.addEventListener("DOMContentLoaded", () => {
    const downloadButtons = document.querySelectorAll(".download-btn");

    downloadButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(`Baixando arquivo: ${button.href}`);
        });
    });
});
