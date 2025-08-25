import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/*  Just an image  */}
      <a className="navbar-brand mx-2" href="#">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAilBMVEX1fQD////1dgD1ewD4rYn0bgD+7ub71cP4r4v1cwD2hCjzZwD1eQD/+fj5upP71cX96d36w6f+9vH84M74qHj95df1fCf4rID2jkn7zbf1gBj7yq75sYT3nF76wqH3lE/3oG32iDP3oGb2jTr3mWP71b35upr3llf2i0H2kFX1eBv5tov1gzj2kUVQZ8nbAAAEsUlEQVR4nO2d2XLqOBBALSkykSMTr2wGzBbikNz//73B92EmlZgWhm4JT+m8u3KiklpbqwkYSyYiGAZikjAWMLbUrk2uRk9b42Q2IONZcjaeK9cePVBzFsQFd63RA17EQbgYyrhrEYswSKRri17IJKiG1I3PHbkKlkPqxueOvAxWw4ltLXoV7Ic08M5Dbx8sXDv0QwzM1+PxeCyhuVISQCn+QDOUOLvui3E6f73IvDqutHwMaaE5X46yLGYG4qxccq5dS2veTHOT6zeqg3a6RBSqWSc9fNuWrg7KXTNzuQ77+bZkFXe0rtV8lfX3/dvOtZMhyLfVbb4taWS/mdWsvF2YsXJhewDKzQ09+DthZHcjrJ7v8z2T7Wy2shzfLXxu5Y09ZTlFED63cm2rY/DNjVHtl3Jjp5X17M5B9x/h3kqQU33WEQbykwVhlFH3L2v640n+B1OYsZq6K4sTYp9oCbfEXZnjBLZvpLSNLCbITXwOcQfSRuYFtjBjb6TGsueO4ypqQmUdEQizN8IIp+5YxAMIsh2J4EgLih8cyVZE+taNnYGczFgdSYRZ2FCNPTUy/vG4C9NHGdX9stgaNqNJdXzuYpwagiJVR9bv8MJ43XDFO5HNG/hlSmUM7j3iZ3W5N2oNdigqY3iKTsF5gNfQf0tm/AQZG45ZJTQGnBjnL/DHCtq6ODFeG/4o3z2acWVYzvANZEwUj0HjxNQr1sDHb0QJP/DIi+B2klAszz5opmnYuJxAyqoA5+oRzbE9bMzy+uLtl5ArwzlSFVHcjhiMWThf8ZdOFqlxmVouv32LFTpMxn+5afH249twfMLpJFcZ45DMUOKdRWNWoizybRqz8eCM4y+E2GHVmGEkDNo1/kQIcXaNx97YG3tjb+yNvbE39sbe2Bt7Y2/8PzPOytfRtbzmpnMtC8b5hkOp/z9fAuwM15n0xknUK6lY8NPcsbHhxLvD+QXsGOTGprumDtTSqfENByK6cWp8Qzax+HJqPO1vrMH0RHLjef/0JPAald44k31PT4UEYwXG820N3v2veyprCcfjHcJprCm/on1mdS1aRbAw+4NhDOewxKNiG11LfTQ9J2kQzuhFZEgzzcKrMd7vhRi3Cm1dDmvgXK5T5bt1cUS5g9Rgsg8qcYFzawqmHKBSIlV6gFdbmJhSYq5FcEvCMVr5D6IE5F/gVbERH9dmHtzHO16qk05tCJvSpHoZ4z3DAthgZg3Bi1ocKtw0pxf0Nyw/CZFroImIeuKbYudE8iltvCCodkW7IMpPBIlvEsrBvJPyiyK7UNBNfUhpY7+VNZFytqV6rSfUJ8XwK5FyCTuRBf7kV01In+qpd+yppNDET061Rp2wyw8LZTiUGGHNf+En8P4FEa02KAcCYbW1VoiS68PdgS4bz2zWkmkLIO1yc/2ji7r5TlmvfSO41Lv0tQz7ecdhks+nQrqpiCS4UlF9KKZPnQ/0OniaFqtGuy3vJbTufp13Aa2d18jyeDyeh2Q7rOgotgFl4QsCdB0Mqrh7+3o7ML3GfTDUOigHVt29DMJBLUyEDgO7Re3uhe+yAf4SBCsxrtstIfZl+4smSDerNmizUwJL9eFwaEug/QP4F18T382whwAAAABJRU5ErkJggg==" width="30" height="30" alt="error 404" />
      </a>

      <a className="navbar-brand mx-2 b" href="/">Blogger</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-4">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">Home <span className="sr-only"></span> </a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li> */}
        </ul>

      </div>

      {/* <form className="form-inline">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}

      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light' }`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Theme</label>
      </div>

    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,    
  signin: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Use title here',
  signin: 'SIGN IN'
}