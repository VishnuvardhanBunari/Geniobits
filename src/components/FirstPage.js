import React, {useState} from 'react'
import './FirstPage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const FirstPage = () => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')
  const [id, setId] = useState('')

  const res = async () =>
    await fetch('https://gorest.co.in/', {
      method: 'POST',
      body: JSON.stringify({
        name: firstName,
        middleName,
        lastName,
        id,
      }),
    })
  const resJson = async () => await res.json()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('https://gorest.co.in/', {
        method: 'POST',
        body: JSON.stringify({
          name: firstName,
          middleName,
          lastName,
          id,
        }),
      })
      const resJson = await res.json()
      if (res.status === 200) {
        setFirstName('')
        setMiddleName('')
        setId('')
        setMessage('User created successfully')
      } else {
        setMessage('Some error occurred')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form>
        <div className="container1">
          <h2>Add Employee</h2>
          <hr />
          <div className="emp_image">
            <img
              src="https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545204?k=20&m=666545204&s=612x612&w=0&h=IKSdCIxuagnoASRscsVoP_o9boTdp4LDamWVy-m0XLQ="
              alt=""
              className="emp"
            />
          </div>
          <div className="file">
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
            <br />
            <br />
            <label htmlFor="formFileMultiple" className="form-label">
              Accept jpg, png, gif upto 1 MB. Recommended
              <br />
              dimensions: 200px X 200px
            </label>
          </div>

          {/* ---Form data */}
          <div className="form_fill">
            <form action="https://gorest.co.in/">
              <label htmlFor="Employee Full Name">Employee Full Name*</label>
              <br />
              <br />
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Middle Name"
                value={middleName}
                onChange={e => setMiddleName(e.target.value)}
              />
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="Employee Id">Employee Id:</label>
              <br />
              <br />
              <input
                type="number"
                required
                autoComplete="off"
                placeholder="0011"
                value={id}
                onChange={e => setId(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="login">Create Login Details</label>
              <label className="switch">
                <input type="checkbox" required autoComplete="off" />
                <span className="slider round" />
              </label>
            </form>
          </div>

          <hr />

          <p>*Required</p>
          <div className="buttons">
            <button className="cancel" type="button">
              Cancel
            </button>
            <button className="save" type="button" onSubmit={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default FirstPage
