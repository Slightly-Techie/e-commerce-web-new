import React from 'react'

type Props = {}
type userDetailsProps = {
    title: string,
    details: boolean
}

const userDetails: userDetailsProps[] = [
    {
        title: "Profile",
        details: true
    },
    {
        title: "Name",
        details: false
    },
    {
        title: "Points",
        details: false
    }
]

export default function St_member_checkout({ }: Props) {
    return (
        <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='border-black border-[1px] px-5 py-9 rounded-full'>
                loading
            </div>
            <h1 className='font-bold text-2xl text-center'>Setting up account</h1>
            <p className='text-gray-400 text-center'>Importing your details from CRM. This may take a few minutes...</p>
            <div className='w-[300px] border-black border-[1px] rounded px-5 py-6'>

                {userDetails.map((user, index) => (
                    <div key={index} className='flex justify-between py-2 border-b '>
                        <h1 className='font-semibold'>{user.title}</h1>
                        <p className={user.details ? 'text-blue-500' : 'text-gray-500'}>
                            {user.details ? "Loaded" : "Loading..."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
