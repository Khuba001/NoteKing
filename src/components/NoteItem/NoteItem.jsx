import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { tokens } from "../../theme";

function NoteItem({
  name,
  title,
  category,
  description,
  btn1,
  btn2,
  size = 1,
  OnClickBtn1,
  OnClickBtn2,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="80%"
      border="1px solid #7777"
      borderRadius="9px"
      padding="20px 16px"
      gap="24px"
      mt="56px"
      sx={{
        backgroundColor: colors.primary[400],
        transform: `scale(${size})`,
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      }}
    >
      <Box display="flex" gap="9px" alignItems="center">
        <Typography variant="h4">{name}</Typography>

        <Typography
          variant="h5"
          borderLeft="1px solid #7777 "
          paddingLeft="10px"
        >
          {title}
        </Typography>
      </Box>
      <Box
        border="1px solid #7777"
        borderRadius="9px"
        display="flex"
        flexDirection="column"
        padding="14px"
        gap="4px"
      >
        <Typography variant="h5" color={colors.grey[300]}>
          {category}
        </Typography>
        <Typography>{description}</Typography>
      </Box>
      <Box display="flex" gap="14px">
        {btn1 && (
          <Button
            color="secondary"
            variant="contained"
            size="medium"
            type="button"
            onClick={OnClickBtn1}
          >
            {btn1}
          </Button>
        )}
        {btn2 && (
          <Button
            color="secondary"
            variant="outlined"
            size="medium"
            type="button"
            onClick={OnClickBtn2}
          >
            {btn2}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default NoteItem;
