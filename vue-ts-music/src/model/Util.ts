export function convertTime(seconds: number) : string{
    if (isNaN(seconds)){
        return ""
    }

    let mini = Math.floor(seconds / 60)
    let sec = Math.floor(seconds) % 60
    return mini + ":" + (sec < 10 ? "0" : "") + sec
}