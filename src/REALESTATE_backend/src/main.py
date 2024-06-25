from kybra import query, update


@query
def greet(name: str) -> str:
    return f"Hello, {name}!"

# update


@update
def increment(n: int) -> int:
    return n + 1
