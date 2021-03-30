declare module 'themes' {
    export type themeProps = 'font' | 'primaryColor';

    export type themeList = {
        [theme in themeProps]: string[]
    }

    export type theme = {
        [theme in themeProps]: string
    }
}

declare module 'timer' {
    export type timerType = 'pomodoro' | 'short break' | 'long break';

    export type timerConfig = {
        [type in timerType]: number
    }
}