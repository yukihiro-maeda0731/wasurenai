import json
import random
import string

import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("ToDoTable")

def lambda_handler(event, context):
    print("eventの値")
    print(event)
    print("bodyの値")
    print(event["body"])
    body = json.loads(event["body"])
    print("todoの値")
    print(body["todo"])
    todo = event
    todo_id = "".join(random.choices(string.ascii_letters + string.digits, k=12))
    item = {"todo_id": todo_id, "todo": todo}
    table.put_item(Item=item)
    # response = {"statusCode": 200, "body": json.dumps(item), headers: {
    #         "Content-Type: application/json",
    #         "Access-Control-Allow-Origin": "*",
    #         "Access-Control-Allow-Headers": "*"
    #     }}
    # return response
    
    return  {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
        },
        'body': json.dumps(item)
    }