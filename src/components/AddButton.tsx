import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import AddNewTodo from "./AddNew";

const StyledBox = styled(Box)`
	width: 200px; // 幅を200pxに設定
	height: 60px; // 高さを60pxに設定
	position: fixed; // 位置を固定
	bottom: 20px; // 画面の下から20px
	right: 20px; // 画面の右から20px
`;
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const AddButton = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<StyledBox>
			<Button
				color="secondary"
				variant="contained"
				startIcon={<AddCircleIcon sx={{ fontSize: 100 }} />}
				onClick={handleOpen}
			>
				Add New
			</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<AddNewTodo onClose={handleClose} />
					</Box>
				</Fade>
			</Modal>
		</StyledBox>
	);
};

export default AddButton;
