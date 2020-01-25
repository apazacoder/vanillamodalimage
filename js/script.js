let c = window.console.log;
window.addEventListener("load", () => {

    function openModal(modalWrapper, target) {
        modalWrapper.classList.remove("is-closed");
        modalWrapper.children[1].children[1].textContent = target.attributes["alt"].value;
        let arrSrc =target.attributes["src"].value.split(".");
        arrSrc[0] += '-fullsize';
        arrSrc = arrSrc.join('.');

        modalWrapper.children[1].children[0].attributes["src"].value = arrSrc;
    }

    function closeModal(modalWrapper) {
        modalWrapper.classList.add("is-closed");
    }

    // set an event listener for all images
    let modalTriggers = document.querySelectorAll(".mi-trigger");
    for (let index in modalTriggers) {
        if (typeof modalTriggers[index] === "object") {
            modalTriggers[index].addEventListener("click", function (e) {
                let miWrapper = document.getElementById(e.target.attributes["data-modal"].value);
                openModal(miWrapper, e.target);
            });
        }
    }

    document.querySelector(".mi-close").addEventListener("click", function (e) {
        let miWrapper = document.getElementById(e.target.parentNode.attributes["id"].value);
        closeModal(miWrapper);
    });

    let miWrapper = document.querySelector(".mi-wrapper");
    miWrapper.addEventListener("click", function () {
        closeModal(miWrapper);
    });

    let miImage = document.querySelector(".mi-image");
    miImage.addEventListener("click", function (e) {
        e.stopPropagation();
    });

});
