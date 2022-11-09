import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate} from "react-router-dom";

const Dashboard = (props) => {
    const navigate = useNavigate();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3">
          Dashboard
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, display: "flex" }}>
          <Button
            type="submit"
            fullWidth
            className="m-2"
            variant="contained"
            sx={{ mt: 10, mb: 2 }}
            onClick={(e) => navigate("/customers")}
          >
            Customer Data Management
          </Button>
          <Button
            className="m-2"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 10, mb: 2 }}
            onClick={(e) => navigate("/loancards")}
          >
            Loan Card Management
          </Button>
          <Button
            type="submit"
            fullWidth
            className="m-2"
            variant="contained"
            sx={{ mt: 10, mb: 2 }}
            onClick={(e) => navigate("/items")}
          >
            Items Master Data
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Dashboard;
