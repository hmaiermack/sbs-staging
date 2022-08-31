import React from 'react'


const Divider = ({style = "LARGE"}: {style: "SMALL" | "LARGE"}) => {
  return (
    <div className={`w-20 h-1 border-b-2 mt-2 ${style === "LARGE" ? "mb-12" : "mb-2"} mx-auto border-purple-400`}></div>
  )
}

export default Divider