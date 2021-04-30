import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = () => {
    return (
        
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card card-small card-post card-post--1">
                  <div className="card-post__image" style={{ backgroundImage:`url(${1})` }}>
                    <Link to="#" className="card-post__category badge badge-pill badge-dark">Business</Link>
                    <div className="card-post__author d-flex">
                      <Link to="#" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: `url(${0}) `}}>Written by Anna Kunis</Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link className="text-fiord-blue" to="#">Conduct at an replied removal an amongst</Link>
                    </h5>
                    <p className="card-text d-inline-block mb-3">However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...</p>
                    <span className="text-muted">28 February 2019</span>
                  </div>
                </div>
              </div>
        
    )
}

export default BlogCard;
