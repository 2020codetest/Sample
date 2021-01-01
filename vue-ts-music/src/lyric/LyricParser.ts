import {Base64} from "js-base64"

interface LyricLine {
    time: number;
    text: string;
}

const lyricRegex: RegExp = new RegExp('\[\d{2}\.\d{2}.\d{2}\](.+)', 'i')
function convertToMs(str: string): number {
    let ret = 0
    ret += (parseInt(str.substr(7, 2))) * 10
    ret += (parseInt(str.substr(4, 2))) * 1000
    ret += (parseInt(str.substr(1, 2))) * 1000 * 60
    return ret
}

export class LyricParser {
    lines: LyricLine[] = []
    callback: (lineno: number) => void;
    constructor(base64Lyric: string, callback: (lineno: number) => void) {
        this.callback = callback
        let decodedLyric = Base64.decode(base64Lyric)
        let lines = decodedLyric.split('\n')
        for (let line of lines) {
            if (lyricRegex.test(line)) {
                let lyricLine: LyricLine = {
                    time: convertToMs(line),
                    text: line.substr(10)
                }

                if (!lyricLine.text) {
                    continue
                }

                this.lines.push(lyricLine)
            }
        }
    }

    getHighligtedTextLine(timeInMs: number) {
        let start = 0, end = this.lines.length - 1;
        let targetInx = 0
        while(start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (this.lines[mid].time > timeInMs){
                end = mid - 1
            }
            else{
                targetInx = mid
                start = mid + 1
            }
        }

        this.callback(targetInx)
    }

    getLines() : string[]{
        let lines: string[] = []
        for (let lineLyric of this.lines) {
            lines.push(lineLyric.text)
        }

        return lines
    }
}