const Footer = () => {
    return(
        <footer className='bg-black w-full h-60'>
            <div className="details_box w-3/4 mx-auto my-10 p-5">Questions? Call <a className="cursor-pointer">000-800-919-1694</a></div>
            <div className="links_box  w-3/4 mx-auto">
               <ul className="flex justify-between h-auto">
                <li className="p-2 cursor-pointer"><a>FAQ</a></li>
                <li className="p-2 cursor-pointer"><a>Help Center</a></li>
                <li className="p-2 cursor-pointer"><a>Terms of Use</a></li>
                <li className="p-2 cursor-pointer"><a>Privacy</a></li>
                <li className="p-2 cursor-pointer"><a>Cookie Preference</a></li>
                <li className="p-2 cursor-pointer"><a>Corporate Information</a></li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;