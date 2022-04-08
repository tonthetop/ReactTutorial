import {ThemeContext} from './ThemeContext'
import {useContext} from 'react'
function Paragraph() {
    const value=  useContext(ThemeContext);
    console.log(value)
    const theme = value.toggled?'dark':'light'
    return (
        <p className={theme}>
            Entrypoint main 1.48 MiB (1.5 MiB) = static/js/bundle.js 1.47 MiB main.8083f695fa690e142c37.hot-update.js 4.01 KiB 2 auxiliary assets
            cached modules 1.36 MiB [cached] 108 modules
            runtime modules 31.3 KiB 15 modules
            ./src/App.jsx 2.42 KiB [built] [code generated]
        </p>
    )
}
export default Paragraph