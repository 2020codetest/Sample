import { Slider } from "../slider/Slider";
import { SliderResponse } from "../slider/SliderResponse";
import { Disc } from "../disc/Disc"
import { CoverRecItem, DiscItem, HotKeyItem, PlayListData } from "./ViewData";
import { DiscResponse } from "../disc/DiscResponse";
import { TopResponse } from "../rank/TopResposne";
import { TopItem } from "../rank/TopItem";
import { HotKeyResposne } from "../search/HotKeyResponse";
import { AlbumResponse } from "../song/AlbumResponse";
import { Song } from "../song/Song";
import { UserSong } from "../user/Song";

function convertSlider(slider: Slider) : CoverRecItem{
    return {
        id: slider.id,
        cover: slider.picUrl
    }
}

export function convertSliderResponse(response: SliderResponse) : CoverRecItem[] {
    let list: CoverRecItem[] = []
    for (let slider of response.data.slider) {
        list.push(convertSlider(slider))
    }

    return list
}

function convertDisc(disc: Disc) : DiscItem{
    return {
        title: disc.creator.name,
        desc: disc.dissname,
        cover: disc.imgurl,
        id: disc.dissid
    }
}

export function convertDiscRecResponse(response: DiscResponse) : DiscItem[] {
    let list: DiscItem[] = []
    for (let disc of response.data.list) {
        list.push(convertDisc(disc))
    }

    return list
}

export function convertTopResponse(response: TopResponse) : TopItem[] {
    return response.data.topList
}

export function convertHotKeyResponse(response: HotKeyResposne): HotKeyItem[] {
    let ret: HotKeyItem[] = []
    let cnt: number = 0
    for (let hotkey of response.data.hotkey) {
        ret.push({key: hotkey.k})
        if (++cnt >= 10) {
            break
        }
    }

    return ret
}

function convertPlayData(song: Song): UserSong{
    let singers: string[] = []
    for(let singer of song.musicData.singer) {
        singers.push(singer.name)
    }

    return {
        id: song.musicData.songid,
        name: song.musicData.songname,
        singer: singers.join("/"),
        album: song.musicData.albumname
    }
}

export function convertAlbumResponse(response: AlbumResponse, title: string, cover: string) : PlayListData{
    let ret: PlayListData = {
        title: "薛之谦",
        cover: "https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000",
        list: []
    }

    for (let playdata of response.data.list) {
        ret.list.push(convertPlayData(playdata))
    }

    return ret
}
