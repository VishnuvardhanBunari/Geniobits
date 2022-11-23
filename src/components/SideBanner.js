import React from 'react'
import './SecondPage.css'
import {NavLink} from 'react-router-dom'

const SideBanner = () => (
  <>
    <div className="side_items">
      <p className="chahal">
        Chahal <br /> Vadalmiya
      </p>
      <img
        src="https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545204?k=20&m=666545204&s=612x612&w=0&h=IKSdCIxuagnoASRscsVoP_o9boTdp4LDamWVy-m0XLQ="
        alt=""
        className="emp1"
      />
      <nav>
        <ol>
          <NavLink to="/personal">Personal Details</NavLink>
        </ol>
        <ol>
          <NavLink to="/contact">Contact Details</NavLink>
        </ol>
        <ol>Emergency Contact</ol>
        <ol>Dependents</ol>
        <ol>Immigration</ol>
        <ol>
          <NavLink to="/job">Job</NavLink>
        </ol>
        <ol>Salary</ol>
        <ol>Report-to</ol>
        <ol>Qualification</ol>
        <ol>Memberships</ol>
      </nav>
    </div>
  </>
)

export default SideBanner
