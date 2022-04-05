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
            langName:"BD",
            selected:false
        },
        {
            img:"german-flag.png",
            alt:"GER",
            langName:"GER",
            selected:false
        },

    ])

    // function langChange(){

    //     const lagnOpt = document.querySelectorAll(".single-lang");

    //     lagnOpt.forEach(el => {
    //         el.addEventListener("click",function(e){
                
    //             e.preventDefault();
    //             let logoSrc = el.querySelector(".flag").querySelector("img").getAttribute("src");
                
    //             if(this.classList.contains("arabic")){
    //                 document.body.classList.add('right-to-left');
    //             }else{
    //                 document.body.classList.remove('right-to-left');
    //             }

    //             document.querySelector(".lang-switcher > .flag img").setAttribute("src",logoSrc);

    //             document.querySelectorAll(".lang-switcher > .flag img").forEach(el =>{
    //                 el.setAttribute("src",logoSrc)
    //             })

    //             langFlag.current.setAttribute('src', logoSrc);
    //         })
    //     });
    // }

    useEffect(()=>{
        // langChange()
    },[langShow])

    return (
        <LangContext.Provider value={{langShow , setLangShow, langData, setLang}}>
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContextWrapper