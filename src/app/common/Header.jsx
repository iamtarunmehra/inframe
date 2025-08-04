"use client";
import Link from "next/link";
import { IoMdLock, IoMdSearch } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaAngleDown, FaChevronDown, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Swal from "sweetalert2";
import { logoutUser } from "../slice/loginSlice";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import LoginForm, { RegisterForm } from "../homeComponents/LoginForm";


export default function Header() {
    let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL



    let dispatch = useDispatch()
    let router = useRouter()
    const [updatedUsername, setUpdatedUsername] = useState('')
    const [currentPage, setCurrentPage] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [currentTabEdit, setCurrentTabEdit] = useState('')
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("all");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [applyNow, setApplyNow] = useState(false);
    const [editModel, setEditModel] = useState(false)
    const token = useSelector((store) => store.loginStore.token)
    let userEmail = useSelector((store) => store.loginStore.user?.userEmail) ?? ''
    const [userName, setUserName] = useState('')
    let tabs = [
        { name: "all" },
        { name: "art" },
        { name: "design" },
        { name: "business" },
    ];

    let courseData = useSelector((store) => store.courseStore.courseData);
    let designData = courseData.filter((item) => item.category === "design");
    let businessData = courseData.filter((item) => item.category === "business");
    let artData = courseData.filter((item) => item.category === "art");

    useEffect(() => {
        axios.post(`${apiBaseUrl}/user/fetch-userName`, { userEmail })
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    setUserName(finalRes.userName)
                }
            })
    }, [])

    const logout = () => {
        Swal.fire({
            title: 'Do you really want to logout ?',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            iconColor: '#332A2A',
            background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
            confirmButtonColor: '#332A2A',
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(logoutUser())
                Swal.fire({
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    icon: 'success',
                    iconColor: '#332A2A',
                    background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                    confirmButtonColor: '#332A2A',
                    timer: 1000,
                }).then((res) => {
                    window.location.href = '/';
                })
            }
        })
    }

    const changePassword = (event) => {
        event.preventDefault();
        let obj = {
            currentPassword, newPassword
        }
        if (currentPassword === newPassword) {
            Swal.fire({
                title: 'Enter Another Password',
                text: 'Your Old and New Password must be Different !',
                icon: 'warning',
                iconColor: '#332A2A',
                background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                confirmButtonColor: '#332A2A',
                timer: 2000,
            })
        }
        else {
            if (newPassword == confirmPassword) {
                axios.post(`${apiBaseUrl}/user/change-password`, obj, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((res) => res.data)
                    .then((finalRes) => {
                        if (finalRes.status == 1) {
                            Swal.fire({
                                title: 'Passwrod changed successfully',
                                text: 'password has been changed',
                                icon: 'success',
                                iconColor: '#332A2A',
                                background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                                confirmButtonColor: '#332A2A',
                                timer: 2000,
                            }).then((res) => {
                                window.location.reload();
                            })
                        }
                        else {
                            Swal.fire({
                                title: 'Invalid Passwrod',
                                text: 'you have entered Invalid Password',
                                icon: 'warning',
                                iconColor: '#332A2A',
                                background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                                confirmButtonColor: '#332A2A',
                                timer: 2000,
                            })
                        }
                    })
            }
            else {
                Swal.fire({
                    title: 'Password not Matched',
                    text: 'New password and Confirm password must be the same',
                    icon: 'error',
                    iconColor: '#332A2A',
                    background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                    confirmButtonColor: '#332A2A',
                    timer: 2000,
                })
            }
        }
    }


    const changeUserName = (event) => {
        event.preventDefault();
        let obj = {
            updatedUsername, userEmail
        }
        axios.post(`${apiBaseUrl}/user/change-username`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    Swal.fire({
                        title: 'Username Changed Successfully',
                        icon: 'success',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    }).then((res) => {
                        window.location.reload();
                    })
                }
                else {
                    Swal.fire({
                        title: 'Failed to Change Username',
                        icon: 'error',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
            })
    }

    return (
        <header className="sticky top-0 z-50">
            {currentPage === 'login' && <LoginForm currentPage={currentPage} setCurrentPage={setCurrentPage} setMobileMenuOpen={setMobileMenuOpen} />}
            {currentPage === 'register' && <RegisterForm currentPage={currentPage} setCurrentPage={setCurrentPage} />}


            {/* mega menu functionality*/}
            {/* menu page */}
            <div
                style={{ background: 'linear-gradient(184deg,rgba(255, 238, 107, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 238, 107, 1) 100%) ' }}
                className={`${megaMenuOpen
                    ? "visible opacity-[1] top-[100%]"
                    : "invisible opacity-0 top-[-100%]"
                    } duration-300 w-[100%] bg-[linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)] lg:h-[100vh] h-[100vh] overflow-y-scroll rounded-md absolute left-0 z-50 p-3 `}
            >
                <div className="max-w-7xl mx-auto my-[10px]">
                    <div className="relative w-full my-[10px]">
                        <IoMdSearch className="absolute left-3 mb-2 top-[22px] -translate-y-1/2 text-gray-500 text-xl" />
                        <input
                            required
                            type="text"
                            placeholder="Search Courses...."
                            className="w-full focus:outline-gray-900 border-[1] border-gray-800  pl-10 p-[5px]r-[10px] py-[10px] mb-3 rounded"
                        />
                    </div>

                    <div className="flex lg:gap-[15px] gap-[5px] relative z-10">
                        {tabs.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(item.name)}
                                    className={`${activeTab === item.name
                                        ? "bg-gray-800 text-white"
                                        : "bg-white hover:bg-gray-200 hover:text-gray-900"
                                        } z-20 text-gray-900  duration-100 lg:text-[16px] px-3 capitalize cursor-pointer py-[5px] rounded mt- mb-5 ro-[5px]unded`}
                                >
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 lg:pb-25 pb-15 ">
                        {/* design tab */}
                        <div
                            className={`${activeTab === "all" || activeTab === "design"
                                ? "block"
                                : "hidden"
                                }`}
                        >
                            <h2 className="uppercase rounded-[5px] py-[10px] ps-2 font-semibold lg:text-[30px] text-[22px] text-gray-800 ">
                                Design
                            </h2>
                            {designData.length >= 1
                                ? designData.map((item, index) => {
                                    let { points } = item;
                                    return (
                                        <div
                                            style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                                            key={index}
                                            className="w-[100%]  rounded-[15px]  p-3 lg:mb-[30px] my-5 grid lg:grid-cols-[35%_auto] grid- gap-5"
                                        >
                                            <img
                                                className="lg:w-[130px] w-[100%] rounded-[10px] h-[130px] object-cover"
                                                src={item.src}
                                                alt=""
                                            />
                                            <div>
                                                <h3 className="text-gray-900  text-[18px]">
                                                    {item.name}
                                                </h3>
                                                <ul>
                                                    {points.map((item, ind) => {
                                                        return (
                                                            <li
                                                                key={ind}
                                                                className="flex items-center gap-3 text-[14px]"
                                                            >
                                                                {item.key}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                <Link
                                                    href={`/courses/${item.name
                                                        .toLowerCase()
                                                        .replace(/[\s\/]+/g, "-")}`}
                                                >
                                                    <button onClick={() => setMegaMenuOpen(false)} className="px-3 my-[10px] lg:mt-3 flex justify-center items-center gap-2 py-[5px] hover:bg-orange-500 duration-300 hover:text-white rounded-[5px] cursor-pointer bg-white ">
                                                        Explore Now <FaLongArrowAltRight />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                                : ""}
                        </div>

                        {/* business tab */}
                        <div
                            className={`${activeTab === "all" || activeTab === "business"
                                ? "block"
                                : "hidden"
                                }`}
                        >
                            <h2 className="uppercase rounded-[5px] py-[10px] ps-2 font-semibold lg:text-[30px] text-[22px] text-gray-800 ">Business
                            </h2>
                            {businessData.length >= 1
                                ? businessData.map((item, index) => {
                                    let { points } = item;
                                    return (
                                        <div
                                            style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                                            key={index}
                                            className="w-[100%]  rounded-[15px]  p-3 lg:mb-[30px] my-5 grid lg:grid-cols-[35%_auto] grid- gap-5"
                                        >
                                            <img
                                                className="lg:w-[130px] w-[100%] rounded-[10px] h-[130px] object-cover"
                                                src={item.src}
                                                alt=""
                                            />
                                            <div>
                                                <h3 className="text-gray-900 text-[18px]">
                                                    {item.name}
                                                </h3>
                                                <ul>
                                                    {points.map((item, ind) => {
                                                        return (
                                                            <li
                                                                key={ind}
                                                                className="flex items-center gap-3 text-[14px]"
                                                            >
                                                                {item.key}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                <Link
                                                    href={`/courses/${item.name
                                                        .toLowerCase()
                                                        .replace(/[\s\/]+/g, "-")}`}
                                                >
                                                    <button onClick={() => setMegaMenuOpen(false)} className="px-3 my-[10px] lg:mt-3 flex justify-center items-center gap-2 py-[5px] hover:bg-orange-500 duration-300 hover:text-white rounded-[5px] cursor-pointer bg-white ">
                                                        Explore Now <FaLongArrowAltRight />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                                : ""}
                        </div>

                        {/* art tab */}
                        <div
                            className={`${activeTab === "all" || activeTab === "art" ? "block" : "hidden"
                                }`}
                        >
                            <h2 className="uppercase rounded-[5px] py-[10px] ps-2 font-semibold lg:text-[30px] text-[22px] text-gray-800 ">                                Art
                            </h2>
                            {artData.length >= 1
                                ? artData.map((item, index) => {
                                    let { points } = item;
                                    return (
                                        <div
                                            style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                                            key={index}
                                            className="w-[100%]  rounded-[15px]  p-3 lg:mb-[30px] my-5 grid lg:grid-cols-[35%_auto] grid- gap-5"
                                        >
                                            <img
                                                className="lg:w-[130px] w-[100%] rounded-[10px] h-[130px] object-cover"
                                                src={item.src}
                                                alt=""
                                            />
                                            <div>
                                                <h3 className="text-gray-900 text-[18px]">
                                                    {item.name}
                                                </h3>
                                                <ul>
                                                    {points.map((item, ind) => {
                                                        return (
                                                            <li
                                                                key={ind}
                                                                className="flex items-center gap-3 text-[14px]"
                                                            >
                                                                {item.key}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                <Link
                                                    href={`/courses/${item.name
                                                        .toLowerCase()
                                                        .replace(/[\s\/]+/g, "-")}`}
                                                >
                                                    <button onClick={() => setMegaMenuOpen(false)} className="px-3 my-[10px] lg:mt-3 flex justify-center items-center gap-2 py-[5px] hover:bg-orange-500 duration-300 hover:text-white rounded-[5px] cursor-pointer bg-white ">
                                                        Explore Now <FaLongArrowAltRight />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                                : ""}
                        </div>
                    </div>
                </div>
            </div>

            {/* overlay when menu open*/}
            {(megaMenuOpen || currentPage || currentTabEdit || editModel || applyNow) && (
                <div className="fixed top-0 left-0 z-[-10] w-[100%] h-[100vh] bg-[rgba(0,0,0,0.9)]"></div>
            )}

            {/* header for pc */}
            <div className="lg:block hidden w-[100%] px-0 relative py-[15px] bg-black/95">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-[20px]">
                        <img
                            className="w-[150px]"
                            src="https://www.inframeschool.com/_next/image?url=%2Fpixelcut-export-negate.png&w=384&q=75"
                            alt=""
                        />
                        <div className="flex gap-[25px] items-center ">
                            <button
                                onClick={() => {
                                    setMegaMenuOpen(!megaMenuOpen)
                                    setApplyNow(false)
                                }}
                                className={`px-[15px] cursor-pointer flex items-center gap-[4px] font-bold rounded-md py-[7px] ${megaMenuOpen ? " bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400" : "bg-amber-300"
                                    } group hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 duration-300 transition-all ease-in-out`}
                            >
                                Study
                                <FaChevronDown
                                    className={`${megaMenuOpen ? "rotate-180" : "rotate-0"
                                        } text-[14px] duration-300`}
                                />
                            </button>
                            <Link
                                className="text-white hover:text-amber-300 font-bold text-[17px]"
                                href={""}
                            >
                                About
                            </Link>
                            {/* <Link className='text-white hover:text-amber-300 font-bold text-[17px]' href={''}>Life @ Inframe</Link> */}
                        </div>
                    </div>
                    <form className="flex items-center ">
                        <input
                            required
                            placeholder="Search By Name..."
                            type="text"
                            className="lg:w-[350px] w-[200px] outline-none rounded-l-md border-l-[1px] border-t-[1px] border-b-[1px] text-white py-[8px] border-white px-2"
                        />
                        <button
                            style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                            type="submit"
                            className="py-[10px] px-[10px] cursor-pointer rounded-r-md text-[22px]"
                        >
                            <IoMdSearch />
                        </button>
                    </form>
                    <div className="flex gap-5">
                        <button className="text-white text-[18px] hover:text-gray-300 duration-300 px-3 py-[3px] cursor-pointer">
                            Contact Us
                        </button>
                        <button
                            style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                            onClick={() => {
                                setApplyNow(true)
                                setMegaMenuOpen(false)
                                setEditModel(false)
                            }}
                            className="px-[20px] font-semibold text-gray-900 rounded-md py-[7px] duration-500 ml-0  cursor-pointer"
                        >
                            Apply Now
                        </button>

                        {token ?
                            <button
                                className="px-[10px] z-40 rounded-md py-[7px] duration-500 border-2 border-amber-400 hover:border-transparent  text-amber-400 ml-0 font-bold hover:bg-orange-400 hover:text-white relative group cursor-pointer flex items-center gap-1 "
                            >
                                My Account <FaAngleDown />

                                <div className="absolute invisible opacity-[0] group-hover:visible group-hover:opacity-[1] shadow-md duration-300 rounded-[5px] top-[125%] z-[100] left-[0px] w-[230px] h-[auto] bg-white  border-2 border-amber-300 shadow-amber-300">
                                    <ul className="bg-gray-100 ">
                                        <li className="text-start cursor-default py-[15px] px-[10px] bg-gray-50 text-gray-900 flex items-center gap-2">
                                            <div className="flex  items-center gap-1"><FaUser /> {userName}</div>
                                        </li>
                                        <li onClick={() => {
                                            setEditModel(true)
                                            setApplyNow(false)
                                        }} className="text-start hover:bg-orange-400 hover:text-white duration-300 py-[15px] px-[10px] bg-gray-50 text-gray-900 flex items-center gap-1"><FaEdit /> Edit
                                        </li>
                                        <li onClick={logout} className="text-start hover:bg-orange-400 hover:text-white duration-300 py-[15px] px-[10px] bg-gray-50 text-gray-900 flex items-center gap-1"><LuLogOut /> Logout</li>
                                    </ul>
                                </div>
                            </button>
                            :

                            <button
                                onClick={() => setCurrentPage('login')}
                                className="px-[20px] rounded-md py-[7px] duration-500 border-[2px]  border-amber-400 text-amber-400  hover:border-transparent hover:text-white ml-0 font-bold hover:bg-orange-400  cursor-pointer"
                            >
                                Login / Sign up
                            </button>
                        }
                    </div>
                </div>

                {/* model for edit something of user */}
                {editModel && <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[400px] rounded-[10px] h-[220px] ">
                    <h4 className=" flex justify-between px-3 py-5 text-gray-800 font-semibold text-[25px]">What you want to change
                        <span onClick={() => setEditModel(false)} className="text-[28px] cursor-pointer hover:text-gray-900 duration-300">&times;</span>
                    </h4>
                    <div className="flex flex-col gap-5 justify-center px-5">
                        <button onClick={() => setCurrentTabEdit('changeUsername')} className="bg-white cursor-pointer hover:bg-orange-500 hover:text-white py-[10px] duration-300 rounded-[10px]">Change Username</button>
                        <button onClick={() => setCurrentTabEdit('changePassword')} className="hover:bg-orange-500 cursor-pointer bg-white  hover:text-white py-[10px] duration-300 rounded-[10px]">Change Password</button>
                    </div>
                </div>}

                {/* for changeUserName */}
                {currentTabEdit === 'changeUsername' &&
                    <form style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} onSubmit={changeUserName} className="fixed top-1/2 h-[auto] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[400px] rounded-[10px] py-[30px] px-5 ">
                        <h4 className=" flex justify-between py-0 text-gray-800 font-semibold text-[25px]">Change Username
                            <span onClick={() => {
                                setCurrentTabEdit(false)
                                setEditModel(false)
                            }} className="text-[28px] cursor-pointer hover:text-gray-900 duration-300">&times;</span>
                        </h4>
                        <div className="my-[10px]">
                            <p className="text-[15px]">Enter new Username</p>
                            <input required onChange={(e) => setUpdatedUsername(e.target.value)} type="text" className="w-[100%] px-[5px] py-[7px] border-[1px] text-[20px] rounded-[10px] border-gray-500" />
                        </div>
                        <button type="submit" className="my-[10px] rounded-[10px] hover:text-white cursor-pointer text-center bg-white text-gray-900 duration-300 font-semibold text-[16px] hover:bg-orange-500 w-[100%] py-[10px]">Change</button>
                    </form>
                }

                {/* for changePassword */}
                {currentTabEdit === 'changePassword' &&
                    <form style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} onSubmit={changePassword} className="fixed top-1/2 h-[auto] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[400px] rounded-[10px] py-[30px] px-5 ">
                        <h4 className=" flex justify-between py-0 text-gray-800 font-semibold text-[25px]">Change Password
                            <span onClick={() => {
                                setCurrentTabEdit(false)
                                setEditModel(false)
                            }} className="text-[28px] cursor-pointer hover:text-gray-900 duration-300">&times;</span>
                        </h4>
                        <p className="text-gray-800">Your password must be atleast 6 character</p>
                        <div className="my-[10px]">
                            <p className="text-[15px]">Current Password</p>
                            <input required onChange={(e) => setCurrentPassword(e.target.value)} type="password" className="w-[100%] px-[5px] py-[7px] border-[1px] text-[20px] rounded-[10px] border-gray-500" />
                        </div>
                        <div className="my-[10px]">
                            <p className="text-[15px]">New Password</p>
                            <input required onChange={(e) => setNewPassword(e.target.value)} type="password" className="w-[100%] px-[5px] py-[7px] border-[1px] text-[20px] rounded-[10px] border-gray-500" />
                        </div>
                        <div className="my-[10px]">
                            <p className="text-[15px]">Retype new password</p>
                            <input required onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" type="password" className="w-[100%] px-[5px] py-[7px] border-[1px] text-[20px] rounded-[10px] border-gray-500" />
                        </div>
                        <button type="submit" className="my-[10px] rounded-[10px] hover:text-white cursor-pointer text-center bg-white text-gray-900 duration-300 font-semibold text-[16px] hover:bg-orange-500 w-[100%] py-[10px]">Change Password</button>
                    </form>
                }





                {/* apply now form for pc */}
                <div

                    className={`${applyNow
                        ? "top-[110px] right-[2%] "
                        : "top-[-100%] left-[100%] "
                        } fixed  w-[90%] max-w-md p-6 z-50 bg-gradient-to-br from-amber-300 via-yellow-100 to-yellow-300 rounded-[50px] shadow-[0_10px_25px_rgba(0,0,0,0.15)]  transition-all duration-500 ease-in-out`}
                >
                    {/* Header */}
                    <div className="relative mb-6">
                        <h3 className="text-2xl font-semibold text-center text-gray-800">
                            Fill the form to apply
                        </h3>
                        <button
                            onClick={() => setApplyNow(false)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 text-2xl transition"
                        >
                            <IoMdClose />
                        </button>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <input
                            required
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 border-[1px] border-gray-700 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-amber-400 "
                        />
                        <input
                            required
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border-[1px] border-gray-700 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-amber-400 "
                        />
                        <input
                            required
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 border-[1px] border-gray-700 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-amber-400 "
                        />

                        {/* Select Inputs */}
                        <div className="grid grid-cols-1 gap-4">
                            <select className="w-full px-4 py-3 border rounded-[20px] border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                <option value="">Select State</option>
                                <option>Rajasthan</option>
                                <option>Haryana</option>
                                <option>Punjab</option>
                                <option>Assam</option>
                            </select>
                            <select className="w-full px-4 py-3 border rounded-[20px] border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                <option value="">Select City</option>
                                <option>Jodhpur</option>
                                <option>Jaipur</option>
                                <option>Ajmer</option>
                                <option>Udaipur</option>
                            </select>
                            <select className="w-full px-4 py-3 border rounded-[20px] border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                <option value="">Select Level</option>
                                <option>B.Des</option>
                                <option>B.Voc</option>
                                <option>BBA</option>
                                <option>BFA</option>
                                <option>3 Year Diploma</option>
                                <option>1 Year Diploma</option>
                                <option>6 Months Certificate</option>
                            </select>
                            <select className="w-full px-4 py-3 border rounded-[20px] border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                <option value="">Select Program</option>
                                <option>B.Des</option>
                                <option>B.Voc</option>
                                <option>BBA</option>
                                <option>BFA</option>
                                <option>3 Year Diploma</option>
                                <option>1 Year Diploma</option>
                                <option>6 Months Certificate</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full hover:bg-orange-500 bg-orange-400 text-white   font-semibold py-3 rounded-[25px] shadow-2xl duration-300 transition-all ease-in-out "
                        >
                            Apply Now
                        </button>

                    </form>
                </div>
            </div>

            {/* header for mobile and small devices */}
            <div className="lg:hidden block relative w-[100%] py-[15px] bg-black">
                <div className="flex items-center px-5 justify-between">
                    <div className="flex gap-5 items-center">
                        <img
                            className="w-[120px]"
                            src="https://www.inframeschool.com/_next/image?url=%2Fpixelcut-export-negate.png&w=384&q=75"
                            alt=""
                        />
                        <button
                            onClick={() => {
                                setMegaMenuOpen(!megaMenuOpen)
                                setApplyNow(false)
                            }}
                            className={`px-[15px] cursor-pointer flex items-center gap-[4px] font-bold rounded-md py-[7px] ${megaMenuOpen ? " bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400" : "bg-amber-300"
                                } group hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 duration-300 transition-all ease-in-out`}
                        >
                            Study
                            <FaChevronDown
                                className={`${megaMenuOpen ? "rotate-180" : "rotate-0"
                                    } text-[14px] duration-300`}
                            />
                        </button>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-white text-[32px]"
                    >
                        <HiOutlineBars3BottomRight />
                    </button>
                </div>
            </div>

            <div
                className={`${mobileMenuOpen ? "left-0 opacity-[1]" : "-left-[100%] opacity-0"
                    } duration-300 fixed top-0 w-[100%] h-[100vh] bg-black/95 `}>
                <div className="flex justify-between px-5 py-5">

                    <img
                        className="w-[180px]"
                        src="https://www.inframeschool.com/_next/image?url=%2Fpixelcut-export-negate.png&w=384&q=75"
                        alt=""
                    />
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setApplyNow(false);
                        }}
                        className="text-white text-[35px]"
                    >
                        <IoMdArrowDroprightCircle />
                    </button>
                </div>
                <ul className="px-6 py-1">
                    <Link href={"/"}>
                        <li
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white mb-[30px] text-[23px] uppercase font-semibold"
                        >
                            Home
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white mb-[30px] text-[23px] uppercase font-semibold"
                        >
                            About us
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white mb-[30px] text-[23px] uppercase font-semibold"
                        >
                            Life@inframe
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white mb-[30px] text-[23px] uppercase font-semibold"
                        >
                            Contact us
                        </li>
                    </Link>
                    {token ?
                        <Link href={"/"}>
                            <li

                                className="text-white mb-[30px] text-[23px] uppercase font-semibold"
                            >
                                My Account
                            </li>
                        </Link>
                        :
                        <Link href={"/"}>
                            <li
                                onClick={() => setCurrentPage('login')}
                                className="text-white mb-[30px] text-[23px] uppercase font-semibold"
                            >
                                Login
                            </li>
                        </Link>
                    }

                    <Link href={"/"}>
                        <li
                            style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                            onClick={() => {
                                setApplyNow(true)
                                setEditModel(false)
                            }}
                            className="text-black mb-[30px] text-[20px] uppercase font-semibold w-[150px] px-[10px] py-[5px] rounded"
                        >
                            Apply now
                        </li>
                    </Link>
                </ul>
            </div>

            {/* apply now form for mobile */}
            <div
                style={{ background: 'linear-gradient(154deg,rgba(247, 255, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                className={`${applyNow
                    ? "bottom-0 opacity-[1]"
                    : "bottom-[-100%] opacity-0"
                    } duration-500 lg:hidden block w-[100%] h-[100vh]  fixed left-1/2 -translate-x-1/2 bg-white px-8 py-18`}
            >
                <div className="relative mb-2">
                    <h3 className="text-[25px] font-semibold text-gray-900 uppercase">
                        Fill the form
                    </h3>
                    <span
                        onClick={() => setApplyNow(false)}
                        className="text-[25px] absolute top-1/2 -translate-y-1/2 right-1"
                    >
                        <IoMdClose />
                    </span>
                </div>
                <form action="">
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        className="w-[100%] px-[5px] py-[10px] my-[10px] border-[2px] border-gray-500 rounded-[10px]"
                    />
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        className="w-[100%] px-[5px] py-[10px] my-[10px] border-[2px] border-gray-500 rounded-[10px]"
                    />
                    <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-[100%] px-[5px] py-[10px] my-[10px] border-[2px] border-gray-500 rounded-[10px]"
                    />
                    <select
                        className="w-[100%] border-[2px] border-gray-500 rounded-[10px] px-[5px] py-[10px] my-[10px] text-gray-700"
                        name=""
                        id=""
                    >
                        <option value="">Select State</option>
                        <option value="">Rajasthan</option>
                        <option value="">Hariyana</option>
                        <option value="">Punjab</option>
                        <option value="">Asam</option>
                    </select>
                    <select
                        className="w-[100%] border-[2px] border-gray-500 rounded-[10px] px-[5px] py-[10px] my-[10px] text-gray-700"
                        name=""
                        id=""
                    >
                        <option value="">Select City</option>
                        <option value="">Jodhpur</option>
                        <option value="">Jaipur</option>
                        <option value="">Ajmer</option>
                        <option value="">Udaipur</option>
                    </select>
                    <select
                        className="w-[100%] border-[2px] border-gray-500 rounded-[10px] px-[5px] py-[10px] my-[10px] text-gray-700"
                        name=""
                        id=""
                    >
                        <option value="">Select Level</option>
                        <option value="">B.Des</option>
                        <option value="">B.Voc</option>
                        <option value="">BBA</option>
                        <option value="">BFA</option>
                        <option value="">3 Year Diploma</option>
                        <option value="">1 Year Diploma</option>
                        <option value="">6 Months Certificate</option>
                    </select>
                    <select
                        className="w-[100%] border-[2px] border-gray-500 rounded-[10px] px-[5px] py-[10px] my-[10px] text-gray-700"
                        name=""
                        id=""
                    >
                        <option value="">Select Program</option>
                        <option value="">B.Des</option>
                        <option value="">B.Voc</option>
                        <option value="">BBA</option>
                        <option value="">BFA</option>
                        <option value="">3 Year Diploma</option>
                        <option value="">1 Year Diploma</option>
                        <option value="">6 Months Certificate</option>
                    </select>
                    <button
                        type="submit"
                        className="w-[100%] my-[10px] bg-amber-400 uppercase font-semibold rounded-[10px] py-[10px]"
                    >
                        apply now
                    </button>
                </form>
            </div>



        </header>
    );
}
