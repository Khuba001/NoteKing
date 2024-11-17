import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function Header({ title, subheading }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.blueAccent[500]}>
        {subheading}
      </Typography>
    </Box>
  );
}

export default Header;
