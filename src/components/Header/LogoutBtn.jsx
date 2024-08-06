import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await authService.logout();
            dispatch(logout());
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    return (
        <button
            className='bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
