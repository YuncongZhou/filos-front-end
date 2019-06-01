// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }))

// function ButtonAppBar() {
//   const classes = useStyles()
//   return (
//     <div className={classes.root}>
//       <AppBar position='static'>
//         <Toolbar>
//           {/* <AppBar.Brand>
//               <a href='#'>Auth0 - React</a>
//             </AppBar.Brand> */}
//           <Typography variant='h6'>
//             {' '}
//             {/*className={classes.title}>*/}
//             News
//           </Typography>
//           <Button
//             color='inherit'
//             className='btn-margin'
//             onClick={this.goTo.bind(this, 'home')}
//           >
//             Home
//           </Button>
//           {!isAuthenticated() && (
//             <Button
//               color='inherit'
//               id='qsLoginBtn'
//               className='btn-margin'
//               onClick={this.login.bind(this)}
//             >
//               Log In
//             </Button>
//           )}
//           {isAuthenticated() && (
//             <Button
//               id='qsLogoutBtn'
//               color='inherit'
//               className='btn-margin'
//               onClick={this.logout.bind(this)}
//             >
//               Log Out
//             </Button>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }

// export default ButtonAppBar
