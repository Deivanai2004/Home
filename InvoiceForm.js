import React, { useState, useEffect } from 'react';

function InvoiceForm() {
  const [invoiceID, setInvoiceID] = useState('');
  useEffect(() => {
    const newInvoiceID = generateUniqueID();
    setInvoiceID(newInvoiceID);
  }, []);
  const generateUniqueID = () => {
    const timestamp = Date.now();
    return `INV-${timestamp}`;
  };

  return (
    <div>
      <form>
        <div>
          <label>Invoice ID:</label>
          <input type="text" value={invoiceID} readOnly />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;


