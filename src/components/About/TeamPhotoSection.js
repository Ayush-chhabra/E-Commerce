import React from 'react'

export default function teamPhotoSection() {
    return (
      <div>
        <div className="row">
        <div className="col-10 col-sm-10 my-4 mx-auto">
        <div className="card-group mx-5">
        <div className="card mx-3 bg-dark">
          <img className="card-img-top" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
          <div className="card-body">
          <h4 className="card-title text-white text-center">CARD TITLE</h4>
            <p className="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
          </div>
        </div>
        <div className="card mx-3 bg-dark">
          <img className="card-img-top" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <div className="card-body">
            <h4 className="card-title text-white text-center">CARD TITLE</h4>
            <p className="card-text text-white text-center">This card has supporting text below as a natural lead-in to additional content.</p>
            
          </div>
        </div>
        <div className="card mx-3 bg-dark">
          <img className="card-img-top" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
          <div className="card-body">
          <h4 className="card-title text-white text-center">CARD TITLE</h4>
            <p className="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content .</p>
          </div>
        </div>
       </div>
       </div>
       </div>
       </div>
    )
}
