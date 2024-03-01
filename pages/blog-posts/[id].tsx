import React from 'react';
import {useRouter} from "next/router";


export default function PostPage() {

    const router = useRouter();

    const post_id = router.query.id;

    console.log("post_id",post_id);


    return(
        <>
           This is Post Page!!
        </>
    )
}