import React, { Component } from 'react'
import Heading from "../Reuseable/Heading"
import Img from 'gatsby-image'

const getCaty= items=>{
    let holdItems =items.map(items=>{
        return items.node.category;
    })
 let holdcategories = new Set(holdItems)
 let categories = Array.from(holdcategories)
 categories=["All",...categories]
 return categories
}

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories:getCaty(props.courses.edges)
        }
    }

    catyClicked=category=>{
        let keepItsafe=[...this.state.courses]

        if(category==='All'){
            this.setState(()=>{
                return{mycourses: keepItsafe}
            })
        }else{
            let holdme=keepItsafe.filter(({node})=>node.category===category)
            this.setState(()=>{
                return{mycourses: holdme}
            })
        }
    }

    render() {
        return (
            <section className="py-5">
            <div className="container">
                <Heading className="display-4 text-dark font-weight-bold head" title="Courses"></Heading>
                <div className="row my-3">
                    <div className="col-10 mx-auto text-center">
                    {this.state.mycategories.map((category,index)=>{
                    return(
                            <button type="button" className="btn btn-info m-3 px-3"
                            key={index}
                            onClick={()=>{
                                this.catyClicked(category)
                            }}>{category}</button>
                    )
                })
                }
                    </div>
                </div>
                   <div className="row">
                    {this.state.mycourses.map(({node})=>{
                        return(
                            <div key={node.id}
                            className="col-8 col-md-6 mx-auto course">
                            <Img className="mx-auto" fixed={node.image.fixed}/>
                            <div className="flex-grow-1 px-3 mb-5">
                                <h6 className="mb-0 course-text">{node.title}</h6>
                            <p className="text-muted course-text">
                            <small>{node.description.description}</small>
                            </p>    
                            <h6 className="mb-2 text-success course-text">$ {node.price}</h6>
                            <button data-item-id={node.id}
                            data-item-name={node.title}
                            data-item-price={node.price}
                        
                            data-item-url="https://firstecommerce.netlify.app/"
                            data-item-image={node.image.fixed.src}
                            className="btn btn-warning snipcart-add-item join">Join now</button>
                            </div>
                            </div>
                        )
                    })
                }       
                </div>
                </div>
            </section>
        )
    }
}
