import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<'button'> {
  children: string
  state?: 'success' | 'error' | 'warning' | 'info',
  action: () => void
}

function Button({ children, state = 'success', action }: ButtonProps) {
  return (
    <button onClick={action} className={clsx('text-gray-50 inline-flex items-center justify-center transition whitespace-nowrap py-2 px-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-gray-50 shadow-md focus:ring-offset-2',
      state === 'success' ? 'bg-green-500 hover:bg-green-600 focus:bg-green-600 focus:ring-green-400' :
        state === 'error' ? 'bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-400' :
          state === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600 focus:ring-yellow-400' :
            'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-400'
    )}>
      {children}
    </button>
  );
}

export default Button;