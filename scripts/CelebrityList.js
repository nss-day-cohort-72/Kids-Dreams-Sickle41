import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        const celebrityId = whatWasClickedOn.dataset.id
        if(whatWasClickedOn.dataset.type === "celebrity"){
            for (const celebrity of celebrities) {
                if (celebrity.id === parseInt(celebrityId)) {
                window.alert(`${celebrity.name} is a ${celebrity.sport} star`);
                }
            }
        }
    }
)