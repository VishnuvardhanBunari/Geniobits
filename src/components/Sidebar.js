import React from 'react'
import '../App.css'

const Sidebar = () => (
  <>
    <div className="area" />
    <nav className="main-menu">
      <ul>
        <li>
          <a href="http://justinfarrow.com">
            <i className="fa fa-leaf fa-2x" />
            <span className="nav-text">OrangeHRM</span>
          </a>
        </li>
        <li>
          <a href="http://justinfarrow.com">
            <i className="fa fa-search fa-2x" />
            <span className="nav-text">Search</span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="#">
            <i className="fa fa-laptop fa-2x" />
            <span className="nav-text">Admin</span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="#">
            <i className="fa fa-gift fa-2x" />
            <span className="nav-text">PIM</span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="#">
            <i className="fa fa-bell fa-2x" />
            <span className="nav-text">Leave</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-bar-chart-o fa-2x" />
            <span className="nav-text">Time</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-font fa-2x" />
            <span className="nav-text">My Info</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-home fa-2x" />
            <span className="nav-text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-map-marker fa-2x" />
            <span className="nav-text">Directory</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-gear fa-2x" />
            <span className="nav-text">Maintenance</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-info fa-2x" />
            <span className="nav-text">Buzz</span>
          </a>
        </li>
      </ul>
    </nav>
  </>
)

export default Sidebar
