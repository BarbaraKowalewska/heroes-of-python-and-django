from .utils import ChoiceEnum
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from PIL import Image


class Towns(ChoiceEnum):
    CASTLE = "Castle"
    RAMPART = "Rampart"
    FORTRESS = "Fortress"
    INFERNO = "Inferno"
    NECROPOLIS = "Necropolis"
    DUNGEON = "Dungeon"
    STRONGHOLD = "Stronghold"
    TOWER = "Tower"


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=1000, blank=True)
    footer_phrase = models.CharField(max_length=50, blank=True)
    favorite_town = models.CharField(max_length=50, blank=True, choices=Towns.choices())
    creation_date = models.DateTimeField(default=timezone.now)
    reputation = models.IntegerField(default=0)
    games_won = models.IntegerField(default=0)
    games_lost = models.IntegerField(default=0)
    image = models.ImageField(default='accounts/account/default/troglodyte.jpg',
                              upload_to='accounts/account/user_images')

    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, *args, **kwargs):
        super(Account, self).save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width> 300:
            output_size = (300,300)
            img.thumbnail(output_size)
            img.save(self.image.path)

