from django.test import TestCase
from django.contrib.auth.models import User
from .models import Account, Towns


class UserModelTests(TestCase):
    def test_if_user_is_created(self):
        self.assertEquals(User.objects.count(), 0)

        User.objects.create_user(username='john',  password='johnpassword')
        self.assertEquals(User.objects.count(), 1)


class AccountModelTests(TestCase):
    def test_if_account_is_created(self):
        self.assertEquals(Account.objects.count(), 0)

        User.objects.create_user(username='john',  password='johnpassword')
        self.assertEquals(Account.objects.count(), 1)

    def test_if_towns_enum_returns_correct_data(self):
        User.objects.create_user(username='john',  password='johnpassword')
        test_account = Account.objects.first()
        test_account.favorite_town = Towns.CASTLE
        self.assertEquals(test_account.favorite_town, Towns.CASTLE)
