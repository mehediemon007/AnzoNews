import React,{createContext, useState, useEffect} from 'react';

export const LangContext = createContext();


const LangContextWrapper = (props) => {
    
    const [langShow , setLangShow] = useState(false);

    const [langData, setLang] = useState([

        {
            img:"usa-flag.png",
            alt:"ENG",
            langName:"ENG",
            selected:true,
        },
        {
            img:"bd-flag.png",
            alt:"BAN",
            langName:"BAN",
            selected:false
        },
        {
            img:"china-flag.png",
            alt:"CHN",
            langName:"CHN",
            selected:false
        },
        {
            img:"saudi-flag.png",
            alt:"ARB",
            langName:"ARB",
            selected:false
        },
        {
            img:"german-flag.png",
            alt:"GER",
            langName:"GER",
            selected:false
        },

    ])

    function handleLang(el){

        if(el.langName === "ARB"){
            document.body.classList.add('right-to-left');
        }else{
            document.body.classList.remove('right-to-left');
        }
        
        let prevLang = langData.findIndex(lang => lang.selected === true);
        let currLang =  langData.indexOf(el);
        
        langData[prevLang].selected = false;
        langData[currLang].selected = true;
        setLang(langData);
    }
    
    return (
        <LangContext.Provider value={{langShow , setLangShow, langData, setLang, handleLang}}>
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContextWrapper