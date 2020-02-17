import * as React from "react";
/**
|--------------------------------------------------
| all interface
|--------------------------------------------------
*/

export interface IEpisode {
    readonly id: number
    url: string
    name: string
    season: number
    number: number
    airdate?: string
    airtime?: string
    airstamp?: string
    runtime?: number
    image: {medium: string, original: string}
    summary?: string,
    _links?: {self: { href: string }}
}

export interface IAction {
    type: string,
    payload?: Array<IEpisode>
}

export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>
}

export interface ICardComponent {
    episode: IEpisode,
    toggleFavorite: (episode: IEpisode) => IAction,
    isFavorite: boolean
}
