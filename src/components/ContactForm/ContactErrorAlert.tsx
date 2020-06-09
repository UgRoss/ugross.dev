import React from 'react';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';

export const ContactErrorAlert: React.FC = () => {
  return (
    <div className="alert alert--error">
      <h5>
        <AccessibleEmoji emoji="😢" description="Cry emoji" />
        {' Whoops'}
      </h5>
      <p>Something went wrong. Please try again.</p>
    </div>
  );
};

export default ContactErrorAlert;
