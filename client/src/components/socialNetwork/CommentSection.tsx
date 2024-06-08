import React, { useState } from 'react';
import { NewsFeedItem } from '../../models/socialNetwork/NewsFeedItem';
import EmojiPicker from 'emoji-picker-react';

interface CommentSectionProps {
  newsFeedItem: NewsFeedItem;
}

const CommentSection: React.FC<CommentSectionProps> = ({ newsFeedItem }) => {
  const [newComment, setNewComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleEmojiClick = (emojiObject: any, event: MouseEvent) => {
    setNewComment(newComment + emojiObject.emoji);
  };

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logique pour soumettre le nouveau commentaire
    console.log('Nouveau commentaire :', newComment);
    setNewComment('');
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Commentaires</h3>
      {newsFeedItem.comments.map((comment, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center">
            <img
              src={comment.authorImage}
              alt={comment.author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <p className="text-gray-600 dark:text-gray-400">{comment.author}</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{comment.content}</p>
          {comment.replies.map((reply, replyIndex) => (
            <div key={replyIndex} className="ml-8">
              <div className="flex items-center">
                <img
                  src={reply.authorImage}
                  alt={reply.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-gray-600 dark:text-gray-400">{reply.author}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{reply.content}</p>
            </div>
          ))}
        </div>
      ))}
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <div className="relative">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Écrire un commentaire..."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
          ></textarea>
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="absolute bottom-2 right-2 text-gray-500 dark:text-gray-400"
          >
            😀
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-10 right-0">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Commenter
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
