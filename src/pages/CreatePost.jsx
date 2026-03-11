import Header from "../components/Header";
import {Box,Typography,styled} from '@mui/material';
import image from "../post.webp";

const Component = styled(Box) ({
    padding: '80px 200px',
    background:'#f5f5f5'
})

const Container = styled(Box)({
    display:'flex',
    background:'#ffffff',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:'0, 60',
    '& > p' : {
        fontSize: '35px',
        fontWeight: '650',
        opacity:'.7'
    }
})

const CreatePost = () => {


    return (
        <>
            <Header/>
            <Component>
                <Container>
                    <Typography>Create a Job Posts</Typography>
                    <img src={image} alt="create" style={ {width: "50%", maxWidth: "300px"}}/>
                </Container>
                <Box>

                </Box>
            </Component>
            
        </>
    )
}
export default CreatePost;
