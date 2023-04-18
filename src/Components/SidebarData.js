import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "/about-us",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Dashboard",
				path: "/about-us/aim",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Feeds",
				path: "/about-us/vision",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "self-service",
		path: "/services",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,


	},
	{
		title: "Attendence",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Time-Tracker",
		path: "/events",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Time Logs",
				path: "/events/events1",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "TimeSheets",
				path: "/timetracker/project",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: " Task/Project",
				path: "/project",
				icon: <IoIcons.IoIosPaper />,
				subNav: [
					{
						title: "Time Logs",
						path: "/events/events1",
						icon: <IoIcons.IoIosPaper />,
					},
					{
						title: "TimeSheets",
						path: "/timetracker/project",
						icon: <IoIcons.IoIosPaper />,
					},
					{
						title: " Task/Project",
						path: "/timetracker/project",
						icon: <IoIcons.IoIosPaper />,
					},

				],
			},

		],
	},
	{
		title: "LogOut",
		path: "/",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
