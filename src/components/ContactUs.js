import axios from 'axios';
import queryString from 'query-string';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const gForm = {
    "publicURL":"https://docs.google.com/forms/d/e/1FAIpQLScMWrxLwF0wp38iLipIT8cqAK-BZjqga9HT_lhEbPf1kV4X1A/formResponse",
    "formID": "1jhqFt0AhVv-PbM2WHkD2YZtU8-9J9y1BRh_JBmNdBnQ",
    "Name":"entry.1306165708",
    "Email":"entry.536178743",
    "Phone":"entry.1588272785",
    "Message":"entry.569256365"
}


export default class ContactUs extends React.Component{

    state = {
        open : false
    }

    handleOpen = e =>{
        this.setState({open : true})
    }

    handleClose = ()=>{
        this.setState({open : false})
    }


    myRequest = (url) => {
        let response;
        try {
          response = axios.post(url,null,null)
        } catch (e) {
          response = e;
        }
        console.log(response)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        const data = {
            ...this.state
        }
        e.preventDefault()
        const formUrl = gForm.publicURL;
        const q = queryString.stringifyUrl({
            url: formUrl,
            query: data
        })
        this.myRequest(q)
        e.target.reset();
        //window.location.reload(false)
        this.handleOpen()
    }

    render() { 
        return (
            <>
                <div className="pt-32 mx-6 sm:mx-24 md:mx-32 lg:mx-40 text-gray-100">
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Box className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white w-3/4 sm:w-1/2 lg:w-1/4'>
                        <div className='backdrop-blur-md bg-black/[0.5] p-4 px-6 rounded-lg text-center '>
                            <h2 className='font-medium text-lg md:text-xl mb-2'>Thank You</h2>
                            <p className='mb-2'>
                                Thank you for reaching out. We got your message and will respond as soon as we can. Have a nice day!
                            </p>
                            <Button className="font-bold" variant="text"  onClick={this.handleClose}>Close</Button>
                        </div>
                    </Box>
                </Modal>
                    <h1 className="text-2xl md:text-4xl font-medium mb-10 text-center">
                        Contact Us
                    </h1>
                    <div className='lg:flex bg-black/[.4] backdrop-blur-md rounded-xl p-8 mb-24 text-sm md:text-base'>
                        <form id="contactForm" className="lg:w-3/5" onSubmit={this.handleSubmit}
                            >
                            <div className="flex flex-wrap md:px-3">
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex block font-medium mb-2" for="grid-first-name">
                                        Name <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <input onChange={this.handleChange} name={gForm.Name} className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" type="text" placeholder="Enter your name" required/>
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex font-medium mb-2" for="grid-first-name">
                                        Email <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <input onChange={this.handleChange} name={gForm.Email} className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" type="email" placeholder="Enter your email address" required/>
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="md:flex w-full mb-4">
                                    <label className="md:w-2/5 items-center flex font-medium mb-2">
                                        Contact No. <span className='pl-1 text-red-500'>*</span>
                                    </label>
                                    <input onChange={this.handleChange} name={gForm.Phone} className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" type="text" placeholder="Enter your contact number" required/>
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="w-full mb-5">
                                    <label className="block font-medium mb-2 lg:mb-3">
                                        Message <span className='text-red-500'>*</span>
                                    </label>
                                    <textarea onChange={this.handleChange} name={gForm.Message} rows="4" className="block rounded w-full border border-gray-500/[.5] bg-black/[0.4] py-1 px-2" 
                                        id="grid-first-name" placeholder="Drop us a message :)" />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className='w-full mb-5 text-center lg:text-left lg:mb-0'>
                                    <input className="bg-green-600 hover:bg-green-800 font-medium px-4 py-2 rounded" type="submit" value="Submit"/>
                                </div>
                            </div>
                        </form>
                        <hr className="lg:hidden mx-auto border-gray-500 my-4" />
                        <div className='lg:w-2/5 md:mx-3 lg:ml-6'>
                            <iframe className='w-full rounded-lg mb-3' title="DA-IICT Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14669.989595290104!2d72.6289155!3d23.188537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1678437146026!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                            <div className='text-xs md:text-sm mb-5'>
                                Dhirubhai Ambani Institute Of Information And Communication Technology<br/>
                                Near Indroda Circle<br/>
                                Gandhinagar - 382007<br/>
                                Gujarat, India<br/>
                            </div>
                            <hr className="lg:hidden mx-auto border-gray-500 my-4" />
                            <div className="flex shrink items-center gap-4 mb-3 justify-center lg:justify-start">
                                <a href="https://www.instagram.com"><img className="h-7" src={process.env.PUBLIC_URL + "/images/github.png"} alt="Github"/></a>
                                <a href="https://www.instagram.com"><img className="h-7" src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt="LinkedIn"/></a>
                                <a href="https://www.instagram.com"><img className="h-6" src={process.env.PUBLIC_URL + "/images/yt.png"} alt="Youtube"/></a>
                                <a href="https://www.instagram.com"><img className="h-7" src={process.env.PUBLIC_URL + "/images/insta.png"} alt="Instagram"/></a>
                            </div>   
                            <div className='flex gap-2 mb-3 justify-center lg:justify-start'>
                                <a href="mailto: microsoftclub@daiict.ac.in" className="hover:text-cyan-400">
                                    microsoftclub@daiict.ac.in
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
            </>
        )
    }
}