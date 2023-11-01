/** @jsx jsx */ /** @jsxRuntime classic */
import React, {useContext, useState} from 'react';
import { Auth, Cache } from 'aws-amplify';
import { Modal, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { jsx } from '@emotion/react';
import { LoggedInUserContext } from '../../user-context';
import { useNavigate } from 'react-router-dom';

function SettingsModal() {
  const { fetchLoggedInUserData, setCurrentCredentials } = useContext(LoggedInUserContext);
  const [visible, changeVisible] = useState(false);
  const history = useNavigate();

  const showModal = () => {changeVisible(true)};
  const handleOk = e => {changeVisible(false)}; 
  const handleCancel = e => {changeVisible(false)};
  
  const handleLogOut = e => {
    Auth.signOut()
      .then(d => {
        setCurrentCredentials({})
        Cache.clear();
        fetchLoggedInUserData();
        history.push("/");
    });
  }
  
  return (
    <div>
      <button
        onClick={showModal}
        css={{border: 0, outline: 0, padding: '8px 5px 5px'}}
      >
        <SettingOutlined css={{fontSize: '22px'}} />
      </button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width='500px'
        closable={true}
      >
        <Button 
          onClick={handleLogOut}
          block 
          css={{border: 0, boxShadow: 'none', margin: '10px 0'}}
        >
          <h2>Log Out</h2>
        </Button>
      </Modal>
    </div>
  );   
}

export default SettingsModal;