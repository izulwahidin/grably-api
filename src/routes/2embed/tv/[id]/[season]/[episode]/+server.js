import { parse2embedTV } from "$lib/2embed";
import { apiOnError, apiHeaders } from "$lib/_main";

export async function GET({params}){
    
    try {
        const data = await parse2embedTV(params.id, params.season, params.episode)
        
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