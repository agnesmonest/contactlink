/**
 * @author runy.novitasari
 * @since June 22, 2018
 *
 */

import call from 'react-native-phone-call';

const AtiPhoneCall = {
    call: (number, prompt) => {
        const parameter = {
            number,
            prompt,
        };
        call(parameter).catch(console.error);
    },
};

export default AtiPhoneCall;
