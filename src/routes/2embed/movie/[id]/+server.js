import { parse2embedMovie } from "$lib/2embed";
import { apiOnError, apiHeaders } from "$lib/_main";

export async function GET({params}){

    try {
        const data = await parse2embedMovie(params.id)
    
        return new Response(data, {
            headers: apiHeaders
        })

    } catch (error) {
        return new Response(apiOnError(error),{
            headers: apiHeaders,
            status: 500
        });
    }
}