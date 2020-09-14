import React from 'react'
import Heading from '../Reuseable/Heading'

export default function Contact() {
    return (
        <div className="py-3">
            <Heading  className="display-4 text-dark font-weight-bold" title="Enter you Query"></Heading>
            <Heading  className="display-5 text-secondary " title="We will get back to you shortly....."></Heading>
            <div className="col-10 col-sm-8 mx-auto">
                <form action ="https://formspree.io/ayushchhabra0744@gmail.com" method="POST">
                    <div className="form-group">
                        <input type="text"
                         name="name" 
                         id="name" 
                         placeholder="Full Name"
                         className="form-control"/>
                    </div>
                    <div className="form-group">
                    <input type="email"
                     name="email" 
                     id="email" 
                     placeholder="E-mail"
                     className="form-control"/>
                </div>
                <div className="form-group">
                <input type="phone"
                 name="phone" 
                 id="phone" 
                 placeholder="Phone number"
                 className="form-control"/>
            </div>
            <div className="form-group">
            <textarea
             type="text"
             name="description" 
             id="description" 
             placeholder="Message"
             className="form-control"/>
        </div>
        <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </div>
    )
}
