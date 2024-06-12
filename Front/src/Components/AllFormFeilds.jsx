import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllFormFeilds = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        userdetail: '',
        profession: '',
        require: '',
        seats: '',
        time: '',
        day: '',
        phnum: '',
        expectation: '',
        date:'',
    });

    const [file,setFile] = useState(null);
    const [message,setMessage] = useState('')

    const handleChange = (e) =>{
        const {name,value} = e.target;
        console.log(`Updating ${name} with value ${value}`);
        setForm((prevForm) => ({
            ...prevForm,
            [name]:value
        }))
    }
    
    const handleFileChange = (e) =>{
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            // submit form data
            const formResponse = await axios.post('http://127.0.0.1:8000/api/TF1/',form)
            console.log(formResponse.data)

            // submit file if exists
            if(file){
                const fileData=new FormData()
                fileData.append('file',file)
                const fileResponse = await axios.post('http://127.0.0.1:8000/api/file/',fileData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                })
                console.log(fileResponse.data)
                setMessage('Form and File Submitted successfully')
                alert('form submited successfully')
            } else {
                setMessage('Form submitted successfullly')
            }
        } catch(error){
            console.error(error)
            alert('form have error')
            setMessage("error submitting form or uploading file")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='Form'>
                <div >
                    <label htmlFor='name'>Name</label>
                    <input className='border-2 border-black' type='text' id='name' name='name' value={form.name} onChange={handleChange} placeholder='Your answer' required />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input  className='border-2 border-black' type='email' id='email' name='email' value={form.email} onChange={handleChange} placeholder='Your answer' required />
                </div>

                <div>
                    <label htmlFor='userdetail'>Company or Startup or Business Entity or College Name</label>
                    <input  className='border-2 border-black' type='text' id='userdetail' name='userdetail' value={form.userdetail} onChange={handleChange} placeholder='Your answer' required />
                </div>

                <div>
                    <label htmlFor='date'>Date</label>
                    <input  className='border-2 border-black' type='date' id='date' name='date' value={form.date} onChange={handleChange}  required />
                </div>

                <div>
                    <label htmlFor='profession'>Profession</label>
                    <select id='profession' name='profession' value={form.profession} onChange={handleChange} required>
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
                    <label>Do you require community support in any way</label>
                    <div>
                        <input type='radio' id='requireYes' value='Yes' name='require' onChange={handleChange} required />
                        <label htmlFor='requireYes'>Yes</label>
                    </div>
                    <div>
                        <input type='radio' id='requireNo' value='No' name='require' onChange={handleChange} required />
                        <label htmlFor='requireNo'>No</label>
                    </div>
                </div>

                <div>
                    <label>No of Seats Required</label>
                    <div>
                        <input type='radio' id='seat1' value='1' name='seats' onChange={handleChange} required />
                        <label htmlFor='seat1'>1</label>
                    </div>
                    <div>
                        <input type='radio' id='seat2' value='2' name='seats' onChange={handleChange} required />
                        <label htmlFor='seat2'>2</label>
                    </div>
                    <div>
                        <input type='radio' id='seatMeetingHall' value='Meeting Hall' name='seats' onChange={handleChange} required />
                        <label htmlFor='seatMeetingHall'>Meeting Hall</label>
                    </div>
                    <div>
                        <input type='radio' id='seatOther' value='Other' name='seats' onChange={handleChange} required />
                        <label htmlFor='seatOther'>Other</label>
                    </div>
                </div>

                <div>
                    <label htmlFor='time'>Preferred Work Schedule</label>
                    <div>
                        <input type='radio' id='time8-5' value='8Am-5Pm' name='time' onChange={handleChange} required />
                        <label htmlFor='time8-5'>8Am-5Pm</label>
                    </div>
                    <div>
                        <input type='radio' id='time9-6' value='9Am-6Pm' name='time' onChange={handleChange} required />
                        <label htmlFor='time9-6'>9Am-6Pm</label>
                    </div>
                    <div>
                        <input type='radio' id='time10-7' value='10Am-7Pm' name='time' onChange={handleChange} required />
                        <label htmlFor='time10-7'>10Am-7Pm</label>
                    </div>
                    <div>
                        <input type='radio' id='time11-8' value='11Am-8Pm' name='time' onChange={handleChange} required />
                        <label htmlFor='time11-8'>11Am-8Pm</label>
                    </div>
                    <div>
                        <input type='radio' id='timeOther' value='Other' name='time' onChange={handleChange} required />
                        <label htmlFor='timeOther'>Other</label>
                    </div>
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

                <div>
                    <label htmlFor='expectation'>Expectation or If Have Any Suggestions or Please Fill Here!</label>
                    <input type='text' id='expectation' name='expectation' value={form.expectation} onChange={handleChange} placeholder='Your answer' required />
                </div>

                <div>
                    <label htmlFor='phnum'>Mobile Number</label>
                    <input type='text' id='phnum' name='phnum' value={form.phnum} onChange={handleChange} placeholder='Your answer' required />
                </div>

                <div>
                    <label htmlFor='file-upload'>Company/College Id(if Available) & Govt Id Proof with address Front & Back</label>
                    <div>
                        <label htmlFor='file-upload'>
                            <span>Upload a file</span>
                            <input id='file-upload' name='file-upload' type='file' onChange={handleFileChange} />
                        </label>
                    </div>
                </div>

                <div>
                    <p>{message}</p>
                </div>
                <div className='flex justify-between'>
                    <button type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default AllFormFeilds