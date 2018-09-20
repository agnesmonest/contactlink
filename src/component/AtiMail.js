/**
 * @author runy.novitasari
 * @since June 22, 2018
 */

import communications from 'react-native-communications';

const AtiMail = {
    /**
     * Parameter must be filled with type :
     * to  : array
     * cc  : array
     * bcc : array
     * subject : string
     * body    : string
     */

    email: (to, cc, bcc, subject, body) => {
        communications.email(to, cc, bcc, subject, body);
    },

};

export default AtiMail;