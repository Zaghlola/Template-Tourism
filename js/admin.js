document.addEventListener("DOMContentLoaded", () => {
    // get content from admin and store it in local storage
    // add event listener to file uploader

    document.querySelector("#fileToUpload").onchange = function (event) {
        const src = URL.createObjectURL(event.target.files[0].mozFullPath);
    }
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
            sightsObj.sights.push({ name: name, description: description, src: src })
            localStorage.setItem("sights", JSON.stringify(sightsObj))
            console.log(localStorage.getItem("sights"))
            alert("Content created successfully")
        }
        else {
            let oldSights = JSON.parse(localStorage.getItem("sights"))
            oldSights.sights.push({ name: name, description: description, src: src })
            localStorage.setItem("sights", JSON.stringify(oldSights))
            console.log("old items")
            console.log(JSON.parse(localStorage.getItem("sights")))
            alert("Content created successfully")
        }

    })


    /**
     * {
     *     [{
     *          name: "" , description: ""},]
     * }
     */
})