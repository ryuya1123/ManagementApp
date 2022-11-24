
FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /work
COPY requirements.txt /work/
RUN pip install --no-cashe-dir -r requirements.txt
COPY ./work /code/.
RUN python manage.py migrate


