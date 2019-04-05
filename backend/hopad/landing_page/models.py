from django.db import models


class Application(models.Model):
    name = models.CharField(max_length=20)
    image = models.ImageField(upload_to='landing_page/application',
                              default='landing_page/application/default/default.jpg')
    summary = models.CharField(max_length=100)
    urlCategory = models.CharField(max_length=20, default='')

    def __str__(self):
        return self.name
