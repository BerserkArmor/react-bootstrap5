import React from 'react'
import Card from './Card';
import Img1 from '../assets/imgFr3.jpg';
import Img2 from '../assets/imgCell1.jpg'
import Img3 from '../assets/imgMj1.jpg';

const cards=[
    {
        id:1,
        saga: 'freezer',
        image: Img1,
        url: 'https://dbzlatino.com/saga-freezer/',
        // text: 'elpepe de le la vendicion un manguito clasico k banaqueria tu sabe'
    },
    {
        id:2,
        saga: 'cell',
        image: Img2, 
        url: 'https://dbzlatino.com/saga-cell/',

    },
    {
        id:3,
        saga: 'majin boo' ,
        image: Img3,
        url: 'https://dbzlatino.com/saga-majin-boo/' 
    }
]

function Cards() {
    console.log(cards);
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
               {
                   cards.map(card => (
                    <div className="col-4" key={card.id}>
                    <Card saga={card.saga}
                    imageSource={card.image} 
                    url={card.url}
                    text={card.text} />
                    </div>
                   ))
               }
               
            </div>
           
        </div>
    )
}

export default Cards
