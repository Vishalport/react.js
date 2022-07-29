const AWS = require('aws-sdk'); // Load the SDK for JavaScript
const mailer = require("./mailer");
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

AWS.config.update({region: 'eu-west-1'}); // Set the region that you configured in AWS


// Our end-point for handling the enquiry request
app.post('/api/contact', (req, res, next) => {
    return mailer.sendMail('Vkvishal.55.mk@gmail.com', ['Vkvishal.mk.55@gmail.com'], req.body)
      .then(() => res.send(req.body))
      .catch(next);
  });
  
  app.listen(port, () => console.log(`Listening on port ${port}`));

  const post = async (data) => {
    const { url } = data;
  
    delete data.url;
  
    const params = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
  
    const response = await fetch(url, params);
  
    if (response.status < 200 && response.status >= 300) {
      const res = await response.json();
  
      throw new Error(res);
    }
  
    return response.json();
  };

  submitForm() {
    const {name, email, message} = this.formElement.current.elements;
    const payload = {
      url: 'api/contact',
      name: name,
      email: email,
      message: message,
    };

    post(payload)
      .then(() => {
        this.setState({error: null, submitted: true});
      })
      .catch(error => {
        this.setState({error: error.message, submitted: false});
      });
  }