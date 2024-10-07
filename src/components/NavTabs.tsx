import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Button)`
	text-transform: none; // テキストの変換を無効にする
`;

const NavTabs = () => {
	const location = useLocation();
	const [value, setValue] = React.useState(location.pathname);

	React.useEffect(() => {
		setValue(location.pathname);
	}, [location]);

	return (
		<ButtonGroup variant="contained" aria-label="nav tabs" role="navigation">
			<StyledButton as={Link} to="/" color={value === "/" ? "primary" : "default"}>
				Home
			</StyledButton>
			<StyledButton
				as={Link}
				to="/DoneTodos"
				color={value === "/DoneTodos" ? "primary" : "inherit"}
			>
				Done Todos
			</StyledButton>
		</ButtonGroup>
	);
};

export default NavTabs;
