// import React from 'react';
import styled from 'styled-components';
// import avatar from "../assets/champ.svg";
import { v } from '../styles/Variables';
// import { Link } from 'react-router-dom'
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
// import {AiOutlineSetting} from 'react-icons/ai';
// import {MdLogout} from 'react-icons/md'

//#region styles
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  color:${(props)=>props.theme.text};
  background:${(props)=>props.theme.bg};
  height: ${v.heightbar};
  padding: 0 20px;
`;


function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <h2>Biblioteca DonLibro</h2>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
