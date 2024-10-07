import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
	width: 200px; // 幅を200pxに設定
	height: 60px; // 高さを60pxに設定
	position: fixed; // 位置を固定
	bottom: 20px; // 画面の下から20px
	right: 20px; // 画面の右から20px
`;

const AddButton = () => {
	return (
		<StyledBox>
			<Button
				color="secondary"
				variant="contained"
				startIcon={<AddCircleIcon sx={{ fontSize: 100 }} />}
				href="/AddNew"
			>
				Add New
			</Button>
		</StyledBox>
	);
};

export default AddButton;
