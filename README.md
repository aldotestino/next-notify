## next-notify

Simple notification system for React applications styled with tailwind
- Here's an [example](https://next-notify.vercel.app/)

### Setup

1. Copy `/src/components/Notification.tsx` file in your project
2. Wrap your entire app with `NotificationProvider`
  ```tsx
  // _app.tsx

  function App({ Component, pageProps }: AppProps) {
    return (
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    );
  }
  ```
3. In every component you want is possible to spawn a notification
  ```tsx
  // register.tsx

  const { notify } = useNotify();

  notify({
    title: 'Welcome! 🚀'
    description: 'Your account has been succesfully created,',
    type: 'success',
    duration: 5000
  });
  ```
### API
|option|description|required|default|
|---|---|:-:|:-:|
|title|The title of the notification|required|-|
|description|The description of the notification|required|-|
|type|There are four types of notification: 'success', 'error', 'warning' and 'info'|not required|'sucess'|
|duration|The duration of the notification|not required|3000|
