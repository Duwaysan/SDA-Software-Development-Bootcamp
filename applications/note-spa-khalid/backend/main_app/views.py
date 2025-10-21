from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from .models import Note
from .serializers import NoteSerializer
from django.shortcuts import get_object_or_404

# Define the home view
class Home(APIView):
  def get(self, request):
    content = {'message': 'Welcome to the notes-app api home route!'}
    return Response(content)
  
class NotesIndex(APIView):
  serializer_class = NoteSerializer

  def get (self, request):
    try:
      queryset = Note.objects.all()
      serializer = self.serializer_class(queryset, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
      return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
  def post(self, request, *args, **kwargs):
    try:
      serializer = self.serializer_class(data=request.data)
      if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
      return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class NoteDetail(APIView):
  serializer_class = NoteSerializer
  lookup_field = 'id'

  def get(self, request, note_id):
    try:
        queryset = get_object_or_404(Note, id=note_id)
        note = self.serializer_class(queryset)
        return Response(note.data, status=status.HTTP_200_OK)
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


