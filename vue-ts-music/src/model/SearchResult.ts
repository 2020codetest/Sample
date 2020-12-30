interface zhida{
    singername: string;
    type: number
}

interface singer{
    name: string;
}

interface song{
    songname: string;
    singer: singer[];
    songid: number;
}

interface songwrap{
    list: song[];
}

interface searchData{
    song: songwrap;
}
export interface SearchResult{
    data: searchData;
}