import React, { useState } from 'react';
import classNames from 'classnames';
import axios, { AxiosRequestConfig } from 'axios';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const axiosReqConfig: AxiosRequestConfig = {
      url: e.currentTarget.action,
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: new URLSearchParams(formData as any).toString(),
    };

    try {
      await axios(axiosReqConfig);
      alert('SUCCESS!');
    } catch (_err) {
      alert('error!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label htmlFor="name">
            <span className="label">Name</span>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              minLength={2}
              maxLength={50}
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            <span className="label">Email</span>
            <br />
            <input type="email" name="email" placeholder="Email" required />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            <span className="label">Message</span>
            <textarea
              name="message"
              id="message"
              rows={7}
              required
              minLength={10}
              style={{ resize: 'none' }}
            />
          </label>
        </p>
        <p>
          <button
            type="submit"
            className={classNames('button button--primary button--block button--lg', {
              'button--disabled': loading,
            })}
            disabled={loading}
          >
            Send
          </button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
