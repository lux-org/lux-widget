export interface ButtonProps {
    buttonsEnabled: boolean,
    tabItems: object[],
    deleteSelection: () => void,
    exportSelection: () => void,
    setIntent: () => void,
    fullScreen: () => void,
    closeExportInfo: () => void,
    showAlert: boolean,
    intentEnabled: boolean
    fullScreenEnabled: boolean
}