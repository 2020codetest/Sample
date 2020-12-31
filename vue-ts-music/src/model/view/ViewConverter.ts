import { Slider } from "../slider/Slider";
import { SliderResponse } from "../slider/SliderResponse";
import { Disc } from "../disc/Disc"
import { CoverRecItem, DiscItem, HotKeyItem } from "./ViewData";
import { DiscResponse } from "../disc/DiscResponse";
import { TopResponse } from "../rank/TopResposne";
import { TopItem } from "../rank/TopItem";
import { HotKeyResposne } from "../search/HotKeyResponse";

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