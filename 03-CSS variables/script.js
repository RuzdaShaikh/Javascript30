const myInputs = document.querySelectorAll('input')

function changeVariables() {
    let unit = this.dataset.sizing || ''

    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit)
    console.log(this.value)
    // Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
}

myInputs.forEach((i) => i.addEventListener('change', changeVariables))
myInputs.forEach((i) => i.addEventListener('mousemove', changeVariables))