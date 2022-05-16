import React from 'react'

const Title = ({isSearch, title}) => {
  return (
    <div>
<h1 className="fw-bold px-4 m-4">
          {isSearch ? "Resultados de busqueda" : title}
        </h1>
    </div>
  )
}

export default Title