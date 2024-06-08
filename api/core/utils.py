import random
import string

def generate_uuid(prefix):
    """
    Génère un UUID avec un préfixe personnalisé en utilisant uniquement des lettres minuscules de 'a' à 'z' et des chiffres de '0' à '9'.

    Args:
        prefix (str): Le préfixe à ajouter avant l'UUID.

    Returns:
        str: L'UUID avec le préfixe.
    """
    chars = string.ascii_lowercase + string.digits
    uuid_value = ''.join(random.choice(chars) for _ in range(32))

    return f"{prefix}-{uuid_value}"