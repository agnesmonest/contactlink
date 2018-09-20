/**
 * @author yuni.ikrima
 */

import communications from 'react-native-communications';

const AtiWeb = {
    redirect: (address) => {
        communications.web(address);
    },
};

export default AtiWeb;