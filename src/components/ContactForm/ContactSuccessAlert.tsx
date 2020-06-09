import React from 'react';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';

export const ContactSuccessAlert: React.FC = () => {
  return (
    <div className="alert alert--success">
      <h5>
        {'Thank you! '}
        <AccessibleEmoji emoji="🎉" description="Celebration Emoji" />
      </h5>
      <p>
        {`I've received your message and will check it as soon as possible `}
        <AccessibleEmoji emoji="🙂" description="smile" />
      </p>
    </div>
  );
};

export default ContactSuccessAlert;
