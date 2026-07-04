import { Routes, Route } from 'react-router-dom';

import Aluno from '../pages/Aluno'
// import Contador from '../pages/Contador'
// import Cozinheiro from '../pages/Cozinheiro'
import Login from '../pages/Login'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<redirect/>}/>
            <Route path='/Aluno' element={<Aluno/>}/>
            {/* <Route path='/Contador' element={<Contador/>}/> */}
            {/* <Route path='/Cozinheiro' element={<Cozinheiro/>}/> */}
            <Route path='/Login' element={<Login/>}/>
            <Route path='*' element={<h2>Página não encontrada</h2>}/>
        </Routes>
    )
}