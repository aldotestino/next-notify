import Button from '../components/Button';
import { useNotify } from '../components/Notification';

interface Trigger {
  label: string
  state: 'success' | 'error' | 'warning' | 'info'
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-mono">next-notify</h1>
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        {triggers.map(t => <Button key={t.state} action={t.action} state={t.state}>{t.label}</Button>)}
      </div>
    </div>
  );
}

export default Home;
