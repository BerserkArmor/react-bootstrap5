import React from 'react'
import  PropTypes from 'prop-types';
import './cards.css'

function Card({saga, imageSource, url, text}) {
    let  caractSaga = saga[0];
    return (
        <div className={`card text-center bg-dark animate__animated animate__fadeInBottomLeft  ${caractSaga === 'm'? "majin_boo": saga }`}>
            <div className="overflow">
            <img src={imageSource}  alt="img card uno" className="card-img-top"></img>
            </div>
            
            <div className="card-body  text-light">
                <h4 className="card-title">{
                    caractSaga === 'f' ||   caractSaga === 'c' || caractSaga === 'm' ? `SAGA ${saga.toUpperCase()}` : 'SAGA DE:'
          
                }</h4>
                <p className="card-text text-secondary">
                {
                    text ? text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor'

                }</p>
                <a href={url} target="__blank" className="btn btn-outline-danger rounded-0">
                Ver capitulos
                </a>
            </div>
        </div>
    )
}

Card.propTypes ={
    saga: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card
