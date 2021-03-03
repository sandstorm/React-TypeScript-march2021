import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
        <Link to="/counter">
          Counter
        </Link>
        <Link to="/todos">
          Todos
        </Link>
      </li>
    </ul>
  )
}

export default React.memo(Navigation)
