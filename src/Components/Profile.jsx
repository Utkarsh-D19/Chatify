import { ArrowLeft, CheckIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom';

function Profile(props) {
    const navigate=useNavigate();
    const { userData, logout, updateName,updateStatus } = useAuth();
    const [name, setName] = useState(userData?.name||"");
    const [status, setStatus] = useState(userData?.status||"");
    const handleLogout = () => {
        logout();
        navigate("/login");
       
    }

    return (
        <div className='bg-white w-[30vw]'>
            <div className="bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6">
                <button onClick={props.onBack}>
                    <ArrowLeft />
                </button>
                <div> Profile</div>
            </div>
            <div className="bg-gray-100">
                <img src={userData.profile_pic} alt="" className="rounded-full h-10 w-10 " />
                {/* ... other user data */}
                <div className="flex flex-col bg-white w-full py-4 px-8">
                    <label className="text-sm text-primary-dense mb-2">Your name</label>
                    <div className="flex items-center w-full">
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="w-full bg-transparent"
                        />
                        <button onClick={() => updateName(name)}>
                            <CheckIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col bg-white  w-full py-4 px-8">
                    <label className="text-sm text-primary-dense mb-2">Status</label>
                    <div className="flex items-center w-full">
                        <input
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                            }}
                            placeholder="Update your status..."
                            className="w-full bg-transparent"
                        />
                        <button onClick={() => updateStatus(status)}>
                            <CheckIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <button
                    className="mt-8 px-4 py-3 rounded bg-primary hover:bg-primary-dense text-white"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
export default Profile