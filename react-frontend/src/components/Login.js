import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoginService from "../services/LoginService";
 import { ToastContainer, toast } from "react-toastify";


 import Avatar from "@mui/material/Avatar";
 import Button from "@mui/material/Button";
 import CssBaseline from "@mui/material/CssBaseline";
 import TextField from "@mui/material/TextField";
 import FormControlLabel from "@mui/material/FormControlLabel";
 import Checkbox from "@mui/material/Checkbox";
 import Grid from "@mui/material/Grid";
 import Box from "@mui/material/Box";
 import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
 import Typography from "@mui/material/Typography";
 import Container from "@mui/material/Container";
 import { createTheme, ThemeProvider } from "@mui/material/styles";

 import "react-toastify/dist/ReactToastify.css";

 
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();
const Login = () => {


    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const validateLogin = (e) => {
    e.preventDefault();

    const admin = {
        username,
        password
    }
    console.log(admin);

    LoginService.validateCredentials(admin)
      .then((response) => {
        console.log(response);
    
    

        if(response.data=="Valid"){
            console.log("Login Successful");
            toast.success("Login Successful", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/dashboard");
        }
        else{
            toast.error("Username or password is incorrect", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

        }
      })
      .catch((error) => {
        console.log("error");
        toast.error("Username or password is incorrect", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });


    }

//   return (
    // <div>
    //   <br />
    //   <br />
    //   <div className="container" style={{ marginBottom: "30px" }}>
    //     <div className="row">
    //       <div className="card col-md-6 offset-md-3 offset-md-3">
    //         <h2 className="text-center">Admin Login</h2>
    //         <div className="card-body">
    //           <form>
    //             <div className="form-group mb-2">
    //               <label className="form-label"> Username :</label>
    //               <input
    //                 type="text"
    //                 placeholder="Enter admin username"
    //                 name="username"
    //                 className="form-control"
    //                 value={username}
    //                 onChange={(e) => setUsername(e.target.value)}
    //               ></input>
    //             </div>

    //             <div className="form-group mb-2">
    //               <label className="form-label"> Password :</label>
    //               <input
    //                 type="password"
    //                 placeholder="Enter admin password"
    //                 name="password"
    //                 className="form-control"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //               ></input>
    //             </div>

    //             <button
    //               className="btn btn-success"
    //               onClick={(e) => validateLogin(e)}
    //             >
    //               Submit{" "}
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <br />
    //   <br />
    //   <ToastContainer/>
    // </div>


     return (
       <ThemeProvider theme={theme}>
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
             
             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
               <LockOutlinedIcon />
             </Avatar>
             <Typography component="h1" variant="h5">
               Admin Log in
             </Typography>
             <Box
               component="form"
               onSubmit={validateLogin}
               noValidate
               sx={{ mt: 1 }}
             >
               <TextField
                 margin="normal"
                 required
                 fullWidth
                 id="username"
                 label="Admin User ID"
                 name="username"
                 autoComplete="userid"
                 autoFocus
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
               />
               <TextField
                 margin="normal"
                 required
                 fullWidth
                 name="password"
                 label="Admin Password"
                 type="password"
                 id="password"
                 value={password}
                 autoComplete="current-password"
                 onChange={(e) => setPassword(e.target.value)}
               />
               <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 sx={{ mt: 3, mb: 2 }}
               >
                 Login
               </Button>
             </Box>
           </Box>
         </Container>
       </ThemeProvider>
     );

//   );
}

export default Login;