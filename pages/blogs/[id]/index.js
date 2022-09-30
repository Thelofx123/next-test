import { Box } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import BlogPost from "../../../comp/blogPost"



const blogPost = ({data,comment}) =>{
      console.log(comment.data)
    return ( 
        <Box>
            <BlogPost data={data} comment={comment.data}></BlogPost>
        </Box>
    )
}

  export async function getServerSideProps(ctx) {
    const res = await fetch(`https://dummyapi.io/data/v1/post/${ctx.query.id}`,{
    headers: {
                "Content-type": "application/json; charset=UTF-8",
                 "app-id": "6336455296396a087298080d",
               }})
    const data = await res.json()
               
    const res2 = await fetch(`https://dummyapi.io/data/v1/post/${ctx.query.id}/comment`,{
      headers: {
                  "Content-type": "application/json; charset=UTF-8",
                   "app-id": "6336455296396a087298080d",
                 }})
      const comment = await res2.json()
                 

    return { props: { data,comment } }
  }



export default blogPost