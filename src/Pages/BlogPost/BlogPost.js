import React from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';

const BlogPost = () => {
    return (
        <div class="main-content-container container-fluid px-4">
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Components</span>
                <h3 class="page-title">Blog Posts</h3>
              </div>
            </div>
            <div class="row">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>  
        </div>
    )
}

export default BlogPost;
