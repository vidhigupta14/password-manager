import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([]);

    useEffect(() => {
        let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
        setpasswordArray(passwords);
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value })
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
        console.log([...passwordArray, form]);
        setform({ site: "", username: "", password: "" })
    }

    const deletePassword = (id) => {
        console.log("Deleted: ", id);
        setpasswordArray(passwordArray.filter(item => item.id !== id));
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
    }

    const showPassword = () => {
        // alert("show password")
        const passwordInput = document.getElementById("pw");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }

    const editPassword = (id) => {
        const item = passwordArray.find(item => item.id === id);
        setform({ site: item.site, username: item.username, password: item.password });
        deletePassword(id);
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast('Copied to clipboard!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }).catch(err => {
            alert("Failed to copy text: ", err);
        });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-125 w-125 -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
            </div>

            <div className='w-2/3 m-auto mt-12 flex flex-col gap-1'>
                <input value={form.site} onChange={handleChange} type="text" name='site' id='site' placeholder='Website URL' className='p-2 w-full rounded-md border-[rgba(173,109,244,0.5)] border-2' />
                <div className='flex gap-1'>
                    <input value={form.username} onChange={handleChange} type="text" name='username' id='username' placeholder='Username' className='p-2 w-1/2 rounded-md border-[rgba(173,109,244,0.5)] border-2' />
                    <div className='relative w-1/2'>
                        <input value={form.password} type="password" onChange={handleChange} name='password' id='pw' placeholder='Password' className='p-2 w-full rounded-md border-[rgba(173,109,244,0.5)] border-2 pr-12' />
                        <lord-icon
                            onClick={showPassword}
                            src="https://cdn.lordicon.com/dicvhxpz.json"
                            trigger="morph"
                            stroke="bold"
                            state="morph-cross"
                            colors="primary:#c69cf4,secondary:#c69cf4"
                            className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'>
                        </lord-icon>
                    </div>
                </div>
                <button onClick={savePassword} className='bg-[rgba(173,109,244)] p-3 rounded-md text-white font-bold hover:bg-[#8e4ed7] flex items-center justify-center gap-2'>
                    Save
                    {/* <lord-icon
                        src="https://cdn.lordicon.com/rnbuzxxk.json"
                        trigger="hover"
                        stroke="bold"
                        state="in-reveal"
                        colors="primary:#c69cf4,secondary:#ffffff"
                        style={{ width: "24px", height: "24px" }}>
                    </lord-icon> */}
                    <lord-icon
                        src="https://cdn.lordicon.com/fsstjlds.json"
                        trigger="hover"
                        stroke="bold"
                        state="in-reveal"
                        colors="primary:#ffffff"
                        style={{ width: "24px", height: "24px" }}>
                    </lord-icon>
                </button>
            </div>
            <div className="passwords w-2/3 m-auto mt-12">
                <h2 className='font-bold text-[#9159d1] text-2xl'>Your Saved Passwords</h2>
                {passwordArray.length === 0 && <p className='mt-4 text-gray-500'>No passwords saved yet.</p>}
                {passwordArray.length > 0 &&
                    <table className="table-auto w-full m-auto border border-[rgba(173,109,244,0.5)] rounded-md overflow-hidden">
                        <thead className='bg-[#9159d1] text-white font-bold w-full'>
                            <tr>
                                <th className='py-2'>Website URL</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordArray.map((item, index) => (
                                <tr key={index} className='border-t border-[rgba(173,109,244,0.5)]'>
                                    <td className='text-center min-w-28 py-3'>
                                        <a href={item.site} target="_blank" rel="noopener noreferrer" className='text-[#9159d1] hover:text-[#8747cf] underline'>{item.site}</a>
                                    </td>
                                    <td className='text-center min-w-28 py-3'>
                                        <div className='flex items-center gap-2 justify-center'>
                                            {item.username}
                                            <lord-icon
                                                onClick={() => { copyText(item.username) }}
                                                className='cursor-pointer'
                                                src="https://cdn.lordicon.com/hmqxevgf.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#a866ee,secondary:#c69cf4"
                                                alt="copy-username"
                                                style={{ width: "16px", height: "16px", marginLeft: "8px", cursor: "pointer" }}>
                                            </lord-icon>
                                        </div>
                                    </td>
                                    <td className='text-center min-w-28 py-3'>
                                        <div className='flex items-center gap-2 justify-center'>
                                            {item.password}
                                            <lord-icon
                                                onClick={() => { copyText(item.password) }}
                                                className='cursor-pointer'
                                                src="https://cdn.lordicon.com/hmqxevgf.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#a866ee,secondary:#c69cf4"
                                                alt="copy-username"
                                                style={{ width: "16px", height: "16px", marginLeft: "8px", cursor: "pointer" }}>
                                            </lord-icon>
                                        </div>
                                    </td>
                                    <td className='text-center min-w-28 py-3 flex items-center justify-center gap-3'>
                                        {/* Edit */}
                                        <lord-icon
                                            onClick={() => editPassword(item.id)}
                                            className='cursor-pointer'
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            stroke="bold"
                                            state="hover-line"
                                            colors="primary:#a866ee,secondary:#c69cf4"
                                            alt="edit"
                                            style={{ width: "32px", height: "32px", cursor: "pointer" }}>
                                        </lord-icon>
                                        {/* Delete */}
                                        <lord-icon
                                            onClick={() => deletePassword(item.id)}
                                            className='cursor-pointer'
                                            src="https://cdn.lordicon.com/jzinekkv.json"
                                            trigger="hover"
                                            stroke="bold"
                                            colors="primary:#a866ee,secondary:#c69cf4"
                                            alt="delete"
                                            style={{ width: "28px", height: "28px", cursor: "pointer" }}>
                                        </lord-icon>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default Manager