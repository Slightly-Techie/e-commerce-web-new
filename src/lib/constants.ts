const REGEXPATTERNS = {
  name: /^[a-zA-Z]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*.?&])[A-Za-z\d@$!%*.?&]{8,}$/,
  phoneNumber: /^[+]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/,
  internationalPhoneNumber: /^\+[1-9]\d{1,14}$/,
  verificationCode: /^\d{6}$/,
  username: /^[a-zA-Z0-9_.-]{3,}$/,
  number: /^\d+$/,
};

export { REGEXPATTERNS };
