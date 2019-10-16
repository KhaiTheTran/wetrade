# %% [code]

# import numpy as np
# from google.cloud.automl import PredictionServiceClient
#
# a = np.array(['date', 'open', 'high', 'low', 'close', 'volume', 'Name'])
# client = PredictionServiceClient()
# model_path = client.model_path('wetrade-255801', 'us-central1', 'untitled_1570934124959')
# payload = {'date', 'open', 'high', 'low','close', 'volume', 'Name'}
# params = {'date': 2/13/2013, 'open': 80, 'high': 70, 'low': 65, 'volume': 95, 'Name': 95}
# response = client.predict(model_path, payload, params=params)

# TODO(developer): Uncomment and set the following variable


# gcs_input_uris = ['C://Users//Student User//Downloads//sandp500//individual_stocks_5yr//individual_stocks_5yr//FB_data.csv']
# gcs_output_uri = 'venv/Scripts'
from google.oauth2 import service_account
from google.cloud import automl_v1beta1 as automl

cred_file = "wetrade-cf5eb97f7261.json"
credential = service_account.Credentials.from_service_account_file(cred_file)



# TODO(developer): Uncomment and set the following variables
project_id = 'wetrade-255801'
compute_region = 'us-central1'
model_display_name = 'aapl_test_20191013100301'
inputs = {'n_1': 68.5614, 'n_2' : 66.2431, 'n_3' : 1.7156, 'n_4' : 66.6556}


from google.cloud import automl_v1beta1 as automl

client = automl.TablesClient(project=project_id, region=compute_region, credentials=credential)

response = client.predict(
    model_display_name=model_display_name,
    inputs=inputs)
print(result)
print("Prediction results:", result.tables.value.number_value)

# for result in response.payload:
#     print("Predicted class name: {}".format(result.display_name))
#     print("Predicted class score: {}".format(
#         result.classification.score))

# %% [code]
