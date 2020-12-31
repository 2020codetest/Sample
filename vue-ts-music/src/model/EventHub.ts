export interface EventData{
    id: number;
    data: any;
}

export const enum EventType{
    MySongListEvent = "MySongList",
    HomePageTab = "HomePageTab",
    PlayListEvent = "PlayListEvent",
    FullPlayerEvent = "FullPlayerEvent"
}

export class EventHub{
    private static id: number = 0
    private static eventData: Map<string, Array<(data: EventData) => void>> = new Map<string, Array<(data: EventData) => void>>();
    public static RegisterEvent(name: string, callback: (data: EventData) => void) {
        if (!this.eventData.has(name)){
            this.eventData.set(name, [])
        }

        this.eventData.get(name).push(callback)
    }

    public static UnregisterEvent(name: string, callback: (data: EventData) => void): boolean {
        if (this.eventData.has(name)){
            let arr = this.eventData.get(name)
            for (let inx = 0; inx < arr.length; ++inx) {
                if (arr[inx] === callback) {
                    arr.splice(inx, 1)
                    if (arr.length == 0) {
                        this.eventData.delete(name)
                    }

                    return true
                }
            }
        }

        return false
    }

    public static FireEvent(name: string, data: any) {
        if (this.eventData.has(name)) {
            let arr = this.eventData.get(name)
            let event: EventData = {id: ++this.id, data: data}
            for (let callback of arr) {
                callback(event)
            }
        }
    }
}
