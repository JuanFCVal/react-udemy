const apiKey = 't66AqhmWVs4oYGOybOT3tAN2vDvGpVxi';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
peticion.then(
    (res) => res.json().then(
        ({data}) => {
            const {url} = data.images.original
            console.log(url)
            const img = document.createElement('img')
            img.src = url;
            document.body.append(img)
        }
    )
).catch(
    console.warn
)