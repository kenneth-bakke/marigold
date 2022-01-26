import React from 'react';
import Cookies from 'js-cookie'
var csrftoken = Cookies('csrftoken');

const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;