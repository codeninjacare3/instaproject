import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function SuggestedUsers() {
    const { suggestedUsers } = useSelector(store => store.auth);
    return (
        <div className='my-10'>
            <div className='flex items-center justify-between text-sm' >
                <h2 className='font-semibold text-gray-600'>Suggested for you</h2>
                <span className='font-medium cursor-pointer'>See All</span>
            </div>
            {Array.isArray(suggestedUsers) && suggestedUsers.length > 0 ? (
                suggestedUsers.map((user) => (
                    <div key={user._id} className='flex items-center justify-between my-5'>
                        <div className='flex items-center gap-2'>
                            <Link to={`/profile/${user?._id}`}>
                                <Avatar>
                                    <AvatarImage src={user?.profilePicture} alt="post-image" className="object-cover" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Link>
                            <div>
                                <h2 className='font-semibold text-sm'>
                                    <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
                                </h2>
                                <span className='text-gray-600 text-sm'>{user?.bio || 'Bio here...'}</span>
                            </div>
                        </div>
                        <span className='text-xs text-[#3badf8] font-bold cursor-pointer hover:text-[#3495d6]'>Follow</span>
                    </div>
                ))
            ) : (
                <p className='text-sm text-gray-500'>No suggested users available.</p>
            )}
        </div>
    )
}

export default SuggestedUsers