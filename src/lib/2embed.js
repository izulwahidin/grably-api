import { fetchText, fixJsonString } from "$lib/_main"

export async function parse2embedMovie(tmdb){
    const raw = await fetchText(`https://2embed.me/player/movie/${tmdb}`)
    const match = raw.match(/\.setup\(([\s\S]+?),\s+width/)

    if(!match) throw(`We dont have video file on database for this Movie (${tmdb})`)

    const res = fixJsonString(match[1]);

    const data = {
        'status': true,
        'data': JSON.parse(res)
    }
    return JSON.stringify(data);
}


export async function parse2embedTV(tmdb, season, episode){
    const raw = await fetchText(`https://2embed.me/player/tv/${tmdb}/${season}/${episode}`)
    const match = raw.match(/\.setup\(([\s\S]+?),\s+width/)

    if(!match) throw(`We dont have video file on database for this TV Series (${tmdb}) S${season}-E${episode}`)

    const res = fixJsonString(match[1]);

    const data = {
        'status': true,
        'data': JSON.parse(res)
    }
    return JSON.stringify(data);
}