import React, { useState } from 'react';
import XMarkIcon  from '@heroicons/react/24/outline/XMarkIcon'

function EmailMockup() {
  const [composeEmail, setComposeEmail] = useState({
    to: '',
    subject: '',
    message: '',
    attachments: [],
  });

  const [inbox, setInbox] = useState([
    {
      from: 'maintenance@example.com',
      subject: 'Urgent: Maintenance Required at Property A',
      message: 'Dear Manager, we have identified several maintenance issues at Property A that require immediate attention...',
    },
    {
      from: 'leasing@example.com',
      subject: 'Extension of Lease for Property B',
      message: 'We would like to discuss the possibility of extending our lease for Property B...',
    },
    {
      from: 'newtenant@example.com',
      subject: 'Inquiry About Lease for Property C',
      message: 'Hello, I am interested in leasing Property C. Could you please provide more information about the property?',
    },
  ]);

  const [sent, setSent] = useState([
    {
      to: 'tenant@example.com',
      subject: 'Payment Reminder for the Month',
      message: 'This is a reminder to submit your payment for the month of November for Property A.',
    },
    {
      to: 'realestateagent@example.com',
      subject: 'Inquiry About Purchasing a New Property',
      message: 'We are looking to purchase a new property in the downtown area. Do you have any listings available?',
    },
    {
      to: 'plumbingcontractor@example.com',
      subject: 'Plumbing Issue at Property B',
      message: 'There is a plumbing issue at Property B that requires immediate attention. Please send someone to inspect it as soon as possible.',
    },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);

  const properties = {
    "Property 1" : ['Lease 1.pdf', 'BG Check 1.pdf'],
    "Property 2" : ['Lease 2.pdf', 'BG Check 2.pdf'],
    "Property 3" : ['Lease 3.pdf', 'BG Check 3.pdf'],
    // ... more properties and their documents
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComposeEmail({ ...composeEmail, [name]: value });
  };

  const handleSendEmail = () => {
    setSent([composeEmail, ...sent]);
    setComposeEmail({
      to: '',
      subject: '',
      message: '',
      attachments: [],
    });
  };

  const handleSelectProperty = (property) => {
    setComposeEmail({ ...composeEmail, attachments: properties[property] });
    setShowDropdown(false);
  };

  const handleRemoveAttachment = (index) => {
    const newAttachments = composeEmail.attachments.filter((_, i) => i !== index);
    setComposeEmail({ ...composeEmail, attachments: newAttachments });
  };

  return (
    <div className="flex flex-col">
      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-semibold mb-4">Compose Email</h2>
        <input
          type="text"
          name="to"
          value={composeEmail.to}
          onChange={handleInputChange}
          placeholder="To"
          className="p-2 w-full border rounded mb-2"
        />
        <input
          type="text"
          name="subject"
          value={composeEmail.subject}
          onChange={handleInputChange}
          placeholder="Subject"
          className="p-2 w-full border rounded mb-2"
        />
        <textarea
          name="message"
          value={composeEmail.message}
          onChange={handleInputChange}
          placeholder="Message"
          className="p-2 w-full border rounded mb-4"
          rows="4"
        />
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          Upload Documents
        </button>
        {showDropdown && (
          <div className="absolute bg-white border rounded mt-2">
            {Object.keys(properties).map((property) => (
              <div
                key={property}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectProperty(property)}
              >
                {property}
              </div>
            ))}
          </div>
        )}
        <button
          onClick={handleSendEmail}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Attachments:</h3>
          <div>
            {composeEmail.attachments.length > 0 ? (
              composeEmail.attachments.map((attachment, index) => (
                <div key={index} className="flex items-center p-2 border rounded mb-2">
                  <span className="flex-grow">{attachment}</span>
                  <button
                    onClick={() => handleRemoveAttachment(index)}
                    className="bg-white text-black p-1 rounded"
                  >
                    <XMarkIcon className="h-5 inline-block w-5"/>
                  </button>
                </div>
              ))
            ) : (
              <div>No attachments</div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-semibold mb-4">Inbox</h2>
        <ul className="list-none p-0">
          {inbox.map((email, index) => (
            <li key={index} className="border-b mb-2 pb-2">
              <strong>From:</strong> {email.from} <br />
              <strong>Subject:</strong> {email.subject}
              <p>{email.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Sent</h2>
        <ul className="list-none p-0">
          {sent.map((email, index) => (
            <li key={index} className="border-b mb-2 pb-2">
              <strong>To:</strong> {email.to} <br />
              <strong>Subject:</strong> {email.subject}
              <p>{email.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EmailMockup;
