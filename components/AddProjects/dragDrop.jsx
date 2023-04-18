import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
import { UploadFile, ConfigProvider } from 'antd';
import { useState } from 'react';
import { useDB } from '@/lib/databaseContext';
import { v4 as uuidv4 } from 'uuid';

const DragAndDrop = ({fileList, setFileList}) => {
  const [uploading, setUploading] = useState(false);

  const database = useDB() 

  const handleUpload = () => {
    setUploading(true);
    // You can use any AJAX library you like
  };
  const props = {
    name: 'file',
    multiple: true,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, [file, uuidv4()]]);
      console.log(fileList);
      return false;
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  }

  return (
    <ConfigProvider theme={{
      token: {
        colorText: '#ededed',
        colorIcon: '#ededed',
        colorIconHover: '#ededed',
        colorBgTextActive: '#ededed',
        colorBorder: '#ededed',
        colorFill: '#ededed',
        colorBgBase: '#ededed',
        colorBgSpotlight: '#ededed',
      }
    }}>
      <Dragger {...props}  >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint" style={{color: 'white'}}>
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
      <button onClick={handleUpload}>Kirim Data</button>
    </ConfigProvider>
)};
export default DragAndDrop;