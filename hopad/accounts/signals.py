from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Account


@receiver(post_save, sender=User)
def create_account(sender, instance, created, **kwargs):
    """
    :param sender: The model class.
    :param instance: The actual instance being saved.
    :param created: A boolean; True if a new record was created.
    """
    if created:
        Account.objects.create(user=instance)