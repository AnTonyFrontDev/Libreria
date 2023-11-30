//#region IMPORTS...
import styled from "styled-components"
import { v } from "../styles/Variables";
import { AiOutlineLeft, AiOutlineHome, /*AiOutlineSetting, AiOutlineFileProtect*/  } from "react-icons/ai"
import { MdOutlineHistoryEdu, MdImageSearch, /*MdLogout,*/ MdOutlinePeopleAlt  } from "react-icons/md";
import { /*BsHospital,*/ BsCapsulePill } from 'react-icons/bs'
import {NavLink} from "react-router-dom";
import { useContext } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../App";
import {AppIcon} from './custom/Appicon.tsx'
//#endregion

//#region propsTypes...
Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};
//#endregion

export default function Sidebar({sidebarOpen,setSidebarOpen}) {
  const ModSidebaropen=()=>{
    setSidebarOpen(!sidebarOpen);
  };
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <>
    <Container isOpen={sidebarOpen} themeUse={theme}>
    <button className="Sidebarbutton" onClick={ModSidebaropen}>
      <AiOutlineLeft/>
    </button>
    <div className="LogoContent">
      <div className="imgContent">
      <AppIcon type="books"></AppIcon>
      {/* <img src={Logo}/> */}
      </div>
      <h2>DonLibro</h2>
    </div>
    {linksArray.map(({icon,label,to})=>(
      <div className="LinkContainer" key={label}>
      <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
      <div className="Linkicon">{icon}</div>
      {sidebarOpen && <span>{label}</span>}
      </NavLink>
      </div>
    ))}
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" >
                  <input
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                    ></input>
                  <span  className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Container>
  </>
  )
}

//#region Data links
const linksArray=[
  {
    label:"Home",
    icon:<AiOutlineHome/>,
    to:"/"
  },
  {
    label:"Libros",
    icon:<MdOutlinePeopleAlt/>,
    to:"/Libros"
  },
  {
    label:"Autores",
    icon:<MdOutlineHistoryEdu/>,
    to:"/Autores"
  },
  {
    label:"Contacto",
    icon:<MdImageSearch/>,
    to:"/Contacto"
  },
  {
    label:"Tiendas",
    icon:<BsCapsulePill/>,
    to:"/Tiendas"
  },
];

//#endregion

//#region STYLED COMPONENTS

const Container = styled.div`
  color:${(props)=>props.theme.text};
  background:${(props)=>props.theme.bg};
  position: sticky;
  min-height: 100vh;
  z-index: 100;
  .Sidebarbutton{
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props)=>props.theme.bgtgderecha};
    box-shadow: 2px 0 4px ${(props)=>props.theme.bg3}, 4px 0 7px ${(props)=>props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    transition: all 0.3s;
    transform: ${({isOpen})=>(isOpen?`initial`:`rotate(180deg)`)};
    border:none;
    letter-spacing:inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
    &:hover{
      background: ${(props)=>props.theme.bg3};
    }
  }
  .LogoContent {
    display: flex;
    justify-content: center;
    align-items:center;
    padding-bottom: ${v.lgSpacing};
    padding-top: 30px;
    .imgContent{
      display: flex;
      justify-content: center;
      h2{
        padding-top: 30px
      }
      /* img{
        max-width: 100%;
        height: auto;
      } */
      cursor:pointer;
      transition: all 0.3s;
      transform: ${({isOpen})=>(isOpen?`scale(2.2)`:`scale(3.5)`)};
    }
    h2{
      display:${({isOpen})=>(!isOpen?`none`:`block`)};
      padding-left: 10px; 
    }
  }
  .LinkContainer {
    margin: 10px 0;
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
      height:70px;
      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    /* position: absolute; */
    /* bottom: 90px; */
    /* left: 30px; */
    align-items: end;
    justify-content: space-between;
    margin-bottom: -50px;
    /* top: 10px; */
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }
    .Togglecontent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo {
          font-size: 32px;
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: "🌑";
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) =>
                themeUse === "light" ? v.lightcheckbox : v.checkbox};
              transition: 0.4s;
              &::before {
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round {
                border-radius: 34px;
                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;

//#endregion