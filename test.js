const localWebhookClient = require('./index');

localWebhookClient(
    'http://local-webhook-test.herokuapp.com/',
    'http://localhost:5555/api/cb_webhook_resource/CHARG3B33');