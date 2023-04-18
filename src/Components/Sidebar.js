import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { grey } from '@mui/material/colors';
import { AccountCircle, Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";


const Nav = styled.div`
background:  rgb(241, 243, 249);
height: 3rem;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	  padding: theme.spacing(1, 23, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('md')]: {
		width: '20ch',
	  },
	},
  }));

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
		<h4
			style={{ textAlign: "center",
					marginLeft: "50px",
					color: "black" }}
		> <b>People</b>
		
			<AddCircleOutlineOutlinedIcon 
			style={{ textAlign: "center",
			marginLeft: "900px",
			color: "grey" }}
			sx={{ color: grey[500]}}>add_circle</AddCircleOutlineOutlinedIcon>&nbsp;
			<NotificationsNoneOutlinedIcon 
			style={{ 
			
			color: "grey" }}
			sx={{ color: grey[500]}}>add_circle</NotificationsNoneOutlinedIcon>&nbsp;

             <AccountCircle 
			 style={{ 
			
				color: "grey" }}
			 />
			
		</h4>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		

		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
