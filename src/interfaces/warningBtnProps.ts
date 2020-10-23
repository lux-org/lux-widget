export interface WarningBtnProps {
    message: string,
    openPanel: (e) => void,
    closePanel: (e) => void,
    openWarning: boolean
}