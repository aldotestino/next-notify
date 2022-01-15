import Button from '../components/Button';
import { useNotify } from '../components/Notification';
import { notificationCode, _appCode, registerCode, register2Code, myNotificationCode } from '../codes';
import { MyNotification } from '../components/MyNotification';
import Code from '../components/Code';

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
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="mb-10 text-4xl font-mono">next-notify</h1>
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
          {triggers.map((t, i) => <Button key={i} action={t.action} state={t.state}>{t.label}</Button>)}
        </div>
      </div>
      <div className='flex flex-col items-center mb-10'>
        <h1 className='text-4xl mt-10 mb-4'>Requirements</h1>
        <ol className='list-decimal'>
          <li>
            <a href="https://tailwindcss.com/" className='hover:underline text-xl mb-4'>Tailwind css</a>
          </li>
          <li>
            <a href="https://heroicons.com/" className='hover:underline text-xl'>Heroicons</a>
          </li>
        </ol>
        <h1 className='text-4xl mt-10'>How to use</h1>
        <ol className='list-decimal'>
          <li>
            <p className='text-xl my-4'>Create <code>Notification.tsx</code> file</p>
            <Code>{notificationCode}</Code>
          </li>
          <li>
            <p className='text-xl my-4'>Wrap your entire app with <code>NotificationProvider</code></p>
            <Code>{_appCode}</Code>
          </li>
          <li>
            <p className='text-xl my-4'>In every component you want is possible to spawn a notification</p>
            <Code>{registerCode}</Code>
          </li>
          <li>
            <p className='text-xl my-4'>Define a custom notification</p>
            <Code>{myNotificationCode}</Code>
            <div className='h-4'></div>
            <Code>{register2Code}</Code>
          </li>
        </ol>
      </div>
    </>
    
  );
}

export default Home;
