import { Box, IconButton, Switch, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AddModeratorIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { tokens } from "../theme";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";

const Item = ({ title, to, icon, isSelected, setIsSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to}>
      <MenuItem
        style={{
          margin: "10px 0 10px 0",
        }}
        active={isSelected === title}
        onClick={() => setIsSelected(title)}
        icon={icon}
      >
        <Typography variant="h5">{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSelected, setIsSelected] = useState("home");

  return (
    <Box height="100vh" display="flex">
      <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Menu
            iconShape="square"
            rootStyles={{
              ["." + menuClasses.button]: {
                backgroundColor: `${colors.primary[400]}`,
                "&:hover": {
                  backgroundColor: `#4d5770`,
                },
              },
            }}
          >
            {/* LOGO & ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <ArrowForwardIcon /> : undefined}
              style={{ margin: "10px 0 20px 0" }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography
                    variant="h3"
                    style={{
                      color: `${colors.grey[100]}`,
                    }}
                  >
                    NOTEKING
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <ArrowBackIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {/* ELEMENTY MENU */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                title={"Add"}
                icon={<AddModeratorIcon />}
                to={"/add"}
              />
              <Item
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                title={"Notes"}
                icon={<FormatListBulletedIcon />}
                to={"/notes"}
              />
              <Item
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                title={"Trash"}
                icon={<DeleteOutlineIcon />}
                to={"/trash"}
              />
              <Item
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                title={"Important"}
                icon={<FavoriteBorderIcon />}
                to={"/important"}
              />
            </Box>
          </Menu>
          {/* THEME SWITCH */}
          <Menu
            rootStyles={{
              ["." + menuClasses.button]: {
                backgroundColor: `${colors.primary[400]}`,
                "&:hover": {
                  backgroundColor: `#4d5770`,
                },
              },
            }}
            iconShape="square"
            style={{
              marginBottom: "10px",
            }}
          >
            <MenuItem
              icon={isCollapsed ? <LightModeOutlinedIcon /> : undefined}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <LightModeOutlinedIcon />
                  <Switch />
                </Box>
              )}
            </MenuItem>
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Navbar;
