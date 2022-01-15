import { XIcon } from '@heroicons/react/outline';
import { NotificationRenderFunction } from './Notification';

export const MyNotification: NotificationRenderFunction = ({ title, description, onClose, duration, type }) => {
  return (
    <div className="mb-4 p-4 bg-indigo-300 text-gray-900 flex space-x-2 items-start">
      <div className="flex-grow">
        <h1 className="text-lg font-semibold italic">{title}</h1>
        <p>{description}</p>
      </div>
      <button onClick={onClose}>
        <XIcon className="w-6 h-6" />
      </button>
    </div>
  );
};