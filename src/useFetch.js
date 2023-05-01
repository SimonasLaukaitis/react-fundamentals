import { useState, useEffect } from "react";

const useFetch = (url) => {

         // imsim is json
    const [data, setData] = useState(null);

    //loading pranesimas
    const [isPending, setIsPending] = useState(true);

    //parodom vartotojui kokia klaida jungiantis su servu, jei ji yra
    const [error,setError] = useState(null);
    
        //   pasileis visada, kai pasikeis data ekrane( runs every render)
        useEffect(() => {

            // sustabdo fetchinima duomenu , jei esame jau ne tam psl
            const abortCont = new AbortController();

            console.log('Suveike');
    
            // imsim is json
            //'http://localhost:8000/blogs'
            // kad kai keiciam puslapius nemestu klaidu ir isvalytu, sustabdo fetchinima duomenu , jei esame jau ne tam psl(nuo signal)
            fetch(url, { signal: abortCont.signal})
                .then(res =>  {
    
                    //jei responsas is serverio not ok
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
    
                    // paima duomenu json is duomenu bazes
                    return res.json();
                })
                .then(data => {
    
                    // panaudoje setBlogs() funkcija su data (inkapsuliuoja)
                    console.log(data);
                    setData(data);
    
                    // loading pranesimas
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    //erroras
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        console.log(err.message);
                        setError(err.message);
                    }
                    
                })
                
                // sustabdo fetchinima duomenu , jei esame jau ne tam psl
                return () => { abortCont.abort();}
    
          },[url]);
        //   dabar pasileis tik tada, kai sekamas Elementas(siuo atveju url) pasikeicia

        return {data, isPending, error};

}

export default useFetch;