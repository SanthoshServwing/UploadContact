import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  const [contact, setContact] = useState({
    Cname: '',
    Cphno: '',
    Cemail: '',
    Cservice: '',
    Cprofession: '',
    Cdate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`updating ${name} with value ${value}`)
    setContact((previousForm) => ({
      ...previousForm,
      [name]: value
    }))
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    try {
      const contactResponse = await axios.post('https://main.d23p3u4f8o8hii.amplifyapp.com/api/contact/', contact)
      console.log(contactResponse)
      alert('contact Form submitted')
    } catch (error) {
      console.error(error)
      alert('you got error')
    }
  }
  return (
    <div>
      <div>
        <form className='Form' onSubmit={handleContactSubmit}>
          <label htmlFor="name">Name</label>
          <input type='text' placeholder='Enter your name' id='Cname' name='Cname' value={contact.Cname} onChange={handleChange} />
          <label htmlFor="contact">Contact Number</label>
          <input type="text" placeholder='Enter your Mble No' id='Cphno' name='Cphno' value={contact.Cphno} onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="text" placeholder='ENter Your emailID' id='Cemail' name='Cemail' value={contact.Cemail} onChange={handleChange} />
          <label htmlFor="service">What Service do you need?</label>
          <div className='radio'>
            <div>
              <input type="checkbox" id='servicevo' name='Cservice' value='Virtual Office' onChange={handleChange} />
              <label htmlFor="VirtualOffice">Virtual Office</label>
            </div>
            <div>
              <input type="checkbox" id='servicecd' name='Cservice' value='Coworking Desk' onChange={handleChange} />
              <label htmlFor="CoworkingDesk">Coworking Desk</label>
            </div>
            <div>
              <input type="checkbox" id='servicepo' name='Cservice' value='Private Office' onChange={handleChange} />
              <label htmlFor="PrivateOffice">Private Office</label>
            </div>
            <div>
              <input type="checkbox" id='servicem' name='Cservice' value='Meeting' onChange={handleChange} />
              <label htmlFor="Meeting">Meeting/Event/Conference</label>
            </div>
            <div>
              <input type="checkbox" id='serviceso' name='Cservice' value='Serviced Office' onChange={handleChange} />
              <label htmlFor="ServicedOffice">Serviced Office</label>
            </div>
            <div>
              <input type="checkbox" id='servocebr' name='Cservice' value='Business Registration' onChange={handleChange} />
              <label htmlFor="BusinessRegistration">Business Registration</label>
            </div>
            <div>
              <input type="checkbox" id='serviceo' name='Cservice' value='Others' onChange={handleChange} />
              <label htmlFor="Others">Others</label>
            </div>
            <div>
              <label htmlFor='Cprofession'>Profession</label>
              <select id='Cprofession' name='Cprofession' value={contact.Cprofession} onChange={handleChange} required>
                <option value=''>Choose</option>
                <option value='startup'>Startup</option>
                <option value='remote resource'>Remote Resource</option>
                <option value='student'>Student</option>
                <option value='franchisee business'>Franchisee Business</option>
                <option value='marketing person'>Marketing Person</option>
                <option value='artist'>Artist</option>
                <option value='freelancer'>Freelancer</option>
                <option value='trainer'>Trainer</option>
                <option value='suspended seat'>To Secure a Suspended Seat</option>
                <option value='internship'>Internship</option>
              </select>
            </div>
            <div>
              <label htmlFor='Cdate'>Date</label>
              <input className='border-2 border-black' type='date' id='Cdate' name='Cdate' value={contact.Cdate} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor='day'>No. of Day Required</label>
              <div>
                <input type='radio' id='dayHours' value='Couple of Hours' name='day' onChange={handleChange} required />
                <label htmlFor='dayHours'>Couple of Hours</label>
              </div>
              <div>
                <input type='radio' id='day1' value='1 Day' name='day' onChange={handleChange} required />
                <label htmlFor='day1'>1 Day</label>
              </div>
              <div>
                <input type='radio' id='dayWeek' value='1 Week' name='day' onChange={handleChange} required />
                <label htmlFor='dayWeek'>1 Week</label>
              </div>
              <div>
                <input type='radio' id='dayMonth' value='1 Month' name='day' onChange={handleChange} required />
                <label htmlFor='dayMonth'>1 Month</label>
              </div>
              <div>
                <input type='radio' id='day2-3Month' value='2-3 Month' name='day' onChange={handleChange} required />
                <label htmlFor='day2-3Month'>2-3 Month</label>
              </div>
              <div>
                <input type='radio' id='day4-6Month' value='4-6 Month' name='day' onChange={handleChange} required />
                <label htmlFor='day4-6Month'>4-6 Month</label>
              </div>
              <div>
                <input type='radio' id='day6-12Month' value='6-12 Month' name='day' onChange={handleChange} required />
                <label htmlFor='day6-12Month'>6-12 Month</label>
              </div>
              <div>
                <input type='radio' id='dayOther' value='Other' name='day' onChange={handleChange} required />
                <label htmlFor='dayOther'>Other</label>
              </div>
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact