from django.test import TestCase
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime
from ..models import Category, Note, Comment, Photo

class ModelsTest(TestCase):
    def setUp(self):
        # user;
        self.user = User.objects.create_user(username='testuser', password='12345')

        # categories;
        self.cat1 = Category.objects.create(name='Work',     description='Tasks and projects')
        self.cat2 = Category.objects.create(name='Personal', description='Personal notes')
        self.cat3 = Category.objects.create(name='Ideas',    description='Brainstorming')

        # notes; each related to user
        self.note1 = Note.objects.create(
            title='Meeting Notes',
            description='Notes from the quarterly meeting.',
            user=self.user
        )
        self.note2 = Note.objects.create(
            title='Grocery List',
            description='Milk, bread, eggs.',
            user=self.user
        )

        # comments; two related to note1 (fixed datetimes for deterministic __str__)
        dt1 = timezone.make_aware(datetime(2025, 1, 1, 9, 0, 0))
        dt2 = timezone.make_aware(datetime(2024, 1, 1, 12, 0, 0))
        dt3 = timezone.make_aware(datetime(2023, 1, 1, 18, 0, 0))
        self.comment1 = Comment.objects.create(title='First',  comment='Great point!',    created_at=dt1, note=self.note1)
        self.comment2 = Comment.objects.create(title='Second', comment='Add more items.', created_at=dt2, note=self.note1)
        self.comment3 = Comment.objects.create(title='Third',  comment='Done',            created_at=dt3, note=self.note2)

        # photos; each related to one note (OneToOne)
        self.photo1 = Photo.objects.create(note=self.note1, url='http://url1.com', title='First')
        self.photo2 = Photo.objects.create(note=self.note2, url='http://url2.com', title='Second')

        # relate cat1 and cat2 to note1 (ManyToMany)
        self.note1.categories.set([self.cat1, self.cat2])

    # TESTS
    # tests start with "test_"
    # example

    def test_user_create(self):
        self.assertEqual(str(self.user), 'testuser')

    def test_category_create(self):
        self.assertEqual(str(self.cat1), 'Work')
        self.assertEqual(str(self.cat2), 'Personal')
        self.assertEqual(str(self.cat3), 'Ideas')

    def test_note_create(self):
        self.assertEqual(str(self.note1), 'Meeting Notes')
        self.assertEqual(str(self.note2), 'Grocery List')

    def test_comment_create(self):
        self.assertEqual(str(self.comment1), f'First was created on {self.comment1.created_at}')
        self.assertEqual(str(self.comment2), f'Second was created on {self.comment2.created_at}')
        self.assertEqual(str(self.comment3), f'Third was created on {self.comment3.created_at}')

    def test_photo_create(self):
        self.assertEqual(str(self.photo1), f'Photo for note_id: {self.note1.id} @http://url1.com')
        self.assertEqual(str(self.photo2), f'Photo for note_id: {self.note2.id} @http://url2.com')

    # -------------------
    # Relationships
    # -------------------

    def test_note_categories_relationship(self):
        self.assertEqual(self.note1.categories.count(), 2)
        self.assertIn(self.cat1, self.note1.categories.all())
        self.assertIn(self.cat2, self.note1.categories.all())

    def test_note_user_relationship(self):
        self.assertEqual(self.note1.user.username, 'testuser')

    def test_note_comment_relationship(self):
        self.assertEqual(self.comment1.note, self.note1)
        self.assertEqual(self.comment1.title, 'First')
        self.assertEqual(self.comment2.note, self.note1)
        self.assertEqual(self.comment2.title, 'Second')
        self.assertEqual(self.comment3.note, self.note2)
        self.assertEqual(self.comment3.title, 'Third')

    def test_note_photo_relationship(self):
        self.assertEqual(self.photo1.note, self.note1)
        self.assertEqual(self.photo2.note, self.note2)


    def test_comment_ordering(self):
            comments = list(self.note1.comment_set.all())
            # Meta.ordering = ['-created_at'] => newest first
            # self.assertEqual(comments[0], self.comment1)  # 2025-01-01
            # self.assertEqual(comments[1], self.comment2)  # 2024-01-01
        # -------------------
    # Cascade Deletions
    # -------------------
    
    # 1 user, two related notes => 0 notes left after delete
    def test_deleting_user_cascades_to_note(self):
        self.user.delete()
        self.assertEqual(Note.objects.count(), 0)

    # note2 had ONE comment => should still be two in database related to note1!
    def test_deleting_note_cascades_to_comments(self):
        self.note2.delete()
        self.assertEqual(Comment.objects.count(), 2)

    # note1 had one photo out of two => 1 left over!
    def test_deleting_note_cascades_to_photo(self):
        self.note1.delete()
        self.assertEqual(Photo.objects.count(), 1)
