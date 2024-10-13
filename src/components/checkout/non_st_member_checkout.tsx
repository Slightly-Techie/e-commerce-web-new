import React, { useState } from 'react';

type Props = {}

export default function Non_st_member_checkout({ }: Props) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: ""
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('First Name:', form.firstName);
        console.log('Last Name:', form.lastName);
        console.log('Phone Number:', form.phoneNumber);
    }

    return (
        <div className='flex flex-col justify-center items-center space-y-4'>
            <div>
                <h1 className='font-bold text-2xl text-left'>Personal Information</h1>
                <p className='text-gray-400 text-center'>Enter your name and phone number to set up your account</p>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                    <div className='w-full border-black border-[1px]   rounded px-5 py-6 mt-5'>
                        <div>
                            <label htmlFor="firstName" className='block text-gray-700 font-semibold'>First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={form.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter your first name"
                                className='w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className='block text-gray-700 font-semibold'>Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={form.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter your last name"
                                className='w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className='block text-gray-700 font-semibold'>Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={form.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className='w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className='bg-black text-white py-2 rounded w-[150px]'
                    >
                        Save and Continue
                    </button>
                </form>
            </div>
        </div>
    )
}
