# rec-server
A lightweight http server that will always send the same answer. You can use it to debug, test or redirect. Not production ready.

## Configure your message
You can configure your message by changing environment variables that are going to be read at execution time.

| **Name** |  **Default**  | **Description** |
| ------------------- | ------------------- | ------------------- |
|  **REC_PORT** |  8000 | Server listening port |
|  **REC_HTTP_CODE** |  200 | Http response code to be returned |
|  **REC_HTTP_STATUS** | OK | The http response message status, if not set default messages for the selected **REC_HTTP_CODE** will be used |
|  **REC_HTTP_VERSION** | Based on http request | The http version used in the message, if not set the request will dictate the version |
|  **REC_HTTP_HEADERS** | Content-Length=0 | The http headers to be sent on the response, headers must be separated by ';' and header name and value must also be separated with '='. Example: 'Header1=Value1;Header2=Value2;Header3=Value3' |
|  **REC_HTTP_PAYLOAD** | none | The Http body to be sent in the response, no body is sent by default. The header 'Content-Length' is not automatically set. |
