//#region IMPORTS

import React, { useState } from 'react'

import styled from "styled-components"
import { MyRoutes } from './routers/routes'
import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/Sidebar' 
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components"
import Navbar from './components/Navbar'
import { v } from './styles/Variables';
import { ConfigProvider } from 'antd'
// import User from './pages/User';
//#endregion


export const ThemeContext = React.createContext(null)
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen,setSidebarOpen]=useState(true);
  return (
    <>
      <ThemeContext.Provider value={{setTheme,theme}}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
          {/* <User/> */}
          <Container className={sidebarOpen?"sidebarState active":""}>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <section>
              <ConfigProvider
              theme={{
                token: {
                  colorText: themeStyle === Dark ? "rgba(255, 255, 255, 0.88)" : undefined,
                  colorTextSecondary: themeStyle === Dark ? "rgba(255, 255, 255, 0.65)" : undefined,
                  colorFillQuaternary: themeStyle === Dark ? "rgba(255, 255, 255, 0.02)" : undefined,
                  colorBgContainer: themeStyle === Dark ? "rgba(255, 255, 255, 0.02)" : undefined,
                  colorBgElevated: themeStyle === Dark ? "rgb(0, 0, 0)" : "#ffffff",
                  colorSplit: themeStyle === Dark ? "rgba(250, 250, 250,0.06)" : "rgba(5, 5, 5, 0.06)",
                  
                }
              }}
              >
            <Navbar/>
            <Content>
                <MyRoutes />
            </Content>
              </ConfigProvider>
            </section>
          </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

//#region STYLED COMPONENTS

const Container = styled.main`
/* background-color:${({theme})=>theme.body}; */
  display:grid;
  overflow: none;
  grid-template-columns:90px auto;
  background:${({theme})=>theme.bgtotal};
  &.active{
    grid-template-columns: 300px auto;
  };
  height: 100vh;
  color:${({theme})=>theme.text};

  Sidebar{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  z-index: 1;
  }

  Navbar{
  position: fixed;
  top: 0;
  right: 0;
  left: 300px;
  height: 60px;
  background-color: #fff;
  z-index: 1;
  }
`;

const Content = styled.div`
  margin: 20px;
  /* margin-left: 300px; */
  background:${({theme})=>theme.bg};
  height: calc(95vh - (${v.heightbar}));
  /* height: calc(98vh - 60px); */
  padding: 10px;
  border-radius: 10px ;
  overflow-y: scroll;
  /* width: 100%; */
`;
//#endregion

export default App
