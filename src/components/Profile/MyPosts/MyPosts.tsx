import React, {memo} from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {ProfilePagePropsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import {Button, FormGroup, TextField} from "@mui/material";


export const MyPosts = memo((props: ProfilePagePropsType) => {
    let postElement = props.profilePage.posts.map(el => <Post
        key={el.id}
        id={el.id}
        post={el.post}
        likes={el.likes}
        avatar={props.avatar}
    />)

    let addPost = (post: string) => {
        props.addPost(post)
    }
    return (
        <div className={s.wrapper}>
            <h2>
                My Posts
            </h2>
            <AddPostForm addPost={addPost}/>
            <div className={s.posts}>{postElement}</div>
        </div>
    )
})

type AddPostFormType = {
    addPost: (post: string) => void
}

type PostErrorType = {
    post?: string
}

const AddPostForm = (props: AddPostFormType) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validate: (values) => {
            const errors: PostErrorType = {}
            if (!values.post.length) {
                errors.post = 'At least 1 symbol'
            }
            return errors
        },
        onSubmit: values => {
            formik.resetForm()
            props.addPost(values.post)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormGroup>
                {formik.errors.post &&
                    <div style={{color: 'red'}}>{formik.errors.post}</div>}
                <TextField
                    error={formik.touched.post && Boolean(formik.errors.post)}
                    size={'small'}
                    label="Post"
                    margin="normal"
                    multiline
                    maxRows={4}
                    {...formik.getFieldProps('post')}
                />
                <Button style={{width: '30px'}} type={'submit'} variant={'contained'} color={'primary'}>
                    Send
                </Button>
            </FormGroup>
        </form>
    )
}