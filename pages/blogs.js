import { Box, Divider, Grid } from "@mui/material"
import ActionAreaCard from "../comp/card";
import axios from "axios";
import { Container } from "@mui/system";
const blogs = ({post}) => {

console.log(post)
    return(
        <Box sx={{width:'80%',margin:'auto'}}>
            <Box>
                <h1>Blog posts</h1>
                <p>Our latest updates and blogs about managing your team</p>
            </Box>
        <Container>
            <Grid container rowSpacing={4} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={2}>  
            {post.map(e=> 
               <Grid item xs={4} sm={4} md={4} >
            <ActionAreaCard data={e}></ActionAreaCard>
            </Grid>)}
            </Grid>
            </Container>
            <Divider></Divider>
            
        </Box>
    )
}

blogs.getInitialProps = async ctx => {
    try {
      const res = await axios.get('https://dummyapi.io/data/v1/post',{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "6336455296396a087298080d",
      }});
      const post = res.data.data;
      return { post };
    } catch (error) {
      return { error };
    }
  };



export default blogs