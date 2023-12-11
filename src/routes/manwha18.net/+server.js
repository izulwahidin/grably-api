import { homepage } from "$lib/manwha18.net"
import { apiHeaders, apiOnError } from "$lib/_main";

export async function GET(){

    try {
        const data = await homepage()
    
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