def count_vowels(s: str) -> int:
    """Count the number of vowels (a, e, i, o, u) in a string, case-insensitive."""
    vowels = "aeiouAEIOU"
    return sum(1 for char in s if char in vowels)
