import { EventHub, EventType } from "../model/EventHub"

export const enum PlayerState {
    stopped = 1,
    paused = 2,
    play = 3
}

export interface PlayerStateData{
    state: PlayerState;
    duration: number;
    progress: number;
}

export class Player{
    private state: PlayerState = PlayerState.stopped
    private player: HTMLAudioElement = new Audio()
    private static instance: Player = new Player()
    private constructor() {
        this.player.ontimeupdate  = this.onDurationUpdate.bind(this)
        this.player.onended = this.onEnded.bind(this)
        this.player.onerror = this.onError.bind(this)
        this.player.oncanplay = this.canPlay.bind(this)
        this.player.onpause = this.onPause.bind(this)
    }

    static getInstance(): Player {
        return this.instance;
    }

    onDurationUpdate(event: Event){
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.play,
            progress: this.player.currentTime,
            duration: this.player.duration,

        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
    }

    onPause() {
        this.state = PlayerState.paused
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.paused,
            progress: this.player.currentTime,
            duration: this.player.duration,

        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
    }

    canPlay() {
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.play,
            progress: this.player.currentTime,
            duration: this.player.duration,

        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
    }

    onEnded(){
        this.state = PlayerState.stopped
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.play,
            progress: this.player.duration,
            duration: this.player.duration,

        }

        EventHub.FireEvent(EventType.PlayEvent, playData)

    }

    onError() {
        this.state = PlayerState.stopped
    }

    onPlayClick() {
        if (this.state == PlayerState.play) {
            this.pause()
        }
        else{
            this.play()
            this.state = PlayerState.play
        }
    }

    seek(prog: number) {
        this.player.currentTime = (prog * this.player.duration / 100) 
        this.state = PlayerState.play
        this.player.play()
    }

    play(): void {
        if (this.state == PlayerState.stopped) {
            this.player.src = "http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400000BZ9Fg16MAU2.m4a?guid=4487422810&vkey=BDB46379F81DB9EBDA874F2D86B768AEB9834B34372E540BC5EEAD0D2C1907C177C6EE81E0F0F29A02737BFDEF793BB9BE298E65FE0D9DA7&uin=0&fromtag=38"
        }

        this.player.play()
    }

    pause(): void {
        this.player.pause()
    }

    playNext(): boolean {
        return true
    }

    playPrev(): boolean {
        return true;
    }
}
