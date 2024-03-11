import './App.css'
import { useDropzone } from 'react-dropzone';

function App() {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <div {...getRootProps()} style={{ background: 'green', padding: '40px' }}>
      <input
        {...getInputProps({
          onChange: (e) => {
            console.log('onChange', e);
          },
        })}
      />
      <p>Drop the files here ...</p>
    </div>
  );
}

export default App
