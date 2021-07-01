export interface ButtonProps {
    buttonsEnabled: boolean,
    tabItems: Number,
    deleteSelection: () => void,
    exportSelection: () => void,
    setIntent: () => void,
    closeExportInfo: () => void,
    showAlert: boolean,
    intentEnabled: boolean
}