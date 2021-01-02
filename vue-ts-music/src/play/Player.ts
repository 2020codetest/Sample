import { EventHub, EventType } from "../model/EventHub"
import { PlayData } from "../model/view/ViewData"
import { getNextMusic } from "./PlayControl"

export const enum PlayerState {
    stopped = 1,
    paused = 2,
    play = 3
}

export interface PlayerStateData{
    state: PlayerState;
    duration: number;
    progress: number;
    data: PlayData;
}

export class Player{
    private playData: PlayData|undefined = undefined
    private state: PlayerState = PlayerState.stopped
    private progress: number = 0
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

    getPlayState(): PlayerStateData{
        if (!this.playData) {
            this.playData = getNextMusic()
            this.play()
        }

        return {
            state: this.state,
            progress: this.progress,
            duration: typeof this.player.duration === 'undefined' ? 0 : this.player.duration,
            data: this.playData
        }
    }

    onDurationUpdate(event: Event){
        this.state = PlayerState.play
        this.progress = this.player.currentTime
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.play,
            progress: this.player.currentTime,
            duration: this.player.duration,
            data: this.playData
        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
    }

    onPause() {
        this.progress = this.player.currentTime
        this.state = PlayerState.paused
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.paused,
            progress: this.player.currentTime,
            duration: this.player.duration,
            data: this.playData

        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
    }

    canPlay() {
        this.state = PlayerState.play
        this.progress = this.player.currentTime
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.play,
            progress: this.player.currentTime,
            duration: this.player.duration,
            data: this.playData
        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
    }

    onEnded(){
        this.progress = 0
        this.state = PlayerState.stopped
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.stopped,
            progress: this.player.duration,
            duration: this.player.duration,
            data: this.playData

        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
        setTimeout(() => {this.playNext()}, 200)
    }

    onError() {
        this.progress = 0
        this.state = PlayerState.stopped
        // update current time here
        let playData: PlayerStateData = {
            state: PlayerState.stopped,
            progress: this.player.duration,
            duration: this.player.duration,
            data: this.playData
        }

        EventHub.FireEvent(EventType.PlayEvent, playData)
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
        this.player.currentTime = Math.floor(prog * this.player.duration / 100) 
        this.state = PlayerState.play
        this.player.play()
    }

    play(): void {
        if (!this.playData){
            this.playData = getNextMusic()
        }

        if (this.state == PlayerState.stopped) {
            this.player.src = this.playData.musicurl
        }

        this.player.play()
    }

    pause(): void {
        this.player.pause()
    }

    playNext(): boolean {
        this.state = PlayerState.stopped;
        this.playData = getNextMusic()
        this.play()
        return true
    }

    playPrev(): boolean {
        this.playNext()
        return true;
    }
}
