import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../Home';
import FuvestMat from '../FuvestMat';
import FuvestMat2022 from '../FuvestMat2022';
import FuvestMat2021 from '../FuvestMat2021';
import FuvestMat2020 from '../FuvestMat2020';
import UnicampMat from '../UnicampMat';
import UnicampMat2021 from '../UnicampMat2021';
import UnicampMat2022 from '../UnicampMat2022';
import UnicampMat2020 from '../UnicampMat2020';
import UfrgsMat from '../UfrgsMat';
import UfrgsMat2019 from '../UfrgsMat2019';
import UfrgsMat2020 from '../UfrgsMat2020';
import UfrgsMat2022 from '../UfrgsMat2022';
import FuvestFis from '../FuvestFis';
import FuvestFis2020 from '../FuvestFis2020';
import FuvestFis2021 from '../FuvestFis2021';
import FuvestFis2022 from '../FuvestFis2022';
import UnicampFis from '../UnicampFis';
import UnicampFis2020 from '../UnicampFis2020';
import UnicampFis2021 from '../UnicampFis2021';
import UnicampFis2022 from '../UnicampFis2022';
import UfrgsFis from '../UfrgsFis';
import UfrgsFis2019 from '../UfrgsFis2019';
import UfrgsFis2020 from '../UfrgsFis2020';
import UfrgsFis2022 from '../UfrgsFis2022';


const Rotas = () => {     

    const mobileScreen = window.matchMedia("(max-width: 475px)").matches;
    if (mobileScreen) {
        return (
            <div className='mobile'>
                <div className="logo-mobile">
                    <img src="./img/one.svg" alt="ONE"></img>
                    <h1>resoluções</h1>
                </div>
                <p>Disponível em breve para dispositivos móveis</p>
            </div>
        )
    }

    return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element= { <Home /> } />
        <Route path='/fuvest-mat' element= { <FuvestMat /> } />
        <Route path='/fuvest-mat-2020' element= { <FuvestMat2020 /> } />
        <Route path='/fuvest-mat-2021' element= { <FuvestMat2021 /> } />
        <Route path='/fuvest-mat-2022' element= { <FuvestMat2022 /> } />
        <Route path='/fuvest-fis' element= { <FuvestFis /> } />
        <Route path='/fuvest-fis-2020' element= { <FuvestFis2020 /> } />
        <Route path='/fuvest-fis-2021' element= { <FuvestFis2021 /> } />
        <Route path='/fuvest-fis-2022' element= { <FuvestFis2022 /> } />
        <Route path='/unicamp-mat' element= { <UnicampMat /> } />
        <Route path='/unicamp-mat-2020' element= { <UnicampMat2020 /> } />
        <Route path='/unicamp-mat-2021' element= { <UnicampMat2021 /> } />
        <Route path='/unicamp-mat-2022' element= { <UnicampMat2022 /> } />
        <Route path='unicamp-fis' element= { <UnicampFis /> } />
        <Route path='unicamp-fis-2020' element= { <UnicampFis2020 /> } />
        <Route path='unicamp-fis-2021' element= { <UnicampFis2021 /> } />
        <Route path='unicamp-fis-2022' element= { <UnicampFis2022 /> } />
        <Route path='/ufrgs-mat' element= { <UfrgsMat /> } />
        <Route path='ufrgs-mat-2019' element= { <UfrgsMat2019 /> } />
        <Route path='ufrgs-mat-2020' element= { <UfrgsMat2020 /> } />
        <Route path='ufrgs-mat-2022' element= { <UfrgsMat2022 /> } />
        <Route path='ufrgs-fis' element= { <UfrgsFis /> } />
        <Route path='ufrgs-fis-2019' element= { <UfrgsFis2019 /> } />
        <Route path='ufrgs-fis-2020' element= { <UfrgsFis2020 /> } />
        <Route path='ufrgs-fis-2022' element= { <UfrgsFis2022 /> } />
    </Routes>
    </BrowserRouter>  
    );
}

export default Rotas;
