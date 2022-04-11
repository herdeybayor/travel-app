import React from 'react'
import { BsGridFill } from 'react-icons/bs'

const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <BsGridFill className="text-3xl" />
      <div className="flex items-center space-x-5 lg:space-x-10">
        <p className="header__link header__link--active">Gallery</p>
        <p className="header__link">Stories</p>
        <img
          className="h-16 w-16 rounded-full"
          src="https://avatars.githubusercontent.com/u/71196743?v=4"
          alt="profile pic"
        />
      </div>
    </nav>
  )
}

export default Header
