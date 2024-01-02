import React, { useState, useEffect, ChangeEvent } from 'react';
import { get } from '../../../utils/ajax';
import { appPermissions, remoteRoutes } from '../../../data/constants';
import { Flex } from '../../../components/widgets';
import { SelectBox, SelectOption } from './SelectBox';
import { Navigation } from '@material-ui/icons';

interface BroadcastFormProps {
  groups: string[];
  onSendBroadcast: (data: BroadcastData) => void;
}

interface BroadcastData {
  senderName: string;
  churchName: string;
  groupName: string;
  message: string;
  messageType: 'SMS' | 'WhatsApp';
}

const BroadcastForm: React.FC<BroadcastFormProps> = ({ onSendBroadcast }) => {
  // State to manage form data
  const [formData, setFormData] = useState<BroadcastData>({
    senderName: '',
    churchName: '',
    groupName: '',
    message: '',
    messageType: 'SMS',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const groups = [
    'Football',
    'Netball',
    'Basketball',
    'Vollayball',
    'Handball',
  ];

  // Fetch groups from backend on component mount (useEffect)
  useEffect(() => {
    // Fetch the list of groups from your backend here if needed
    // Example API call: fetchGroups().then(groups => setGroups(groups));
  }, []);

  // Handler for input changes (text inputs and textarea)
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler for message type selection changes
  const handleMessageTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const messageType = event.target.value as 'SMS' | 'WhatsApp';
    setFormData((prevData) => ({ ...prevData, messageType }));
  };

  //groups
  const options: SelectOption[] = [
    { label: 'Select...', value: '' },
    ...groups.map((group) => ({ label: group, value: group })),
  ];
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add validation if needed
    onSendBroadcast(formData);
  };

  useEffect(() => {
    setLoading(true);
    get(
      `${remoteRoutes.groupsCategories}`,
      (data) => {
        setData(data);
      },
      undefined,
      () => {
        setLoading(false);
      },
    );
  }, []);
  // console.log(data)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        margin: '50px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Send Broadcast</h2>
      <form
        onSubmit={handleSubmit}
        style={{ border: '1px solid #c6c7cc', padding: 20, width: '500px' }}
      >
        {/* Church Name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label htmlFor="churchName">Church Name:</label>
          <input
            type="text"
            id="churchName"
            name="churchName"
            value={formData.churchName}
            onChange={handleInputChange}
            style={{
              borderRadius: 5,
              margin: 10,
              borderColor: 'transparent',
              backgroundColor: 'transparent',
              borderBottomColor: 'green',
              padding: 5,
              outline: 'none',
              borderBottomWidth: 1,
            }}
          />
        </div>
        {/* Message */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{
              borderRadius: 5,
              margin: '10px',
              outline: 'none',
              backgroundColor: 'transparent',
            }}
          />
        </div>

        {/* Groups */}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label htmlFor="groups">Select Groups:</label>
          <SelectBox options={options} value={value} onChange={onChange} />
          {value && <p>Selected value: {value}</p>}
        </div>

        {/* Message Type */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <label htmlFor="messageType">Message Type:</label>
          <select
            id="messageType"
            name="messageType"
            value={formData.messageType}
            onChange={handleMessageTypeChange}
            style={{ borderRadius: 5, marginRight: '10px', marginTop: '10px' }}
          >
            <option value="SMS">SMS</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
        {/* Submit Button */}

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: 5,
          }}
        >
          <button
            type="submit"
            className="btn"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: 10,
              textAlign: 'center',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Send Broadcast
          </button>
        </div>
      </form>
    </div>
  );
};

export default BroadcastForm;
