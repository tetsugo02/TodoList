import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";

interface LinkTabProps {
	label: string;
	to: string;
}

const LinkTab = (props: LinkTabProps) => {
	return <Tab component={Link} to={props.to} label={props.label} />;
};

const NavTabs = () => {
	const location = useLocation();
	const [value, setValue] = React.useState(location.pathname);

	const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	React.useEffect(() => {
		setValue(location.pathname);
	}, [location]);

	return (
		<Box sx={{ width: "100%" }}>
			<Tabs value={value} onChange={handleChange} aria-label="nav tabs" role="navigation">
				<LinkTab label="Home" to="/" />
				<LinkTab label="Done Todos" to="/DoneTodos" />
			</Tabs>
		</Box>
	);
};

export default NavTabs;
