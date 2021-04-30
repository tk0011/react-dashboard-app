import React from 'react';
import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
            <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                <div className="main-navbar">
                    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                        <Link className="navbar-brand w-100 mr-0" to="/" style={{lineHeight: "25px"}}>
                            <div className="d-table m-auto">
                                <span className="d-none d-md-inline ml-1">Blog Dashboard</span>
                            </div>
                        </Link>
                        <Link className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                            <i className="material-icons">&#xE5C4;</i>
                        </Link>
                    </nav>
                </div>
                <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                    <div className="input-group input-group-seamless ml-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> 
                    </div>
                </form>
                <div className="nav-wrapper">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                        <i className="material-icons">edit</i>
                        <span>Blog Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                        <i className="material-icons">vertical_split</i>
                        <span>Blog Posts</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                        <i className="material-icons">note_add</i>
                        <span>Add New Post</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                        <i className="material-icons">person</i>
                        <span>User Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                        <i className="material-icons">error</i>
                        <span>Errors</span>
                        </Link>
                    </li>
                    </ul>
                </div>
            </aside>
    )
}
