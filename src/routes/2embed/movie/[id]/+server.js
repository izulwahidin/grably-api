import { parse2embedMovie } from "$lib/2embed";
import { apiOnError } from "$lib/_main";

export async function GET({params}){
    const headers = {
        'Cache-Control': 'max-age=6000, s-maxage=6000',
        'Content-Type': 'application/json',
    };

    try {
        const data = await parse2embedMovie(params.id)
    
        return new Response(data, {
            headers
        })

    } catch (error) {
        return new Response(apiOnError(error),{
            headers,
            status: 500
        });
    }
}