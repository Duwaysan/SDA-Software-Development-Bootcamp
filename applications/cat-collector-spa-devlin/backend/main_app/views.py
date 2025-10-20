from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CatSerializer
from .models import Cat
from django.shortcuts import get_object_or_404

# Define the home view


class Home(APIView):
	def get(self, request):
		content = {'message': 'Welcome to the cat-collector api home route!'}
		return Response(content)


class CatsIndex(APIView):
	serializer_class = CatSerializer

	def get(self, request):
		try:
			queryset = Cat.objects.all()
			serializer = self.serializer_class(queryset, many=True)
			return Response(serializer.data, status=status.HTTP_200_OK)
		except Exception as err:
			return Response({"error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	def post(self, request):
		try:
			serializer = self.serializer_class(data=request.data)
			if serializer.is_valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		except Exception as err:
			return Response({"error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CatDetail(APIView):
	serializer_class = CatSerializer

	def get(self, request, cat_id):
		try:
			queryset = Cat.objects.get(id=cat_id)
			cat = CatSerializer(queryset)
			return Response(cat.data, status=status.HTTP_200_OK)
		except Exception as err:
			return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
	
	def put(self, request, cat_id):
		try:
			cat = get_object_or_404(Cat, id=cat_id)
			serializer = self.serializer_class(cat, data=request.data)
			if serializer.is_valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_200_OK)
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		except Exception as err:
			return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
	
	def delete(self, request, cat_id):
		try:
			cat = get_object_or_404(Cat, id=cat_id)
			cat.delete()
			return Response({'success': True}, status=status.HTTP_200_OK)
		except Exception as err:
			return Response({'error': str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
