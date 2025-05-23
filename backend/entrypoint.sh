#!/bin/sh

# python manage.py flush --no-input
# python manage.py collectstatic --no-input --clear
if [ "$SERVICE_TYPE" = "django" ]; then
    python manage.py makemigrations
    python manage.py migrate
fi


exec "$@"