FROM python:3.9-slim

WORKDIR /app

RUN apt update
RUN apt -y install libsm6 libxext6 libxrender-dev ffmpeg 

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir  pygco

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
