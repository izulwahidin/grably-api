export async function fetchText(url){
    try {
        const resp = await fetch(url)
        return await resp.text()
    } catch (error) {
        throw("We have difficulity when trying to get data")
    }
}

export function fixJsonString(jsonString) {
    const jsontemp = `${jsonString}}`;
    return jsontemp.replace(/([a-z]+): /gm, "\"$1\":");
}

export function apiOnError(str){
    const resp = {
        'status': false,
        'message': str
    }

    return JSON.stringify(resp)
}

export const apiHeaders = {
        'Cache-Control': 'max-age=6000, s-maxage=6000',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
}