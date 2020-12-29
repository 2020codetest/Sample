import { SliderItemArr } from "./Slider"

const imageRepo: string[] = [
    "https://wx3.sinaimg.cn/large/001GQYnsgy3glzc96oco2j60u0140b1t02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsgy3gly85n5vhpj611w1kwx6p02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsgy3gly85n3jtij611w1kwx6p02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsgy3gly8561dq0j611w1kwkjl02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsgy3gly85u13zfj616o1kwe8202.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1glusv525h8j60u018y76602.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly1glusuyotazj60u018ygny02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly1glusvsj0taj62t747pqvd02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsgy3glzc972y62j60so128wxg02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gllhnal30ej6262391kjr02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gllhnf8qnuj62e03kyb2h02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gllhnkuqe4j63ky2e0b2h02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly3glg8xi35w4j61kw179u0x02.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly3glg8xi06u0j61kw1794qq02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly3glg8xi2x1pj61kw179b2a02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly3glg8xim379j61kw1794qq02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsgy3glazzjgkgaj616n1kwu0y02.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsgy3glazzj7uoyj616n1kwqv602.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsgy3glazzj5601j616n1kw1kz02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsgy3glazzjxw9zj616n1kw7wj02.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly1gl9r5d7dpuj63gg56ob2d02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly1gl9r5o3lhmj638j4usnpg02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsgy3gl9otv1qzej616n1kwkjm02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsgy3gl9otxftk1j616o1kwqv702.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly1gl89rb7m48j60ku13yhdt02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gl89rc198zj60ku13ykjl02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly3gkppuzaiabj61kw15fkjn02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly3gkppuzeyizj61kw15fkjn02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly3gkppuyooehj61kw15fqv602.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly3gkppv0d2amj61kw15fkjo02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly3gkppv2dmsbj616o1kwe8602.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly3gkppv0y37rj613s1kwe8202.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly3gkppv1z5eyj61kw15eu0z02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly1gkppx0ykeoj60u0140gwk02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly1gkppx0mp94j60u0140x2902.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly1gkppwzjrhaj612u0u0at702.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly1gkppx05jd3j60u01cchcp02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly1gkppx1jkfjj60u014mx4k02.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly1gkppwyj983j60u013k4ln02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly3gkppv3dp4aj61kw15f00002.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly3gkppv3qn6jj61kw15fe8402.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly3gkppv7cn2qj615a1kw7wl02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly3gkppv70kpfj619j1kwhdw02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly3gkppv74mb9j614h1kwu1002.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly1gkkhoyu0zhj637k4tce8202.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly3gk1qbn90dcj61kw11wnpe02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly3gk1qbn7m40j61kw11wnpe02.jpg",
    "https://wx3.sinaimg.cn/large/001GQYnsly3gk1qbnvgp3j619i1kwu0z02.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly1gj9tctqsrsj656o3ggx6x02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gj9tcxhgvgj63gg56ob2j02.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly1gj9td1wo4nj63gg56ox6z02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly1gj9tcohnkhj63gg56o7wr02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gj9td5tyy6j63gg56ox6w02.jpg",
    "https://wx4.sinaimg.cn/large/001GQYnsly1gj9tdatmncj656o3gg1l602.jpg",
    "https://wx2.sinaimg.cn/large/001GQYnsly1gis9a3ryeej61st2p87wk02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gis99x5zxnj61l41ucx6p02.jpg",
    "https://wx1.sinaimg.cn/large/001GQYnsly1gis9a6bbuzj62p81stqv802.jpg",
    "https://wx4.sinaimg.cn/large/5c596b7ely3ghn1gcr28aj216o1kw7wj.jpg",
]

const repoLength = imageRepo.length
const partition = 8

function extractImages(): string[] {
    let startInx = Math.floor(Math.random() * repoLength)
    startInx = Math.min(repoLength - partition, startInx)
    return imageRepo.slice(startInx, startInx + partition)
}

export function extractSliderItemArr(): SliderItemArr {
    let ret: SliderItemArr = {
        items: []
    }

    let images = extractImages()
    for (let img of images) {
        ret.items.push({url: img})
    }

    return ret
}