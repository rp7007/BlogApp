import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { Container } from '../components';

function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    setUser(userData);
                } else {
                    navigate('/login'); // Redirect to login if no user data
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate('/login'); // Redirect to login on error
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    if (loading) {
        return (
            <div className='w-full py-8 flex items-center justify-center'>
                <Container>
                    <h1 className='text-2xl font-bold text-gray-700'>Loading...</h1>
                </Container>
            </div>
        );
    }

    if (!user) {
        return null; // Handle case where user data is not available
    }

    return (
        <div className="w-auto h-auto flex items-center justify-center bg-gray-200 py-2">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Profile Information</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Name:</h2>
                    <p className="text-gray-700">{user.name}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Email:</h2>
                    <p className="text-gray-700">{user.email}</p>
                </div>
                {/* <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">User ID:</h2>
                    <p className="text-gray-700">{user.$id}</p>
                </div> */}
            </div>
        </div>
    );
}

export default Profile;
