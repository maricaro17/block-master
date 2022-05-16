import React from 'react'

const startIcon = "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652564184/block-master/Icon_xcfh6l.svg"
const Calificacion = ({rate}) => {
  return (
    <div>
    <div className={`rate ${rate > 5 ? "top-rate" : "least-rate"} `}>
      <span>
        <img src={startIcon} alt="rate"/>
      </span>
      {rate.toFixed(1)}
    </div>
  </div>
  )
}

export default Calificacion