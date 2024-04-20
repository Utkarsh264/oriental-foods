export default function AddressInputs({addressProps,setAddressProp,disabled=false}) {
    const {phone, streetAddress, pinCode, city, state} = addressProps;
    return (
      <>
        <label>Phone</label>
        <input
          disabled={disabled}
          type="tel" placeholder="Phone number"
          value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
        <label>Street address</label>
        <input
          disabled={disabled}
          type="text" placeholder="Street address"
          value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)}
        />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label>Pin code</label>
            <input
              disabled={disabled}
              type="text" placeholder="Pin code"
              value={pinCode || ''} onChange={ev => setAddressProp('pinCode', ev.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input
              disabled={disabled}
              type="text" placeholder="City"
              value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
            />
          </div>
        </div>
        <label>State</label>
        <input
          disabled={disabled}
          type="text" placeholder="state"
          value={state || ''} onChange={ev => setAddressProp('state', ev.target.value)}
        />
      </>
    );
  }