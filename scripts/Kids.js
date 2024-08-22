import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        const kidId = whatWasClickedOn.dataset.id
        if (whatWasClickedOn.dataset.type === "child"){
            for (const kid of children) {
                if (kid.id === parseInt(kidId)) {
                    window.alert(`${kid.name}'s wish is ${kid.wish}`);
                }
            }
        }
    }
)