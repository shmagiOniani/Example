// import React, { Component } from "react";
// import MenuIcon from "@material-ui/icons/Menu";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   IconButton,
//   Typography,
//   // Checkbox,
//   withStyles,
// } from "@material-ui/core";

// const styles = (theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// });

// export class hometest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       logStatus: localStorage.getItem("userKey") != null,
//       buttonValue:
//         localStorage.getItem("userKey") != null ? (
//           "Log Out"
//         ) : (
//           <Link to="/login">Log In</Link>
//         ),
//     };
//   }
//   renderButtons = () => {
//     if (localStorage.getItem("userKey") === null) {
//       return (
//         <Button color="inherit">
//           <Link to="/registration">Registration</Link>
//         </Button>
//       );
//     } else {
//       console.log("is set");
//     }
//   };

//   logButton = (status) => {
//     if (status) {
//       localStorage.removeItem("userKey");
//       this.setState({
//         buttonValue: <Link to="/login">Log In</Link>,
//       });
//     } else {
//       this.setState({
//         buttonColor: "default",
//         buttonVariant: "default",
//         buttonValue: "Log Out",
//       });
//     }
//   };

//   render() {
//     return (
//       <div className={this.props.classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               edge="start"
//               className={this.props.classes.menuButton}
//               color="inherit"
//               aria-label="menu"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" className={this.props.classes.title}>
//               News
//             </Typography>
//             <Button
//               onClick={() => this.logButton(this.state.logStatus)}
//               {...this.state.button}
//             >
//               {this.state.buttonValue}
//             </Button>
//             {this.renderButtons()}
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }
// export default withStyles(styles)(hometest);
