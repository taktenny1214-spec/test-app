def count_letters(s: str) -> int:
    """Count the number of alphabetical letters in string s."""
    return sum(1 for c in s if c.isalpha())
