import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'
import { Home, CreatePost } from './pages'

const App = () => {
   return (
      <BrowserRouter>
         <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
            <Link to={'/'}><img src={logo} alt="logo" className="w-28 object-contain" /></Link>
            <Link to={'/create-post'} className="text-sm font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
         </header>

         <div className="flex flex-col justify-between gap-5 min-h-screen">
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
               <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/create-post' element={<CreatePost />}></Route>
               </Routes>
            </main>
            <footer className="mt-5 p-4 text-center text-sm">
               <p>2023 &copy; Copyright. Design & Develope by <a href="https://github.com/rizqisetiaji7" target="_blank">Rizqi Setiaji</a></p>
            </footer>
         </div>
      </BrowserRouter>
   )
}

export default App