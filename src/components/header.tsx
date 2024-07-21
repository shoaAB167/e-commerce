import { useState } from "react";
import React from "react";
import {User} from '../types/types'
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const user = { _id: "", role: "" };
interface PropsType {
  user : User | null
}

//Reusable header component
const Header = ({user} : PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth)
      toast.success("Sign Out Successfully")
      setIsOpen(false)
    } catch (error) {
      toast.error("Sign Out Failed")
    }
  }

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>Home</Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user?.role === "admin" && (
                <Link to="/admin/dashboard">Admin</Link>
              )}
              <Link to="/orders"></Link>
              <button onClick={ logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
