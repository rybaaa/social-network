import React, {ChangeEvent} from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {ProfilePagePropsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import {Button, FormGroup, TextField} from "@mui/material";

// type MyPostsTypes = {
//     addPost: (post: string) => void
//     onChangeHandler: (text: string) => void
//     newText: string
//     posts: postType[]
//     // addPost: (post: string) => void
//     // newTextCallback:(text:string)=>void
//     // dispatch: (action: ActionTypes) => void
// }

export const MyPosts = (props: ProfilePagePropsType) => {
    let postElement = props.profilePage.posts.map(el => <Post key={el.id} id={el.id} post={el.post} likes={el.likes}/>)

    let addPost = (post:string) => {
        props.addPost(post)
    }
    return (
        <div className={s.wrapper}>
            <h2>
                My Posts
            </h2>
            <AddPostForm addPost={addPost}/>
            <div>{postElement}</div>
        </div>
    )
}

type AddPostFormType = {
    addPost:(post:string)=>void
}

const AddPostForm = (props:AddPostFormType) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: values => {
            formik.resetForm()
            props.addPost(values.post)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <TextField
                    size={'small'}
                    label="Post"
                    margin="normal"
                    multiline
                    maxRows={4}
                    {...formik.getFieldProps('post')}
                />
                <Button style={{width:'30px'}} type={'submit'} variant={'contained'} color={'primary'}>
                    Send
                </Button>
            </FormGroup>
        </form>
    )
}