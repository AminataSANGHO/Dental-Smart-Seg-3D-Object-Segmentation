FROM python:3.9-slim

WORKDIR /app

RUN apt update
RUN apt install libsm6 
RUN apt install libxext6
RUN apt install libxrender-dev

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]