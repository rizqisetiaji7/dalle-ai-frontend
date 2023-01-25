import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo, logoWhite } from './assets'
import { Home, CreatePost } from './pages'
import { getYear } from './utils'

const App = () => {
   const [theme, setTheme] = useState(localStorage.getItem('theme') == 'dark' ? true : false)
   const docElement = document.documentElement

   const onLoadPage = () => localStorage.theme == 'dark' ?
      docElement.classList.add('dark') : docElement.classList.remove('dark')

   // Run and check theme when page load
   onLoadPage()

   useEffect(() => {
      if (theme) {
         docElement.classList.add('dark')
         localStorage.setItem('theme', 'dark')
      } else {
         docElement.classList.remove('dark')
         localStorage.removeItem('theme')
      }
   }, [theme])

   return (
      <BrowserRouter>
         <header className="w-full flex justify-between items-center bg-white dark:bg-[#0d0c14] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-[#201f2c] duration-100">
            <Link to={'/'}><img src={ theme ? logoWhite : logo } alt="logo" className="w-24 object-contain" /></Link>
            <div className="flex items-center space-x-7">
               <button className="text-xs outline-none border-0" onClick={() => setTheme(mode => !mode)}>
                  { theme ? (
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-amber-400 hover:fill-amber-500">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                     </svg>                   
                  ) : (
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-slate-400 hover:fill-slate-500">
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                     </svg>
                  ) }
               </button>
               <Link to={'/create-post'} className="text-[13px] font-inter font-medium bg-[#6469ff] hover:bg-[#5257e9] text-white px-4 py-[6px] rounded-md">Create Post</Link>
            </div>
         </header>

         <div className="flex flex-col justify-between gap-5 min-h-screen bg-[#f9fafe] dark:bg-[#110f1a] duration-100">
            <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
               <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/create-post' element={<CreatePost />}></Route>
               </Routes>
            </main>

            <footer className="mt-5 px-4 py-7 text-center text-sm border-t border-t-gray-200 dark:border-t-[#201f2c]">
               <p className="text-[#666e75] dark:text-[#9aa0a5] text-[13px]">&copy; Copyright { getYear() }. Created by <a href="https://github.com/rizqisetiaji7" className="text-[#6469ff] hover:underline" target="_blank">Rizqi Setiaji</a>
               </p>
            </footer>
         </div>
      </BrowserRouter>
   )
}

export default App