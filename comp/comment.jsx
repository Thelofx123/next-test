import { Box, Typography } from "@mui/material"
import style from "../styles/comment.module.css"

const Comment = ({data}) => {
    console.log(data)
    return(
        <Box>
        {data ? 
        <div className={style.main}>
            <div>
                <p style={{color:'#000'}}>{data.message}</p>
            </div>
        </div> : <Typography>No comment</Typography>}
        </Box>
    )
}
export default Comment