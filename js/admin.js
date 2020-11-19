document.addEventListener("DOMContentLoaded", () => {
    // get content from admin and store it in local storage
    document.querySelector(".create-content-button").addEventListener("click", () => {
        const name = document.querySelector(".content-sight-name").value
        const description = document.querySelector(".content-description").value
        if (!localStorage.getItem("sights")) {
            let sights = []
            let sightsObj = { sights: sights }
            sightsObj.sights.push({ name: name, description: description })
            localStorage.setItem("sights", JSON.stringify(sightsObj))
            console.log(localStorage.getItem("sights"))
        }

        console.log("old items")
        console.log(localStorage.getItem("sights"))

    })


    /**
     * {
     *     [{
     *          name: "" , description: ""},]
     * }
     */
})