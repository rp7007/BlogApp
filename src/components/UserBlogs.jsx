import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import authService from '../appwrite/auth';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';
import { Container } from '../components';

const cleanHtmlContent = (html) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const cleanedContent = tempDiv.textContent || tempDiv.innerText || '';
  return cleanedContent.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '');
};

const UserBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        if (userData && userData.$id) {
          const response = await authService.getUserPosts(userData.$id);
          const cleanedPosts = response.map(post => ({
            ...post,
            content: cleanHtmlContent(post.content),
          }));
          setPosts(cleanedPosts || []);
        } else {
          setError("No user data or user ID found.");
        }
      } catch (error) {
        setError("Failed to fetch user posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userData]);

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
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-6 text-center">My Blogs</h1>
        {posts.length > 0 ? (
          <div className="flex flex-wrap -mx-2">
            {posts.map((post) => (
              <Link
                key={post.$id}
                to={`/post/${post.$id}`}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
              >
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-300">
                    {post.featuredImage ? (
                      <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <p className="text-gray-500">No image available</p>
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">{post.title}</h2>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      {post.content ? `${post.content.substring(0, 100)}...` : "No content available"}
                    </p>
                    <span className="text-blue-500 hover:underline">Read more</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No blogs found. Create your first blog post!</p>
        )}
      </Container>
    </div>
  );
};

export default UserBlogs;
