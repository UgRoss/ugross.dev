import React from 'react';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { Alert, AlertTypes } from '~/components/Alert/Alert';

export const ContactSuccessAlert: React.FC = () => {
  return (
    <Alert type={AlertTypes.SUCCESS}>
      <h5>
        {'Thank you! '}
        <AccessibleEmoji emoji="🎉" description="Celebration Emoji" />
      </h5>
      <p>
        {`I've received your message and will check it as soon as possible `}
        <AccessibleEmoji emoji="🙂" description="smile" />
      </p>
    </Alert>
  );
};
