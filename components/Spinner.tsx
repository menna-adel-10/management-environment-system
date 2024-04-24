"use client"

import { useState, useEffect } from "react"
import { DNA } from "react-loader-spinner"

const Spinner = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {visible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="absolute inset-0 flex justify-center items-center">
            <DNA
              height={80}
              width={80}
              ariaLabel="dna-loading"
              wrapperClass="dna-wrapper"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Spinner
