import React,{createContext, useState , useEffect} from 'react';

export const themes = {
    dark:"dark",
    light:"light"
}

export const ThemeContext = createContext({
    theme:themes.light,
    changeTheme : () =>{}
})
 

function ThemeContextWrapper(props) {

    const [theme, setTheme] = useState(themes.light);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.remove('dark-theme');
                break;
            case themes.dark:
                document.body.classList.add('dark-theme');
                break;
            default:
                document.body.classList.remove('dark-theme');
                break;
            }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextWrapper;