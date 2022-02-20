import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from './../hooks/useFetching';
import PostService from './../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommsById(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        console.log(params.id)
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>
                Вы открыли страницу поста номер {params.id}
            </h1>
            {isLoading
                ? <Loader />
                : <div> {post.id}. {post.title} </div>
            }
            <h2>
                Комментарии
            </h2>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div style={{ marginTop: 15 }}>
                            <h4>{comm.email}</h4>
                            <div>{comm.body}</div>
                        </div>

                    )} </div>
            }
        </div>
    )
}

export default PostIdPage