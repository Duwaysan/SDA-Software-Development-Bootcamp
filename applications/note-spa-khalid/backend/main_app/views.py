from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status, permissions
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Note, Photo, Comment, Category
from .serializers import NoteSerializer, PhotoSerializer, CommentSerializer, CategorySerializer, UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404

# Define the home view
class Home(APIView):
  def get(self, request):
    content = {'message': 'Welcome to the notes-app api home route!'}
    return Response(content)
  
class NotesIndex(generics.ListCreateAPIView):
  permission_classes = [permissions.IsAuthenticated]
  serializer_class = NoteSerializer

  def get(self, request):
    try:
      queryset = Note.objects.filter(user=request.user)
      serializer = NoteSerializer(queryset, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
      return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  
  def post(self, request, *args, **kwargs):
    try:
      serializer = self.serializer_class(data=request.data, context={'request': request})
      if serializer.is_valid():
        serializer.save(user_id=request.user.id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
      return Response({"error": str(err)})
    
class NoteDetail(APIView):
  permission_classes = [permissions.IsAuthenticated]
  serializer_class = NoteSerializer
  lookup_field = 'id'

  def get(self, request, note_id):
    try:
      note = get_object_or_404(Note, id=note_id)
      comments = Comment.objects.filter(note=note_id)
      categoriesNoteHas = Category.objects.filter(note=note_id)
      categoriesNoteDoesntHave = Category.objects.exclude(id__in=note.categories.all().values_list('id'))
      return Response({
          "note": NoteSerializer(note).data,
          "comments": CommentSerializer(comments, many=True).data,
          "categoriesNoteHas": CategorySerializer(categoriesNoteHas, many=True).data,
          "categoriesNoteDoesntHave": CategorySerializer(categoriesNoteDoesntHave, many=True).data
      }, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
  def put(self, request, note_id):
    try:
        note = get_object_or_404(Note, id=note_id)
        serializer = self.serializer_class(note, data=request.data)
        if serializer.is_valid():
          serializer.save()
          return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print(str(err))
        return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
  def delete(self, request, note_id):
    try:
        note = get_object_or_404(Note, id=note_id)
        note.delete()
        return Response({'success': True}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class PhotoDetail(APIView):
  permission_classes = [permissions.IsAuthenticated]
  serializer_class = PhotoSerializer

def post(self, request, note_id):
	try:
		# Set note ID for Photo
		data = request.data.copy()
		data["note"] = int(note_id)
		#  Find Existing Photo and Delete if exists
		existing_photo = Photo.objects.filter(note=note_id)
		if existing_photo:
			existing_photo.delete()
		# Create Serializer Instance and Validate
		serializer = self.serializer_class(data=data)
		if serializer.is_valid():
			note = get_object_or_404(Note, id=note_id)
			serializer.save()
			return Response(NoteSerializer(note).data, status=status.HTTP_200_OK)
		print(serializer.errors)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	except Exception as err:
		print(str(err))
		return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    


class CommentsIndex(APIView):
  permission_classes = [permissions.IsAuthenticated]
  serializer_class = CommentSerializer

  def get(self, request, note_id):
    try:
      queryset = Comment.objects.filter(note=note_id)
      return Response(self.serializer_class(queryset, many=True).data, status=status.HTTP_200_OK)
    except Exception as err:
      return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

  def post(self, request, note_id):
    serializer = self.serializer_class(data=request.data)
    if serializer.is_valid():
      serializer.save()
      queryset = Comment.objects.filter(note=note_id)
      comments = CommentSerializer(queryset, many=True)
      return Response(comments.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  
class CategoryIndex(generics.ListCreateAPIView):
  permission_classes = [permissions.IsAuthenticated]
  serializer_class = CategorySerializer
  queryset = Category.objects.all()

class CategoryDetail(APIView):
  permission_classes = [permissions.IsAuthenticated]
  serializer_class = CategorySerializer
  lookup_field = 'id'
  
  def get(self, request, category_id):
    try:
      category = get_object_or_404(Category, id=category_id)
      return Response(self.serializer_class(category).data, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
  def put(self, request, category_id):
    try:
      category = get_object_or_404(Category, id=category_id)
      serializer = self.serializer_class(category, data=request.data)
      if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
  def put(self, request, category_id):
      try:
        category = get_object_or_404(Category, id=category_id)
        serializer = self.serializer_class(category, data=request.data)
        if serializer.is_valid():
          serializer.save()
          return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      except Exception as err:
          return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AddCategoryToNote(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def post(self, request, note_id, category_id):
    try:
      note = get_object_or_404(Note, id=note_id)
      category = get_object_or_404(Category, id=category_id)
      note.categories.add(category)
      categories_note_does_have = Category.objects.filter(note=note_id)
      categories_note_doesnt_have = Category.objects.exclude(id__in = note.categories.all().values_list('id'))
      return Response({
        "categoriesNoteHas": CategorySerializer(categories_note_does_have, many=True).data,
        "categoriesNoteDoesntHave": CategorySerializer(categories_note_doesnt_have, many=True).data
        }, status=status.HTTP_200_OK)
    except Exception as err:
      return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class RemoveCategoryFromNote(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def post(self, request, note_id, category_id):
    try:
      note = get_object_or_404(Note, id=note_id)
      category = get_object_or_404(Category, id=category_id)
      note.categories.remove(category)
      categorys_note_does_have = Category.objects.filter(note=note_id)
      categorys_note_doesnt_have = Category.objects.exclude(id__in = note.categories.all().values_list('id'))
      return Response({
        "categorysNoteHas": CategorySerializer(categorys_note_does_have, many=True).data,
        "categorysNoteDoesntHave": CategorySerializer(categorys_note_doesnt_have, many=True).data
        }, status=status.HTTP_200_OK)
    except Exception as err:
      return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            data = {
        	    'refresh': str(refresh),
        	    'access': str(refresh.access_token),
        	    'user': UserSerializer(user).data
            }
            return Response(data, status=status.HTTP_201_CREATED)
        except Exception as err:
            return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class LoginView(APIView):

  def post(self, request):
    try:
      username = request.data.get('username')
      password = request.data.get('password')
      user = authenticate(username=username, password=password)
      if user:
        refresh = RefreshToken.for_user(user)
        content = {'refresh': str(refresh), 'access': str(refresh.access_token),'user': UserSerializer(user).data}
        return Response(content, status=status.HTTP_200_OK)
      return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as err:
      return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class VerifyUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    try:
      user = User.objects.get(username=request.user.username)
      try:
        refresh = RefreshToken.for_user(user)
        return Response({'refresh': str(refresh),'access': str(refresh.access_token),'user': UserSerializer(user).data}, status=status.HTTP_200_OK)
      except Exception as token_error:
        return Response({"detail": "Failed to generate token.", "error": str(token_error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as err:
      return Response({"detail": "Unexpected error occurred.", "error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

