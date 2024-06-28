import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  thumbnailUrl: string;
  title: string;
}

interface MyPostProps {
  post: Post;
}

const MyPost: React.FC<MyPostProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div
      key={post.id}
      className="group relative cursor-pointer"
      onClick={() => navigate('/protection/:protectionid')}
    >
      <img
        src={post.thumbnailUrl}
        alt={post.title}
        className="w-full h-50 object-cover group-hover:opacity-75 transition-opacity duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-75 rounded-lg">
        <p className="text-white text-center">{post.title}</p>
      </div>
    </div>
  );
};

export default MyPost;
