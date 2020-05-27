import React from 'react';

interface NetlifyFormProps {}

const NetlifyForm: React.FC<NetlifyFormProps> = () => {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
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
