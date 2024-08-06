import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import welcomeImg from '../assets/welcome-img.jpg';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const result = await appwriteService.getPosts();
                if (result) {
                    setPosts(result.documents);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className='w-full py-8 flex items-center justify-center'>
                <Container>
                    <h1 className='text-2xl font-bold text-gray-700'>Loading...</h1>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-5 text-center">
                <Container>
                    <h1 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700">
                        Login to read blogs and see new content.
                    </h1>
                    <div className="mt-6 relative">
                        <img
                            src={welcomeImg}
                            alt="Welcome Image"
                            className="sm:w-86 sm:h-76 md:w-[40vw] md:h-[50vh] lg:w-[50vw] lg:h-[60vh] object-cover rounded-lg mx-auto"
                        />
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8 bg-gray-100'>
            <Container>
                <div className='text-center mb-8'>
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Welcome to Our Blog!</h1>
                    <p className="text-gray-600 text-lg">Discover our latest blogs and stay updated with the latest trends.</p>
                </div>
                <div className='flex flex-wrap -m-4 justify-center'>
                    {posts.slice(0, 3).map((post) => (
                        <div key={post.$id} className='p-2 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                {authStatus && (
                    <div className='mt-8 text-center'>
                        <Link
                            to="/all-posts"
                            className="inline-block px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105"
                        >
                            View All Blogs
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Home;
