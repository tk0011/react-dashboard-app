import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
         <div class="main-navbar sticky-top bg-white">
            <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
              <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                <div class="input-group input-group-seamless ml-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fas fa-search"></i>
                    </div>
                  </div>
                  <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> 
                  </div>
              </form>
              <ul class="navbar-nav border-left flex-row ">
                <li class="nav-item border-right dropdown notifications">
                  <Link class="nav-link nav-link-icon text-center" to="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="nav-link-icon__wrapper">
                      <i class="material-icons">&#xE7F4;</i>
                      <span class="badge badge-pill badge-danger">2</span>
                    </div>
                  </Link>
                  <div class="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                    <Link class="dropdown-item" to="/">
                      <div class="notification__icon-wrapper">
                        <div class="notification__icon">
                          <i class="material-icons">&#xE6E1;</i>
                        </div>
                      </div>
                      <div class="notification__content">
                        <span class="notification__category">Analytics</span>
                        <p>Your website’s active users count increased by
                          <span class="text-success text-semibold">28%</span> in the last week. Great job!</p>
                      </div>
                    </Link>
                    <Link class="dropdown-item" to="/">
                      <div class="notification__icon-wrapper">
                        <div class="notification__icon">
                          <i class="material-icons">&#xE8D1;</i>
                        </div>
                      </div>
                      <div class="notification__content">
                        <span class="notification__category">Sales</span>
                        <p>Last week your store’s sales count decreased by
                          <span class="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
                      </div>
                    </Link>
                    <Link class="dropdown-item notification__all text-center" to="/"> View all Notifications </Link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-md-inline-block">Sierra Brooks</span>
                  </Link>
                  <div class="dropdown-menu dropdown-menu-small">
                    <Link class="dropdown-item" to="/">
                      <i class="material-icons">&#xE7FD;</i> Profile</Link>
                    <Link class="dropdown-item" to="/">
                      <i class="material-icons">vertical_split</i> Blog Posts</Link>
                    <Link class="dropdown-item" to="/">
                      <i class="material-icons">note_add</i> Add New Post</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item text-danger" to="/">
                      <i class="material-icons text-danger">&#xE879;</i> Logout </Link>
                  </div>
                </li>
              </ul>
              <nav class="nav">
                <Link to="/" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                  <i class="material-icons">&#xE5D2;</i>
                </Link>
              </nav>
            </nav>
          </div>   
        </>
    )
}

export default Header;