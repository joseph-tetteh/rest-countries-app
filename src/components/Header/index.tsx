import * as S from './styles'
import { useForm } from '../../context/ThemeContext'
import { themeActions } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
import { FaMoon,FaRegMoon } from "react-icons/fa";

export const Header = () => {
    const { state, dispatch } = useForm()

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
    
    return (
        <S.Header theme={state.theme}>
            <div className='container'>
            <Link to="/"><h1>Where in the world?</h1></Link>
                <p onClick={handleChangeTheme} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {/* <i className={state.theme === 'light' ? <FaBeer /> : 'fa fa-moon'}></i> */}
                    {state.theme === 'light' ? <FaMoon /> : <FaRegMoon />}
                    {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'} 
                </p>
            </div>
        </S.Header>
    )
}


