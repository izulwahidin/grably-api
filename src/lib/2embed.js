import { fetchText, fixJsonString } from "$lib/_main"

export async function parse2embedMovie(tmdb){
    const raw = await fetchText(`https://2embed.me/player/movie/${tmdb}`)
    const match = raw.match(/\.setup\(([\s\S]+?),\s+width/)

    if(!match) throw(`We cannot parse Movie: ${tmdb}`)

    const res = fixJsonString(match[1]);
    return res;
}


export async function parse2embedTV(tmdb, season, episode){
    const raw = await fetchText(`https://2embed.me/player/tv/${tmdb}/${season}/${episode}`)
    const match = raw.match(/\.setup\(([\s\S]+?),\s+width/)

    if(!match) throw(`We cannot parse TV series: ${tmdb}`)

    const res = fixJsonString(match[1]);
    return res;
}