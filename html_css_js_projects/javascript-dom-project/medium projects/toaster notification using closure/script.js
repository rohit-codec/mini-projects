function createToaster(config) {

    return function (str) {

        // =========================
        // CREATE TOAST
        // =========================

        let div = document.createElement("div");

        div.textContent = str;


        // =========================
        // TOAST THEME
        // =========================

        div.className = "toast";

        if (config.theme === "dark") {

            div.className += " dark";

        } else {

            div.className += " light";

        }


        // =========================
        // GET PARENT
        // =========================

        let parent = document.querySelector(".parent");


        // =========================
        // POSITION
        // =========================

        if (
            config.positionX !== "left" ||
            config.positionY !== "top"
        ) {

            parent.className +=
                ` ${config.positionX === "right"
                    ? "right-5"
                    : "left-5"}
                  ${config.positionY === "bottom"
                    ? "bottom-5"
                    : "top-5"}`;

        }


        // =========================
        // ADD TO PARENT
        // =========================

        parent.appendChild(div);


        // =========================
        // REMOVE TOAST
        // =========================

        setTimeout(() => {

            parent.removeChild(div);

        }, config.duration * 1000);

    };
}


/* =========================
   CREATE TOASTER
========================= */

let toaster = createToaster({

    positionX: "right",

    positionY: "top",

    theme: "light",

    duration: 3

});


/* =========================
   SHOW TOAST
========================= */

toaster("Download Done");


/* =========================
   SHOW ANOTHER TOAST
========================= */

setTimeout(() => {

    toaster("Harsh accepted your request");

}, 2000);