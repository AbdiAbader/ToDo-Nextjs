'use client'
import Modals from "./modal"
import React from 'react'
import { useState } from "react"

const AddTask = () => {
   const [open, setOpen] = useState(false)
    return (
        <div >
        <button onClick={() => setOpen(true) }  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add Task
            </button>
            {open && <Modals />}
        </div>
    )
}

export default AddTask
