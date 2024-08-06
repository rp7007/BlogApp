import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (slug) {
                    const fetchedPost = await appwriteService.getPost(slug);
                    if (fetchedPost) {
                        setPost(fetchedPost);
                    } else {
                        setError("Post not found.");
                        navigate('/');
                    }
                } else {
                    setError("Invalid post ID.");
                    navigate('/');
                }
            } catch (err) {
                console.error('Error fetching post:', err);
                setError("Failed to fetch post.");
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, navigate]);

    if (loading) {
        return (
            <div className='w-full py-8 flex items-center justify-center'>
                <Container>
                    <h1 className='text-2xl font-bold text-gray-700'>Loading...</h1>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className='w-full py-8 flex items-center justify-center'>
                <Container>
                    <h1 className='text-2xl font-bold text-red-600'>{error}</h1>
                </Container>
            </div>
        );
    }

    return (
        <div className='py-8'>
            <Container>
                {post ? <PostForm post={post} /> : <p className='text-center text-gray-600'>No post available.</p>}
            </Container>
        </div>
    );
}

export default EditPost;
