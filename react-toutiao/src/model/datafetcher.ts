import { response } from "./response";
import defaultResponse from "../../mock/rec.json"
import defaultResponse1 from "../../mock/rec1.json"
import moreRespone from "../../mock/more.json"
import moreRespone1 from "../../mock/more1.json"
import moreRespone2 from "../../mock/more2.json"

const moreResposnes: response[] = [moreRespone, moreRespone1, moreRespone2]
function getRandInt(max: number): number {
    return Math.floor(max * Math.random())
}

function updateResponse(response: response): response {
    let ret: response = JSON.parse(JSON.stringify(response))
    let base = new Date().getTime()
    let inx = 0
    for (let item of ret.data) {
        item.item_id = (base + ++inx).toString()
    }

    return ret
}

let fetchingData: boolean = false;
export async function fetchData(type: number = 0) : Promise<response>{
    return new Promise<response>((resolve, reject) => {
        if (fetchingData) {
            resolve({data: []})
            return;
        }

        fetchingData = true
        setTimeout(() => {
            fetchingData = false
            if (type == 0) {
                resolve(updateResponse(defaultResponse))
            }
            else if (type == 1) {
                resolve(updateResponse(moreResposnes[getRandInt(moreResposnes.length)]))
            }
        }, 2500)
    })
}