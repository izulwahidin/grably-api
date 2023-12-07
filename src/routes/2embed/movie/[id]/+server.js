import { parse2embedMovie } from "$lib/2embed";

export async function GET({params}){
    const data = await parse2embedMovie(params.id)

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