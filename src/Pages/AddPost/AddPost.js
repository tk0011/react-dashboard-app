import React from 'react'
import AddPostForm from '../../Components/AddPostForm/AddPostForm'

const AddPost = () => {
  return (
    <>
       <div className="container">
            <h5>Add New Post</h5> 
            <div className="row">
                <div className="col-md-8">
                      <AddPostForm />
                </div>
                <div className="col-md-4">

                </div>
            </div>
       </div>
    </>
  )
}

export default AddPost
