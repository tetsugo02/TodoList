import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
	width: 200px; // 幅を200pxに設定
	height: 60px; // 高さを60pxに設定
	font-size: 1.5rem; // フォントサイズを大きく設定
	position: fixed; // 位置を固定
	bottom: 20px; // 画面の下から20px
	right: 20px; // 画面の右から20px
`;

const AddButton = () => {
	return (
		<StyledButton
			color="primary"
			startIcon={<AddCircleIcon sx={{ fontSize: 100 }} />}
			href="/AddNew"
		>
			Add New
		</StyledButton>
	);
};

export default AddButton;
