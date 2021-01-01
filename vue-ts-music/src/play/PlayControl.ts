import { getMockPlayData } from "../mock/MockData";
import { PlayData } from "../model/view/ViewData";

let currentInx: number = 0
export function getNextMusic(): PlayData{
    const playDatas = getMockPlayData()
    currentInx = (currentInx + 1) % playDatas.length
    return playDatas[currentInx]
}