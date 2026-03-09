import {AppBar, styled, Toolbar} from '@mui/material';




const StyledAppBar = styled(AppBar)({
    background :'#355c7d',
    height: 50
})
const Header = () => {
    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png"
    return (
        <StyledAppBar>
            <Toolbar>
                <img src={logo} alt='logo' style={{width :95, marginBottom: 5}}/>
                Post a job
                Find jobs
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;