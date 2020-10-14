export interface ButtonProps {
    buttonsEnabled: boolean,
    tabItems: object[],
    deleteSelection: () => void,
    exportSelection: () => void,
    setIntent: () => void,
    closeExportInfo: () => void,
    showAlert: boolean,
    showIntentWarning: boolean
}