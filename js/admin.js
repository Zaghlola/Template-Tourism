document.addEventListener("DOMContentLoaded", () => {
    // get content from admin and store it in local storage
    document.querySelector(".create-content-button").addEventListener("click", () => {
        const name = document.querySelector(".content-sight-name").value
        const description = document.querySelector(".content-description").value
        if (!name || !description) {
            alert("Please, provide at least a sight name and a description")
            return false;
        }
        if (!localStorage.getItem("sights")) {
            let sights = []
            let sightsObj = { sights: sights }
            sightsObj.sights.push({ name: name, description: description })
            localStorage.setItem("sights", JSON.stringify(sightsObj))
            console.log(localStorage.getItem("sights"))
        }
        else {
            let oldSights = JSON.parse(localStorage.getItem("sights"))
            oldSights.sights.push({ name: name, description: description })
            localStorage.setItem("sights", JSON.stringify(oldSights))
            console.log("old items")
            console.log(JSON.parse(localStorage.getItem("sights")))
        }

    })


    /**
     * {
     *     [{
     *          name: "" , description: ""},]
     * }
     */
})