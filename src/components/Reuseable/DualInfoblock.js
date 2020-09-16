import React from 'react'
import Heading from "./Heading"


export default function DualInfoblock({heading}) {
    return (
        <div className=" py-4 bg-theme">
            <div className="container">
             <Heading className="display-4 text-white font-weight-bold head" title={heading}/>
             <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white text-center mb-5">
                        Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry. 
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s,
                        when an unknown printer took a galley 
                        of type and scrambled it to make a type 
                        specimen book. 
                    </p>
                </div>    
                <div className="col-8 col-md-4 mx-auto">
                    <div className="card ">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" className="card-img-top card-img mx-auto" alt="image" />
                    <div className="card-body text-center join">
                    <h4 className="card-title text-center">Just click photos</h4>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/about" className="btn btn-warning join">{heading}</a>
                    </div>
                    </div>
                </div>
             </div>
            </div>    
        </div>
    )
}
