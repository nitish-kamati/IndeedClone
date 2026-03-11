import {AppBar, colors, styled, Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';
import { routePath } from '../routes/route';

const StyledAppBar = styled(AppBar)({
    background :'#355c7d',
    height: 50,
    '& > div >*': {
        textDecoration:'none',
        color:'inherit',
        marginRight : 15,
        fontSize:14

    }
})
const Header = () => {
    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png"
    return (
        <StyledAppBar>
            <Toolbar>
                <Link>
                    <img src={logo} alt='logo' style={{width :95, marginBottom: 5}}/>
                </Link>
                <Link to ={routePath.create}> Post a job</Link>
                <Link to ={routePath.posts}> Find jobs</Link>
                
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;