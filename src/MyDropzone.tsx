import { useDropzone } from 'react-dropzone';

export const MyDropzone = () => {
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
};