import { CoverRecomendation, SongListRecomendation } from "../model/Recommendation";
import { Song } from "../model/Song";

export function getMockCoverRecomendation(): CoverRecomendation[] {
    let ret: CoverRecomendation[] = [
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3431915.jpg",
            id: "1"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3427852.jpg",
            id: "2"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3416097.jpg",
            id: "3"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3428572.jpg",
            id: "4"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3431572.jpg",
            id: "5"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3416505.jpg",
            id: "6"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3424605.jpg",
            id: "7"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3427495.jpg",
            id: "8"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3422853.jpg",
            id: "9"
        },
        {
            cover: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/3428847.jpg",
            id: "10"
        }
    ]

    return ret;
}

export function getMockSongListRecomendation(): SongListRecomendation[] {
    let ret: SongListRecomendation[] = [
        {
            cover: "http://p.qpic.cn/music_cover/XIj2GRpRicn1PZmefQhfQyUNia6XTs18ZVib4tRok8dnqz3Dia6vwxNcbQ/600?n=1",
            id: "1",
            title: "精彩华辉",
            desc: "催泪系列 | 失恋时建议不要去听"
        },
        {
            cover: "http://qpic.y.qq.com/music_cover/lv2jH5Xc4SGWUoOMwSYxX3IWPdUA9YAvT2Rx8Z1I9LT18dPmWgQc3Q/300?n=1",
            id: "2",
            title: "辰兮 .",
            desc: "片段 不确定的才会患得患失"
        },
        {
            cover: "http://p.qpic.cn/music_cover/QrmdXDG3R4jGSEzqu0qtRicaefMFMctvic6UdLld4a0raEZ8PjTjnE2Q/600?n=1",
            id: "3",
            title: "楠羽.",
            desc: "钢琴与流行乐的唯美邂逅『持更』"
        },
        {
            cover: "http://qpic.y.qq.com/music_cover/7A5Z92DDjIkcWlvUiatITGib9J7VogZVEgW7NIMYVCNA93ibv1RELjdVQ/300?n=1",
            id: "4",
            title: "布理啾啾滴不理多",
            desc: "【旋律trap】柔情舒缓 心扉舒畅"
        },
        {
            cover: "http://p.qpic.cn/music_cover/Cz8Z9ECDQia3gE2YticLiaJ22KNOu00Czu4RYkZmia3kAhUCYhiaPZ6qXQg/600?n=1",
            id: "5",
            title: "陈哲",
            desc: "学霸必备：专心写作业 享受轻音乐好时光"
        },
        {
            cover: "http://qpic.y.qq.com/music_cover/yAwOwLg91f9kPe4I3hXd7tkQajIyh7yKXaiaYxhhTyBLPCCNKwgCicwg/300?n=1",
            id: "6",
            title: "为安不够好.",
            desc: "慢调rap | 孤独到了极致便是享受"
        },
        {
            cover: "http://qpic.y.qq.com/music_cover/ItV9JQ9JZ24YkhB1kouLJvy4RVzX9gzQNbgiagCw6TpSeicIDEWdaiaxg/300?n=1",
            id: "7",
            title: "希酱",
            desc: "超治愈纯音｜深夜耳边的轻柔奏鸣"
        },
        {
            cover: "http://p.qpic.cn/music_cover/OXoRpmw9uWA5jNjLuwE2rrY7JIZlefz5Ab9jf0MN7XicJRcZjJLro1A/600?n=1",
            id: "8",
            title: "冰山不够冷",
            desc: "古风女声:女嗓开腔，唱尽繁华"
        },
        {
            cover: "http://qpic.y.qq.com/music_cover/4cZfXguQUfTUoTJibI19d0endbyqcIHvp1VaNIZ7gnFBngPMJK61rDQ/300?n=1",
            id: "9",
            title: "听雨",
            desc: "一禅：心灵妙语，开悟人生"
        },
        {
            cover: "http://p.qpic.cn/music_cover/E3HrGfRTqbMQrpsOBia3ucQHKY8aKeOj5iaRLT7uQZUboARrvQibw6c8A/600?n=1",
            id: "10",
            title: "Niko林倾顔yu-",
            desc: "欧美极致踩点：单曲循环不要停"
        },
        {
            cover: "http://qpic.y.qq.com/music_cover/F8S0ialrrJpwicrU3T8u4Uhvh7M7zWWa9mHY6uso10AMZLHAHIaMJShr5PmSeS4Bzu/300?n=1",
            id: "11",
            title: "往事余生",
            desc: "怀念99% | 你已拨打18岁连线成功"
        }
    ]
    return ret
}

export function getMockRecentSongList(): Song[] {
    let ret: Song[] = [
        {
            id: "0",
            title: "彼女は旅に出る (她踏上了旅程)",
            album: "Hush a by little girl",
            singer: "鎖那 (さな)"
        },
        {
            id: "1",
            title: "布鲁克的心跳",
            album: "布鲁克的心跳",
            singer: "海小贼"
        },
        {
            id: "2",
            title: "Rise - Epic Music (上升 - 史诗音乐)",
            album: "Rise - Epic Music",
            singer: "John Dreamer"
        },
        {
            id: "3",
            title: "Future Funk",
            album: "Pick Your Poison Vol. 01",
            singer: "Varien"
        },
        {
            id: "4",
            title: "All Falls Down",
            album: "All Falls Down",
            singer: "Alan Walker/Noah Cyrus/Digital Farm Animals/Juliander"
        },
        {
            id: "5",
            title: "Faded",
            album: "Faded",
            singer: "Alan Walker/Iselin Solheim"
        },
        {
            id: "6",
            title: "年少有为",
            album: "耳朵",
            singer: "李荣浩"
        },
        {
            id: "7",
            title: "不要说话",
            album: "不想放手",
            singer: "陈奕迅"
        },
        {
            id: "8",
            title: "布拉格广场",
            album: "看我72变",
            singer: "蔡依林/周杰伦"
        },
        {
            id: "9",
            title: "Insomnia (불면증) (失眠症)",
            album: "Insomnia (失眠症)",
            singer: "辉星 (휘성)"
        },
        {
            id: "10",
            title: "等风吟",
            album: "等风吟",
            singer: "等什么君"
        },
        {
            id: "11",
            title: "有一种爱叫做放手",
            album: "有一种爱叫做放手",
            singer: "阿木"
        },
        {
            id: "12",
            title: "少一点天分",
            album: "|希。O2 | 初雪限定",
            singer: "孙盛希"
        }
    ]

    return ret
}