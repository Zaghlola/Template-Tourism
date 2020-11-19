document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("sights")) {
        const sightsObj = JSON.parse(localStorage.getItem("sights"))
        sightsObj.sights.forEach(sight => {
            // rink div
            const rink = document.createElement("div")
            rink.classList.add("rink")

            const text = document.createElement("div")
            text.classList.add("sample_text")

            const header = document.createElement("h3")
            header.innerHTML = sight.name

            const description = document.createElement("p")
            description.innerHTML = sight.description

            text.appendChild(header)
            text.appendChild(description)

            rink.appendChild(text)

            document.querySelector("div .con").appendChild(rink)
        })
    }
})