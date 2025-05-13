import { convertEpochDateFormat } from "../../common/common";
import Typography from "@mui/material/Typography";

export default function KeyDateComponent(props) {
  const { data } = props;

  const timeObj = convertEpochDateFormat(data);

  return (
    <>
      <Typography
        align="right"
        sx={{
          borderBottom: "none",
          padding: "0",
          display: "flex",
          alignItems: "center",
        }}
      >
        {timeObj.day + " " + timeObj.month + " " + timeObj.year}
      </Typography>
    </>
  );
}
