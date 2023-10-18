# TempApi.BeeApi

All URIs are relative to *http://83.212.100.226:3003/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createbee**](BeeApi.md#createbee) | **POST** /bee | Creates the data
[**deletebee**](BeeApi.md#deletebee) | **DELETE** /bee/{beeId} | Delete the element
[**getAllbee**](BeeApi.md#getAllbee) | **GET** /bee/getAll | Get all the data
[**getByParamsbee**](BeeApi.md#getByParamsbee) | **GET** /bee/getByParams | Get all the data based on user query
[**getbee**](BeeApi.md#getbee) | **GET** /bee/{beeId} | Get the element
[**updatebee**](BeeApi.md#updatebee) | **PUT** /bee/{beeId} | Updates the element



## createbee

> Bee createbee(bee)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BeeApi();
let bee = new TempApi.Bee(); // Bee | data to be created
apiInstance.createbee(bee, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bee** | [**Bee**](Bee.md)| data to be created | 

### Return type

[**Bee**](Bee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletebee

> deletebee(beeId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BeeApi();
let beeId = "beeId_example"; // String | the Id parameter
apiInstance.deletebee(beeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beeId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllbee

> [Bee] getAllbee()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BeeApi();
apiInstance.getAllbee((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Bee]**](Bee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsbee

> [Bee] getByParamsbee(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BeeApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsbee(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Bee]**](Bee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getbee

> Bee getbee(beeId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BeeApi();
let beeId = "beeId_example"; // String | the Id parameter
apiInstance.getbee(beeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beeId** | **String**| the Id parameter | 

### Return type

[**Bee**](Bee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatebee

> Bee updatebee(beeId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BeeApi();
let beeId = "beeId_example"; // String | the Id parameter
let opts = {
  'bee': new TempApi.Bee() // Bee | data to be updated
};
apiInstance.updatebee(beeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beeId** | **String**| the Id parameter | 
 **bee** | [**Bee**](Bee.md)| data to be updated | [optional] 

### Return type

[**Bee**](Bee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

