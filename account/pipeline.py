from .models import Account

def save_profile(backend, strategy, details, response, user=None, *args, **kwargs):
    
    url = None
    if backend.name == 'google-oauth2':
        url = response['image'].get('url')
        ext = url.split('.')[-1]
    if url:
        account, created = Account.objects.get_or_create(user=user)
        account.user = user
        account.avatar = url
        account.save()