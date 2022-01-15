import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeProps {
  children: string
}

export default function Code({ children }: CodeProps) {

  return <div className='max-w-4xl'>
    <SyntaxHighlighter style={atomOneDark} language='tsx' >
      {children}
    </SyntaxHighlighter>
  </div>;
}