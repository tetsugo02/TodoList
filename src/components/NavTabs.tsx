import React from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NavTabs = () => {
	const location = useLocation();
	const [, setValue] = React.useState(location.pathname);

	React.useEffect(() => {
		setValue(location.pathname);
	}, [location]);

	return (
		<StyledBox>
			<ButtonGroup aria-label="nav tabs" role="navigation" color="secondary">
				<Button component={Link} to="/">
					Home
				</Button>
				<Button component={Link} to="/DoneTodos">
					Done Todos
				</Button>
			</ButtonGroup>
		</StyledBox>
	);
};

export default NavTabs;
