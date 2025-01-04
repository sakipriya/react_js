import { Outlet,Link } from "react-router-dom"

export default function layout() {
  return (
    <div>
        <nav >
            <ul className="flex bg-black text-white gap-5">
                <li>
                    <Link to="/">Home</Link></li>
                <li>
                    <Link to="about">About</Link></li>
                <li>
                    <Link to="contactus">Contactus</Link></li>
                 <li>
                    <Link to="services">Services</Link></li>
                <li>
                    <Link to="career">Career</Link></li>
                <li>
                    <Link to="Footer">Footer</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

