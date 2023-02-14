import { Feed, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Jhonny Social
        </Typography>
        <Feed sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="profile"
            src="https://scontent.fcai20-5.fna.fbcdn.net/v/t1.6435-9/75258592_2532921076974338_6938473594573815808_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=W6k5m2xigWgAX_CmjGO&_nc_oc=AQnKsQp6UbtVR1W08KcJOmBFp_Tei48yAR4K0WSYBD4pdrtkXxO04UBFCas1vHJ-V08&_nc_ht=scontent.fcai20-5.fna&oh=00_AfB80c7iPS5B6FIfELvw_0ZGsTpgps9b0TtkjvYjvQT2AA&oe=64108C92"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="profile"
            src="https://scontent.fcai20-5.fna.fbcdn.net/v/t1.6435-9/75258592_2532921076974338_6938473594573815808_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=W6k5m2xigWgAX_CmjGO&_nc_oc=AQnKsQp6UbtVR1W08KcJOmBFp_Tei48yAR4K0WSYBD4pdrtkXxO04UBFCas1vHJ-V08&_nc_ht=scontent.fcai20-5.fna&oh=00_AfB80c7iPS5B6FIfELvw_0ZGsTpgps9b0TtkjvYjvQT2AA&oe=64108C92"
          />
          <Typography variant="span">Jhonny</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="account-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
