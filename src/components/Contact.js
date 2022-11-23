import React from 'react'
import SideBanner from './SideBanner'

const Contact = () => (
  <>
    <SideBanner />

    {/* contact details */}

    <div className="Personal">
      <p>Contact Details</p>
      <hr />
      <form action="https://gorest.co.in/" method="POST">
        <label htmlFor="Employee Full Name">Address</label>
        <hr />
        <br />
        <label htmlFor="Employee Id">Street 1</label>
        <label htmlFor="other" className="other">
          Street 2
        </label>
        <label htmlFor="other" className="other2">
          City
        </label>
        <br />
        <br />
        <input type="text" className="padding" required autoComplete="off" />
        <input type="text" className="other_item" required autoComplete="off" />
        <input type="text" className="other_item" required autoComplete="off" />
        <br />
        <br />
        <label htmlFor="Employee Id">State/Province</label>
        <label htmlFor="other" className="other">
          Zip/Postal Code
        </label>
        <label htmlFor="other" className="other3">
          Country
        </label>
        <br />
        <br />
        <input type="text" className="padding" required autoComplete="off" />
        <input type="text" className="other_item" required autoComplete="off" />
        <select className="padding2">
          <option value="#">--select--</option>
          <option value="#">India</option>
          <option value="#">Norway</option>
          <option value="#">China</option>
          <option value="#">Australia</option>
          <option value="#">Japan</option>
        </select>
        <br />
        <br />
        <label htmlFor="Employee Full Name">Telephone</label>
        <hr />
        <br />
        <label htmlFor="Employee Id">Home</label>
        <label htmlFor="other" className="other2">
          Mobile
        </label>
        <label htmlFor="other" className="other2">
          Work
        </label>
        <br />
        <br />
        <input type="text" className="padding" required autoComplete="off" />
        <input type="text" className="other_item" required autoComplete="off" />
        <input type="text" className="other_item" required autoComplete="off" />
        <br />
        <br />
        <label htmlFor="Employee Full Name">Email</label>
        <hr />
        <br />
        <label htmlFor="Employee Id">Work Email</label>
        <label htmlFor="other" className="other">
          Other Email
        </label>

        <br />
        <br />
        <input type="text" className="padding" required autoComplete="off" />
        <input type="text" className="other_item" required autoComplete="off" />
      </form>
    </div>
  </>
)

export default Contact
