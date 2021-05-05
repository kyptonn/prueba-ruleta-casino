import React, {useState, useEffect} from 'react'
import './JuegoRuleta.css'
import { Wheel } from 'react-custom-roulette'
import bgImage from './cuchillo.jpeg'


const data = [

    { option: 'COMODÍN', style: { textColor: 'white' } },
    { option: 'GANAS', style: { backgroundColor: 'green' } },
    { option: 'PIERDES', style: { backgroundColor: 'rgb(123, 0, 0)' } } ,
    
]




export default function JuegoRuleta() {

    var elegido = 1; // GANAS

    const [activarRuleta, setActivarRuleta] = useState()
    const [random, setRandom] = useState()
    const [dinero, setDinero] = useState(5)
    const [claseFondo, setClaseFondo] = useState("container-ruleta")
    const [resultado, setResultado] = useState()


    const [botonRuleta, setBotonRuleta] = useState("boton-ruleta")



 
    const girar = () => {
        setRandom(Math.floor(Math.random() * 3)) // si se quiere añadir dificultad, es tan simple con aumentar este ultimo numero


        setBotonRuleta("boton-ruleta-oculto")
        setResultado('')
        setDinero(dinero - 1)
        setActivarRuleta(true)
        setClaseFondo("container-ruleta-activo") 
        
    }
 

  


    const acabaRuleta = () => {
        console.log('ruleta acabada')
         if(random === elegido){
            setDinero(dinero+5);
            console.log('has ganado 5€!')
            setResultado('has ganado 5€!')
            
        } else if (random === 0){
            setDinero(dinero+1)
            console.log('comodín')
            setResultado('comodín')
        
        } else /* if(random !== elegido) */{ 
            console.log('has perdido ):')
            setResultado('has perdido ):')
            
        }

        setClaseFondo("container-ruleta") 
        setBotonRuleta("boton-ruleta-")
        setActivarRuleta(false); 

    }




    console.log(activarRuleta)
    console.log(random)






    return (
        <div>
            
            <div className={claseFondo}>
                <h1>{dinero}€</h1>

                    <Wheel
                
                        mustStartSpinning={activarRuleta}
                        onStopSpinning={() => acabaRuleta()} 
                        prizeNumber={random}
                        data={data}
                        backgroundColors={['#3e3e3e', '#df3428']}
                        textColors={['#ffffff']}
                        
                    />   



                    <button className={botonRuleta} onClick={() => {girar()}}>Tirar</button>
                
                <br></br>
                <br></br>

                <h1>{resultado}</h1>
            </div>
        </div>
    )
}
