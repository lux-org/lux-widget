export interface WarningBtnProps {
    message: string,
    toggleWarningPanel: (e) => void,
    closeWarningPanel: (e) => void,
    openWarning: boolean
}