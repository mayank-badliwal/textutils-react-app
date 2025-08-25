import React, { useState, useEffect } from 'react';
// import './App.css';
// import './theme.css';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Theme from './components/Theme';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from 'react-router-dom'

const themes = {
  light: { background: "#ffffff", color: "#000000" },
  dark: { background: "#000000", color: "#ffffff" },
  blue: { background: "#001f3f", color: "#7FDBFF" },
  green: { background: "#199b28ff", color: "#001f3f" },
};

function App() { 

  const [currentTheme, setCurrentTheme] = useState("light");

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    showAlert(`${theme} theme has been enabled.`, "success")
  };

  const [mode, setMode] = useState('light')   //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled.", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled.", "success")
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = themes[currentTheme].background;
    document.body.style.color = themes[currentTheme].color;
  }, [currentTheme]);


  return (
    <>

      {/* <Router> */}
      {/* <Navbar title="Blogger" signin="SIGN IN" /> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode} />


        <Theme currentTheme={currentTheme} changeTheme={changeTheme} />

        <Alert alert={alert} />

        <div className="container my-3" >
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/">     */}
{/* Why we used exact path because React bydefault do partial search not exactly. Example: /users --> component 1
/users/home --> component 2 */}
              <TextForm showAlert={showAlert} heading="Enter text to analyze:" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
