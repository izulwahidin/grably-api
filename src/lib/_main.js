export async function fetchText(url){
    try {
        const resp = await fetch(url)
        return await resp.text()
    } catch (error) {
        throw("Error when trying to fetch RAW data")
    }
}

export function fixJsonString(jsonString) {
    const jsontemp = `${jsonString}}`;
    return jsontemp.replace(/([a-z]+): /gm, "\"$1\":");
}