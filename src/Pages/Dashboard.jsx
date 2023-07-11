import React,{useState} from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineCheckCircle, AiOutlineStop, AiOutlineTransaction, AiTwotoneShop } from "react-icons/ai";

const Dashboard = () => {
    const menus = [
        { name: 'Tableau de Bord', link: '/', icon: BiSolidDashboard },
        { name: 'Configuration', link: '/', icon: IoMdSettings },
        { name: 'Agences', link: '/', icon: AiTwotoneShop, margin:true},
        { name: 'Transactions', link: '/', icon: AiOutlineTransaction },
        { name: 'Sanctions', link: '/', icon: AiOutlineStop , margin:true},
        { name: 'validation', link: '/', icon: AiOutlineCheckCircle }
    ];
    const [open, setOpen] = useState(true);

    return (
        <section className='flex gap-6'>
            <div className={`bg-[#0e0e0e] min-h-screen ${
                open ? 'w-72' : 'w-16'
            } duration-700 text-gray-100 px-4`}>

                <div className='py-3 flex justify-end'>
                    <HiMenuAlt3 size={26} className='cursor-pointer'
                                onClick={() => setOpen(!open)} />
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {menus?.map((menu, i) => (
                        <Link to={menu?.link}
                              key={i}
                              className={`
                                {menu?.margin && 'mt-5'
                              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                            <div>{React.createElement(menu?.icon, { size: 20 })}</div>
                            <h2 style={{
                                transitionDelay: `${i + 2}00ms`,
                            }}
                                className={ `whitespace-pre duration-200 ${
                                !open && 'opacity-0 translate-x-28 overflow-hidden'}`
                                }>{menu.name}
                            </h2>
                            <h2 className={`&{
                                open && 'hidden'
                            }
                            absolute left-48 bg-white font-semibold whitespace-pre 
                            text-gray-900 rounded-sm drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                             group-hover:left-14  group-hover:duration-100
                             group-hover:w-fit`}>
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='ml-5 text-xl w-full h-full font-semibold bg-gray-100'>
                <div className='fixed flex bg-gray-100 mt-0 shadow-md shadow-gray-600 h-[670px] w-[1385px]'>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;
