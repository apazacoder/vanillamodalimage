let c = window.console.log;
window.addEventListener("load", () => {

    function openModal(modalWrapper, caption) {
        modalWrapper.classList.remove("is-closed");
        modalWrapper.children[1].children[1].textContent = caption;
        c("modalWrapper.children", modalWrapper.children[1].children[1]);
    }

    function closeModal(modalWrapper) {
        modalWrapper.classList.add("is-closed");
    }

    let modalTrigger = document.querySelector(".mi-trigger");
    modalTrigger.addEventListener("click", function (e) {
        let miWrapper = document.getElementById(e.target.attributes["data-modal"].value);
        let caption = e.target.attributes["alt"].value;
        openModal(miWrapper, caption);
    });
    document.querySelector(".mi-close").addEventListener("click", function (e) {
        let miWrapper = document.getElementById(e.target.parentNode.attributes["id"].value);
        closeModal(miWrapper);
    });
    let miWrapper = document.querySelector(".mi-wrapper");
    miWrapper.addEventListener("click", function () {
        c('wrapper clicked');
        closeModal(miWrapper);
    });

    let miImage = document.querySelector(".mi-image");
    miImage.addEventListener("click", function (e) {
        c('image clicked');
        e.stopPropagation();
    });

});
