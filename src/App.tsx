import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Infop } from './cv comp/infop';
import { Infopro } from './cv comp/infopro';
import { Carrier } from './cv comp/carrer';
import { Loisir } from './cv comp/loisir';
function App() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <div >
        <div className='cv-cont'>
              <div className='cont1'>
                      <div className='portrait'>
                          <img src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" 
                          style={{width:"170px",
                          border:'solid black 4px',
                          borderRadius:'50%'}} />
                      </div>
                      <div className='p1'>
                          <h3>A propos :</h3>
                          <Infop nom={"Ennadif"} prenom={"Anas"} Age={20} Genre={"Homme"} mail={"anassssaa123@gmail.com"} city={"Fes"} linkedin={"https://www.linkedin.com/in/anas-ennadif-0268a0246/"}/>
                      </div>
              </div>
              <div className='p2'>
                            <div className='p21'>
                              <h3>Compétences : </h3>
                              <Infopro/>
                            </div>
                            <div className='p22'> 
                                <h3>Parcours academic : </h3>
                                <Carrier/>
                            </div> 
                            <h3> Mes loisirs :</h3>
                                <Loisir/>
              </div>
        </div>
        <footer>
          <h2> Current Date : {formattedDate} </h2>
          <p> This Cv is a react project for some uni reasons *Copyright* © </p>
        </footer>    
    </div>
  );
}

export default App;
