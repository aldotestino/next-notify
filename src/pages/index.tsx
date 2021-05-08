import Button from '../components/Button';
import { useNotify, NotificationRenderFunction } from '../components/Notification';
import { XIcon } from '@heroicons/react/outline';

const MyNotification: NotificationRenderFunction = ({ title, description, onClose, duration, type }) => {
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

interface Trigger {
  label: string
  state?: 'success' | 'error' | 'warning' | 'info' | 'normal'
  action: () => void
}

function Home() {

  const { notify } = useNotify();  

  const triggers: Trigger[] = [
    {
      label: 'Trigger Success',
      state: 'success',
      action: () => notify({
        type: 'success',
        title: 'Success!',
        description: 'This is a success notification',
        duration: 5000
      })
    },
    {
      label: 'Trigger Error',
      state: 'error',
      action: () => notify({
        type: 'error',
        title: 'Error!',
        description: 'This is an error notification',
        duration: 5000
      })
    },
    {
      label: 'Trigger Warning',
      state: 'warning',
      action: () => notify({
        type: 'warning',
        title: 'Warning!',
        description: 'This is a warning notification',
        duration: 5000
      })
    }, {
      label: 'Trigger Info',
      state: 'info',
      action: () => notify({
        type: 'info',
        title: 'Info!',
        description: 'This is a info notification',
        duration: 5000
      })
    },
    {
      label: 'Trigger Custom',
      action: () => notify({
        type: 'info',
        title: 'Custom!',
        description: 'This is a custom notification',
        duration: 5000,
        render: MyNotification
      })
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-mono">next-notify</h1>
      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
        {triggers.map((t, i) => <Button key={i} action={t.action} state={t.state}>{t.label}</Button>)}
      </div>
    </div>
  );
}

export default Home;
