export function useCallPhoneNumber() {
  const callPhoneNumber = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return callPhoneNumber;
}
