const form = document.querySelector("#profileForm");
const cardsContainer = document.querySelector("#cardsContainer");

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values from form
    const photo = document.querySelector("#photo").value;
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const contact = document.querySelector("#contact").value;
    const occupation = document.querySelector("#occupation").value;
    const description = document.querySelector("#description").value;


    // Create card
    const card = document.createElement("div");

    card.classList.add("profile-card");


    // Add card content
    card.innerHTML = `
        <img src="${photo}" alt="${name}">

        <h2>${name}</h2>

        <p class="occupation">${occupation}</p>

        <div class="info">
            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Contact:</strong> ${contact}</p>
        </div>

        <p class="description">
            ${description}
        </p>
    `;


    // Add new card to cards container
    cardsContainer.appendChild(card);


    // Reset form
    form.reset();

});