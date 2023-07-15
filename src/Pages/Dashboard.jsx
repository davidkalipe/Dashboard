import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {HiMenuAlt3, HiOutlineLogout} from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import {AiOutlineTransaction, AiTwotoneShop } from "react-icons/ai";
import User from '../assets/user.png'
import {MdDelete} from "react-icons/md";

const Dashboard = () => {
    var navigate  = useNavigate();
    const menus = [
        { name: 'Tableau de Bord', link: '/Dashboard', icon: BiSolidDashboard },
        { name: 'Configuration', link: '/', icon: IoMdSettings },
        { name: 'Agences', link: '/Dashboard', icon: AiTwotoneShop, margin:true},
        { name: 'Transactions', link: '/', icon: AiOutlineTransaction },
        {name: 'Déconnexion', link: '/SignIn', icon: HiOutlineLogout}
    ];
    const [open, setOpen] = useState(true);
    const data = [
        {id:1, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:2, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:3, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:4, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:5, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:6, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:7, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:8, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:9, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:10, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:11, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:12, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:13, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:14, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:15, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},
        {id:16, agence:'Agoenyive2', pays: 'Togo', ville: 'Lomé', adresse: 'Agoè-nyivé', contact: '0022870554812', email: 'agence@kora.com'},

    ]

    return (
        <section className='flex gap-6'>
            <div className={`bg-[#0e0e0e] min-h-screen ${
                open ? 'w-72' : 'w-16'
            } duration-700 text-gray-100`}>

                <div className='bg-gray-900 flex '>
                    <div className='justify-center items-center pr-3 pl-10 py-8'>
                        <link />
                        <img src={User} className='cursor-pointer w-20 ml-8'/>
                        <p className='font-medium items-center ml-5 pt-2'>Administrateur</p>
                    </div>
                    <HiMenuAlt3 size={26} className='ml-8 justify-end items-end'/>
                </div>
                <div className='mt-4 px-4 pt-5 flex flex-col gap-4 relative'>
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
                        </Link>
                    ))}
                </div>
                <div onClick={() => navigate('/Dashboard')} className='gap-5 text-red-600 ml-5 hover hover:text-gray-100 font-medium mt-60'>
                    <p>KORA Transfert</p>
                </div>
            </div>
            <div className='ml-2 mr-3 text-xl w-full h-full font-semibold bg-gray-100'>
                <div className='bg-gray-100 p-4 mt-0 mr-3 shadow-md shadow-gray-600 h-[750px] w-[1240px]'>
                    <div className='space-x-36'>
                        <label>Pays</label>
                        <label>Ville</label>
                        <label>Nom de l'Agence</label>
                        <label>Adresse de l'Agence</label>
                        <label>Contact de l'Agence</label>
                    </div>
                    <form>
                        <div className='space-x-20 pt-2'>
                            <select className='border-t-gray-500'>
                                <option value='TOGO'>TOGO</option>
                                <option value='GHANA'>GHANA</option>
                                <option value='BENIN'>BENIN</option>
                            </select>
                            <select>
                                <option value='Lome'>Lome</option>
                                <option value='Tsevie'>Tsevie</option>
                                <option value='Kpalime'>Kpalime</option>
                                <option value='Kara'>Kara</option>
                                <option value='Dapaong'>Dapaong</option>
                                <option value='Cotonou'>Cotonou</option>
                                <option value='Accra'>Accra</option>
                            </select>
                            <input className='text-blue-700 font-medium' type='text' name=''/>
                            <input className='text-blue-700 font-medium' type='text' name=''/>
                            <input className='text-blue-700 font-medium' type='text' name=''/>
                        </div>
                        <div className='space-x-48 pt-10'>
                            <label>Email de l'Agence</label>
                            <label>Devise de l'Agence</label>
                            <label className=''>Solde Initial</label>
                            <label>Action</label>
                        </div>
                        <div className='pt-2'>
                            <input type='email' className='text-blue-700 font-medium w-48 mr-40'/>
                            <select  className='mr-72 ml-2'>
                                <option>FCFA</option>
                                <option>CEDI</option>
                                <option>NAIRA</option>
                            </select>
                            <input type='number' className='mr-32 w-40 text-blue-700 font-medium'/>
                            <button type='submit' className='h-10 w-44 shadow-xl rounded-md shadow-green-500 hover:bg-green-900 duration-200 text-white bg-green-700 '>
                                    Enregistrer
                            </button>
                        </div>
                    </form>
                    <div className='bg-gray-200 p-5 mt-10 mr-5 rounded-2xl  shadow-md shadow-gray-600 h-[490px] overflow-y-auto w-[1215px]'>
                        <p className='text-orange-500 mb-8'>LISTE DES AGENCES</p>
                        <table className='font-thin text-lg border border-slate-100 w-[1170px] max-h-[300px]'>
                            <thead>
                                <tr className='bg-gray-400'>
                                    <th>N*</th>
                                    <th>AGENCE</th>
                                    <th>PAYS</th>
                                    <th>VILLE</th>
                                    <th>ADRESSE</th>
                                    <th>CONTACT</th>
                                    <th>EMAIL</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray-300'>
                                {data.map((item) =>(
                                    <tr key={item.id}>
                                        <td className='text-center'>{item.id}</td>
                                        <td className='text-center'>{item.agence}</td>
                                        <td className='text-center'>{item.pays}</td>
                                        <td className='text-center'>{item.ville}</td>
                                        <td className='text-center'>{item.adresse}</td>
                                        <td className='text-center'>{item.contact}</td>
                                        <td className='text-center'>{item.email}</td>
                                        <td className='text-center'><button type='submit' className='bg-red-700 rounded-sm p-2 text-white'><MdDelete/></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
