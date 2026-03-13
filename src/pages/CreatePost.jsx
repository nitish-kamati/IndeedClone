
import { useState } from "react";
import Header from "../components/Header";
import {Box,Typography,styled, TextField, Button} from '@mui/material';
import image from "../post.webp";
import Dropdown from "../components/Dropdown";

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
    padding:'0 60px',
    '& > p' : {
        fontSize: '35px',
        fontWeight: '650',
        opacity:'.7'
    }
})

const FormWrapper = styled(Box) ({
    display:'flex',
    flexDirection:'column   ',
    marginTop: 20,
    padding:20,
    background:'#ffffff',
    borderRadius : 20,
    '& > *' : {
        marginTop:'20px'
    }
})

const defaultObj = {
    profile: "",
    type: "",
    description: "",
    experience:"",
    technology:[],
    salary:""
}

const options = {
    type : ["Online", "Remote", "Hybrid"],
    experience: ["0-2 years", "3-5 years", "5-8 years", "8-10 years ", "10 or more"],
    technology: ["Java", "Spring Boot", "MySql", "Python", "Javascript", "React", "C", "C++", "Ruby", "R", "AWS", "Docker", "HTML", "CSS"],
    salary: ["Rs 0-300000", "Rs 0-300000", "Rs 300000-500000", "Rs 500000- 800000", "Rs 800000-1000000", "Rs 1000000+"] 
}

const CreatePost = () => {

    const [data, setData] = useState(defaultObj);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    return (
        <>
            <Header/>
            <Component>

                <Container>
                    <Typography>Create a Job Posts</Typography>
                    <img src={image} alt="create" style={ {width: "50%", maxWidth: "300px"}}/>
                </Container>

                
                <FormWrapper>
                    <TextField 
                    placeholder="Job title" 
                    name = "Profile"
                    onChange={handleChange}
                    />
                        

                    <Dropdown
                        label = "Job Type"
                        id= "Job-type-label"
                        value={data.type}
                        handleChange = {handleChange}
                        name="type"
                        options={options.type}
                        
                    />

                    <TextField placeholder="Job description"
                        name="description"
                        onChange={handleChange}
                    />
                    
                    <Dropdown
                        label = "Experience"
                        id= "Job-experience-label"
                        value={data.experience}
                        handleChange = {handleChange}
                        name="experience"
                        options={options.experience}
                        />

                    <Dropdown
                        label = "Technology"
                        id= "Job-technology-label"
                        value={data.technology}
                        handleChange = {handleChange}
                        name= "technology"
                        options = {options.technology}
                        multiple
                        />

                    <Dropdown
                        label = "Salary"
                        id= "Job-salary-label"
                        value={data.salary}
                        handleChange = {handleChange}
                        name= "salary"
                        options = {options.salary}
                        />

                    <Button variant="contained">Save Job</Button>
                </FormWrapper>


            </Component>
            
        </>
    )
}
export default CreatePost;
