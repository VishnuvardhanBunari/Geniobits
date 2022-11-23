import React from 'react'
import './SecondPage.css'

import SideBanner from './SideBanner'

const Job = () => (
  <>
    <SideBanner />
    {/* --side items */}
    <div className="Job_personal">
      <p>Job Details</p>
      <hr />
      <form action="https://gorest.co.in/">
        <br />
        <label htmlFor="Employee Id">Joined Date</label>
        <label htmlFor="other" className="other2">
          Job Title
        </label>
        <label htmlFor="other" className="other">
          Job Specification
        </label>
        <br />
        <br />
        <input type="date" className="joindate" required autoComplete="off" />
        <select className="padding2">
          <option value="#">--select--</option>
          <option value="#">Frontend Developer</option>
          <option value="#">Web Developer</option>
          <option value="#">DevOps Developer</option>
          <option value="#">React Developer</option>
          <option value="#">HTML Developer</option>
        </select>
        <input type="text" className="other_item" required autoComplete="off" />
        <br />
        <br />
        <label htmlFor="Employee Id">Job Category</label>
        <label htmlFor="other" className="other2">
          Sub Unit
        </label>
        <label htmlFor="other" className="other3">
          Location
        </label>
        <br />
        <br />
        <select className="jobcat">
          <option value="#">--select--</option>
          <option value="#">Full Time</option>
          <option value="#">Internship</option>
          <option value="#">Contract</option>
        </select>
        <select className="padding2">
          <option value="#">--select--</option>
          <option value="#">I do not know what?</option>
        </select>
        <select className="padding2">
          <option value="#">--select--</option>
          <option value="#">Delhi</option>
          <option value="#">Mumbai</option>
          <option value="#">Pune</option>
          <option value="#">Noida</option>
          <option value="#">Bangalore</option>
        </select>
        <br />
        <br />
        <label htmlFor="Employee Full Name">Employment Status</label>
        <br />
        <br />
        <select className="jobcat">
          <option value="#">--select--</option>
          <option value="#">Permanent</option>
          <option value="#">Intern</option>
          <option value="#">!</option>
        </select>
        <br />
        <hr />
        <label htmlFor="Employee Full Name">
          Include Employment Contract Details
        </label>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
        <hr />
        <br />
        <button className="save1" type="button">
          Save
        </button>
        <br />
        <hr />
        <label htmlFor="Employee Id">Employee Termination / Activation</label>
        <button className="term" type="button">
          Terminate Employment
        </button>
      </form>
    </div>
  </>
)

export default Job
