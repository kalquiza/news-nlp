function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(formText)) {
        console.log("::: Form Submitted :::")
        fetch(`http://localhost:8081/api?input=${formText}`)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('url').innerHTML = `Input: ${formText}`
            document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
            document.getElementById('polarity_confidence').innerHTML = `Polarity confidence: ${res.polarity_confidence}`
        })
    } else
    alert('Invalid URL!')
}

export { handleSubmit }
