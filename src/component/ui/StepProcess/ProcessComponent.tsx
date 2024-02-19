const ProcessComponentOne = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-lg font-bold">Start Payment</h1>
      <p className="text-sm">
        Welcome to our payment process! Before we proceed, let's ensure
        everything in your cart is accurate. Take a moment to review your
        selected items, quantities, and prices. Once you're satisfied, click the
        "Proceed to Payment" button below to initiate the secure transaction
        process.
      </p>
    </div>
  );
};

const ProcessComponentTwo = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-lg font-bold">Process Payment</h1>
      <p className="text-sm">
        Thank you for proceeding with the payment. We are currently processing
        your transaction securely. This might take a few moments, so please be
        patient. Rest assured, your payment details are safe with us. Once the
        process is complete, you'll be notified of the status.
      </p>
    </div>
  );
};

const ProcessComponentThree = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-lg font-bold">Finished Payment</h1>
      <p className="text-sm">
        Congratulations on successfully completing your payment! We're delighted
        to confirm that your transaction has been processed securely. You will
        receive an email confirmation shortly, detailing your purchase. Thank
        you for choosing us!
      </p>
    </div>
  );
};

const detailComponent = [
  <ProcessComponentOne />,
  <ProcessComponentTwo />,
  <ProcessComponentThree />,
];
