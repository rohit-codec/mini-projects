const message = document.querySelector("#message");
const count = document.querySelector("#count");

message.addEventListener("input", function () {

    const characters = message.value.length;

    count.textContent = characters;

});