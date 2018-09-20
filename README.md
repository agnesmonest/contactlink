## AtiMail
### Descriptions
This Sdk would open email application that have been installed on your phone to send email.This will only work fully when run on actual devices. 

## Instalation
>yarn add react-native-communications

## Reference
## Props
| `Property`|`Usage` | `Type`| `Required`  |
| :------ |:------| :---|:------|
|to|will be filled with email address that you want to send email| String array|No|
|cc|will be filled with email address with recipients in the cc field |String array|No|
|bcc|will be filled with email address with recipients in the bcc field|String array|No|
|subject|will be filled with your subject email|string|No|
|body|will be filled with text for your message body| string|No|

## Usage

```js
import { AtiMail } from 'ati-contact-link';
import { TouchableOpacity,} from 'react-native';
import { AtiText, AtiCard } from 'ati-ui-elements';

    <AtiCard style={{flex:1, padding:0}}>
        <TouchableOpacity onPress={() => AtiMail.email(['pocket.bank@gmail.com','anabaticID@gmail.com'], 'pdc.anabatic@gmail.com','','tes', 'This place for message body')} title="email">
            <AtiText>Email</AtiText>
        </TouchableOpacity>
    </AtiCard>
```


## AtiPhoneCall
### Descriptions
This function will allows you to open phone dialer on your device.


## Instalation
#### Install With npm
> npm install --save react-native-phone-call
#### Install With yarn
> yarn add react-native-phone-call


## Reference
## Props
| `Property`|`Usage` | `Type`| `Required`  |
| :------ |:------| :---|:------|
|number|value with the number to call|number|No|
|prompt|Optional boolean property. Determines if the user should be prompt prior to the call |boolean|No|


## Usage

```js
import { AtiPhoneCall } from 'ati-contact-link';
import { TouchableOpacity,} from 'react-native';
import { AtiText, AtiCard } from 'ati-ui-elements';

    <AtiCard style={{flex:1, padding:0}}>
       <TouchableOpacity onPress={() => AtiPhoneCall.call('02109298445', false)} title="phone call">
            <AtiText>Telephone</AtiText>
        </TouchableOpacity>
    </AtiCard>
```