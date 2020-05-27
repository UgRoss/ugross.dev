import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface NetlifyFormProps {
  location: {
    pathname: string;
  };
}

const NetlifyForm: React.FC<NetlifyFormProps> = ({ location }) => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const axiosReqConfig: AxiosRequestConfig = {
      url: '/',
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: new URLSearchParams(formData as any).toString(),
    };

    try {
      await axios(axiosReqConfig);
      alert('SUCCESS!');
    } catch (_err) {
      alert('error!');
    }
  };

  return (
    <div>
      <form name="contact" data-netlify="true" onSubmit={handleFormSubmit}>
        <p>
          <label htmlFor="name">
            Your Name:
            <input id="name" type="text" name="name" />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Your Email:
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label htmlFor="role">
            {'Your Role: '}
            <select name="role[]" multiple id="role">
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label htmlFor="message">
            {'Message: '}
            <textarea name="message" id="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default NetlifyForm;
