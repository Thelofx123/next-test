import { Divider } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../styles/blogpost.module.css"
import Comment from "./comment"
import axios from "axios"
const BlogPost = ({data,comment}) => {

        const [comm , setComm] = useState('')  

        const onchange = (e) => {
            setComm(e.target.value)
        }
        let postData ={ 
            id: data.id,
            post: data.id,
            owner: "60d0fe4f5311236168a109df",
            publishDate: new Date(),
            message: comm
        }
        const submit = () => { 
                    axios.post(`https://dummyapi.io/data/v1/comment/create`, {
                        id: data.id,
                        post: data.id,
                        owner: "60d0fe4f5311236168a109df",
                        publishDate: new Date(),
                        message: comm
                    },{
                        headers: {
                                    "Content-type": "application/json; charset=UTF-8",
                                     "app-id": "6336455296396a087298080d",
                                   }})
            .then((response) => {
            console.log(response);
            setComm('')
            })
            .catch((err) => {
                console.log(err)
            })
        }

       
    return(
        <div className={styles.main}>
            <div >
                    <h1>{data.text}</h1>
                    <div className={styles.half}>
                    <img className={styles.zurag} src={data.owner.picture}/>
                    <p>{data.owner.firstName} {data.owner.lastName}</p>
                    <p>{data.publishDate}</p>
                    </div>
                    <div className={styles.secHalf}>
                        <img className={styles.postPic} src={data.image}/>
                        <p>ig : <a>{data.link || "no link"}</a></p>
                    </div>

                <Divider  sx={{marginTop:'20px'}}/>
                <h2>Join the conversation</h2>
                    {comment.map(e=> <Comment data={e}></Comment>)}
                <div>
                <input type="text" onChange={onchange}  value={comm} className={styles.textWrap}></input>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}


export default BlogPost