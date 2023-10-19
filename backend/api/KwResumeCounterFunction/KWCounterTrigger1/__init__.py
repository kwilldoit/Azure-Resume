import azure.functions as func

def main(req: func.HttpRequest, Counter: func.DocumentList) -> func.Document:
    Counter_doc = None

    if Counter:
        Counter_doc = Counter[0]

    # Initialize the counter if it doesn't exist in Cosmos DB
    if Counter_doc is None:
        Counter_doc = {
            "id": "1",
            "count": 0,
        }

    # Increment the count for each new trigger
    Counter_doc["count"] += 1

    # Create a dictionary with only "id" and "count" values
    response_data = {
        "id": Counter_doc["id"],
        "count": Counter_doc["count"]
    }

    # Return the updated document as a JSON response
    return func.Document.from_dict(response_data)
