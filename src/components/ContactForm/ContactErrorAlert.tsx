import React from 'react';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { Alert, AlertTypes } from '~/components/Alert/Alert';

export const ContactErrorAlert: React.FC = () => {
  return (
    <Alert type={AlertTypes.DANGER}>
      <h5>
        <AccessibleEmoji emoji="😢" description="Cry emoji" />
        {' Whoops'}
      </h5>
      <p>Something went wrong. Please try again.</p>
    </Alert>
  );
};
