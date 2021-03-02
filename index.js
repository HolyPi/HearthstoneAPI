

async function getCard(apikey, name) {
    const path = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`
    const headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apikey,
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
        }
    } 
    try {  
        const res = await fetch(path, headers)
        const json = await res.json()
        console.log(json)
        const { name, cardSet, type, img, text, race } = json[0]
        const info = {
            'name': name,
            'cardSet': cardSet,
            'type': type,
            'img': img,
            'text': text,
            'race': race
        }
        console.log(info)
        return info
    }   catch(err) {
        console.log("Error", err)
        return err
    } 

    }

    export default getCard
    