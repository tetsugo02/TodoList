import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import styled from "styled-components";
interface BasicDatePickerProps {
	value: Dayjs | null;
	onChange: (date: Dayjs | null) => void;
}
const StyledDateTimePicker = styled(DateTimePicker)`
	width: 200px;
`;

const BasicDatePicker: React.FC<BasicDatePickerProps> = ({ value, onChange }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DateTimePicker"]}>
				<StyledDateTimePicker
					label="Select the Deadline"
					value={value}
					onChange={onChange}
					slotProps={{
						textField: {
							error: false, // エラー表示を無効にする
						},
					}}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
};

export default BasicDatePicker;
