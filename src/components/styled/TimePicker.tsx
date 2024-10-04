import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

interface BasicDatePickerProps {
	value: Dayjs | null;
	onChange: (date: Dayjs | null) => void;
}

const BasicDatePicker: React.FC<BasicDatePickerProps> = ({ value, onChange }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker label="Select the Deadline" value={value} onChange={onChange} />
			</DemoContainer>
		</LocalizationProvider>
	);
};

export default BasicDatePicker;
