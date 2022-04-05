import React,{createContext, useState, useEffect} from 'react';

export const LangContext = createContext();


const LangContextWrapper = (props) => {
    const [langShow , setLangShow] = useState(false);

    const [langData, setlangData] = useState({
        lang:["EN","USA","BAN","ARB"],
        selected:"EN"
    })

    function langChange(){

        const lagnOpt = document.querySelectorAll(".single-lang");

        lagnOpt.forEach(el => {
            el.addEventListener("click",function(e){
                
                e.preventDefault();
                let logoSrc = el.querySelector(".flag").querySelector("img").getAttribute("src");
                
                if(this.classList.contains("arabic")){
                    document.body.classList.add('right-to-left');
                }else{
                    document.body.classList.remove('right-to-left');
                }

                // document.querySelector(".lang-switcher > .flag img").setAttribute("src",logoSrc);

                document.querySelectorAll(".lang-switcher > .flag img").forEach(el =>{
                    el.setAttribute("src",logoSrc)
                })

                // langFlag.current.setAttribute('src', logoSrc);
            })
        });
    }

    useEffect(()=>{
        langChange()
    },[langShow])

    return (
        <LangContext.Provider value={{langShow , setLangShow, langData, setlangData}}>
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContextWrapper