import React from 'react'

const MainLeft = () => {
  return (
    <div className="col-sm-4">
    <h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div> <img src='images/river.jpg' alt='something' className="img"/></div>
    <p>
      Hello my name is gefen
    </p>
    <h3 className="mt-4">Some Links</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
      </li>
      <li className="nav-item">

      </li>
      <li className="nav-item">
          Link
      </li>
      <li className="nav-item">
          Disabled
      </li>
    </ul>
    <hr className="d-sm-none" />
  </div>
  )
}

export default MainLeft