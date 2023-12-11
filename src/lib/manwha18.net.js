import { fetchText } from "$lib/_main"
import * as cheerio from 'cheerio';
const domain = 'https://manhwa18.net'
let $

function getCards(c){
    return {
        'last_update': $(c).find('time.timeago').attr('title'),
        'url': $(c).find('a').attr('href').split(':/')[1],
        'last_chapter': {
            'ch': $(c).find('.thumb-detail').text().split(' ')[1],
            'ch_url': $(c).find('.thumb-detail a').attr('href').split(':/')[1],
        },
        'id': $(c).find('.thumb-wrapper').attr('data-id'),
        'img': $(c).find('.img-in-ratio').css('background-image').replace(/^url\(['"]?(.*?)['"]?\)$/, '$1').replace('//','//i0.wp.com/')
    }
}

function getPopular(){
    let result = []
    $('.owl-item').each(function (_, el) {
        result.push(getCards(el))
    })
    return result
}
function getLastest(){
    let result = []
    const data = $('.card-dark:nth-child(1) .thumb-item-flow')
    data.each(function (i, el) {
        if(i==(data.length-1)) return;
        result.push(getCards(el))
    })
    return result
}
function getLastestRaw(){
    let result = []
    const data = $('.card-dark:nth-child(2) .thumb-item-flow')
    data.each(function (i, el) {
        if(i==(data.length-1)) return;
        result.push(getCards(el))
    })
    return result
}
function getNewManhwa(){
    let result = []
    const data = $('.card-dark:nth-child(3) .thumb-item-flow')
    data.each(function (i, el) {
        if(i==(data.length-1)) return;
        result.push(getCards(el))
    })
    return result
}

function getGenres(){

}


export async function homepage(){
    try {
        const raw = await fetchText(domain)
        $ = cheerio.load(raw)
        
        const popular = getPopular()
        const latest = getLastest()
        const latest_raw = getLastestRaw()
        const new_manhwa = getNewManhwa()

        
        const data = {
            'status': true,
            'data': {
                popular,
                latest,
                new_manhwa,
                latest_raw
            }
        }
        return JSON.stringify(data);
    } catch (error) {
        console.log(error)
        throw(error)
    }

}