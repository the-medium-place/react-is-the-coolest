import React from 'react'

export default function DogCard({img, desc, type}) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cute Puppy</h5>
                        <h6>{type}</h6>
                        <p className="card-text">{desc}</p>
                        
                    </div>
            </div>
        </div>
    )
}
