import { parse2embedTV } from "$lib/2embed";

export async function GET({params}){
    let data
    switch (params.server) {
        case 'v1':
            data = await parse2embedTV(params.id, params.season, params.episode)
            break;
        default:
            throw(`Server is unidentified ${params.server}`)
    }

    try {
        const headers = {
            'Cache-Control': 'max-age=6000, s-maxage=6000',
            'Content-Type': 'application/json',
        };
    
        return new Response(data, {
            headers
        })

    } catch (error) {
        return {
            status: 500,
            body: 'Internal Server Error',
        };
    }
}