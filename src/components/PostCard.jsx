import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden flex items-center justify-center bg-gray-200">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
