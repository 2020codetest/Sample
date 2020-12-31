import { SingerRepo } from "../model/singer/Singer";
import TopResponseData from "./TopResponse.json"
import HotKeyResposneData from "./HotKeyResponse.json"
import DisRecResponseData from "./DiscRecResponse.json"
import SingerResposneData from "./SingerListResposne.json"
import RecentSongListData from "./RecentSongList.json"
import SliderResponseData from "./SliderRespnose.json"
import SearchResponseData from "./SearchResponse.json"
import { SearchResult } from "../model/search/SearchResult";
import { TopResponse } from "../model/rank/TopResposne";
import { HotKeyResposne } from "../model/search/HotKeyResponse";
import { DiscResponse } from "../model/disc/DiscResponse";
import { SliderResponse } from "../model/slider/SliderResponse";
import { UserSong } from "../model/user/Song";

export function getMockSliderResponse(): SliderResponse{
  return SliderResponseData
}

export function getMockRecentSongList(): UserSong[] {
  return RecentSongListData
}

export function getMockSingerList(): SingerRepo[]{
    return SingerResposneData
}

export function getMockDiscRecResponse(): DiscResponse {
  return DisRecResponseData
}

export function getMockTopResponse(): TopResponse {
  return TopResponseData;
}

export function getMockHotKeyResposne(): HotKeyResposne {
  return HotKeyResposneData
}

export function getMockSearchResponse(): SearchResult{
  return SearchResponseData;
}