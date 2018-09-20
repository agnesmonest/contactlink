/**
 * @author yuni.ikrima
 */

import communications from 'react-native-communications';

const AtiSMS = {
    text: (phoneNumber, body) => {
        communications.text(phoneNumber, body);
    },
    textWithoutEncoding: (phoneNumber, body) => {
        communications.textWithoutEncoding(phoneNumber, body);
    },
};

export default AtiSMS;