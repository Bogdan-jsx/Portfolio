fetch("http://localhost:3000/works/")
    .then(res => res.json())
    .then(result => showWorks(result));

function showWorks(works) {
    for (const work of works) {
        showOneWork(work);
    }
}

function showOneWork(work) {
    const { name, description, link, image, usedTechnologies } = work;

    const usedTechsString = usedTechnologies.map(item => `<li>- ${item}</li>`).join("");

    const myWorksElem = document.querySelector(".my-works");

    const newWorkElem = document.createElement("div");
    newWorkElem.classList.add("work");
    newWorkElem.style.backgroundImage = `url(http://localhost:3000/works/image/${image})`;

    newWorkElem.innerHTML = `
    <div class="info">
        <p class="work-name"><a href="${link ? link : ""}">${name}</a></p>
        <p class="work-description">${description}</p>
        <p class="work-used-technologies">Used technologies:</p>
        <ul>${usedTechsString}</ul>
    </div>`;

    myWorksElem.append(newWorkElem);
}

const formElem = document.querySelector(".contact > form");

formElem.onsubmit = (e) => {
    e.preventDefault();

    const name = formElem.elements["name"].value;
    const email = formElem.elements["email"].value;
    const message = formElem.elements["message"].value;

    if (!name || !email || !message) {
        alert("You need to fill all inputs.")
        return;
    }

    sendMessage({ name, email, message });

    formElem.reset();
}

function sendMessage(message) {
    fetch("http://localhost:3000/messages/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(message),
    }).then(() => alert("Your message has been sent. Thank you!"));
}