"use client";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import LoginForm, { RegisterForm } from "../homeComponents/LoginForm";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [loginForm, setLoginForm] = useState(false);
    const [registerForm, setRegisterForm] = useState(false);
    let [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("all");
    let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    let [applyNow, setApplyNow] = useState(false);
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

    return (
        <header className="sticky top-0 z-50">


            {/* mega menu functionality*/}
            {/* menu page */}
            <div
                className={`${megaMenuOpen
                    ? "visible opacity-[1] top-[100%]"
                    : "invisible opacity-0 top-[-100%]"
                    } duration-300 w-[100%] bg-[linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)] lg:h-[100vh] h-[100vh] overflow-y-scroll rounded-md absolute left-0 bg-white z-50 p-3`}
            >
                <div className="max-w-7xl mx-auto my-[10px]">
                    <div className="relative w-full my-[10px]">
                        <IoMdSearch className="absolute left-3 mb-2 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                        <input
                            required
                            type="text"
                            placeholder="Search Courses...."
                            className="w-full focus:outline-gray-400 border-gray-300 pl-10 p-[5px]r-[10px] py-[5px] border-2 rounded"
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
                                        } z-20 text-gray-900  duration-100 lg:text-[16px] px-3 capitalize cursor-pointer py-[5px] rounded mt-3 border-[1px] border-gray-300 mb-5 ro-[5px]unded`}
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
                            <h2 className="uppercase font-semibold lg:text-[18px] text-[22px] text-gray-800 ">
                                Design
                            </h2>
                            {designData.length >= 1
                                ? designData.map((item, index) => {
                                    let { points } = item;
                                    return (
                                        <div
                                            key={index}
                                            className="w-[100%] p-3 lg:my-[15px] my-5 grid lg:grid-cols-[35%_auto] grid-cols-1 border-2 rounded-[10px] border-gray-300 gap-5"
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
                                                    <button onClick={() => setMegaMenuOpen(false)} className="px-3 hover:bg-amber-400 lg:mt-3 flex justify-center items-center gap-2 py-[5px] rounded-[5px] duration-300 cursor-pointer my-[10px] bg-amber-300">
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
                            <h2 className="uppercase font-semibold lg:text-[18px] text-[22px] text-gray-800 ">
                                Business
                            </h2>
                            {businessData.length >= 1
                                ? businessData.map((item, index) => {
                                    let { points } = item;
                                    return (
                                        <div
                                            key={index}
                                            className="w-[100%] p-3 lg:my-[15px] my-5 grid lg:grid-cols-[35%_auto] grid-cols-1 border-2 rounded-[10px] border-gray-300 gap-5"
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
                                                    <button onClick={() => setMegaMenuOpen(false)} className="px-3 my-[10px] hover:bg-amber-400 lg:mt-3 flex justify-center items-center gap-2 py-[5px] rounded-[5px] duration-300 cursor-pointer bg-amber-300">
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
                            <h2 className="uppercase font-semibold lg:text-[18px] text-[22px] text-gray-800 ">
                                Art
                            </h2>
                            {artData.length >= 1
                                ? artData.map((item, index) => {
                                    let { points } = item;
                                    return (
                                        <div
                                            key={index}
                                            className="w-[100%] p-3 lg:my-[15px] my-5 grid lg:grid-cols-[35%_auto] grid-cols-1 border-2 rounded-[10px] border-gray-300 gap-5"
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
                                                    <button onClick={() => setMegaMenuOpen(false)} className="px-3 hover:bg-amber-400 lg:mt-3 flex justify-center items-center gap-2 py-[5px] my-[10px] rounded-[5px] duration-300 cursor-pointer bg-amber-300">
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
            {(megaMenuOpen || applyNow || loginForm || registerForm || applyNow) && (
                <div className="fixed top-0 left-0 z-[-10] w-[100%] h-[100vh] bg-[rgba(0,0,0,0.9)]"></div>
            )}

            {/* header for pc */}
            <div className="lg:block overflow-x-hidden hidden w-[100%] px-0 relative py-[15px] bg-black/95">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-[20px]">
                        <img
                            className="w-[150px]"
                            src="https://www.inframeschool.com/_next/image?url=%2Fpixelcut-export-negate.png&w=384&q=75"
                            alt=""
                        />
                        <div className="flex gap-[25px] items-center ">
                            <button
                                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                                className={`px-[15px] cursor-pointer flex items-center gap-[4px] font-bold rounded-md py-[5px] ${megaMenuOpen ? "bg-amber-300" : "bg-white"
                                    } group hover:bg-amber-300 duration-200`}
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
                            type="submit"
                            className="py-[10px] px-[10px] cursor-pointer rounded-r-md bg-amber-300 text-[22px]"
                        >
                            <IoMdSearch />
                        </button>
                    </form>
                    <div>
                        <button className="text-white text-[18px]  border-[1px] border-transparent hover:border-white duration-300 px-3 py-[3px] cursor-pointer">
                            Contact Us
                        </button>
                        <button
                            onClick={() => setApplyNow(true)}
                            className="px-[20px] rounded-md py-[7px] bg-amber-300 ml-5 font-bold cursor-pointer"
                        >
                            Apply Now
                        </button>
                        <button
                            onClick={() => setLoginForm(true)}
                            className="px-[20px] rounded-md py-[7px] duration-500 border-[2px] text-amber-300 border-amber-300 ml-5 font-bold hover:bg-amber-300 hover:text-gray-900 cursor-pointer"
                        >
                            Login
                        </button>
                    </div>
                </div>

                {/* apply now form for pc */}
                <div
                    style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }}
                    className={`${applyNow
                        ? "top-[110px] right-[2%] "
                        : "top-[-100%] left-[100%] "
                        } fixed  w-[90%] max-w-md p-6 z-50 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.15)]  transition-all duration-500 ease-in-out`}
                >
                    {/* Header */}
                    <div className="relative mb-6">
                        <h3 className="text-2xl font-semibold text-center text-gray-800">
                            Fill the form to apply
                        </h3>
                        <button
                            onClick={() => setApplyNow(false)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-amber-500 text-2xl transition"
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
                            className="w-full px-4 py-3 border-[1px] border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <input
                            required
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border-[1px] border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <input
                            required
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 border-[1px] border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />

                        {/* Select Inputs */}
                        <div className="grid grid-cols-1 gap-4">
                            <select className="w-full px-4 py-3 border rounded-lg border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                <option value="">Select State</option>
                                <option>Rajasthan</option>
                                <option>Haryana</option>
                                <option>Punjab</option>
                                <option>Assam</option>
                            </select>
                            <select className="w-full px-4 py-3 border rounded-lg border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                <option value="">Select City</option>
                                <option>Jodhpur</option>
                                <option>Jaipur</option>
                                <option>Ajmer</option>
                                <option>Udaipur</option>
                            </select>
                            <select className="w-full px-4 py-3 border rounded-lg border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                <option value="">Select Level</option>
                                <option>B.Des</option>
                                <option>B.Voc</option>
                                <option>BBA</option>
                                <option>BFA</option>
                                <option>3 Year Diploma</option>
                                <option>1 Year Diploma</option>
                                <option>6 Months Certificate</option>
                            </select>
                            <select className="w-full px-4 py-3 border rounded-lg border-gray-700 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
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
                            className="w-full bg-white hover:text-amber-500 text-black  font-semibold py-3 rounded-lg transition"
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
                            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                            className="px-[15px] cursor-pointer flex items-center gap-[4px] font-bold rounded-md py-[5px] h-[30px] bg-amber-300 group"
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
                    {(loginForm || registerForm) && <div className="w-[100%] h-[100vh] absolute top-0 left-0 bg-black/90"></div>}

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
                    <Link href={"/"}>
                        <li
                            onClick={() => setLoginForm(true)}
                            className="text-white mb-[30px] text-[23px] uppercase font-semibold"
                        >
                            Login
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li
                            onClick={() => setApplyNow(true)}
                            className="text-black mb-[30px] text-[20px] uppercase font-semibold bg-amber-300 w-[150px] px-[10px] py-[5px] rounded"
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
                    } duration-500 lg:hidden block w-[100%] h-auto p-5 fixed left-1/2 -translate-x-1/2 bg-white`}
            >
                <div className="relative mb-2">
                    <h3 className="text-[25px] text-center font-semibold text-gray-900 uppercase">
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

            {/* loginForm open and close */}
            <LoginForm
                setLoginForm={setLoginForm}
                loginForm={loginForm}
                setRegisterForm={setRegisterForm}
            />

            {/* register form open and close*/}
            <RegisterForm
                loginForm={loginForm}
                setLoginForm={setLoginForm}
                setRegisterForm={setRegisterForm}
                registerForm={registerForm}
            />
        </header>
    );
}
