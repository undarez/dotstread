
"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Moon, SunMedium } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

  

    return (
        <div>
            <Button variant='ghost'
                size="icon"
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                }}
                
            >
                <SunMedium
                    size={20}
                    className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ' />
                <Moon
                    size={20}
                    color="#ffffff"
                    className='absolute rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100 ' />
                <span className='sr-only'>Toggle Theme</span>
            </Button>
        </div>
    )

}








// "use client"
// import React from 'react'
// import { useTheme } from 'next-themes'
// import { Button } from '@/components/ui/button'
// import { Moon, SunMedium } from "lucide-react"
// import  "../../app/globals.css"

// const ThemeToggle = () => {
//     const { setTheme, theme } = useTheme()

//     const containerClass = theme === "light" ? "light-bg" : "dark-bg";

//     return (
//         <div>
//             <Button variant='ghost'
//                 size="sm"
//                 onClick={() => {
//                     setTheme(theme === "light" ? "dark" : "light")
//                 }}
//                 className={containerClass}
//             >
//                 <SunMedium
//                     size={20}
//                     className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ' />
//                 <Moon
//                     size={20}
//                     className='absolute rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-0' />
//                 <span className='sr-only'>Toggle Theme</span>
//             </Button>
//         </div>
//     )
// }

// export default ThemeToggle
