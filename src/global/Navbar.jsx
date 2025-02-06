import { Box, IconButton, Switch, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AddModeratorIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { DarkModeOutlined, Padding } from "@mui/icons-material";

const ItemFull = ({ title, to, icon, isSelected, setIsSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      component={<Link />}
      to={to}
      active={isSelected === title}
      onClick={() => setIsSelected(title)}
      icon={icon}
      style={{ color: colors.grey[300] }}
      rootStyles={{
        ["." + menuClasses]: {
          "&:hover": {
            color: colors.grey[100],
          },
        },
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </MenuItem>
  );
};

const ItemShort = ({ title, to, icon, isSelected, setIsSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      component={<Link />}
      to={to}
      active={isSelected === title}
      onClick={() => setIsSelected(title)}
      icon={icon}
      rootStyles={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.grey[300],
      }}
    ></MenuItem>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSelected, setIsSelected] = useState("home");

  return (
    <Box height="100vh" display="flex">
      {/* Sidebar */}
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[800]}
        style={{ border: "unset" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Menu
            iconShape="square"
            menuItemStyles={{
              button: {
                [`&:hover`]: {
                  backgroundColor: colors.primary[800],
                  border: `2px solid ${colors.primary[700]}`,
                  borderRadius: "9px",
                },
              },
            }}
          >
            {/* LOGO & ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <ArrowForwardIcon /> : undefined}
              style={{
                border: "none",
                margin: "24px 0 96px 0",
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h2"
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
            {/* COLLAPSED ICONS */}
            {isCollapsed ? (
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <ItemShort
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  icon={<AddModeratorIcon />}
                  to={"/add"}
                />
                <ItemShort
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  icon={<FormatListBulletedIcon />}
                  to={"/notes"}
                />
                <ItemShort
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  icon={<DeleteOutlineIcon />}
                  to={"/trash"}
                />
                <ItemShort
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  icon={<FavoriteBorderIcon />}
                  to={"/important"}
                />
              </Box>
            ) : (
              // EXTENDED MENU
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 12px",
                  gap: "12px",
                }}
              >
                <ItemFull
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  title={"Add"}
                  icon={<AddModeratorIcon />}
                  to={"/add"}
                />
                <ItemFull
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  title={"Notes"}
                  icon={<FormatListBulletedIcon />}
                  to={"/notes"}
                />
                <ItemFull
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  title={"Trash"}
                  icon={<DeleteOutlineIcon />}
                  to={"/trash"}
                />
                <ItemFull
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  title={"Important"}
                  icon={<FavoriteBorderIcon />}
                  to={"/important"}
                />
              </Box>
            )}
          </Menu>
          {/* THEME SWITCH */}
          <Menu
            rootStyles={{
              ["." + menuClasses.button]: {
                "&:hover": {
                  backgroundColor: "unset",
                },
              },
            }}
            iconShape="square"
            style={{
              marginBottom: "30px",
            }}
          >
            <MenuItem
              icon={
                isCollapsed ? (
                  theme.palette.mode === "light" ? (
                    <LightModeOutlinedIcon
                      onClick={colorMode.toggleColorMode}
                    />
                  ) : (
                    <DarkModeOutlined onClick={colorMode.toggleColorMode} />
                  )
                ) : undefined
              }
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  {theme.palette.mode === "light" ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <DarkModeOutlined />
                  )}
                  <Switch onChange={colorMode.toggleColorMode} />
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
