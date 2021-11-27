import json
import random
import string

import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("ToDoTable")

def lambda_handler(event, context):
    todo = event["todo"]
    todo_id = "".join(random.choices(string.ascii_letters + string.digits, k=12))
    item = {"todo_id": todo_id, "todo": todo}
    table.put_item(Item=item)
    response = {"statusCode": 200, "body": json.dumps(item)}
    return response